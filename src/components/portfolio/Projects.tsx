"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { staggerItem } from "./motion";

const projects = [
  {
    name: "Temperature Management System",
    description:
      "End-to-end platform for monitoring and controlling temperature zones with real-time dashboards, alerts, and audit-friendly history.",
    stack: ["Spring Boot", "Next.js", "MySQL", "Redis", "REST"],
    github: "https://github.com/shivanshu1808/Building-Control",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Analytics dashboard on a laptop screen",
    features: [
      "Role-based APIs with JWT and server-side validation",
      "Live readings via polling/Web-friendly contracts",
      "Operational reports export and threshold alerting",
    ],
  },
  {
    name: "AI Email Assistant",
    description:
      "Productivity tool that drafts, summarizes, and classifies email threads using Gemini, with a React UI and a secure Spring Boot gateway.",
    stack: ["Spring Boot", "Gemini API", "React", "Kafka", "AWS S3"],
    github: "https://github.com/shivanshu1808",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Smartphone email and messaging interface",
    features: [
      "Prompt orchestration, rate limits, and structured JSON responses",
      "Async job processing for long-running summarization",
      "Attachment handling with S3 and metadata indexing",
    ],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Production-minded side projects that mirror how I build at work—clear APIs, observable services, and thoughtful UX."
        />

        <div className="flex flex-col gap-12 lg:gap-16">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              {...staggerItem}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c]/90 via-transparent to-transparent" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-50 sm:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-2 text-sm text-zinc-400">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-cyan-400" aria-hidden>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  View on GitHub
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
                      d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
