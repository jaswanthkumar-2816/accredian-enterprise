"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRACK_RECORD_DATA } from "@/constants/data";
import { CountUp } from "../ui/count-up";
import { Card } from "../ui/card";
import { Users, Building2, Award, TrendingUp } from "lucide-react";

export function TrackRecord() {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Building2: <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Award: <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  };

  return (
    <section id="track-record" className="py-20 bg-slate-50/70 dark:bg-zinc-950/60 border-y border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            PROVEN ENTERPRISE IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Our Enterprise Track Record
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Quantifiable outcomes delivered across top global organizations and industry pioneers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACK_RECORD_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hoverGlow className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/80 flex items-center justify-center mb-5">
                    {iconMap[item.icon]}
                  </div>

                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
                    <CountUp value={item.value} suffix={item.suffix} />
                  </div>

                  <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {item.label}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800">
                  {item.subtext}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
