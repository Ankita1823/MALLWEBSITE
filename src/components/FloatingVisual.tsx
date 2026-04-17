"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./FloatingVisual.module.css";

interface FloatingVisualProps {
  src: string;
  alt: string;
  delay?: number;
  rotate?: number;
}

export default function FloatingVisual({ src, alt, delay = 0, rotate = 0 }: FloatingVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className={styles.container} ref={ref}>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, x: 40, rotate: 10 + rotate }}
        whileInView={{ opacity: 1, x: 0, rotate: rotate }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay, ease: [0.25, 1, 0.5, 1] }}
        style={{ y }}
        whileHover={{ scale: 1.02, rotate: 0, transition: { duration: 0.4 } }}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill
          className={styles.image} 
          sizes="(max-width: 1100px) 300px, 400px"
        />
        <div className={styles.overlay} />
      </motion.div>
    </div>
  );
}
