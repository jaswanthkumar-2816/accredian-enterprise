"use client";

import React from "react";
import { motion } from "framer-motion";
import { DOMAIN_EXPERTISE_DATA } from "@/constants/data";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Layout, Cpu, ShieldCheck, BarChart3, Settings, Globe, Coins, ArrowUpRight } from "lucide-react";

export function DomainExpertise() {
  const iconMap: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Settings: <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Globe: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    Coins: <Coins className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  };

  const scrollToCourses = () => {
    const elem = document.getElementById("courses");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="domain-expertise" className="py-24 bg-slate-50/70 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="gradient">SPECIALIZED ENTERPRISE DOMAINS</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Our Domain Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Specialized programs engineered to fuel innovation across high-impact business verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOMAIN_EXPERTISE_DATA.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card
                hoverGlow
                onClick={scrollToCourses}
                className="h-full flex flex-col justify-between p-6 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconMap[domain.icon]}
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {domain.programsCount} Programs
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    <span>{domain.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 dark:text-blue-400" />
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {domain.tagline}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {domain.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {domain.keySkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {domain.learners}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform font-medium text-blue-600 dark:text-blue-400">
                    View Programs &rarr;
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
