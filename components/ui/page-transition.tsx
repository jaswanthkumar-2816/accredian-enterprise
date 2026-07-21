"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { AccredianLogo } from "./logo";

interface PageTransitionOverlayProps {
  isVisible: boolean;
  message?: string;
}

export function PageTransitionOverlay({
  isVisible,
  message = "Opening Accredian Enterprise Advisory Portal...",
}: PageTransitionOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md text-white select-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            className="flex flex-col items-center text-center space-y-6 px-6 py-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl max-w-md w-full mx-4"
          >
            <AccredianLogo size="lg" />
            <p className="text-xs text-blue-300 font-medium">{message}</p>

            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="w-1/2 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              />
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC-2 Certified Scheduling Sandbox</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
