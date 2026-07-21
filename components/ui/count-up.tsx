"use client";

import React, { useRef, useState, useEffect } from "react";
import { useCountUp } from "@/hooks/use-count-up";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ value, suffix = "", duration = 2000, className = "" }: CountUpProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const count = useCountUp(value, duration, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
