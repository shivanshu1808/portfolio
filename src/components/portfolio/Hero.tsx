"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute top-40 right-[-120px] h-72 w-72 rounded-full bg-violet-500/10 blur-[90px]" />
        <div className="absolute bottom-0 left-[-80px] h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase sm:text-sm"
        >
          {site.location} · Open to backend roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-xl text-cyan-400/95 sm:text-2xl"
        >
          {site.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-400 px-8 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-8 text-sm font-medium text-zinc-100 transition-colors hover:border-cyan-400/35 hover:bg-cyan-400/5"
          >
            Contact Me
          </Link>
          <a
            href="/resume.pdf"
            download={site.resumeDownloadFilename}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-2 text-sm font-medium text-zinc-400 underline-offset-4 hover:text-cyan-300 hover:underline sm:ml-2"
          >
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4"
              />
            </svg>
            Download resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
