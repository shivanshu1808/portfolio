"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { fadeUp, staggerItem } from "./motion";

const signals = [
  {
    title: "Scalability",
    body: "Start with measured bottlenecks (CPU, IO, fan-out), then choose horizontal scale, partitioning, or async offload—not buzzwords. I default to back-pressure and bounded queues before adding servers.",
  },
  {
    title: "Caching",
    body: "Cache-aside with explicit TTL and invalidation paths; know what becomes wrong when Redis blinks. Hot keys get special treatment; cold paths stay authoritative in MySQL.",
  },
  {
    title: "Consistency vs availability",
    body: "Strong consistency on money and inventory-style writes; deliberate eventual reads where UX tolerates seconds of lag. Document the failure mode when replication lags.",
  },
];

export function SystemDesignMindset() {
  return (
    <section
      id="systems"
      className="scroll-mt-24 border-t border-white/[0.08] py-22 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System design"
          title="How I think under load"
          description="I design backend systems with a focus on scalability, reliability, and clear tradeoffs—grounded in real production constraints, not theoretical patterns."
        />

        <motion.div
          {...fadeUp}
          className="grid gap-5 lg:grid-cols-3"
        >
          {signals.map((s) => (
            <motion.div
              key={s.title}
              {...staggerItem}
              className="surface-card p-6 transition-all duration-300 hover:border-cyan-500/15"
            >
              <h3 className="text-base font-semibold tracking-tight text-zinc-50">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
