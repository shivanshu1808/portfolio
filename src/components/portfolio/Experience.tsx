"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { fadeUp, staggerItem } from "./motion";

const bullets: ReactNode[] = [
  <>
    Cut <strong className="text-zinc-200">p95/p99 API latency ~30%</strong> by
    profiling hot paths, eliminating N+1 access patterns, and introducing
    service-level caching with explicit TTL and invalidation rules.
  </>,
  <>
    Reduced <strong className="text-zinc-200">MySQL load ~40%</strong> by moving
    hot read workloads to <strong className="text-zinc-200">Redis</strong> with
    cache-aside semantics and guarding against stale reads on critical flows.
  </>,
  <>
    Helped sustain <strong className="text-zinc-200">99.9% availability</strong>{" "}
    on AWS-hosted services through staged rollouts, health checks, and alerting
    tied to SLO-minded thresholds—not vanity metrics.
  </>,
  <>
    Supported <strong className="text-zinc-200">1,200+ concurrent users</strong>{" "}
    with horizontal scaling patterns, timeouts, bulkheads, and graceful
    degradation when downstream dependencies slow down.
  </>,
  <>
    <strong className="text-zinc-200">Owned features end-to-end:</strong> REST
    contract design, persistence (MySQL), async integration via{" "}
    <strong className="text-zinc-200">Kafka</strong> where events reduced
    coupling, and production validation (metrics, logs, traces).
  </>,
  <>
    <strong className="text-zinc-200">Production operations:</strong> EC2/RDS/S3
    usage patterns, backup/restore awareness, and incident response with
    postmortems that change code—not just tickets.
  </>,
  <>
    <strong className="text-zinc-200">Quality bar:</strong> automated regression
    (JUnit + integration) on payment- and order-critical paths; defensive API
    error contracts for clients.
  </>,
];

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/[0.08] py-22 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="CGI — backend ownership at enterprise scale"
          description="Java / Spring Boot microservices in production, delivering measurable improvements in latency, scalability, and reliability."
        />

        <motion.article
          {...fadeUp}
          className="surface-card overflow-hidden transition-all duration-300 hover:border-cyan-500/15"
        >
          <div className="border-b border-white/[0.08] bg-white/[0.02] px-6 py-6 sm:px-8 sm:py-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                  Backend Java Developer
                </h3>
                <p className="mt-1 font-medium text-cyan-400/90">CGI Inc</p>
              </div>
              <p className="font-mono text-sm text-zinc-500">3 years</p>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              Built and operated <strong className="text-zinc-300">Spring Boot</strong>{" "}
              services in a <strong className="text-zinc-300">microservices</strong>{" "}
              estate: <strong className="text-zinc-300">MySQL</strong> as source of
              truth, <strong className="text-zinc-300">Redis</strong> for hot reads,{" "}
              <strong className="text-zinc-300">Kafka</strong> for asynchronous
              integration, deployed on{" "}
              <strong className="text-zinc-300">AWS</strong> (EC2, S3, RDS). I
              drive design reviews, implementation, rollout, and the operational
              guardrails that keep the system boring.
            </p>
          </div>
          <motion.ul
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="divide-y divide-white/[0.06] bg-[#030406]/40"
          >
            {bullets.map((text, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 px-6 py-4 transition-colors duration-200 hover:bg-white/[0.02] sm:px-8"
              >
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.article>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "API latency", value: "~−30%" },
            { label: "DB load", value: "~−40%" },
            { label: "Uptime target", value: "99.9%" },
            { label: "Concurrency", value: "1200+" },
          ].map((m) => (
            <motion.div
              key={m.label}
              {...staggerItem}
              className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent px-5 py-4 shadow-lg shadow-black/30 transition-all duration-300 hover:border-cyan-500/20"
            >
              <p className="font-mono text-2xl font-semibold tracking-tight text-cyan-300">
                {m.value}
              </p>
              <p className="mt-1 text-[11px] font-medium tracking-wide text-zinc-500 uppercase">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
