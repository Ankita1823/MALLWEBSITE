"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ImageCardGallery.module.css";

const GALLERY = [
  {
    title: "The Grand Atrium",
    subtitle: "Architectural Marvel",
    img: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800",
    desc: "A vast social hub featuring the world-famous indoor fountain and unparalleled natural light.",
  },
  {
    title: "Fashion Avenue",
    subtitle: "High Couture",
    img: "https://images.unsplash.com/photo-1548036627-0961168d78a4?auto=format&fit=crop&q=80&w=800",
    desc: "Home to the world's largest collection of international luxury brands under one roof.",
  },
  {
    title: "The Waterfront",
    subtitle: "Iconic Views",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    desc: "Breathtaking views of the Burj Khalifa and the Dubai Fountain performances.",
  },
  {
    title: "Entertainment Hub",
    subtitle: "Endless Thrills",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800",
    desc: "From VR parks to Olympic-sized ice rinks, discover entertainment at a global scale.",
  },
  {
    title: "Culinary Excellence",
    subtitle: "Global Flavors",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    desc: "330+ dining destinations featuring Michelin-starred chefs and international cuisines.",
  },
  {
    title: "Elite Concierge",
    subtitle: "White Glove Service",
    img: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=800",
    desc: "Personalized shopping, VIP valet, and dedicated assistance for our most valued guests.",
  },
];

export default function ImageCardGallery() {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {GALLERY.map((item, i) => (
          <motion.div
            key={item.title}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <div className={styles.cardInner}>
              <div className={styles.imageWrapper}>
                <Image src={item.img} alt={item.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className={styles.overlay} />
              <div className={styles.content}>
                <span className={styles.subtitle}>{item.subtitle}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
            <div className={styles.cardShine} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
