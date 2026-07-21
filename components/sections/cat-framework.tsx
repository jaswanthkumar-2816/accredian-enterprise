"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CAT_FRAMEWORK_DATA } from "@/constants/data";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Lightbulb, Terminal, Wrench, CheckCircle, ArrowRight, Layers } from "lucide-react";

export function CatFramework() {
  const [activeStageId, setActiveStageId] = useState<"concept" | "application" | "tools">("concept");

  const stageIcons: Record<string, React.ReactNode> = {
    Lightbulb: <Lightbulb className="w-5 h-5" />,
    Terminal: <Terminal className="w-5 h-5" />,
    Wrench: <Wrench className="w-5 h-5" />,
  };

  const activeStage = CAT_FRAMEWORK_DATA.find((s) => s.id === activeStageId) || CAT_FRAMEWORK_DATA[0];

  return (
    <section id="cat-framework" className="py-24 bg-white dark:bg-zinc-900/40 border-b border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="gradient">PROPRIETARY LEARNING METHODOLOGY</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            The CAT Framework
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Concept &rarr; Application &rarr; Tools: Our proven 3-stage framework engineered for maximum skill retention.
          </p>
        </div>

        {/* Stage Timeline Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {CAT_FRAMEWORK_DATA.map((stage, idx) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20"
                    : "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-zinc-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {stageIcons[stage.icon]}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-normal opacity-80">Phase 0{idx + 1}</span>
                  <span>{stage.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Active Stage Display Pane */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 sm:p-10 bg-slate-50/70 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Stage Overview */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Stage Outcome: {activeStage.metrics}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {activeStage.subtitle}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    {activeStage.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Stage Deliverables
                    </h4>
                    {activeStage.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-800 dark:text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Interactive Tools & Tech Stack Pane */}
                <div className="lg:col-span-6">
                  <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700/80 shadow-md space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-700">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Integrated Tech Stack & Sandboxes
                      </span>
                      <Badge variant="outline">{activeStage.title} Stack</Badge>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {activeStage.toolsList.map((tool, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-zinc-900 text-sm font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-700 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          {tool}
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 text-xs text-blue-800 dark:text-blue-200 flex items-center justify-between">
                      <span>Interactive Live Sandboxes & Capstone Audits Enabled</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const el = document.getElementById("courses");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                        className="text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60"
                      >
                        Explore Sandbox
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
