import { execSync } from "node:child_process";
import { statSync } from "node:fs";
import path from "node:path";
import { projectDetails } from "../lib/project-details";
import { blogPosts } from "../lib/blog-data";
import { teamDetails } from "../lib/team-data";

const BASE_URL = "https://ycd.studio";

// Resolve the last-modified date for a given source file.
// Prefer `git log -1 --format=%cI` (gives the real authoring date regardless of
// checkout time), fall back to filesystem mtime, then to `new Date()`.
function lastModFor(relFile) {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${relFile}"`, {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    /* fall through */
  }
  try {
    return statSync(path.join(process.cwd(), relFile)).mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap() {
  // Map route → primary source file (so each URL carries its own real lastModified)
  const staticRoutes = [
    { path: "/", file: "app/page.js", priority: 1.0, changeFrequency: "monthly" },
    { path: "/work", file: "app/work/page.js", priority: 0.9, changeFrequency: "monthly" },
    { path: "/studio", file: "app/studio/page.js", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", file: "app/blog/page.js", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", file: "app/contact/page.js", priority: 0.6, changeFrequency: "yearly" },
    { path: "/tenant-improvement", file: "app/tenant-improvement/page.js", priority: 0.9, changeFrequency: "monthly" },
    { path: "/tenant-improvement/restaurant", file: "app/tenant-improvement/restaurant/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/tenant-improvement/retail", file: "app/tenant-improvement/retail/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/tenant-improvement/adaptive-reuse", file: "app/tenant-improvement/adaptive-reuse/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/residential", file: "app/residential/page.js", priority: 0.85, changeFrequency: "monthly" },
    { path: "/hospitality", file: "app/hospitality/page.js", priority: 0.85, changeFrequency: "monthly" },
    { path: "/multi-family", file: "app/multi-family/page.js", priority: 0.85, changeFrequency: "monthly" },
    { path: "/commercial", file: "app/commercial/page.js", priority: 0.85, changeFrequency: "monthly" },
    { path: "/sacred", file: "app/sacred/page.js", priority: 0.8, changeFrequency: "monthly" },
    { path: "/san-francisco", file: "app/san-francisco/page.js", priority: 0.85, changeFrequency: "monthly" },
    { path: "/oakland", file: "app/oakland/page.js", priority: 0.85, changeFrequency: "monthly" },
    { path: "/oakland/adu", file: "app/oakland/adu/page.js", priority: 0.9, changeFrequency: "monthly" },
    { path: "/bay-area", file: "app/bay-area/page.js", priority: 0.85, changeFrequency: "monthly" },
  ];

  const staticPages = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: lastModFor(r.file),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Project detail pages — fall back to the shared template's mtime if a
  // per-project file doesn't exist (projects are data-driven).
  const projectTemplateMod = lastModFor("app/work/[slug]/page.js");
  const projectDataMod = lastModFor("lib/project-details.js");
  const projectPagesMod = new Date(
    Math.max(projectTemplateMod.getTime(), projectDataMod.getTime())
  );
  const projectPages = Object.keys(projectDetails).map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
    lastModified: projectPagesMod,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog posts — authoring date is authoritative; bump to the
  // blog-data.js mtime if it's newer (content edits after publish).
  const blogDataMod = lastModFor("lib/blog-data.js");
  const blogPages = blogPosts.map((post) => {
    const publishDate = new Date(post.date);
    const mod = publishDate > blogDataMod ? publishDate : blogDataMod;
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: mod,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  // Team pages
  const teamTemplateMod = lastModFor("app/team/[slug]/page.js");
  const teamDataMod = lastModFor("lib/team-data.js");
  const teamPagesMod = new Date(
    Math.max(teamTemplateMod.getTime(), teamDataMod.getTime())
  );
  const teamPages = Object.keys(teamDetails).map((slug) => ({
    url: `${BASE_URL}/team/${slug}`,
    lastModified: teamPagesMod,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages, ...teamPages];
}
