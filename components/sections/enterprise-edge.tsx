"use client";

import React from "react";
import { motion } from "framer-motion";
import { ENTERPRISE_EDGE_DATA } from "@/constants/data";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Sparkles, Boxes, Layers, Clock, ArrowRight } from "lucide-react";

export function EnterpriseEdge() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Boxes: <Boxes className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Layers: <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Clock: <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  };

  return (
    <section id="enterprise-edge" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="gradient">WHY ENTERPRISES CHOOSE ACCREDIAN</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            The Accredian Edge
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Key pillars of our strategic enterprise upskilling ecosystem designed for measurable ROI.
          </p>
        </div>

        {/* Timeline Grid with Connector Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500 to-indigo-500/20 -translate-y-6 z-0 pointer-events-none" />

          {ENTERPRISE_EDGE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10"
            >
              <Card hoverGlow className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-black tracking-widest text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800">
                      PHASE {item.stepNumber}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shadow-sm">
                      {iconMap[item.icon]}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <span>{item.metrics}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
