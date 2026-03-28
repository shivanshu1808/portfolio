"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/[0.06] bg-[#07080c]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-zinc-100"
        >
          SP<span className="text-cyan-400">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download={site.resumeDownloadFilename}
            className="ml-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-zinc-200 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/resume.pdf"
            download={site.resumeDownloadFilename}
            className="rounded-lg border border-white/[0.08] px-2.5 py-1.5 text-xs text-zinc-200"
          >
            CV
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-zinc-300 hover:bg-white/[0.06]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/[0.06] bg-[#07080c] md:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 py-4"
              aria-label="Mobile"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.04]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
