"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./Atmosphere.module.css";

export default function Atmosphere() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const orbs = useMemo(() => {
    return [...Array(6)].map(() => ({
      initialX: Math.random() * 100 + "vw",
      initialY: Math.random() * 100 + "vh",
      animateTransform: [
        `translateX(${Math.random() * 100}vw) translateY(${Math.random() * 100}vh)`,
        `translateX(${Math.random() * 100}vw) translateY(${Math.random() * 100}vh)`,
        `translateX(${Math.random() * 100}vw) translateY(${Math.random() * 100}vh)`
      ],
      duration: 20 + Math.random() * 10
    }));
  }, []);

  if (!mounted) return <div className={styles.atmosphere} />;

  return (
    <div className={styles.atmosphere}>
      {/* Floating Gold Orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={styles.orb}
          initial={{ 
            x: orb.initialX, 
            y: orb.initialY,
            opacity: 0 
          }}
          animate={{
            transform: orb.animateTransform,
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Cinematic Dust/Particles */}
      <div className={styles.grain} />
      
      {/* Light Leaks */}
      <div className={styles.leakTop} />
      <div className={styles.leakBottom} />
    </div>
  );
}
