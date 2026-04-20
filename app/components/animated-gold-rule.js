"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedGoldRule({ className = "" }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { scaleX: 0, opacity: 0.45 }}
      whileInView={prefersReducedMotion ? undefined : { scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.75 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left center" }}
    />
  );
}
