"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { staggerItem } from "./motion";

const categories = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs", "Kafka"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Node.js", "TypeScript"],
  },
  {
    title: "Databases",
    items: ["MySQL", "Redis", "Schema design", "Query optimization"],
  },
  {
    title: "DevOps & Cloud",
    items: ["AWS EC2", "AWS S3", "AWS RDS", "CI/CD", "Observability"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to ship"
          description="Stack aligned with modern product companies—strong JVM backend with pragmatic full-stack and cloud skills."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              {...staggerItem}
              className="rounded-2xl border border-white/[0.06] bg-[#0f1117] p-6"
            >
              <h3 className="font-mono text-xs tracking-widest text-cyan-400/90 uppercase">
                {cat.title}
              </h3>
              <ul className="mt-4 list-disc space-y-2.5 pl-4 marker:text-zinc-600">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-zinc-300">
                    {item}
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
