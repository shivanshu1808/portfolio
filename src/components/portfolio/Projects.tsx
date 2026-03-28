"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { staggerItem } from "./motion";

type CaseStudy = {
  name: string;
  role: string;
  summary: string;
  stack: string[];
  problem: string;
  approach: string;
  designDecisions: string;
  outcomes: string;
  diagram: string;
  deliverables: readonly string[];
  github: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
};

const caseStudies: CaseStudy[] = [
  {
    name: "Building & environmental control platform",
    role: "Owner · Spring Boot + Next.js + data tier",
    summary:
      "Designed an IoT-style control system to ingest telemetry, enforce safety rules, and power dashboards—without overloading MySQL for real-time reads.",
    stack: ["Spring Boot", "Next.js", "MySQL", "Redis", "REST", "JWT"],
    problem:
      "Dashboards polling the primary DB collapse under read amplification; threshold breaches need deterministic escalation; auditors ask “what changed, when, and by whom”—without a bespoke log dump.",
    approach:
      "Domain services own writes and transactional history in MySQL. Redis holds short-TTL aggregates and “last known good” reads for UI freshness. Next.js talks only to versioned REST resources so the UI can ship independently of service deploys.",
    designDecisions:
      "Chose cache-aside over write-through for phase-1 velocity; accepted brief eventual consistency on read replicas for non-critical tiles while keeping authoritative state on primary for mutations. Bounded retry + circuit-style timeouts on downstream sensor connectors to protect the fleet.",
    outcomes:
      "Clear blast-radius boundaries (UI ↔ API ↔ domain ↔ data). Predictable read cost at scale. APIs shaped for RBAC and future event notifications without rewriting core entities.",
    diagram:
      "Add docs/architecture.md with a diagram: edge/API → Spring services → MySQL (system of record) + Redis (hot reads) + async notifier (future). Mermaid sequence for “threshold breach → alert channel.”",
    deliverables: [
      "Zone / sensor model with aggregation boundaries that match how facilities reason about space",
      "Threshold engine with escalation hooks (email/webhook-ready)",
      "JWT-authenticated APIs + consistent problem+json style errors",
      "Operator workflows that fail closed when telemetry is stale",
    ],
    github: "https://github.com/shivanshu1808/Building-Control",
    linkLabel: "Repository — Building-Control",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Operations analytics dashboard on a laptop",
  },
  {
    name: "AI email assistant — API gateway & async surface",
    role: "Backend-led · Spring Boot + Gemini + React",
    summary:
      "AI email assistant — API gateway with asynchronous processing",
    stack: [
      "Spring Boot",
      "Gemini API",
      "React",
      "Kafka",
      "Amazon S3",
      "OpenAPI-minded contracts",
    ],
    problem:
      "Browser-held provider keys and unbounded synchronous calls to models create security, cost, and tail-latency incidents. Summaries and attachments need durable progress—not a spinner that blocks Tomcat threads.",
    approach:
      "A dedicated gateway service validates and normalizes prompts, enforces quotas/timeouts, and returns typed DTOs. Heavy summarization becomes a job: accept → enqueue (Kafka) → persist artifact metadata in S3 → poll/WebSocket-ready status for the UI.",
    designDecisions:
      "Idempotency keys on “start job” to survive double-clicks. Structured JSON schema for model output to reduce parsing brittleness. Explicit degradation: partial summary vs hard fail. PII redaction hooks before logging—treat prompts like sensitive data.",
    outcomes:
      "A pattern you can whiteboard in a system-design round: synchronous control plane, asynchronous data plane, object storage for blobs, and a single choke point for vendor keys and policy.",
    diagram:
      "README: C4 container diagram (browser, gateway, worker, Kafka, S3) + sequence for summarize-attachment. Optional OpenAPI yaml for /v1/jobs and /v1/summaries.",
    deliverables: [
      "Gateway: rate limits, timeouts, provider abstraction seam",
      "Job pipeline skeleton suitable for horizontal workers",
      "S3 object layout + metadata index strategy",
      "React flow centered on review/approval—not silent auto-send",
    ],
    github: "https://github.com/shivanshu1808",
    linkLabel: "GitHub profile — flagship repos next",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Email and productivity on mobile",
  },
];

function StoryCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 shadow-md shadow-black/20 transition-all duration-300 hover:border-cyan-500/15 hover:shadow-lg hover:shadow-cyan-950/20 sm:p-5">
      <p className="font-mono text-[10px] tracking-[0.15em] text-cyan-300/95 uppercase">
        {title}
      </p>
      <p className="mt-3 flex-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">
        {children}
      </p>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/[0.08] py-22 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="Production-style engineering narratives"
          description="Real backend systems explained through problem context, design decisions, tradeoffs, and measurable outcomes—with clear architecture and implementation depth."
        />

        <div className="flex flex-col gap-16 lg:gap-24">
          {caseStudies.map((p, i) => (
            <motion.article
              key={p.name}
              {...staggerItem}
              className="surface-card overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-[0_0_60px_-20px_rgba(34,211,238,0.12)]"
            >
              <div
                className={`grid gap-0 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div
                  className={`group relative aspect-[16/10] min-h-[220px] overflow-hidden border-b border-white/[0.08] bg-zinc-950 lg:min-h-[300px] lg:border-b-0 lg:border-white/[0.08] ${i % 2 === 0 ? "lg:border-r" : "lg:border-l"}`}
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030406] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#030406]/95" />
                  <p className="absolute bottom-4 left-4 right-4 font-mono text-xs text-zinc-400 lg:left-6">
                    {p.role}
                  </p>
                </div>

                <div className="flex flex-col bg-[#030406]/30 p-6 sm:p-8 lg:p-9">
                  <h3 className="text-balance text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-zinc-300 shadow-sm shadow-black/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <StoryCard title="Problem">{p.problem}</StoryCard>
                    <StoryCard title="Approach">{p.approach}</StoryCard>
                    <StoryCard title="Design decisions">
                      {p.designDecisions}
                    </StoryCard>
                    <StoryCard title="Outcomes">{p.outcomes}</StoryCard>
                  </div>

                  <div className="mt-6 rounded-xl border border-dashed border-cyan-500/25 bg-cyan-500/[0.04] px-4 py-3 sm:px-5">
                    <p className="font-mono text-[10px] tracking-widest text-cyan-400/80 uppercase">
                      Architecture artifact
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                      {p.diagram}
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                      Shipped scope (interview depth)
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm text-zinc-400">
                      {p.deliverables.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <span
                            className="mt-2 size-1 shrink-0 rounded-full bg-cyan-400/80"
                            aria-hidden
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/35 bg-gradient-to-r from-cyan-400/15 to-teal-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/40 transition-all hover:border-cyan-300/50 hover:from-cyan-400/25 hover:to-teal-500/15 hover:shadow-cyan-900/50"
                  >
                    {p.linkLabel}
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
