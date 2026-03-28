"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { fadeUp, staggerItem } from "./motion";

const bullets = [
  "Improved API response time by 30% through query optimization and service-level caching.",
  "Reduced database load by 40% by introducing Redis for hot reads and TTL-backed invalidation.",
  "Maintained 99.9% uptime on AWS-hosted services with disciplined releases and monitoring.",
  "Supported 1,200+ concurrent users with horizontal scaling and resilient dependency handling.",
];

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have delivered impact"
          description="Hands-on backend ownership in enterprise environments—metrics reflect real production outcomes."
        />

        <motion.article
          {...fadeUp}
          className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f1117]"
        >
          <div className="border-b border-white/[0.06] px-6 py-6 sm:px-8 sm:py-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-50">
                  Backend Java Developer
                </h3>
                <p className="mt-1 text-cyan-400/90">CGI Inc</p>
              </div>
              <p className="font-mono text-sm text-zinc-500">3 years</p>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">
              Built and maintained Java / Spring Boot microservices integrating
              MySQL, Redis, and Kafka. Owned features end-to-end—from API design
              and schema evolution to AWS deployment (EC2, S3, RDS) and
              on-call readiness.
            </p>
          </div>
          <motion.ul
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.07 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="divide-y divide-white/[0.06]"
          >
            {bullets.map((text) => (
              <motion.li
                key={text}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 px-6 py-4 sm:px-8"
              >
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-400"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-zinc-300">
                  {text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.article>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "API latency", value: "−30%" },
            { label: "DB load", value: "−40%" },
            { label: "Uptime", value: "99.9%" },
            { label: "Concurrent users", value: "1200+" },
          ].map((m) => (
            <motion.div
              key={m.label}
              {...staggerItem}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
            >
              <p className="font-mono text-2xl font-semibold tracking-tight text-cyan-400">
                {m.value}
              </p>
              <p className="mt-1 text-xs tracking-wide text-zinc-500 uppercase">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
