"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
import HeroVisuals from "./HeroVisuals";
import styles from "./OpeningHero.module.css";

export default function OpeningHero() {
  const { partnerName, setSlide } = useSlide();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const fps = 60;
    const frames = Math.round((duration / 1000) * fps);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / frames;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount1(Math.round(ease * 100));
      setCount2(Math.round(ease * 1300));
      setCount3(Math.round(ease * 330));
      if (frame >= frames) clearInterval(timer);
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    setSlide(1); // Go to "Why" slide
  };

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      {/* Cinematic background */}
      <motion.div className={styles.bg} style={{ y }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.videoBg}
          crossOrigin="anonymous"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-car-headlights-and-tail-lights-on-a-highway-at-night-34563-large.mp4" type="video/mp4" />
        </video>
        <div className={styles.bgGradient} />
        <div className={styles.bgGrid} />
      </motion.div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <motion.div className={styles.content}>
        <div className={styles.overflowHidden}>
          <motion.p
            className="label"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            The World&apos;s Most Visited Destination
          </motion.p>
        </div>

        <motion.h1
          className={`display-xl ${styles.headline}`}
        >
          <div className={styles.overflowHidden}>
            <motion.span 
              className={styles.partnerTag}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >PARTNERING WITH</motion.span>
          </div>
          <div className={styles.overflowHidden}>
            <motion.span 
              className="text-gold italic"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "block" }}
            >
              {partnerName}
            </motion.span>
          </div>
        </motion.h1>

        <motion.p
          className={`subheading ${styles.sub}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          A global stage for <span className="text-gold">{partnerName}</span> flagship concepts, 
          exclusive events, and extraordinary shared visions.
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <button className="btn-primary" onClick={() => setSlide(9)}>
            Partner With Us
          </button>
          <button className="btn-ghost" onClick={scrollDown}>
            Explore the Mall
          </button>
        </motion.div>

        {/* Live stats */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className={styles.stat}>
            <div className={styles.statVal}>{count1}M+</div>
            <div className={styles.statLab}>ANNUAL VISITORS</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statVal}>{count2}+</div>
            <div className={styles.statLab}>RETAIL OUTLETS</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statVal}>{count3}K+</div>
            <div className={styles.statLab}>DAILY FOOTFALL</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Visuals - Hidden on small screens via CSS */}
      <HeroVisuals />

      {/* Scroll indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
      </motion.div>
    </section>
  );
}
