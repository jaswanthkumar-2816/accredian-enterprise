"use client";

import React from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function Spotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(37, 99, 235, 0.06), transparent 80%)`,
      }}
    />
  );
}
