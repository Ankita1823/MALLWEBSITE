"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ReferencePopup.tsx.module.css";

interface ReferencePopupProps {
  children: React.ReactNode;
  source: string;
  url?: string;
}

export default function ReferencePopup({ children, source, url }: ReferencePopupProps) {
  const [show, setShow] = useState(false);

  return (
    <span 
      className={styles.trigger}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)}
    >
      {children}
      <sup className={styles.sup}>[i]</sup>
      
      <AnimatePresence>
        {show && (
          <motion.span
            className={styles.popup}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className={styles.label}>Verified Source</span>
            <span className={styles.sourceText}>{source}</span>
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View Documentation <span>↗</span>
              </a>
            )}
            <span className={styles.arrow} />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
