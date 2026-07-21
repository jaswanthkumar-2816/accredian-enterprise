"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLMotionProps<"div"> {
  hoverGlow?: boolean;
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverGlow = false, glass = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverGlow ? { y: -4, transition: { duration: 0.2 } } : undefined}
        className={cn(
          "rounded-2xl transition-all duration-300 p-6",
          glass
            ? "glass-panel"
            : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-black/20",
          hoverGlow &&
            "hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
