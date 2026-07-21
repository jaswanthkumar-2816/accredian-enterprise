"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA } from "@/constants/data";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Search, ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const categories = ["All", "Curricula", "Enterprise Setup", "Security & ROI", "General"];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50/70 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="gradient">FREQUENTLY ASKED QUESTIONS</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Everything You Need to Know
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Have questions about enterprise onboarding, curricula customization, or compliance? We are here to help.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search enterprise FAQs..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <Card className="p-8 text-center text-slate-500 dark:text-slate-400">
              No matching questions found. Try adjusting your search.
            </Card>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <Card
                  key={faq.id}
                  className="p-0 overflow-hidden border-slate-200 dark:border-zinc-800 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 dark:hover:bg-zinc-800/40 transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-zinc-800/60 mt-1">
                          <p className="pt-4">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
