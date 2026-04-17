"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
import styles from "./IntroVideo.module.css";

export default function IntroVideo() {
  const { isIntroComplete, completeIntro } = useSlide();
  const [show, setShow] = useState(true);

  if (isIntroComplete) return null;

  const handleEnter = () => {
    setShow(false);
    setTimeout(() => {
      completeIntro();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1, 
            filter: "blur(40px)",
            transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Animated reveal overlay */}
          <motion.div 
            className={styles.revealOverlay}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
          />

          {/* Cinematic Background Video */}
          <div className={styles.videoOverlay}>
            <motion.div 
              className={styles.videoWrapper}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className={styles.video}
                crossOrigin="anonymous"
                onLoadedData={() => {}}
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-car-headlights-and-tail-lights-on-a-highway-at-night-34563-large.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <div className={styles.vignette} />
            <div className={styles.shimmerOverlay} />
          </div>

          <div className={styles.content}>
            <div className={styles.logoRow}>
              <motion.span 
                className={styles.diamond}
                initial={{ rotate: -45, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
              >◆</motion.span>
              <motion.h1 
                className={styles.brand}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >DUBAI MALL</motion.h1>
            </div>

            <motion.div
              initial={{ letterSpacing: "0.8em", opacity: 0 }}
              animate={{ letterSpacing: "0.4em", opacity: 1 }}
              transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
              className={styles.title}
            >
              The Center of Now
            </motion.div>

            <motion.div
              className={styles.btnWrapper}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <button
                className={styles.enterBtn}
                onClick={handleEnter}
              >
                <div className={styles.btnBg} />
                <span className={styles.btnText}>ENTER EXPERIENCE</span>
                <span className={styles.arrow}>→</span>
              </button>
            </motion.div>
          </div>

          <motion.div
            className={styles.footer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 3, duration: 1.5 }}
          >
            A Private Executive Presentation
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
