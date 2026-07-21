"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "outline" | "gradient" | "success";
}

export function Badge({
  className,
  variant = "primary",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    primary:
      "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60",
    secondary:
      "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300 border border-slate-200 dark:border-zinc-700",
    outline:
      "bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-zinc-700",
    gradient:
      "bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30 dark:border-blue-400/30",
    success:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors gap-1.5 select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
