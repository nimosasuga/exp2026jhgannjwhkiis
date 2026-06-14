"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type AnimatedSectionProps = Omit<
  HTMLMotionProps<"section">,
  "initial" | "whileInView" | "viewport" | "transition"
> & {
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
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;