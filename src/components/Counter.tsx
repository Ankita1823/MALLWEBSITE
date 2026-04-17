"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

export default function Counter({ value, duration = 2, delay = 0, decimals = 0, suffix = "", className = "" }: CounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const count = useSpring(0, {
    bounce: 0,
    duration: duration * 1000,
  });

  const display = useTransform(count, (latest) => 
    latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + suffix
  );

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        count.set(value);
      }, delay * 1000);
    }
  }, [inView, count, value, delay]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
