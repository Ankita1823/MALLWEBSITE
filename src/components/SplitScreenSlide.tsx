"use client";

import { motion } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
import Counter from "./Counter";
import styles from "./SplitScreenSlide.module.css";

export default function SplitScreenSlide() {
  const { partnerName, setSlide } = useSlide();

  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.layout}>
        {/* Left Side: Cinematic Visual */}
        <div className={styles.visualSide}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className={styles.video}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-busy-street-in-a-modern-city-at-night-34567-large.mp4" type="video/mp4" />
          </video>
          <div className={styles.overlay} />
          
          <motion.div 
            className={styles.visualContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="label">The Vision</span>
            <h2 className="display-md">A Partnership Without Boundaries</h2>
          </motion.div>
        </div>

        {/* Right Side: Data & Strategy */}
        <div className={styles.dataSide}>
          <motion.div 
            className={styles.dataContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="heading">Scaling with <span className="text-gold">{partnerName}</span></h3>
            <p className="subheading" style={{ marginTop: "24px" }}>
              Our data-driven ecosystem ensures that your brand doesn&apos;t just reside 
              within The Dubai Mall—it dominates the conversation across the entire MENA region.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statVal}>
                  <Counter value={92} suffix="%" />
                </div>
                <div className={styles.statLab}>Target Demographic Penetration</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statVal}>
                  <Counter value={4.2} decimals={1} suffix="x" />
                </div>
                <div className={styles.statLab}>Average ROI vs Competition</div>
              </div>
            </div>

            <div className={styles.footer}>
              <button className="btn-primary" onClick={() => setSlide(9)}>View Strategy Deck</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
