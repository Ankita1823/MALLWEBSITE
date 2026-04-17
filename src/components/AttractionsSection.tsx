"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
import styles from "./AttractionsSection.module.css";

const ATTRACTIONS = [
  {
    id: "aquarium",
    title: "Dubai Aquarium",
    category: "World Record",
    stat: "33,000+ Animals",
    desc: "The world's largest suspended aquarium — a 10-million-litre spectacle.",
    accent: "#0a4a7c",
    img: "https://images.unsplash.com/photo-1544526226-d4568016ca5b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "icerink",
    title: "Dubai Ice Rink",
    category: "Olympic-Standard",
    stat: "Year-Round",
    desc: "Olympic-sized ice rink drawing 1M+ skaters per year. Live events and disco ice.",
    accent: "#1a3a5c",
    img: "https://images.unsplash.com/photo-1547633213-9ec244697966?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "vr",
    title: "Play DXB",
    category: "AR & VR Hub",
    stat: "30+ Attractions",
    desc: "The world's largest indoor VR park. Cutting-edge immersive motion simulation.",
    accent: "#2a1a5c",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "cinema",
    title: "Reel Cinemas",
    category: "The Ultimate Cinema",
    stat: "22 Screens",
    desc: "IMAX, 4DX, and Gold Class private screening rooms.",
    accent: "#3a1a2c",
    img: "https://images.unsplash.com/photo-1485095329183-d279b85e8422?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "gaming",
    title: "E-Sports Zone",
    category: "Next-Gen Gaming",
    stat: "50,000 Sq Ft",
    desc: "Leading gaming destination featuring the latest arcade and PC arenas.",
    accent: "#1a3a2c",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "kids",
    title: "KidZania Dubai",
    category: "Edutainment",
    stat: "Ages 2-16",
    desc: "A fully operational city for children with over 80 role-play activities.",
    accent: "#2a2a1c",
    img: "https://images.unsplash.com/photo-1566454807212-be9de3194a73?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "fountain",
    title: "The Dubai Fountain",
    category: "World's Largest",
    stat: "150m High Jets",
    desc: "The world's tallest performing fountain. A choreographed water spectacle set against the Burj Khalifa.",
    accent: "#0070f3",
    img: "https://images.unsplash.com/photo-1583896544837-775670846f4a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "waterfall",
    title: "The Human Waterfall",
    category: "Artistic Landmark",
    stat: "24m High",
    desc: "A stunning four-story indoor waterfall adorned with fiberglass divers — a symbol of Dubai's pearl diving heritage.",
    accent: "#ffffff",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "dino",
    title: "Dubai Dino",
    category: "Prehistoric",
    stat: "155M Years Old",
    desc: "A genuine fossil of a Diplodocus longus — a rare 24-meter-long specimen from the Jurassic period.",
    accent: "#4a3a2c",
    img: "https://images.unsplash.com/photo-1510443360432-881768833913?auto=format&fit=crop&q=80&w=600",
  },
];

export default function AttractionsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { setSlide } = useSlide();

  return (
    <section id="attractions" className={`section ${styles.section}`} ref={ref}>
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
      </div>

      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Attractions & Entertainment</span>
        </motion.div>

        <motion.h2
          className={`display-lg ${styles.headline}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Nine <span className="text-gold">World-Class</span>
          <br />
          Reasons to Stay
        </motion.h2>

        <motion.p
          className="subheading"
          style={{ maxWidth: "560px", marginBottom: "64px" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          The Dubai Mall is the world&apos;s most complete entertainment ecosystem.
          Attractions drive footfall, extend dwell time, and create loyalty loops
          that benefit every tenant in the mall.
        </motion.p>

        <div className={styles.grid}>
          {ATTRACTIONS.map((a, i) => (
            <motion.div
              key={a.id}
              className={styles.card}
              style={{ 
                "--accent": a.accent,
              } as React.CSSProperties}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={a.img} 
                  alt={a.title} 
                  fill 
                  className={styles.cardImage} 
                  sizes="(max-width: 1024px) 100vw, 300px"
                />
              </div>
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent} style={{ padding: "32px 24px" }}>
                <div className={styles.cardAccent} />
                <div className={styles.cardTop}>
                  <span className={styles.cardCategory}>{a.category}</span>
                  <span className={styles.cardStat}>{a.stat}</span>
                </div>
                <h3 className={`heading ${styles.cardTitle}`}>{a.title}</h3>
                <p className="subheading" style={{ fontSize: "13px", marginTop: "10px", color: "rgba(255,255,255,0.8)" }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className={styles.bottomStat}>
            <span className={styles.bottomStatNum}>185+</span>
            <span className={styles.bottomStatLabel}>Days of annual entertainment programming</span>
          </div>
          <button
            className="btn-ghost"
            onClick={() => setSlide(7)}
          >
            See Events Capabilities →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
