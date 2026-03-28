"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { fadeUp } from "./motion";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Backend engineer focused on reliability at scale"
        />
        <motion.div
          {...fadeUp}
          className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start"
        >
          <div className="space-y-4 text-base leading-relaxed text-zinc-400">
            <p>
              I am a Java backend engineer with three years of experience
              shipping production services at CGI Inc. I design and implement
              APIs, microservices, and data flows where latency, consistency,
              and uptime matter.
            </p>
            <p>
              My work centers on performance optimization—profiling hot paths,
              tightening database access patterns, and using caching and
              messaging where they reduce load without sacrificing correctness.
              I collaborate closely across teams to turn ambiguous requirements
              into measurable outcomes.
            </p>
            <p>
              I also build full-stack features when needed, pairing Spring Boot
              with React or Next.js for cohesive user experiences backed by
              solid APIs.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-[#0f1117] p-6">
            <p className="font-mono text-xs tracking-wider text-zinc-500 uppercase">
              Current focus
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="text-cyan-400">—</span>
                High-throughput REST & event-driven services
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">—</span>
                MySQL tuning, Redis caching, Kafka pipelines
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400">—</span>
                AWS deployments with strong observability
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
