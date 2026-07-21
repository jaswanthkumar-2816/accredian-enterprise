"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<{ x: number; y: number; id: number }[]>([]);

    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();

      setRipples((prev) => [...prev, { x, y, id }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);

      if (onClick) onClick(e);
    };

    const variantStyles = {
      primary:
        "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium shadow-md hover:shadow-blue-500/25 dark:shadow-blue-500/10 border border-blue-500/20",
      secondary:
        "bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-zinc-700/80 font-medium",
      outline:
        "bg-transparent hover:bg-slate-100/80 dark:hover:bg-zinc-800/80 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-zinc-700 font-medium",
      ghost:
        "bg-transparent hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-300 font-medium",
      glow:
        "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20 border border-blue-400/30 glow-effect",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5",
      md: "h-11 px-5 text-sm rounded-xl gap-2",
      lg: "h-13 px-7 text-base rounded-2xl gap-2.5",
      icon: "h-10 w-10 p-0 rounded-xl justify-center items-center",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        onClick={handleRipple}
        disabled={disabled || isLoading}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {/* Ripple elements */}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
            style={{
              left: r.x - 20,
              top: r.y - 20,
              width: 40,
              height: 40,
            }}
          />
        ))}

        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
