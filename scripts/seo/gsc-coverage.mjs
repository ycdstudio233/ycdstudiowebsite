// Track GSC coverage + rich-result status for every sitemap URL, diff against
// last run, and emit only what CHANGED. Run this daily or weekly — it writes a
// state snapshot to seo-reports/coverage-state.json and a dated diff report to
// seo-reports/coverage-YYYY-MM-DD.md.
//
// First run: establishes baseline, no diff (everything reported as "baseline").
// Subsequent runs: reports only transitions + new issues, so the noise floor
// is zero when nothing changed.
//
// Usage:   node scripts/seo/gsc-coverage.mjs
// API:     GSC URL Inspection API, 2000 inspections/day cap.
//          50 sitemap URLs * 600ms throttle = ~30 sec per run.

import fs from "node:fs/promises";
import path from "node:path";
import { gscClient, GSC_SITE_URL } from "./_auth.mjs";

const STATE_FILE = path.join("seo-reports", "coverage-state.json");
const today = new Date().toISOString().slice(0, 10);
const REPORT_FILE = path.join("seo-reports", `coverage-${today}.md`);

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function getSitemapUrls() {
  const sitemapUrl = new URL("/sitemap.xml", GSC_SITE_URL).toString();
  const res = await fetch(sitemapUrl);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

// Extract the fields we care about from a URL inspection response.
// Keeps the state file compact and easy to diff.
function snapshot(inspection) {
  const idx = inspection?.inspectionResult?.indexStatusResult || {};
  const rich = inspection?.inspectionResult?.richResultsResult || {};
  return {
    verdict: idx.verdict || "UNKNOWN",
    coverage: idx.coverageState || "",
    crawledAs: idx.crawledAs || "",
    googleCanonical: idx.googleCanonical || "",
    userCanonical: idx.userCanonical || "",
    lastCrawl: idx.lastCrawlTime || "",
    pageFetch: idx.pageFetchState || "",
    indexingState: idx.indexingState || "",
    robotsTxt: idx.robotsTxtState || "",
    // Rich results: detected item types (e.g. "BreadcrumbList", "FAQPage") and verdict
    richVerdict: rich.verdict || "",
    richItems: (rich.detectedItems || []).map((it) => ({
      name: it.richResultType || "",
      issues: (it.items || []).flatMap((x) => x.issues || []).map((i) => i.issueMessage),
    })),
  };
}

// Classify a transition between two snapshots into one of these categories.
// Each category becomes a section in the diff report.
function classify(prev, cur) {
  const changes = [];

  // Indexing verdict change
  if (prev.verdict !== cur.verdict || prev.coverage !== cur.coverage) {
    const wasIndexed = prev.verdict === "PASS";
    const isIndexed = cur.verdict === "PASS";
    if (!wasIndexed && isIndexed) changes.push({ kind: "indexed", detail: `${prev.coverage || prev.verdict} → ${cur.coverage}` });
    else if (wasIndexed && !isIndexed) changes.push({ kind: "deindexed", detail: `${prev.coverage} → ${cur.coverage || cur.verdict}` });
    else changes.push({ kind: "coverage-change", detail: `${prev.coverage || prev.verdict} → ${cur.coverage || cur.verdict}` });
  }

  // Canonical mismatch detection
  const prevMismatch =
    prev.googleCanonical && prev.userCanonical && prev.googleCanonical !== prev.userCanonical;
  const curMismatch =
    cur.googleCanonical && cur.userCanonical && cur.googleCanonical !== cur.userCanonical;
  if (!prevMismatch && curMismatch) {
    changes.push({
      kind: "canonical-mismatch-new",
      detail: `Google chose ${cur.googleCanonical} over declared ${cur.userCanonical}`,
    });
  } else if (prevMismatch && !curMismatch) {
    changes.push({ kind: "canonical-mismatch-resolved", detail: `Now agreeing on ${cur.googleCanonical}` });
  }

  // Rich-result verdict change
  if (prev.richVerdict !== cur.richVerdict) {
    if (cur.richVerdict === "FAIL" || cur.richVerdict === "PARTIAL") {
      changes.push({
        kind: "rich-results-regression",
        detail: `${prev.richVerdict || "(none)"} → ${cur.richVerdict}`,
      });
    } else if (cur.richVerdict === "PASS") {
      changes.push({
        kind: "rich-results-improvement",
        detail: `${prev.richVerdict || "(none)"} → PASS`,
      });
    }
  }

  // Rich-result item type changes (e.g. new FAQPage detected, BreadcrumbList lost)
  const prevItemNames = new Set(prev.richItems.map((i) => i.name).filter(Boolean));
  const curItemNames = new Set(cur.richItems.map((i) => i.name).filter(Boolean));
  for (const name of curItemNames) {
    if (!prevItemNames.has(name)) {
      changes.push({ kind: "rich-type-added", detail: `${name} now detected` });
    }
  }
  for (const name of prevItemNames) {
    if (!curItemNames.has(name)) {
      changes.push({ kind: "rich-type-lost", detail: `${name} no longer detected` });
    }
  }

  // New rich-result issues per detected item type
  for (const cItem of cur.richItems) {
    const pItem = prev.richItems.find((i) => i.name === cItem.name);
    const prevIssues = new Set(pItem?.issues || []);
    for (const issue of cItem.issues) {
      if (!prevIssues.has(issue)) {
        changes.push({ kind: "rich-issue-new", detail: `${cItem.name}: ${issue}` });
      }
    }
  }

  return changes;
}

async function loadState() {
  try {
    const raw = await fs.readFile(STATE_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function saveState(state) {
  await fs.mkdir("seo-reports", { recursive: true });
  await fs.writeFile(STATE_FILE, JSON.stringify(state, null, 2), "utf8");
}

async function main() {
  const gsc = gscClient();
  const urls = await getSitemapUrls();
  const previous = await loadState();
  const isFirstRun = !previous;

  console.log(`\nInspecting ${urls.length} URLs from ${GSC_SITE_URL}sitemap.xml`);
  console.log(isFirstRun ? "(First run — establishing baseline)" : `(Comparing against ${previous.generatedAt})`);
  console.log("");

  const current = { generatedAt: new Date().toISOString(), urls: {} };
  const allChanges = [];
  const newFailures = [];
  const newWins = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const res = await gsc.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl: GSC_SITE_URL },
      });
      const snap = snapshot(res.data);
      current.urls[url] = snap;

      const short = url.replace(GSC_SITE_URL, "/");
      const verdict = snap.verdict === "PASS" ? "✓" : "✗";

      if (!isFirstRun) {
        const prev = previous.urls?.[url];
        if (prev) {
          const changes = classify(prev, snap);
          if (changes.length) {
            allChanges.push({ url: short, changes });
            for (const ch of changes) {
              if (ch.kind === "indexed" || ch.kind === "rich-results-improvement" || ch.kind === "canonical-mismatch-resolved" || ch.kind === "rich-type-added")
                newWins.push({ url: short, ...ch });
              if (ch.kind === "deindexed" || ch.kind === "rich-results-regression" || ch.kind === "canonical-mismatch-new" || ch.kind === "rich-issue-new" || ch.kind === "rich-type-lost")
                newFailures.push({ url: short, ...ch });
            }
          }
        } else {
          // URL is new since last run
          allChanges.push({ url: short, changes: [{ kind: "new-url", detail: `Status: ${snap.coverage || snap.verdict}` }] });
        }
      }

      process.stdout.write(`[${i + 1}/${urls.length}] ${verdict} ${short}\n`);
    } catch (e) {
      process.stdout.write(`[${i + 1}/${urls.length}] ERR ${url}: ${e.message}\n`);
      current.urls[url] = { error: e.message };
    }
    await sleep(600);
  }

  // Also flag URLs that were in previous snapshot but are no longer in sitemap
  const removedUrls = [];
  if (!isFirstRun) {
    for (const prevUrl of Object.keys(previous.urls || {})) {
      if (!(prevUrl in current.urls)) {
        removedUrls.push(prevUrl.replace(GSC_SITE_URL, "/"));
      }
    }
  }

  // Current-state summary counts
  const counts = {};
  for (const snap of Object.values(current.urls)) {
    const key = snap.coverage || snap.verdict || snap.error || "UNKNOWN";
    counts[key] = (counts[key] || 0) + 1;
  }

  // Write markdown report
  let md = `# GSC Coverage Report — ${today}\n\n`;
  md += `URLs inspected: ${urls.length}\n`;
  md += `Run: ${isFirstRun ? "baseline" : `diff vs ${previous.generatedAt.slice(0, 10)}`}\n\n`;

  md += `## Current coverage distribution\n\n`;
  md += `| State | Count |\n|---|--:|\n`;
  for (const [state, n] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
    md += `| ${state} | ${n} |\n`;
  }
  md += `\n`;

  if (isFirstRun) {
    md += `_Baseline saved. Run again tomorrow/weekly to see what changed._\n`;
  } else {
    md += `## Changes since last run\n\n`;
    if (!allChanges.length && !removedUrls.length) {
      md += `**No changes detected.** All ${urls.length} URLs are in the same state as the last run.\n\n`;
    } else {
      if (newWins.length) {
        md += `### 🟢 Wins (${newWins.length})\n\n`;
        for (const w of newWins) md += `- \`${w.url}\` — **${w.kind}** — ${w.detail}\n`;
        md += `\n`;
      }
      if (newFailures.length) {
        md += `### 🔴 Regressions — act on these (${newFailures.length})\n\n`;
        for (const f of newFailures) md += `- \`${f.url}\` — **${f.kind}** — ${f.detail}\n`;
        md += `\n`;
      }
      const neutralChanges = allChanges.filter((c) =>
        c.changes.some((ch) => ch.kind === "coverage-change" || ch.kind === "new-url")
      );
      if (neutralChanges.length) {
        md += `### ⚪ Neutral coverage transitions (${neutralChanges.length})\n\n`;
        for (const c of neutralChanges) {
          for (const ch of c.changes) {
            if (ch.kind === "coverage-change" || ch.kind === "new-url") {
              md += `- \`${c.url}\` — ${ch.detail}\n`;
            }
          }
        }
        md += `\n`;
      }
      if (removedUrls.length) {
        md += `### ⚫ URLs removed from sitemap (${removedUrls.length})\n\n`;
        for (const u of removedUrls) md += `- \`${u}\`\n`;
        md += `\n`;
      }
    }
  }

  md += `---\n_Generated by \`scripts/seo/gsc-coverage.mjs\` on ${new Date().toISOString()}._\n`;

  await fs.mkdir("seo-reports", { recursive: true });
  await fs.writeFile(REPORT_FILE, md, "utf8");
  await saveState(current);

  console.log(`\nReport: ${REPORT_FILE}`);
  console.log(`State:  ${STATE_FILE}`);
  console.log("");
  console.log(`Current state: ${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(", ")}`);
  if (!isFirstRun) {
    console.log(`Changes: ${newWins.length} wins, ${newFailures.length} regressions, ${allChanges.length - newWins.length - newFailures.length} neutral`);
  }
}

main().catch((e) => {
  console.error("Coverage run failed:", e.message);
  if (e.response?.data) console.error(e.response.data);
  process.exit(1);
});
