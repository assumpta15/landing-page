"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MediaRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MediaReveal({
  children,
  className,
  delay = 0,
}: MediaRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion
          ? false
          : { clipPath: "inset(0 0 100% 0)", opacity: 0.6 }
      }
      whileInView={
        prefersReducedMotion
          ? {}
          : { clipPath: "inset(0 0 0% 0)", opacity: 1 }
      }
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
