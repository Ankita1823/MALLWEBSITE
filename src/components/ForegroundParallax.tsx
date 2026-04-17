"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ForegroundParallax.module.css";

export default function ForegroundParallax() {
  const { scrollYProgress } = useScroll();
  
  // Parallax values for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const r1 = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className={styles.container}>
      {/* Floating Geometric Elements */}
      <motion.div 
        className={styles.element1}
        style={{ y: y1, rotate: r1 }}
      >
        <div className={styles.diamondOutline} />
      </motion.div>

      <motion.div 
        className={styles.element2}
        style={{ y: y2 }}
      >
        <div className={styles.lensFlare} />
      </motion.div>

      {/* Subtle Dust/Particles Layer 2 */}
      <motion.div 
        className={styles.element3}
        style={{ y: y1 }}
      >
        <div className={styles.glowOrb} />
      </motion.div>
    </div>
  );
}
