"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { motion } from "motion/react";

type AnimatedSectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  delay?: number;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
