/* Daily cron endpoint — scheduled-publish auto-release.
 *
 * Runs once per day via Vercel cron (see vercel.json). When a blog post has
 * publishDate equal to today's date (UTC, ISO YYYY-MM-DD), this endpoint
 * triggers a rebuild via the Vercel Deploy Hook so the post becomes visible
 * on the live site.
 *
 * Auth: Vercel automatically sends `Authorization: Bearer ${CRON_SECRET}`
 * to cron-triggered routes. We verify against the env var and reject
 * everything else, so this endpoint can't be triggered by random traffic.
 *
 * Env vars required (set in Vercel project settings, Production scope):
 *   CRON_SECRET       — long random string. Same value Vercel sends as Bearer.
 *   DEPLOY_HOOK_URL   — full Vercel Deploy Hook URL for main branch.
 *
 * Behavior:
 *   - No env vars → 500 with diagnostic message.
 *   - Wrong/missing auth → 401.
 *   - No posts scheduled for today → 200 with `rebuilt: false`. No deploy
 *     happens, no build minutes consumed.
 *   - One+ posts scheduled for today → POST to Deploy Hook → 200 with
 *     `rebuilt: true`. Vercel kicks off a rebuild within seconds.
 *
 * Why check before triggering: rebuilding when nothing's scheduled costs
 * build minutes and creates unnecessary deployment history. We only fire
 * the rebuild when there's actually content to release.
 */

import { blogPosts } from "../../../../lib/blog-data";

export const dynamic = "force-dynamic";

export async function GET(request) {
  // Auth — Vercel cron sends this header automatically
  const auth = request.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;
  if (!process.env.CRON_SECRET || auth !== expected) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Today in ISO YYYY-MM-DD (UTC). Matches the `publishDate` field format.
  const today = new Date().toISOString().slice(0, 10);

  // Find any post scheduled for today specifically
  const releasingToday = blogPosts.filter((p) => p.publishDate === today);

  if (releasingToday.length === 0) {
    return Response.json({
      rebuilt: false,
      reason: "No posts scheduled for release today",
      today,
    });
  }

  // Trigger the Vercel Deploy Hook
  const hookUrl = process.env.DEPLOY_HOOK_URL;
  if (!hookUrl) {
    return Response.json(
      {
        error: "DEPLOY_HOOK_URL not configured",
        posts_to_release: releasingToday.map((p) => p.slug),
      },
      { status: 500 }
    );
  }

  const res = await fetch(hookUrl, { method: "POST" });
  const ok = res.ok;

  return Response.json({
    rebuilt: ok,
    today,
    posts_releasing: releasingToday.map((p) => ({
      slug: p.slug,
      title: p.title,
    })),
    deploy_hook_status: res.status,
  });
}
