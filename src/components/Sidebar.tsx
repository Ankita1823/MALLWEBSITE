"use client";

import { motion } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
import styles from "./Sidebar.module.css";

const CHAPTERS = [
  { 
    name: "THE VISION", 
    items: [
      { id: "hero", label: "01 INTRO", icon: "⊹", slideIndex: 0 },
      { id: "why", label: "02 VISION", icon: "⬡", slideIndex: 1 },
    ]
  },
  { 
    name: "THE EXPERIENCE", 
    items: [
      { id: "retail", label: "03 RETAIL", icon: "⬢", slideIndex: 2 },
      { id: "luxury", label: "04 LUXURY", icon: "✧", slideIndex: 3 },
      { id: "dining", label: "05 DINING", icon: "◈", slideIndex: 4 },
      { id: "experience", label: "06 LIFESTYLE", icon: "⟡", slideIndex: 5 },
    ]
  },
  { 
    name: "THE PARTNERSHIP", 
    items: [
      { id: "attractions", label: "07 MAGNETS", icon: "✦", slideIndex: 6 },
      { id: "events", label: "08 STAGE", icon: "◆", slideIndex: 7 },
      { id: "vision", label: "09 VISION", icon: "⊙", slideIndex: 8 },
      { id: "contact", label: "10 PARTNER", icon: "✉", slideIndex: 9 },
    ]
  }
];

export default function Sidebar() {
  const { currentSlide, setSlide } = useSlide();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.topLogo}>
        <div className={styles.logoDiamond}>◆</div>
      </div>
      
      <div className={styles.counter}>
        <span className={styles.current}>{(currentSlide + 1).toString().padStart(2, "0")}</span>
        <div className={styles.line} />
        <span className={styles.total}>10</span>
      </div>

      <nav className={styles.nav}>
        {CHAPTERS.map((chapter) => (
          <div key={chapter.name} className={styles.chapterGroup}>
            <div className={styles.chapterName}>{chapter.name}</div>
            {chapter.items.map((item) => (
              <button
                key={item.id}
                className={`${styles.navItem} ${currentSlide === item.slideIndex ? styles.active : ""}`}
                onClick={() => setSlide(item.slideIndex)}
              >
                <span className={styles.dot}>{item.icon}</span>
                <motion.span 
                  className={styles.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={currentSlide === item.slideIndex ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                >
                  {item.label}
                </motion.span>
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className={styles.bottom}>
        <div className={styles.scrollLabel}>NAVIGATE</div>
      </div>
    </aside>
  );
}
