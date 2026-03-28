"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { staggerItem } from "./motion";

type SkillRow = { name: string; depth: string; href: string };

const categories: { title: string; items: SkillRow[] }[] = [
  {
    title: "Backend",
    items: [
      {
        name: "Java",
        depth:
          "Java 8, concurrency (executors, CompletableFuture), JVM basics, immutability & API design for long-lived services.",
        href: "https://docs.oracle.com/en/java/",
      },
      {
        name: "Spring Boot",
        depth:
          "REST controllers, Spring Security / JWT, Spring Data JPA & Hibernate, validation, actuator, @Transactional boundaries, profiling & startup tuning.",
        href: "https://spring.io/projects/spring-boot",
      },
      {
        name: "Microservices",
        depth:
          "Service boundaries, synchronous vs event collaboration, API versioning, resilience (timeouts, retries with caps), config & feature flags at the edge.",
        href: "https://microservices.io/",
      },
      {
        name: "Apache Kafka",
        depth:
          "Producers/consumers, topics & partitions, at-least-once handling, idempotent consumers, dead-letter strategy, back-pressure awareness.",
        href: "https://kafka.apache.org/documentation/",
      },
      {
        name: "Node.js",
        depth:
          "BFFs, tooling, and lightweight gateways where the JVM stack isn’t the constraint—never confused with browser JavaScript.",
        href: "https://nodejs.org/docs/latest/api/",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        depth:
          "Component model, hooks, client state vs server state boundaries, performance basics (memoization where justified).",
        href: "https://react.dev/",
      },
      {
        name: "Next.js",
        depth:
          "App Router pages, data fetching patterns, static vs dynamic segments, deployment considerations with API backends.",
        href: "https://nextjs.org/docs",
      },
      {
        name: "TypeScript",
        depth:
          "Typed DTOs shared with API contracts, narrowing unknown JSON, safer refactors across UI and shared packages.",
        href: "https://www.typescriptlang.org/docs/",
      },
      {
        name: "Tailwind CSS",
        depth:
          "Rapid UI iteration, design tokens via utilities, responsive layouts—paired with accessible markup.",
        href: "https://tailwindcss.com/docs",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "MySQL / Amazon RDS",
        depth:
          "Indexing strategy, EXPLAIN-driven query plans, connection pooling, migrations, read replicas & replication lag awareness.",
        href: "https://dev.mysql.com/doc/",
      },
      {
        name: "Redis",
        depth:
          "Cache-aside & TTL discipline, eviction policy tradeoffs, distributed locks (carefully), session vs cache key namespaces.",
        href: "https://redis.io/docs/",
      },
      {
        name: "Schema & data modeling",
        depth:
          "Normalization vs read-optimized shapes, FK integrity, soft-delete vs hard-delete, audit columns & temporal queries.",
        href: "https://dev.mysql.com/doc/refman/en/optimization-database.html",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      {
        name: "Amazon EC2",
        depth:
          "Launch templates, auto scaling groups, security groups, instance profiles, patching cadence with production windows.",
        href: "https://docs.aws.amazon.com/ec2/",
      },
      {
        name: "Amazon S3",
        depth:
          "Buckets, lifecycle policies, pre-signed URLs, server-side encryption, least-privilege IAM for workloads.",
        href: "https://docs.aws.amazon.com/s3/",
      },
      {
        name: "CI/CD",
        depth:
          "GitHub Actions or CodePipeline: build → test → deploy, environment promotion, rollback hooks, secret hygiene.",
        href: "https://docs.github.com/en/actions",
      },
      {
        name: "Observability",
        depth:
          "Structured logs, metrics (CloudWatch), tracing hooks, SLO-oriented alerts—debuggability as a feature.",
        href: "https://docs.aws.amazon.com/cloudwatch/",
      },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/[0.08] py-22 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title=""
          description="Technical skills across backend development, databases, and cloud infrastructure with hands-on production experience."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              {...staggerItem}
              className="surface-card p-5 transition-all duration-300 hover:border-cyan-500/15 sm:p-6"
            >
              <h3 className="border-b border-white/[0.1] pb-3 font-mono text-xs tracking-widest text-cyan-300/95 uppercase">
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-zinc-100 underline-offset-4 transition-colors hover:text-cyan-200 hover:underline"
                    >
                      {item.name}
                    </a>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                      {item.depth}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
