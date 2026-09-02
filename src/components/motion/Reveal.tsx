"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  stagger?: boolean;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  stagger = false,
  direction = "up",
  className = "",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionVariants = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ? 0.1 : 0,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: directionVariants[direction],
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger ? containerVariants : itemVariants}
    >
      {stagger ? (
        <motion.div variants={containerVariants}>
          {Array.isArray(children)
            ? children.map((child, i) => (
                <motion.div key={i} variants={itemVariants}>
                  {child}
                </motion.div>
              ))
            : children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
