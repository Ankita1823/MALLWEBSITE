"use client";

import { motion } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
import styles from "./Sidebar.module.css";

const CHAPTERS = [
  { 
    name: "The Vision", 
    items: [
      { id: "hero", label: "01 Intro", icon: "⊹", slideIndex: 0 },
      { id: "why", label: "02 Vision", icon: "⬡", slideIndex: 1 },
    ]
  },
  { 
    name: "The Experience", 
    items: [
      { id: "retail", label: "03 Retail", icon: "⬢", slideIndex: 2 },
      { id: "luxury", label: "04 Luxury", icon: "✧", slideIndex: 3 },
      { id: "dining", label: "05 Dining", icon: "◈", slideIndex: 4 },
      { id: "experience", label: "06 Lifestyle", icon: "⟡", slideIndex: 5 },
    ]
  },
  { 
    name: "The Partnership", 
    items: [
      { id: "attractions", label: "07 Magnets", icon: "✦", slideIndex: 6 },
      { id: "events", label: "08 Stage", icon: "◆", slideIndex: 7 },
      { id: "vision", label: "09 Future", icon: "⊙", slideIndex: 8 },
      { id: "contact", label: "10 Partner", icon: "✉", slideIndex: 9 },
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
