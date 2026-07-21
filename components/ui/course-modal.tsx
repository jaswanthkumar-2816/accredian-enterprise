"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Video, Award, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { CourseItem } from "@/types";
import { Button } from "./button";
import { Badge } from "./badge";
import { toast } from "@/hooks/use-toast";

interface CourseModalProps {
  course: CourseItem | null;
  onClose: () => void;
}

export function CourseModal({ course, onClose }: CourseModalProps) {
  if (!course) return null;

  const handleEnroll = () => {
    onClose();
    toast({
      title: "Syllabus Request Received",
      description: `We've sent full details for "${course.title}" to your enterprise portal.`,
      type: "success",
    });

    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-3xl my-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
        >
          {/* Top Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="gradient" className="bg-white/20 text-white border-white/30">
                {course.categoryLabel}
              </Badge>
              <Badge variant="success" className="bg-emerald-500/20 text-emerald-200 border-emerald-400/30">
                {course.badge}
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {course.title}
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl">{course.subtitle}</p>

            <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-white/15 text-xs sm:text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-200" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-blue-200" />
                <span>{course.mode}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-200" />
                <span>Enterprise Certified</span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Program Description
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {course.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                Target Executive Audience
              </h3>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                {course.targetAudience}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Learning Outcomes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Syllabus Modules */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Curriculum Module Breakdown
              </h3>
              <div className="space-y-3">
                {course.syllabus.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200 dark:border-zinc-800"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {mod.title}
                      </h4>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {mod.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {mod.topics.map((t, tidx) => (
                        <span
                          key={tidx}
                          className="px-2.5 py-1 text-xs rounded-md bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-6 bg-slate-50 dark:bg-zinc-900/80 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Includes Enterprise Customization & Dedicated Instructor Support</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button variant="outline" size="sm" onClick={onClose} className="w-1/2 sm:w-auto">
                Close
              </Button>
              <Button
                variant="glow"
                size="sm"
                onClick={handleEnroll}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-1/2 sm:w-auto"
              >
                Request Enterprise Plan
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
