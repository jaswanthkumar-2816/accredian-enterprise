"use client";

import React from "react";
import { CLIENT_LOGOS } from "@/constants/data";
import { Badge } from "../ui/badge";

export function Clients() {
  // Double logos array to create seamless loop
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="clients" className="py-16 overflow-hidden bg-white dark:bg-zinc-900/40 border-b border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          TRUSTED BY INDUSTRY LEADERS
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Our Proven Partnerships
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Empowering enterprise teams across high-growth sectors
        </p>
      </div>

      {/* Marquee Ticker */}
      <div className="relative w-full overflow-hidden mask-gradient py-4">
        {/* Gradient Fades on Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 sm:gap-10">
          {marqueeLogos.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="group flex-shrink-0 flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center font-black text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {client.logoText.slice(0, 2)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  {client.category}
                </span>
              </div>

              {client.badge && (
                <Badge variant="primary" className="text-[10px] py-0.5 px-2 ml-1">
                  {client.badge}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
