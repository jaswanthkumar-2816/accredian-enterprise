"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRAINING_PROCESS_DATA } from "@/constants/data";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { SearchCheck, FileCode2, Rocket, CheckCircle } from "lucide-react";

export function TrainingProcess() {
  const iconMap: Record<string, React.ReactNode> = {
    SearchCheck: <SearchCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    FileCode2: <FileCode2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Rocket: <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  };

  return (
    <section id="process" className="py-24 bg-slate-50/70 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="gradient">STRUCTURED EXECUTION ROADMAP</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How We Deliver Results That Matter
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A structured three-step approach ensuring seamless enterprise onboarding and verifiable ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {TRAINING_PROCESS_DATA.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card hoverGlow className="h-full flex flex-col justify-between p-7 space-y-6 relative">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-lg shadow-md shadow-blue-500/20">
                      0{step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                      {iconMap[step.icon]}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {step.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Expected Outputs
                  </h4>
                  {step.keyOutputs.map((out, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
