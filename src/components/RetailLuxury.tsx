"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import BrandMarquee from "./BrandMarquee";
import FloatingVisual from "./FloatingVisual";
import MagneticButton from "./MagneticButton";
import Counter from "./Counter";
import styles from "./RetailLuxury.module.css";

const RETAIL_TIERS = [
  {
    tier: "01",
    name: "Fashion Avenue",
    desc: "A dedicated 220,000 sq ft luxury universe housing over 70 of the world's most coveted fashion houses. A standalone premium destination within The Dubai Mall.",
    metric: <Counter value={70} suffix="+ Luxury Maisons" />,
    accent: "gold",
    img: "https://images.unsplash.com/photo-1548036627-0961168d78a4?auto=format&fit=crop&q=80&w=600",
  },
  {
    tier: "02",
    name: "Grand Atrium",
    desc: "The pulsing heart of The Dubai Mall — flagship international brands, experiential retail, and a soaring architectural statement that draws global attention.",
    metric: <Counter value={400} suffix="K Daily Footfall" />,
    accent: "silver",
    img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=600",
  },
  {
    tier: "03",
    name: "Souk Al Bahar",
    desc: "A contemporary take on the traditional Middle Eastern marketplace, offering authentic crafts, jewelry, and perfume within a refined heritage setting.",
    metric: "100+ Heritage Boutiques",
    accent: "gold",
    img: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=600",
  },
  {
    tier: "04",
    name: "Pop-up & Activation Spaces",
    desc: "High-traffic flex zones designed for brand activations, seasonal drops, and immersive experiences. Maximum exposure with premium demographics.",
    metric: "12 Dedicated Zones",
    accent: "rose",
    img: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&q=80&w=600",
  },
];

export default function RetailLuxury() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="retail" className={`section ${styles.section}`} ref={ref}>
      {/* Background layers */}
      <motion.div className={styles.bg} style={{ y: bgY }} />

      <div className="section-inner">
        <div className={styles.layout}>
          {/* Left column */}
          <div className={styles.left}>
            <div className={styles.overflowHidden}>
              <motion.div
                className="section-header"
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="label">Retail</span>
              </motion.div>
            </div>

            <div className={styles.overflowHidden}>
              <motion.h2
                className={`display-lg ${styles.headline}`}
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Where global
                <br />
                aspirations
                <br />
                <span className="text-gold">Take Root</span>
              </motion.h2>
            </div>

            <motion.p
              className="subheading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ marginBottom: "48px", maxWidth: "440px" }}
            >
              From emerging concepts to century-old maisons,
              The Dubai Mall offers an unmatched retail ecosystem
              with a built-in global audience.
            </motion.p>

            {/* Brand Marquee */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <BrandMarquee />
            </motion.div>
          </div>

          {/* Right column — tier cards */}
          <div className={styles.right}>
            {RETAIL_TIERS.map((tier, i) => (
              <motion.div
                key={tier.tier}
                className={`${styles.tierCard} ${styles[`accent_${tier.accent}`]}`}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className={styles.tierImageWrapper}>
                  <Image 
                    src={tier.img} 
                    alt={tier.name} 
                    fill 
                    className={styles.tierImage} 
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
                <div className={styles.cardOverlay} />
                <div className={styles.tierContentWrapper}>
                  <div className={styles.tierNum}>{tier.tier}</div>
                  <div className={styles.tierContent}>
                    <h3 className={`heading ${styles.tierName}`}>{tier.name}</h3>
                    <p className="subheading" style={{ marginTop: "10px", fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{tier.desc}</p>
                    <div className={styles.tierMetric}>
                      <span className={styles.tierMetricDot} />
                      {tier.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              <MagneticButton
                className={styles.cta}
              >
                Explore Leasing →
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>

      <FloatingVisual 
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
        alt="Retail Luxury Interior"
        delay={1}
        rotate={4}
      />
    </section>
  );
}
