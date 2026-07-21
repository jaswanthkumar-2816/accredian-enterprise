"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/constants/data";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-zinc-900/40 border-b border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="gradient">EXECUTIVE TESTIMONIALS</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Trusted by Enterprise Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Hear directly from Chief Technology Officers and Learning Leaders who transformed their teams.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 sm:p-12 relative bg-slate-50/80 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 shadow-2xl">
                <Quote className="absolute top-8 right-8 w-16 h-16 text-blue-500/10 dark:text-blue-400/10 pointer-events-none" />

                <div className="space-y-6">
                  {/* Rating Stars & Impact Metric */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <Badge variant="success" className="py-1 px-3">
                      Impact: {activeTestimonial.impactMetric}
                    </Badge>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed italic">
                    &quot;{activeTestimonial.quote}&quot;
                  </blockquote>

                  {/* Author Profile */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-zinc-800">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-md">
                      {activeTestimonial.author.slice(0, 1)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {activeTestimonial.author}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {activeTestimonial.role} &bull;{" "}
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {activeTestimonial.company}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-blue-600 dark:bg-blue-400"
                      : "w-2.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="p-3 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="p-3 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
