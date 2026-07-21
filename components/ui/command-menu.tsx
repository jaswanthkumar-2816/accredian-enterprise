"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, BookOpen, Sparkles, PhoneCall, HelpCircle, Layers, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { toast } from "@/hooks/use-toast";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open menu
          const event = new CustomEvent("open-command-palette");
          window.dispatchEvent(event);
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNav = [
    { label: "Track Record & Stats", id: "track-record", icon: Sparkles },
    { label: "Corporate Clients", id: "clients", icon: Layers },
    { label: "CAT Framework", id: "cat-framework", icon: BookOpen },
    { label: "Domain Expertise", id: "domain-expertise", icon: Layers },
    { label: "Course Directory", id: "courses", icon: BookOpen },
    { label: "Training Process", id: "process", icon: Layers },
    { label: "Enterprise FAQs", id: "faq", icon: HelpCircle },
    { label: "Book Enterprise Consultation", id: "contact", icon: PhoneCall },
  ];

  const filteredNav = quickNav.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (sectionId: string) => {
    onClose();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-2xl rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
        >
          {/* Header Input */}
          <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-zinc-800 gap-3">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sections, courses, actions..."
              className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
            />
            <div className="flex items-center gap-2">
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-slate-400 bg-slate-100 dark:bg-zinc-800 rounded border border-slate-200 dark:border-zinc-700">
                ESC
              </kbd>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Actions & Navigation */}
          <div className="max-h-96 overflow-y-auto p-2">
            <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Quick Navigation
            </div>
            {filteredNav.length === 0 ? (
              <div className="p-6 text-center text-sm text-slate-500 dark:text-slate-400">
                No results found for &quot;{query}&quot;
              </div>
            ) : (
              filteredNav.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 text-left transition-colors text-slate-800 dark:text-slate-200 text-sm group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                      Jump to section &rarr;
                    </span>
                  </button>
                );
              })
            )}

            {/* Quick Actions */}
            <div className="mt-2 pt-2 border-t border-slate-200 dark:border-zinc-800">
              <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Theme & Utilities
              </div>
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  toast({
                    title: "Theme Switched",
                    description: `Switched to ${theme === "dark" ? "Light" : "Dark"} Mode`,
                    type: "info",
                  });
                  onClose();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 text-left transition-colors text-slate-800 dark:text-slate-200 text-sm cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-500" />
                  )}
                  <span>Toggle {theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </div>
              </button>
            </div>
          </div>

          <div className="px-4 py-2.5 bg-slate-50 dark:bg-zinc-900/80 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Command className="w-3.5 h-3.5" />
              <span>Type to search or select an action</span>
            </div>
            <span>Accredian Enterprise Palette</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
