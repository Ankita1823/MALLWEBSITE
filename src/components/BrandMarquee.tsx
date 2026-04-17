"use client";

import { motion } from "framer-motion";
import styles from "./BrandMarquee.module.css";

const BRANDS = [
  "CHANEL", "HERMÈS", "LOUIS VUITTON", "DIOR", "GUCCI", "PRADA", "ROLEX", "CARTIER",
  "PATEK PHILIPPE", "TIFFANY & CO.", "SAINT LAURENT", "FENDI", "BALENCIAGA"
];

export default function BrandMarquee() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fadeLeft} />
      <motion.div 
        className={styles.marquee}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className={styles.brandSet}>
          {BRANDS.map((b, i) => (
            <div key={`${b}-${i}`} className={styles.brandItem}>
              <span className={styles.diamond}>◆</span>
              {b}
            </div>
          ))}
        </div>
        <div className={styles.brandSet}>
          {BRANDS.map((b, i) => (
            <div key={`${b}-duplicate-${i}`} className={styles.brandItem}>
              <span className={styles.diamond}>◆</span>
              {b}
            </div>
          ))}
        </div>
      </motion.div>
      <div className={styles.fadeRight} />
    </div>
  );
}
