"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const profileAlt = `${site.fullName} — Java backend developer, professional headshot`;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-28 sm:pt-36 sm:pb-32 lg:pt-44 lg:pb-40"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="animate-pulse-glow absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[110px]" />
        <div className="animate-pulse-glow-delayed absolute top-32 right-[-100px] h-80 w-80 rounded-full bg-violet-500/14 blur-[100px]" />
        <div className="animate-pulse-glow-slow absolute bottom-[-40px] left-[-60px] h-72 w-72 rounded-full bg-emerald-500/12 blur-[90px]" />
        <div className="absolute top-1/2 left-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10 bg-gradient-to-b from-cyan-500/[0.06] via-white/[0.02] to-transparent opacity-70 shadow-[0_0_120px_-40px_rgba(34,211,238,0.15)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(240px,18rem)] lg:items-center lg:gap-x-12 xl:gap-x-16">
          <div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-gradient-to-r from-white/[0.06] to-white/[0.02] px-3.5 py-2 font-mono text-[11px] tracking-[0.18em] text-zinc-300 uppercase shadow-lg shadow-black/30 backdrop-blur-md sm:text-xs"
        >
          <span
            className="relative flex size-2 shrink-0"
            aria-hidden
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          </span>
          {site.location} · 3+ yrs production · Open to backend roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-[18ch] bg-gradient-to-br from-white via-zinc-100 to-zinc-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:max-w-none sm:text-5xl lg:text-6xl lg:leading-[1.05]"
        >
          {site.fullName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 bg-gradient-to-r from-cyan-200 via-cyan-400 to-teal-400 bg-clip-text text-xl font-medium text-transparent sm:text-2xl"
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
          className="mt-9 flex flex-wrap gap-2.5"
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
              className="rounded-full border border-white/[0.1] bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-3.5 py-1.5 font-mono text-[11px] text-zinc-200 shadow-md shadow-black/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:from-cyan-500/10 hover:shadow-cyan-950/40 sm:text-xs"
            >
              {label}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex h-[3.25rem] items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-cyan-400 to-teal-400 px-9 text-sm font-semibold text-zinc-950 shadow-[0_0_32px_-4px_rgba(34,211,238,0.45)] ring-2 ring-cyan-300/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_40px_-4px_rgba(34,211,238,0.55)] active:scale-[0.98]"
          >
            Case studies
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.05] px-9 text-sm font-medium text-zinc-100 shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/35 hover:bg-cyan-500/[0.1] hover:shadow-cyan-950/25"
          >
            Contact Me
          </Link>
          <a
            href="/resume.pdf"
            download={site.resumeDownloadFilename}
            className="inline-flex h-[3.25rem] items-center justify-center gap-2.5 rounded-full px-3 text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-200 sm:ml-1"
          >
            <span className="flex size-10 items-center justify-center rounded-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 to-transparent text-cyan-300 shadow-inner shadow-black/20">
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

        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-12 flex w-full max-w-[280px] justify-center lg:mx-0 lg:mt-0 lg:max-w-none lg:justify-end"
        >
          <div className="relative w-full">
            <div
              className="pointer-events-none absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-cyan-400/35 via-transparent to-violet-500/25 opacity-90 blur-md"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/50 shadow-[0_28px_64px_-24px_rgba(0,0,0,0.8),0_0_48px_-14px_rgba(34,211,238,0.2)] ring-1 ring-white/10">
              <Image
                src={site.profilePhotoSrc}
                alt={profileAlt}
                width={640}
                height={640}
                priority
                sizes="(max-width: 1024px) 280px, 288px"
                className="aspect-square w-full object-cover object-[center_20%]"
              />
            </div>
          </div>
        </motion.figure>
        </div>

        <div
          className="mx-auto mt-16 h-px max-w-md bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent sm:mt-20 lg:mt-20"
          aria-hidden
        />
      </div>
    </section>
  );
}
