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
    <motion.div {...fadeUp} className="mb-12 max-w-2xl">
      <p className="mb-2 text-sm font-medium tracking-widest text-cyan-400/90 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
