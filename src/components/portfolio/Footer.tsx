import Link from "next/link";
import { site } from "@/lib/site";
import { ViewCounter } from "./ViewCounter";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-gradient-to-b from-[#030406]/90 to-[#020308] py-12 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p className="max-w-md leading-relaxed">
          © {year} {site.fullName}. Crafted with Next.js & Tailwind CSS.
        </p>
        <ViewCounter />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link
            href="#top"
            className="rounded-full px-3 py-1 text-zinc-400 transition-all hover:bg-white/[0.07] hover:text-cyan-100"
          >
            Back to top
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-1 text-zinc-400 transition-all hover:bg-white/[0.07] hover:text-cyan-100"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-1 text-zinc-400 transition-all hover:bg-white/[0.07] hover:text-cyan-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
