"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import FloatingVisual from "./FloatingVisual";
import { useSlide } from "@/context/SlideContext";
import styles from "./DiningLifestyle.module.css";

const DINING_ZONES = [
  {
    name: "The Waterfront",
    desc: "Alfresco dining overlooking the Dubai Fountain. 30+ restaurants. A view worth every AED.",
    icon: "⟡",
    highlight: "30+ Restaurants",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "The Food Court 2.0",
    desc: "Reimagined culinary marketplace. 120+ international stations from 40+ countries.",
    icon: "⟡",
    highlight: "120+ Outlets",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Celebrity Chef Row",
    desc: "Home to globally renowned restaurants from Michelin-starred chefs. Fine dining that competes with the world's best.",
    icon: "⟡",
    highlight: "20+ Signature",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Social Lounges",
    desc: "Elevated beverage experiences and lifestyle lounges designed for high-value dwell time.",
    icon: "⟡",
    highlight: "Premium Lifestyle",
    img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800",
  },
];

export default function DiningLifestyle() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { setSlide } = useSlide();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="dining" className={`section ${styles.section}`} ref={ref}>
      {/* Warm cinematic bg */}
      <motion.div className={styles.bg} style={{ scale: bgScale }} />

      <div className="section-inner">
        <div className={styles.overflowHidden}>
          <motion.div
            className="section-header"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label">Dining & Lifestyle</span>
          </motion.div>
        </div>

        {/* Split layout */}
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.overflowHidden}>
              <motion.h2
                className={`display-lg ${styles.headline}`}
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Food is the
                <br />
                New <span className="text-gold">Fashion</span>
              </motion.h2>
            </div>

            <motion.p
              className="subheading"
              style={{ maxWidth: "420px", marginTop: "24px", marginBottom: "48px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              The Dubai Mall hosts 330+ dining options across every price point and cuisine
              imaginable. The F&B ecosystem is a destination in itself — drawing 40M+ dedicated
              Dining visitors annually.
            </motion.p>

            {/* Large stat */}
            <motion.div
              className={styles.bigStat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className={styles.bigStatNum}>330<span>+</span></div>
              <div className={styles.bigStatLabel}>Dining Destinations</div>
              <div className={styles.bigStatSub}>AED 2.4B annual F&B revenue</div>
            </motion.div>
          </div>

          {/* Zone cards */}
          <div className={styles.right}>
            {DINING_ZONES.map((zone, i) => (
              <motion.div
                key={zone.name}
                className={styles.zoneCard}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              >
                <div className={styles.zoneImageWrapper}>
                  <Image 
                    src={zone.img} 
                    alt={zone.name} 
                    fill 
                    className={styles.zoneImage} 
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </div>
                <div className={styles.zoneOverlay} />
                <div className={styles.zoneContent} style={{ padding: "32px" }}>
                  <div className={styles.zoneHeader}>
                    <span className={styles.zoneIcon}>{zone.icon}</span>
                    <span className={styles.zoneHighlight}>{zone.highlight}</span>
                  </div>
                  <h3 className={`heading ${styles.zoneName}`}>{zone.name}</h3>
                  <p className="subheading" style={{ fontSize: "14px", marginTop: "8px", color: "rgba(255,255,255,0.8)" }}>{zone.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              className="btn-primary"
              style={{ alignSelf: "flex-start" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              onClick={() => setSlide(9)}
            >
              Explore F&B Leasing →
            </motion.button>
          </div>
        </div>
      </div>

      <FloatingVisual 
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
        alt="Waterfront Dining"
        delay={1}
        rotate={3}
      />
    </section>
  );
}
