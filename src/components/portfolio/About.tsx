"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { fadeUp } from "./motion";

function Kw({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-zinc-100">{children}</strong>;
}

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/[0.08] py-22 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Backend engineer · production systems, not slide decks"
          description="I optimize for what shows up in dashboards and incident channels: latency, error budgets, and data correctness under load."
        />
        <motion.div
          {...fadeUp}
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-12"
        >
          <div className="space-y-5 text-[15px] leading-[1.7] text-zinc-400 sm:text-base">
            <p className="rounded-r-xl border-l-2 border-cyan-400/60 bg-cyan-500/[0.04] py-3 pl-4 pr-3 text-zinc-300 shadow-[0_0_40px_-12px_rgba(34,211,238,0.12)]">
              In production I&apos;ve driven roughly <Kw>−30% API latency</Kw>,{" "}
              <Kw>−40% database load</Kw> via cache-backed reads, and sustained{" "}
              <Kw>99.9% uptime</Kw> on AWS while serving <Kw>1,200+ concurrent</Kw>{" "}
              users—by profiling, tightening access patterns, and treating
              releases as a reliability exercise.
            </p>
            <p>
              <Kw>3 years</Kw> as a <Kw>Java backend developer at CGI</Kw>:{" "}
              <Kw>Spring Boot microservices</Kw>,{" "}
              <Kw>MySQL / Redis / Kafka</Kw>, and <Kw>AWS (EC2, S3, RDS)</Kw>. I
              own slices end-to-end—API contracts, schema evolution, integration
              design, deployment, and the on-call story when things drift.
            </p>
            <p>
              When the product needs a cohesive surface, I ship{" "}
              <Kw>BFF-style APIs</Kw> with <Kw>React / Next.js</Kw> consumers—same
              discipline: versioned contracts, idempotent writes where it
              matters, and clear failure modes.
            </p>
          </div>
          <aside className="surface-card p-6 transition-all duration-300 hover:border-cyan-500/20 lg:sticky lg:top-28">
            <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
              Focus
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="text-cyan-400" aria-hidden>
                  →
                </span>
                Throughput, tail latency, back-pressure
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400" aria-hidden>
                  →
                </span>
                Cache invalidation &amp; read-after-write consistency
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400" aria-hidden>
                  →
                </span>
                Event-driven boundaries (Kafka) without distributed spaghetti
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400" aria-hidden>
                  →
                </span>
                Operable AWS: deploys, alarms, structured logs
              </li>
            </ul>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
