"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { staggerItem } from "./motion";

const impactStats = [
  {
    value: "30%",
    label: "Faster APIs",
    detail: "End-to-end latency reduction via profiling and caching strategy.",
  },
  {
    value: "40%",
    label: "Less DB load",
    detail: "Redis-backed reads and smarter access patterns in peak traffic.",
  },
  {
    value: "90%",
    label: "Automated regression",
    detail: "Broad JUnit + integration coverage on critical payment paths.",
  },
  {
    value: "99.9%",
    label: "Service uptime",
    detail: "AWS-hosted services with disciplined deploys and monitoring.",
  },
];

const milestoneStats = [
  {
    value: "1200+",
    label: "Concurrent users",
    detail: "Production traffic supported with scaling and resilient dependencies.",
  },
  {
    value: "3+",
    label: "Years at CGI",
    detail: "Backend Java ownership in enterprise delivery and on-call readiness.",
  },
  {
    value: "9",
    label: "Public GitHub repos",
    detail: "Side projects and experiments—Building-Control, apps, and learning in public.",
  },
];

const highlightAchievements = [
  "Owned features end-to-end: API design, persistence, AWS deployment, and operational monitoring.",
  "Partnered with cross-functional teams to turn vague requirements into shipped, measurable outcomes.",
  "Applied Kafka and event-friendly patterns where async boundaries reduced coupling and improved throughput.",
  "Built full-stack slices (Spring Boot + React / Next.js) when the product needed cohesive UX backed by solid APIs.",
  "Maintained a strong quality bar: structured logging, sensible error contracts, and regression safety on critical paths.",
];

const educationText =
  "Bachelor’s degree in Computer Science and Engineering — Bengal College of Engineering and Technology 2019-2023.";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-t border-white/[0.08] py-22 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Impact, milestones & highlights"
          description="Quantified improvements in backend performance, scalability, and reliability—driven through production system ownership."
        />

        <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
          Engineering impact
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((s) => (
            <motion.div
              key={s.label}
              {...staggerItem}
              className="surface-card relative overflow-hidden p-6 transition-all duration-300 hover:border-cyan-500/15"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl"
                aria-hidden
              />
              <p className="font-mono text-4xl font-semibold tracking-tight text-cyan-300 sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-100">{s.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <h3 className="mb-4 mt-16 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          Scale & tenure
        </h3>
        <div className="grid gap-5 sm:grid-cols-3">
          {milestoneStats.map((s) => (
            <motion.div
              key={s.label}
              {...staggerItem}
              className="surface-card p-6 transition-all duration-300 hover:border-cyan-500/15"
            >
              <p className="font-mono text-3xl font-semibold tracking-tight text-cyan-300 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-100">{s.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <motion.div {...staggerItem}>
            <h3 className="mb-4 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
              Selected achievements
            </h3>
            <ul className="surface-card space-y-4 p-6 sm:p-8">
              {highlightAchievements.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.45)]"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...staggerItem} className="flex flex-col gap-4">
            <h3 className="mb-0 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
              Education
            </h3>
            <div className="surface-card p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-zinc-400">
                {educationText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
