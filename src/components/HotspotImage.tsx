"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import styles from "./HotspotImage.module.css";

interface Hotspot {
  x: number;
  y: number;
  title: string;
  desc: string;
}

interface HotspotImageProps {
  src: string;
  alt: string;
  hotspots: Hotspot[];
}

export default function HotspotImage({ src, alt, hotspots }: HotspotImageProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <Image src={src} className={styles.image} alt={alt} fill sizes="100vw" />
      <div className={styles.overlay} />

      {hotspots.map((h, i) => (
        <div 
          key={i} 
          className={styles.hotspotWrapper}
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
        >
          <motion.button
            className={`${styles.hotspot} ${active === i ? styles.active : ""}`}
            onClick={() => setActive(active === i ? null : i)}
            whileHover={{ scale: 1.1 }}
            animate={{ 
              boxShadow: active === i 
                ? "0 0 0 0 rgba(201,168,76,0.5)" 
                : ["0 0 0 0px rgba(201,168,76,0.4)", "0 0 0 15px rgba(201,168,76,0)"]
            }}
            transition={{ 
              boxShadow: { duration: 1.5, repeat: Infinity }
            }}
          >
            <Plus size={16} className={active === i ? styles.rotated : ""} />
          </motion.button>

          <AnimatePresence>
            {active === i && (
              <motion.div
                className={styles.popover}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
              >
                <div className={styles.popLabel}>FEATURE HIGHLIGHT</div>
                <h4 className={styles.popTitle}>{h.title}</h4>
                <p className={styles.popDesc}>{h.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
