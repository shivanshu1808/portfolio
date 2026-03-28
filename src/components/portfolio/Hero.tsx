"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-500/18 blur-[110px]" />
        <div className="absolute top-32 right-[-100px] h-80 w-80 rounded-full bg-violet-500/12 blur-[100px]" />
        <div className="absolute bottom-[-40px] left-[-60px] h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px]" />
        <div className="absolute top-1/2 left-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] bg-gradient-to-b from-white/[0.03] to-transparent opacity-60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] text-zinc-400 uppercase backdrop-blur-md sm:text-xs"
        >
          <span
            className="size-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
            aria-hidden
          />
          {site.location} · 3+ yrs production · Open to backend roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-[18ch] text-4xl font-semibold tracking-tight text-zinc-50 sm:max-w-none sm:text-5xl lg:text-6xl lg:leading-[1.05]"
        >
          {site.fullName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-400 bg-clip-text text-xl font-medium text-transparent sm:text-2xl"
        >
          {site.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-[1.05rem]"
        >
          {site.tagline}{" "}
          <span className="text-zinc-500">
            I specialize in API performance, cache-backed reads, Kafka-style
            pipelines, and AWS operations with an operator mindset.
          </span>
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-9 flex flex-wrap gap-2"
          aria-label="Core stack"
        >
          {[
            "Java & Spring Boot",
            "Microservices",
            "MySQL · Redis · Kafka",
            "AWS (EC2 · S3 · RDS)",
          ].map((label) => (
            <li
              key={label}
              className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] text-zinc-300 shadow-sm shadow-black/20 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/[0.06] sm:text-xs"
            >
              {label}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-8 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25 transition-transform duration-200 hover:scale-[1.02] hover:shadow-cyan-500/35 active:scale-[0.98]"
          >
            Case studies
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-8 text-sm font-medium text-zinc-100 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08]"
          >
            Contact Me
          </Link>
          <a
            href="/resume.pdf"
            download={site.resumeDownloadFilename}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-300 sm:ml-1"
          >
            <span className="flex size-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-cyan-400/90">
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
            </span>
            Download resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
