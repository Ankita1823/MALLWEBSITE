"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./HeroVisuals.module.css";

const IMAGES = [
  {
    src: "/hero-dubai.png",
    alt: "Dubai Mall Fountain Night",
    delay: 1.2,
    rotate: -4
  },
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    alt: "Fashion Avenue Luxury",
    delay: 1.4,
    rotate: 0
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    alt: "The Waterfront Dining",
    delay: 1.6,
    rotate: 4
  }
];

export default function HeroVisuals() {
  return (
    <div className={styles.container}>
      {IMAGES.map((img, i) => (
        <motion.div
          key={i}
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 100, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: img.rotate }}
          transition={{ 
            duration: 1.5, 
            delay: img.delay, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 0, 
            zIndex: 10,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          style={{
            perspective: 1000
          }}
        >
          <motion.div
            className={styles.tiltWrapper}
            whileHover={{ rotateY: 10, rotateX: -5 }}
            transition={{ duration: 0.4 }}
            style={{ width: "100%", height: "100%" }}
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill
              className={styles.image} 
              sizes="340px"
            />
            <div className={styles.overlay} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
