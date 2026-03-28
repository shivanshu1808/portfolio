"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { staggerItem } from "./motion";

const stats = [
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

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Impact"
          title="Measurable outcomes"
          description="Numbers recruiters and hiring managers can anchor on—tied to production systems and ownership."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              {...staggerItem}
              className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f1117] p-6"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl"
                aria-hidden
              />
              <p className="font-mono text-4xl font-semibold tracking-tight text-cyan-400 sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-100">{s.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
