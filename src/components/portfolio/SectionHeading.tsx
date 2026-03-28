"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div {...fadeUp} className="mb-12 max-w-3xl sm:mb-16">
      <div className="mb-3 flex items-center gap-3 sm:mb-4">
        <span
          className="h-px w-12 shrink-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.4)] sm:w-14"
          aria-hidden
        />
        <p className="text-xs font-medium tracking-[0.22em] text-cyan-300/95 uppercase drop-shadow-[0_0_20px_rgba(34,211,238,0.25)] sm:text-sm">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-4xl sm:leading-[1.12]">
        <span className="bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:mt-5 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
