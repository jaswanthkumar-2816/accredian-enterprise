"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

export function CTASection() {
  const handleTriggerDemo = () => {
    window.dispatchEvent(new CustomEvent("open-consultation"));
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 p-8 sm:p-14 text-white shadow-2xl">
          {/* Animated Background Blobs */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl animate-blob pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-500/20 blur-2xl animate-blob [animation-delay:3s] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Ready to Elevate Your Team?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Transform Your Enterprise Tech Talent in 90 Days
              </h2>

              <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
                Get a custom skills audit, sandbox environment demo, and tailor-made curriculum proposal for your organization.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-blue-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Free Enterprise Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-blue-200" />
                  <span>Speak With L&D Advisor</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={handleTriggerDemo}
                  rightIcon={<ArrowRight className="w-5 h-5 text-blue-600" />}
                  className="bg-white hover:bg-slate-100 text-blue-700 font-bold shadow-xl shadow-black/20 text-base px-8 py-4 h-auto rounded-2xl border-none cursor-pointer"
                >
                  Book Consultation Now
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
