"use client";

import { useEffect, useState } from "react";

const SESSION_CLAIM = "portfolio_view_claim_v1";

/** Footer-only: approximate visits (CountAPI). Same session = count once. */
export function ViewCounter() {
  const [display, setDisplay] = useState("…");

  useEffect(() => {
    let cancelled = false;

    const shouldIncrement = (() => {
      try {
        if (typeof sessionStorage === "undefined") return true;
        if (sessionStorage.getItem(SESSION_CLAIM)) return false;
        sessionStorage.setItem(SESSION_CLAIM, "1");
        return true;
      } catch {
        return true;
      }
    })();

    const method = shouldIncrement ? "POST" : "GET";

    fetch("/api/views", { method })
      .then((r) => r.json())
      .then((d: { views?: number | null }) => {
        if (cancelled) return;
        if (typeof d.views === "number") {
          setDisplay(new Intl.NumberFormat("en-IN").format(d.views));
        } else {
          setDisplay("—");
        }
      })
      .catch(() => {
        if (!cancelled) setDisplay("—");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <p
      className="min-w-0 flex-1 text-center text-xs leading-relaxed text-zinc-500 sm:px-3"
      title="Approximate all-time visits (anonymous counter)"
    >
      <span className="font-mono tabular-nums text-zinc-400">{display}</span>
      <span className="mx-1.5 text-zinc-600">·</span>
      <span className="text-zinc-500">people have viewed this page</span>
    </p>
  );
}
