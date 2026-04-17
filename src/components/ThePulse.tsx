"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./ThePulse.module.css";

export default function ThePulse() {
  const [visitorCount, setVisitorCount] = useState(102432);
  const [pulse, setPulse] = useState(82);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 5));
      setPulse(prev => {
        const next = prev + (Math.random() * 4 - 2);
        return Math.min(Math.max(next, 70), 98);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const chartBars = useMemo(() => {
    return [...Array(20)].map(() => ({
      initialHeight: `${20 + Math.random() * 80}%`
    }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.liveTag}>
          <span className={styles.blink} />
          LIVE RETAIL PULSE
        </div>
        <div className={styles.location}>Downtown Dubai, UAE</div>
      </div>

      <div className={styles.grid}>
        <div className={styles.mainBox}>
          <div className={styles.label}>Real-Time Footfall</div>
          <div className={styles.counter}>{visitorCount.toLocaleString()}</div>
          <div className={styles.subtext}>Active visitors across all levels</div>
          <div className={styles.chart}>
            {chartBars.map((bar, i) => (
              <motion.div 
                key={i} 
                className={styles.bar}
                animate={{ height: bar.initialHeight }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
              />
            ))}
          </div>
        </div>

        <div className={styles.sideCol}>
          <div className={styles.statBox}>
            <div className={styles.label}>Brand Energy Index</div>
            <div className={styles.value}>{pulse.toFixed(1)}%</div>
            <div className={styles.progressTrack}>
              <motion.div 
                className={styles.progressBar} 
                animate={{ width: `${pulse}%` }} 
              />
            </div>
          </div>
          
          <div className={styles.statBox}>
            <div className={styles.label}>Global Sentiment</div>
            <div className={styles.value}>POSITIVE</div>
            <div className={styles.dots}>
              {[...Array(3)].map((_, i) => (
                <div key={i} className={styles.dotActive} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footer}>
        Data synthesized from real-time IoT sensors and digital engagement markers.
      </div>
    </div>
  );
}
