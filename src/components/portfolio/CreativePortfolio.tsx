"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const stats = [
  { metric: "−30%", label: "API Latency" },
  { metric: "−40%", label: "DB Load" },
  { metric: "99.9%", label: "Uptime" },
  { metric: "1.2K+", label: "Concurrency" },
] as const;

const skills = [
  {
    title: "Backend Engineering",
    items: [
      "Java",
      "Spring Boot",
      "Kafka",
      "REST APIs",
      "Microservices",
      "Redis",
      "MySQL",
    ],
  },
  {
    title: "Frontend / BFF",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, RDS, S3)", "Docker", "CI/CD pipelines"],
  },
  {
    title: "System Design",
    items: [
      "Caching strategies (cache-aside)",
      "Event-driven architecture (Kafka)",
      "Horizontal scaling",
      "Rate limiting",
      "Idempotency",
    ],
  },
  {
    title: "Data Structures & Algorithms",
    items: [
      "Problem solving",
      "Optimized query design",
      "Time/space complexity",
    ],
  },
  {
    title: "AI / Modern Systems",
    items: [
      "AI API integration (Gemini / OpenAI)",
      "Async processing pipelines",
      "Prompt-based workflows",
    ],
  },
] as const;

const achievements = [
  "Designed and tuned read-heavy APIs, cutting P95 latency ~30% (500ms → 350ms) with caching and query optimization",
  "Reduced MySQL load ~40% by introducing Redis cache-aside for hot keys and tightening access patterns",
  "Operated services on AWS (EC2, RDS) at 99.9% uptime using staged rollouts, health checks, and SLO-based alerting",
  "Scaled horizontally to support 1,200+ concurrent users with stateless services, back-pressure, and resilience patterns",
  "Owned 5+ features end-to-end—API contracts, schema evolution, Kafka integrations, deployment, and on-call follow-through",
  "Raised automated regression coverage to ~90% on critical payment and order paths to protect releases",
] as const;

const projects = [
  {
    name: "Building Control Platform",
    stack: "Spring Boot · Next.js · MySQL · Redis",
    problem:
      "High-volume IoT telemetry and control surfaces risked overloading MySQL and producing sluggish dashboards when reads spiked.",
    approach:
      "Separated hot read paths from transactional writes, introduced cache-aside for device and telemetry summaries, and sized connection pools against real concurrency.",
    architecture:
      "Ingestion and rules run in Spring services; Redis holds denormalized read models; Next.js consumes BFF-style APIs for real-time views. Flow: devices → API → services → MySQL / Redis → dashboards.",
    decisions:
      "Chose cache-aside over cache-through for clearer invalidation on state changes; bounded TTLs and explicit eviction on writes to limit stale reads.",
    impact:
      "Protected MySQL from read amplification, stabilized dashboard latency under burst traffic, and kept operational paths observable for incidents.",
  },
  {
    name: "Email AI Assistant",
    stack: "Spring Boot · Kafka · Gemini API · React · S3",
    problem:
      "AI summarization had to run asynchronously at scale with fair usage, no duplicate side effects, and graceful behavior when providers throttle.",
    approach:
      "Gateway validates and enqueues work; workers consume Kafka topics with retries, idempotency keys, and quotas; artifacts land in S3 with metadata for the UI.",
    architecture:
      "Client → API gateway → Kafka → worker pool → Gemini (or fallback path) → S3; React polls or streams status. Dead-letter handling isolates poison messages.",
    decisions:
      "Idempotency on send, per-tenant quotas, circuit breaking on provider errors, and structured logs/metrics for backlog depth and failure rates.",
    impact:
      "Reliable async delivery, predictable cost exposure, and safer degradation when external AI APIs slow down or fail.",
  },
] as const;

const stackRibbon = [
  "Java",
  "Spring Boot",
  "AWS",
  "MySQL",
  "Redis",
  "Kafka",
  "Docker",
];

const heroHeadline =
  "Backend Engineer building scalable, fault-tolerant systems on Java & AWS";

const heroSub =
  "3+ years shipping low-latency APIs, concurrent workloads, and production services—with clear tradeoffs between consistency, cost, and time to recover.";

const stackCaps = "JAVA · SPRING BOOT · KAFKA · AWS · REDIS · MYSQL";

const aboutLead =
  "I optimize for what shows up in production: tail latency, error budgets, and data correctness under load. I treat APIs, caches, and events as a system—designing for failure modes, back-pressure, and operability, not just happy-path demos.";

const aboutClose =
  "At CGI I worked across Spring Boot microservices, MySQL, Redis, Kafka, and AWS—owning slices from contract design through deployment and incident follow-up.";

const contactIntro =
  "Open to backend engineering roles, system design discussions, and collaborations.";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4"
      />
    </svg>
  );
}

function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px", amount: 0.2 }}
      transition={{
        duration: reduce ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

const cardHover =
  "transition-[background-color,box-shadow] duration-200 ease-out hover:bg-white/70 hover:shadow-[0_10px_40px_-24px_rgba(0,0,0,0.12)]";

export function CreativePortfolio() {
  const lastUpdated = "March 28, 2026";
  const reduce = useReducedMotion();

  return (
    <div className="grain-canvas min-h-screen text-neutral-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-emerald-700 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>

      <aside
        className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-5 lg:flex"
        aria-label="Social links"
      >
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 transition-colors duration-200 hover:text-neutral-900"
          aria-label="LinkedIn"
        >
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 transition-colors duration-200 hover:text-neutral-900"
          aria-label="GitHub"
        >
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href={`mailto:${site.email}`}
          className="text-neutral-400 transition-colors duration-200 hover:text-neutral-900"
          aria-label="Email"
        >
          <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </aside>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <svg
          className="absolute -right-24 top-24 h-[min(90vh,720px)] w-[min(90vw,720px)] text-black/[0.035]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" />
          <path d="M 40 200 A 160 160 0 0 1 360 200" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          className="absolute -left-32 bottom-20 h-80 w-80 text-black/[0.04]"
          viewBox="0 0 300 300"
          fill="none"
        >
          <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <header className="relative z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
          <Link
            href="#top"
            className="flex items-center gap-2.5 text-neutral-900 transition-opacity duration-200 hover:opacity-80"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
              S
            </span>
            <span className="text-lg font-medium tracking-tight lowercase sm:text-xl">
              shivanshu
            </span>
          </Link>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 md:block"
            aria-label="Primary"
          >
            <ul className="flex items-center gap-9 text-sm text-neutral-600">
              <li>
                <a
                  href="#skills"
                  className="transition-colors duration-200 hover:text-neutral-900"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="transition-colors duration-200 hover:text-neutral-900"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition-colors duration-200 hover:text-neutral-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors duration-200 hover:text-neutral-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="/resume.pdf"
            download={site.resumeDownloadFilename}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-neutral-900 px-4 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-neutral-800 sm:px-5 sm:text-sm"
          >
            Download CV
            <DownloadIcon className="opacity-90" />
          </a>
        </div>
        <nav
          className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-6 gap-y-2 border-t border-black/[0.05] px-5 py-3 text-xs text-neutral-600 md:hidden"
          aria-label="Primary mobile"
        >
          <a href="#skills" className="transition-colors hover:text-neutral-900">
            Skills
          </a>
          <a href="#portfolio" className="transition-colors hover:text-neutral-900">
            Portfolio
          </a>
          <a href="#about" className="transition-colors hover:text-neutral-900">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-neutral-900">
            Contact
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative z-10 px-4 pb-6 pt-2 sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-rose-200/45 blur-[100px]" />
          <div className="absolute right-0 top-32 h-[22rem] w-[22rem] rounded-full bg-sky-200/40 blur-[110px]" />
          <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-amber-200/35 blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="relative mx-auto flex w-full max-w-[min(100%,380px)] flex-col items-center sm:max-w-md md:max-w-lg">
            <div className="relative w-full pt-4">
              <div
                className="absolute inset-x-[8%] bottom-0 top-[12%] rounded-t-[50%] bg-zinc-400/45 sm:inset-x-[10%]"
                aria-hidden
              />
              <div className="relative z-10 mx-auto aspect-[3.5/4.5] w-[88%] max-h-[min(52vh,440px)] sm:max-h-[min(56vh,480px)]">
                <Image
                  src={site.profilePhotoSrc}
                  alt={`${site.fullName} — ${site.title}`}
                  width={560}
                  height={720}
                  priority
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="h-full w-full rounded-t-[50%] object-cover object-[center_18%] grayscale transition-[filter] duration-500 hover:grayscale-0"
                />
              </div>

              <div className="pointer-events-none absolute -right-2 top-[18%] z-20 hidden md:block md:-right-4 lg:-right-8">
                <svg
                  width="200"
                  height="240"
                  viewBox="0 0 200 240"
                  fill="none"
                  className="overflow-visible"
                  aria-hidden
                >
                  <path
                    d="M 8 200 C 35 150 55 130 85 115 C 115 100 135 75 155 48 C 168 32 178 22 192 18"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="192" cy="18" r="5" fill="#059669" />
                </svg>
                <a
                  href="#contact"
                  className="pointer-events-auto absolute left-[118px] top-[-8px] flex size-[88px] items-center justify-center rounded-full transition-transform duration-200 hover:scale-105"
                  aria-label="Get in touch — contact Shivanshu"
                >
                  <svg
                    width="88"
                    height="88"
                    viewBox="0 0 100 100"
                    className="overflow-visible"
                    aria-hidden
                  >
                    <defs>
                      <path
                        id="portfolioRingText"
                        d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      />
                    </defs>
                    <text
                      className="fill-emerald-700 text-[7px] font-semibold uppercase tracking-[0.12em]"
                      style={{ fontSize: "7px" }}
                    >
                      <textPath href="#portfolioRingText" startOffset="0%">
                        Come on · Let&apos;s talk · Come on · Let&apos;s talk ·{" "}
                      </textPath>
                    </text>
                  </svg>
                </a>
              </div>
            </div>

            <motion.div
              className="flex w-full max-w-xl flex-col items-center text-center"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.55,
                delay: reduce ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="mt-10 text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl">
                {site.fullName}
              </h1>
              <p className="mt-5 max-w-xl text-base font-semibold leading-snug text-neutral-800 sm:text-lg">
                {heroHeadline}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
                {heroSub}
              </p>
              <p className="mt-4 text-[11px] font-medium uppercase leading-relaxed tracking-[0.22em] text-neutral-500 sm:text-xs">
                {stackCaps}
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                {site.location} · 3+ years production · Open to backend roles
              </p>
            </motion.div>

            <div
              className="mt-8 flex justify-center gap-8 text-neutral-400 lg:hidden"
              aria-label="Social links"
            >
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-neutral-900"
                aria-label="LinkedIn"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-neutral-900"
                aria-label="GitHub"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors duration-200 hover:text-neutral-900"
                aria-label="Email"
              >
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          className="relative z-10 mx-auto mt-16 max-w-6xl border-t border-black/[0.06] bg-zinc-300/25 px-4 py-8 sm:mt-20 sm:px-8"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.2 }}
        >
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.4em] text-neutral-400">
            Stack &amp; tools
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-neutral-500 opacity-[0.55]">
            {stackRibbon.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <main
        id="main"
        className="relative z-10 mx-auto max-w-3xl px-5 pb-20 pt-6 sm:px-8 lg:max-w-4xl"
      >
        <FadeIn>
          <section className="mb-16" aria-label="Quick stats">
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <motion.li
                  key={s.label}
                  className={`border-l-[3px] border-emerald-600 bg-white/55 px-4 py-4 backdrop-blur-[2px] ${cardHover}`}
                  whileHover={reduce ? undefined : { y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-xl font-bold tracking-tight sm:text-2xl">{s.metric}</p>
                  <p className="mt-1 text-xs text-neutral-500 sm:text-sm">{s.label}</p>
                </motion.li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="skills" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
              Core skills
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
              {skills.map((cat) => (
                <motion.div
                  key={cat.title}
                  className={`border-l-2 border-emerald-600/80 bg-white/40 py-1 pl-5 ${cardHover}`}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-sm font-bold text-emerald-800">{cat.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-neutral-600">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="about" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
              About
            </h2>
            <div className="mb-12 space-y-4 border-l-2 border-neutral-300 bg-white/35 py-3 pl-6 pr-3 text-sm leading-relaxed text-neutral-600">
              <p>{aboutLead}</p>
              <p>{aboutClose}</p>
            </div>

            <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
              Experience
            </h2>
            <article className="border-l-2 border-neutral-300 bg-white/35 py-2 pl-6 pr-2">
              <h3 className="text-base font-bold text-neutral-900">CGI Inc.</h3>
              <p className="mt-1 text-sm font-bold text-emerald-800">
                Backend Java Developer
              </p>
              <p className="mt-1 text-xs text-neutral-500">2021–2024 (3 years)</p>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-neutral-600">
                {achievements.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="shrink-0 font-semibold text-emerald-700">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="portfolio" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
              Key projects
            </h2>
            <div className="space-y-5">
              {projects.map((p) => (
                <motion.article
                  key={p.name}
                  className={`border-l-[3px] border-emerald-600 bg-white/50 py-5 pl-5 pr-4 ${cardHover}`}
                  whileHover={reduce ? undefined : { y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-base font-bold text-neutral-900">{p.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                    {p.stack}
                  </p>
                  <div className="mt-4 space-y-2.5 text-sm leading-relaxed text-neutral-600">
                    <p>
                      <span className="font-semibold text-neutral-800">Problem.</span>{" "}
                      {p.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-neutral-800">Approach.</span>{" "}
                      {p.approach}
                    </p>
                    <p>
                      <span className="font-semibold text-neutral-800">Architecture.</span>{" "}
                      {p.architecture}
                    </p>
                    <p>
                      <span className="font-semibold text-neutral-800">Key decisions.</span>{" "}
                      {p.decisions}
                    </p>
                    <p>
                      <span className="font-semibold text-neutral-800">Impact.</span>{" "}
                      {p.impact}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="contact" className="mb-16 scroll-mt-24">
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900">
              Get in touch
            </h2>
            <p className="mb-4 max-w-xl text-sm leading-relaxed text-neutral-600">
              {contactIntro}
            </p>
            <div className="border border-black/[0.06] bg-white/55 p-6 backdrop-blur-sm transition-shadow duration-200 hover:shadow-[0_10px_40px_-24px_rgba(0,0,0,0.08)]">
              <dl className="space-y-3 text-sm">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-6">
                  <dt className="w-24 shrink-0 font-medium text-neutral-800">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-emerald-800 underline-offset-2 transition-colors duration-200 hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-6">
                  <dt className="w-24 shrink-0 font-medium text-neutral-800">GitHub</dt>
                  <dd>
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 underline-offset-2 transition-colors duration-200 hover:underline"
                    >
                      {site.githubDisplay}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-6">
                  <dt className="w-24 shrink-0 font-medium text-neutral-800">LinkedIn</dt>
                  <dd>
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-emerald-800 underline-offset-2 transition-colors duration-200 hover:underline"
                    >
                      {site.linkedin.replace(/^https?:\/\//, "")}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <footer className="border-t border-black/[0.08] pt-8 text-sm text-neutral-500">
            <p>Last updated: {lastUpdated}</p>
          </footer>
        </FadeIn>
      </main>
    </div>
  );
}
