"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white dark:bg-zinc-800 text-slate-800 dark:text-slate-100 shadow-xl border border-slate-200 dark:border-zinc-700/80 hover:border-blue-500 dark:hover:border-blue-400 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <div className="relative flex items-center justify-center">
            <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-blue-600 dark:text-blue-400" />
            <span className="sr-only">Back to top ({Math.round(progress)}%)</span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
