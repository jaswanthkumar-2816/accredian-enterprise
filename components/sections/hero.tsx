"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Play, Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function Hero() {
  const handleScheduleConsultation = () => {
    window.dispatchEvent(new CustomEvent("open-consultation"));
  };

  const scrollToCourses = () => {
    const elem = document.getElementById("courses");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden mesh-gradient">
      {/* Background glowing ambient blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-3xl animate-blob [animation-delay:4s] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <Badge variant="gradient" className="px-3.5 py-1.5 text-xs sm:text-sm gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Next-Gen Enterprise Upskilling Platform 3.0</span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Transform Your Workforce Into a{" "}
              <span className="text-gradient">High-Impact Tech Powerhouse</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Architected for Fortune 500 enterprises. Tailored learning tracks in{" "}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">Generative AI, Product Management, Data Engineering</strong>, and Executive Leadership.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                variant="glow"
                size="lg"
                onClick={handleScheduleConsultation}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Schedule Enterprise Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToCourses}
                leftIcon={<Play className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                className="w-full sm:w-auto"
              >
                Explore Curricula
              </Button>
            </motion.div>

            {/* Social Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>200+ Corporate Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>98% Completion Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>SOC-2 & ISO 27001 Certified</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Interactive Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-400 opacity-30 blur-xl animate-pulse" />

              {/* Main Card */}
              <div className="relative rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 shadow-2xl dark:shadow-black/50 space-y-6">
                {/* Header Mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                      AC
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        Enterprise L&D Dashboard
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Live Team Analytics</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Live System
                  </span>
                </div>

                {/* Dashboard Stats Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/60 dark:border-zinc-700/60">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs mb-1">
                      <span>Active Learners</span>
                      <Users className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-slate-100">10,480+</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                      +24% vs last quarter
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/60 dark:border-zinc-700/60">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs mb-1">
                      <span>Skill Index ROI</span>
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-slate-100">3.8x</div>
                    <div className="text-[10px] text-blue-600 dark:text-blue-400 font-medium mt-0.5">
                      Verified by Gartner
                    </div>
                  </div>
                </div>

                {/* Simulated Progress Track */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      Gen-AI Enterprise Cohort #4
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">88% Complete</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Floating Micro-Badge #1 */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 p-3 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 shadow-xl hidden sm:flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Top L&D Vendor</div>
                    <div className="text-[10px] text-slate-500">2026 Global Award</div>
                  </div>
                </motion.div>

                {/* Floating Micro-Badge #2 */}
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 p-3 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 shadow-xl hidden sm:flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-100">SOC-2 Compliant</div>
                    <div className="text-[10px] text-slate-500">Enterprise Sandbox</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
