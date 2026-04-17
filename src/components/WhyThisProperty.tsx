"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import styles from "./WhyThisProperty.module.css";
import ReferencePopup from "./ReferencePopup";
import ThePulse from "./ThePulse";
import FloatingVisual from "./FloatingVisual";
import Counter from "./Counter";

const STATS = [
  { value: <Counter value={100} suffix="M+" />, label: "Annual Visitors", sub: "More than New York City's Times Square" },
  { value: "#", label: "Most Visited Mall", sub: "Globally, every year since 2011", component: <Counter value={1} /> },
  { value: <Counter value={5.9} decimals={1} suffix="M" />, label: "Sq Ft Retail GLA", sub: "Largest mall complex in the world" },
  { value: <Counter value={1300} suffix="+" />, label: "Retail Outlets", sub: "Every category, every tier" },
];

const FEATURES = [
  {
    icon: "✦",
    title: "Unrivalled Connectivity",
    desc: "Adjacent to Burj Khalifa & Downtown Dubai. Metro link, 26,000-space parking, and the Dubai Fountain promenade.",
    img: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: "✦",
    title: "Global Tourist Magnet",
    desc: "67% of visitors are international tourists — the highest cross-border reach of any retail destination on Earth.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: "✦",
    title: "Year-Round Dwell Time",
    desc: "Average visit duration of 2.4 hours. Extended by world-class F&B, entertainment, and events.",
    img: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: "✦",
    title: "Premium Demographics",
    desc: "High-income, cosmopolitan audience. Average basket size 3.5× the UAE national retail average.",
    img: "https://images.unsplash.com/photo-1539109132332-629263ef71d1?auto=format&fit=crop&q=80&w=600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function WhyThisProperty() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="why" className={`section ${styles.section}`} ref={ref}>
      {/* Background */}
      <div className={styles.bg}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.videoBg}
        >
          <source src="https://player.vimeo.com/external/494163967.hd.mp4?s=53974c0c8853b8110901e8557b47b4d3f57f9202&profile_id=172&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
        <div className={styles.bgGrad} />
      </div>

      <div className="section-inner">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Why Dubai Mall</span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          className={`display-lg ${styles.headline}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          An Audience Like
          <br />
          <span className="text-gold">No Other</span>
        </motion.h2>

        <motion.p
          className={`subheading ${styles.sub}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The Dubai Mall is not just a shopping destination.
          It is the world&apos;s most powerful consumer media platform — a living city within a city.
        </motion.p>

        {/* Stats grid */}
        <div className={`grid-4 ${styles.statsGrid}`}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className={`stat-card ${styles.statCard}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className={`stat-value text-gold`}>
                {typeof s.value === 'string' ? s.value : s.value}
                {s.component}
              </div>
              <div className="stat-label">
                <ReferencePopup source={s.label === "Annual Visitors" ? "EMAAR Annual Report 2023" : "Global Retail Assets Data 2023"} url="https://www.emaar.com/investor-relations">
                  {s.label}
                </ReferencePopup>
              </div>
              <div className={styles.statSub}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature cards */}
        <div className={`grid-2 ${styles.featuresGrid}`}>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.featureCard}
              custom={i + 4}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className={styles.featureImageWrapper}>
                <Image 
                  src={f.img} 
                  alt={f.title} 
                  fill 
                  className={styles.featureImage} 
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className={styles.featureOverlay} />
              <div className={styles.featureContent}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <div>
                  <h3 className="heading">{f.title}</h3>
                  <p className={`subheading ${styles.featureDesc}`}>{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Feature: The Pulse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "40px" }}
        >
          <ThePulse />
        </motion.div>
      </div>

      <FloatingVisual 
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800" 
        alt="Dubai Mall Interior"
        delay={1.2}
        rotate={-3}
      />
    </section>
  );
}
