"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import HotspotImage from "./HotspotImage";
import FloatingVisual from "./FloatingVisual";
import Counter from "./Counter";
import { useSlide } from "@/context/SlideContext";
import styles from "./LuxurySection.module.css";

const MAISONS = [
  { 
    name: "Louis Vuitton", 
    category: "Flagship Maison", 
    size: "large",
    img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=1200",
    details: "One of the world's largest LV stores with exclusive private salons."
  },
  { 
    name: "Hermès", 
    category: "Luxury Leather", 
    size: "medium",
    img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800",
    details: "The Middle East's most iconic Hermès presence."
  },
  { 
    name: "Chanel", 
    category: "High Fashion", 
    size: "large",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
    details: "The epicenter of Parisian elegance in Dubai."
  },
  { 
    name: "Rolex", 
    category: "Haute Horlogerie", 
    size: "small",
    img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800",
    details: "The largest Rolex boutique in the world."
  },
  { 
    name: "Gucci", 
    category: "Luxury Ready-to-wear", 
    size: "medium",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    details: "A maximalist vision of Italian high fashion."
  },
  { 
    name: "Cartier", 
    category: "High Jewelry", 
    size: "small",
    img: "https://images.unsplash.com/photo-1531995084323-405b630cf40d?auto=format&fit=crop&q=80&w=800",
    details: "The jeweler of kings and the king of jewelers."
  },
];

const SERVICES = [
  { title: "VIP Valet", desc: "Private marble entry for UHNWI clients." },
  { title: "The Lounge", desc: "Exclusive social space for Fashion Avenue guests." },
  { title: "Chauffeur", desc: "In-mall buggy service between luxury houses." },
];

const HOTSPOTS = [
  { x: 30, y: 40, title: "VIP Valet", desc: "Dedicated marble-clad entry for ultra-high-net-worth individuals." },
  { x: 65, y: 30, title: "Luxury Concierge", desc: "Multi-lingual personal shopping assistance and white-glove delivery." },
  { x: 50, y: 70, title: "Private Salons", desc: "Viewing suites for private brand collections and private consultations." },
];

export default function LuxurySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { setSlide } = useSlide();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="luxury" className={`section ${styles.section}`} ref={ref}>
      {/* Dark cinematic background */}
      <div className={styles.bg}>
        <div className={styles.bgImage} />
        <motion.video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.videoBg}
          crossOrigin="anonymous"
          style={{ y: videoY }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-man-in-a-suit-adjusting-his-cufflinks-34565-large.mp4" type="video/mp4" />
        </motion.video>
        <div className={styles.videoOverlay} />
        <div className={styles.vignette} />
        <div className={styles.goldShimmer} />
      </div>

      <div className="section-inner">
        <div className={styles.overflowHidden}>
          <motion.div
            className="section-header"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label">Fashion Avenue</span>
          </motion.div>
        </div>

        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.overflowHidden}>
              <motion.h2
                className={`display-lg ${styles.headline}`}
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                The Pinnacle of
                <br />
                <span className="text-gold">Fashion Avenue</span>
              </motion.h2>
            </div>

            <motion.p
              className="subheading"
              style={{ maxWidth: "420px", marginTop: "24px", marginBottom: "40px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Fashion Avenue is not just a destination; it&apos;s a dedicated luxury 
              ecosystem. A 220,000 sq ft sanctuary where the world&apos;s most 
              coveted brands don&apos;t just sell — they perform.
            </motion.p>

            <motion.div
              className={styles.pillars}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className={styles.pillar}>
                <Counter value={220000} suffix=" Sq Ft" />
              </div>
              <div className={styles.pillar}>
                <Counter value={70} suffix="+ Maisons" />
              </div>
              <div className={styles.pillar}>
                AED <Counter value={3.5} decimals={1} suffix="K Avg Spend" />
              </div>
              <div className={styles.pillar}>Dedicated Concierge</div>
            </motion.div>

            <motion.button
              className={`btn-ghost ${styles.cta}`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              onClick={() => setSlide(9)}
            >
              Request Luxury Leasing Info →
            </motion.button>
          </div>

          <div className={styles.right}>
            <div className={styles.maisonGrid}>
              {MAISONS.map((m, i) => (
                <motion.div
                  key={m.name}
                  className={`${styles.maisonCard} ${styles[`size_${m.size}`]}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className={styles.maisonImageWrapper}>
                    <Image 
                      src={m.img} 
                      alt={m.name} 
                      fill 
                      className={styles.maisonImage} 
                      sizes="(max-width: 1024px) 100vw, 300px"
                    />
                  </div>
                  <div className={styles.maisonOverlay} />
                  <div className={styles.maisonContent}>
                    <span className={styles.maisonCat}>{m.category}</span>
                    <h3 className={styles.maisonName}>{m.name}</h3>
                    <p className={styles.maisonDetails}>{m.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.servicesGrid}>
              {SERVICES.map((s, i) => (
                <motion.div 
                  key={s.title}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className={styles.serviceIcon}>⟡</div>
                  <div className={styles.serviceInfo}>
                    <h4 className={styles.serviceTitle}>{s.title}</h4>
                    <p className={styles.serviceDesc}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <FloatingVisual 
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200"
          alt="Luxury Ambience"
          delay={0.8}
          rotate={5}
        />

        {/* Immersive Hotspots */}
        <motion.div
          className={styles.hotspotsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ marginTop: "80px" }}
        >
          <div className="label" style={{ marginBottom: "24px" }}>Interactive Exploration</div>
          <HotspotImage 
            src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=1400" 
            alt="Fashion Avenue Interactive Exploration"
            hotspots={HOTSPOTS} 
          />
        </motion.div>
      </div>

    </section>
  );
}
