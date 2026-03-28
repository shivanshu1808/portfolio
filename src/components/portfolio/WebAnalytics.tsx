"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

/**
 * Vercel: enable Web Analytics + Speed Insights in the project dashboard (free tier).
 * Plausible: set NEXT_PUBLIC_PLAUSIBLE_DOMAIN to your site domain as configured in Plausible.
 */
export function WebAnalytics() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      {plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
