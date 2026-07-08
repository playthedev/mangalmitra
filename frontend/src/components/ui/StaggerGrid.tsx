"use client";

import { Children } from "react";
import { motion } from "framer-motion";

/**
 * Wraps a set of children (typically cards) and fades each one in with a small
 * upward drift, staggered so the grid assembles itself as it scrolls into view.
 */
export function StaggerGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
