"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COURSES_DATA } from "@/constants/data";
import { CourseItem } from "@/types";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CourseModal } from "../ui/course-modal";
import { Clock, Video, ArrowRight, BookOpen, Layers } from "lucide-react";

export function CourseSegmentation() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const tabs = [
    { label: "All Curricula", value: "all" },
    { label: "Program Specific", value: "program" },
    { label: "Industry Specific", value: "industry" },
    { label: "Topic Specific", value: "topic" },
    { label: "Level Specific", value: "level" },
  ];

  const filteredCourses =
    activeTab === "all"
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === activeTab);

  return (
    <section id="courses" className="py-24 bg-white dark:bg-zinc-900/40 border-b border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="gradient">TAILORED ENTERPRISE CURRICULA</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Course Segmentation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explore custom-fit courses designed to address every professional role and business vertical.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card hoverGlow className="h-full flex flex-col justify-between p-7 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="primary">{course.categoryLabel}</Badge>
                      <Badge variant="success">{course.badge}</Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {course.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-zinc-800">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Video className="w-4 h-4 text-blue-500" />
                        <span>{course.mode}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-blue-500" />
                        <span>{course.syllabus.length} Modules</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Audience: <span className="text-slate-800 dark:text-slate-200 font-semibold">{course.targetAudience.split(",")[0]}</span>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedCourse(course)}
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      View Syllabus
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Syllabus Modal */}
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </section>
  );
}
