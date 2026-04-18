// Shared Google auth helper for SEO scripts.
// Loads the service account key from GOOGLE_APPLICATION_CREDENTIALS (set in .env.local)
// and exposes scoped auth clients for Search Console and GA4.

import dotenv from "dotenv";
import { google } from "googleapis";

// Load .env.local (Next.js convention) then fall back to .env
dotenv.config({ path: ".env.local" });
dotenv.config();

const KEY_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!KEY_FILE) {
  throw new Error(
    "GOOGLE_APPLICATION_CREDENTIALS not set. Add it to .env.local pointing to the service account JSON."
  );
}

export const GSC_SITE_URL = process.env.GSC_SITE_URL || "sc-domain:ycd.studio";
export const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID || "519338734";

export function gscClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  return google.searchconsole({ version: "v1", auth });
}

export function ga4Client() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });
  return google.analyticsdata({ version: "v1beta", auth });
}

// Format a date N days ago as YYYY-MM-DD
export function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}
