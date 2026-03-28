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
          className="h-px w-10 shrink-0 bg-gradient-to-r from-cyan-400 to-transparent sm:w-12"
          aria-hidden
        />
        <p className="text-xs font-medium tracking-[0.22em] text-cyan-400/95 uppercase sm:text-sm">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl sm:leading-[1.12]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:mt-5 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
