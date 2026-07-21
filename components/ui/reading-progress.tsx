"use client";

import React from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ReadingProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 transition-all duration-150 ease-out shadow-sm shadow-blue-500/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
