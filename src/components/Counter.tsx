"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

export default function Counter({ value, duration = 2, decimals = 0, suffix = "" }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration,
      onUpdate(value) {
        node.textContent = value.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      },
    });

    return () => controls.stop();
  }, [value, inView, duration, decimals]);

  return (
    <div>
      <span ref={nodeRef}>0</span>
      <span>{suffix}</span>
    </div>
  );
}
