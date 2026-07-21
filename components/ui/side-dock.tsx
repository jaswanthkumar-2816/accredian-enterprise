"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Building2,
  Zap,
  Layers,
  Sparkles,
  BookOpen,
  GitCommit,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: "track-record", label: "Track Record", icon: <BarChart3 className="w-4 h-4" /> },
  { id: "clients", label: "Clients", icon: <Building2 className="w-4 h-4" /> },
  { id: "edge", label: "Accredian Edge", icon: <Zap className="w-4 h-4" /> },
  { id: "cat-framework", label: "CAT Framework", icon: <Layers className="w-4 h-4" /> },
  { id: "domain-expertise", label: "Domain Expertise", icon: <Sparkles className="w-4 h-4" /> },
  { id: "course-segmentation", label: "Courses", icon: <BookOpen className="w-4 h-4" /> },
  { id: "process", label: "Process", icon: <GitCommit className="w-4 h-4" /> },
  { id: "faq", label: "FAQs", icon: <HelpCircle className="w-4 h-4" /> },
];

export function LeftSideDock() {
  const [activeSection, setActiveSection] = useState("track-record");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-start select-none transition-all duration-300"
    >
      <div className="bg-slate-900/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-slate-800/80 dark:border-zinc-800 p-2 rounded-3xl shadow-2xl shadow-black/40 flex flex-col gap-1.5 min-w-[58px]">
        {/* Top Header Pill */}
        <div className="px-3 py-2 flex items-center gap-2 border-b border-slate-800/60 pb-2.5 mb-1">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap overflow-hidden"
              >
                SECTIONS
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Vertical Stack List */}
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "group relative flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-200 cursor-pointer w-full text-left",
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/70"
              )}
            >
              {/* Active Left Indicator Bar (Like image 2) */}
              {isActive && (
                <motion.div
                  layoutId="activeLeftDockIndicator"
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-cyan-400 rounded-r-full shadow-[0_0_10px_#38bdf8]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Icon */}
              <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </span>

              {/* Stacked Name Label */}
              <span className="text-xs font-semibold whitespace-nowrap tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
