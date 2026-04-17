"use client";

import { useState, useRef, ReactNode } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import styles from "./MagneticButton.module.css";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "gold" | "glass";
  className?: string;
}

export default function MagneticButton({ 
  children, 
  onClick, 
  variant = "gold",
  className = "" 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull strength (adjust as needed)
    const strength = 0.4;
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.div className={styles.content}>
        {children}
      </motion.div>
      <div className={styles.shimmer} />
    </motion.button>
  );
}
