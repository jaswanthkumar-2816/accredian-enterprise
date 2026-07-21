"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export function AccredianEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gold-emblem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="80%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="blue-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      {/* Golden Crown Crest Apex */}
      <path d="M50 8 L54 16 L62 12 L57 20 L50 18 L43 20 L38 12 L46 16 Z" fill="url(#gold-emblem-grad)" />
      {/* Golden Geometric 'A' Body */}
      <path d="M50 20 L78 84 H63 L50 52 L37 84 H22 L50 20 Z" fill="url(#gold-emblem-grad)" />
      {/* Signature Sweeping Blue Arc Curve */}
      <path d="M18 64 Q 50 46, 82 64" stroke="url(#blue-curve-grad)" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function AccredianLogo({ size = "md", showText = true, className }: LogoProps) {
  const sizeMap = {
    sm: { icon: "w-7 h-7", text: "text-lg", badge: "text-[9px] px-1 py-0.5" },
    md: { icon: "w-9 h-9", text: "text-xl sm:text-2xl", badge: "text-[10px] px-1.5 py-0.5" },
    lg: { icon: "w-12 h-12", text: "text-3xl", badge: "text-xs px-2 py-0.5" },
    xl: { icon: "w-16 h-16", text: "text-4xl sm:text-5xl", badge: "text-sm px-2.5 py-1" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3 group select-none cursor-pointer", className)}>
      {/* Luxury Gold 'A' Emblem */}
      <div className={cn("shrink-0 transition-transform duration-300 group-hover:scale-105", currentSize.icon)}>
        <AccredianEmblem className="w-full h-full" />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={cn("font-serif-luxury font-bold tracking-tight text-slate-900 dark:text-white relative", currentSize.text)}>
              Accredian
              {/* Luminous blue accent curve line under the 'A' */}
              <span className="absolute bottom-1 left-0 w-8 h-[2.5px] bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full" />
            </span>
          </div>
          <span className="text-[10px] tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase font-semibold font-sans">
            Credentials That Matter
          </span>
        </div>
      )}
    </div>
  );
}
