"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import styles from "./MagneticButton.module.css";

export default function MagneticButton({ 
  children, 
  className = "", 
  onClick,
  variant = "gold"
}: { 
  children: React.ReactNode, 
  className?: string,
  onClick?: () => void,
  variant?: string
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    x.set(middleX * 0.35);
    y.set(middleY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.magnetic} ${className} ${variant ? styles[variant] : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
