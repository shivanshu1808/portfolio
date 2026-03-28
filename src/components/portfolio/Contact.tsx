"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { fadeUp } from "./motion";

function IconMail() {
  return (
    <svg
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.02c0 4.431 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.705-2.782.603-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908.62.069.608.069.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.323-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.02C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const links = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: <IconMail />,
  },
  {
    label: "LinkedIn",
    value: "Profile",
    href: site.linkedin,
    icon: <IconLinkedIn />,
  },
  {
    label: "GitHub",
    value: `@${site.githubUsername}`,
    href: site.github,
    icon: <IconGitHub />,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build reliable systems together"
          description="Reach out for backend roles, architecture discussions, or collaborations. I typically respond within one business day."
        />

        <motion.div {...fadeUp} className="grid gap-4 sm:grid-cols-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                l.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[#0f1117] p-6 transition-colors hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-white/[0.04] text-cyan-400 transition-colors group-hover:bg-cyan-400/15">
                {l.icon}
              </div>
              <span className="font-mono text-xs tracking-wider text-zinc-500 uppercase">
                {l.label}
              </span>
              <span className="mt-1 text-sm font-medium text-zinc-100">
                {l.value}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
