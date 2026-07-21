"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccredianEmblem } from "./logo";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "unset";
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 3) + 2;
        return next > 100 ? 100 : next;
      });
    }, 85);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-slate-900 dark:text-white select-none overflow-hidden transition-colors duration-500"
        >
          {/* Subtle Elegance Background Wave Curves */}
          <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-25">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M-100 700 C 300 500, 800 850, 1540 600 L 1540 900 L -100 900 Z"
                fill="url(#wave-grad-1)"
              />
              <path
                d="M-100 750 C 400 600, 900 800, 1540 650 L 1540 900 L -100 900 Z"
                fill="url(#wave-grad-2)"
              />
              <defs>
                <linearGradient id="wave-grad-1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="wave-grad-2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.01" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Glowing Central Lighting Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Main Card Content */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center space-y-7 px-6 max-w-5xl"
          >
            {/* Golden 'A' Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 drop-shadow-xl"
            >
              <AccredianEmblem className="w-full h-full" />
            </motion.div>

            {/* Brand Title: Accredian with Staggered Animated Letters */}
            <div className="space-y-4">
              <h1 className="relative text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight font-serif-luxury text-slate-900 dark:text-white inline-flex items-center justify-center">
                {["A", "c", "c", "r", "e", "d", "i", "a", "n"].map((letter, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 40, scale: 0.6, rotateY: 90 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      y: [0, -8, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.5, delay: idx * 0.08 },
                      scale: { duration: 0.5, delay: idx * 0.08 },
                      rotateY: { duration: 0.5, delay: idx * 0.08 },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6 + idx * 0.12,
                      },
                    }}
                    className="inline-block relative hover:text-blue-500 transition-colors"
                  >
                    {letter}
                  </motion.span>
                ))}

                {/* Luminous Sweeping Blue Swoosh Arc */}
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 w-full h-5 text-blue-500 overflow-visible pointer-events-none"
                  viewBox="0 0 200 20"
                  fill="none"
                >
                  <path
                    d="M 0 10 Q 100 0, 200 12"
                    stroke="url(#swoosh-grad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="swoosh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </h1>

              {/* Sub-headline */}
              <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 font-sans pt-1">
                ENTERPRISE LEARNING. ELEVATED.
              </p>
            </div>

            {/* Thin Glowing Blue Progress Line */}
            <div className="w-72 sm:w-96 space-y-3 pt-6">
              <div className="relative w-full h-[2px] bg-slate-200 dark:bg-zinc-800 overflow-hidden">
                {/* Progress Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300 relative shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                >
                  {/* Glowing Leading Beam Bead */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-300 blur-xs shadow-[0_0_15px_#38bdf8]" />
                </motion.div>
              </div>

              {/* Percentage Counter */}
              <div className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400 font-sans uppercase">
                LOADING... <span className="font-bold text-slate-900 dark:text-blue-400 font-mono">{progress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
