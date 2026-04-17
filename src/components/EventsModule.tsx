"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import FloatingVisual from "./FloatingVisual";
import styles from "./EventsModule.module.css";

const PAST_EVENTS = [
  {
    id: "expo",
    name: "Global Brand Launches",
    type: "Brand Activation",
    year: "2024",
    metric: "2M+ Impressions",
    desc: "Host to the most-watched product unveils in the MENA region. Brands like Apple, Samsung, and Ferrari have debuted regional launches at The Dubai Mall.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "concerts",
    name: "Live Concert Series",
    type: "Entertainment",
    year: "2024",
    metric: "50,000+ Attendance",
    desc: "World-class performances on the Dubai Fountain Stage — an open-air concert venue unlike any other.",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "fashion",
    name: "Fashion Week Activations",
    type: "Fashion & Culture",
    year: "2024",
    metric: "AED 80M Media Value",
    desc: "Partner events with Dubai Fashion Week draw global press, buyers, and influencers to an unparalleled retail backdrop.",
    img: "https://images.unsplash.com/photo-1539109132332-629263ef71d1?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "art",
    name: "Art Dubai @ The Mall",
    type: "Art & Culture",
    year: "2024",
    metric: "300K Visitors",
    desc: "Immersive art installations across 600,000 sq ft of prime public space, transforming the mall into a world-class urban gallery.",
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "sports",
    name: "Champions League Screenings",
    type: "Sports",
    year: "2024",
    metric: "40,000 Fans",
    desc: "Massive live sports screenings on the Dubai Fountain Plaza LED — transforming the outdoor space into an electric stadium atmosphere.",
    img: "https://images.unsplash.com/photo-1540747913346-19e3adbb1733?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "nyr",
    name: "New Year's Eve Spectacle",
    type: "Mega Event",
    year: "2024",
    metric: "Global #1 Trending",
    desc: "The Dubai Mall–Burj Khalifa NYE show is the most-watched New Year's broadcast on the planet.",
    img: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "food-festival",
    name: "Dubai Food Festival",
    type: "Culinary",
    year: "2024",
    metric: "1.5M+ Tastes",
    desc: "A city-wide celebration of gastronomy, with The Dubai Mall serving as the central hub for exclusive pop-up dining and masterclasses.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "tech-expo",
    name: "Next-Gen Tech Expo",
    type: "Innovation",
    year: "2024",
    metric: "200+ Exhibitors",
    desc: "The leading retail technology showcase in the region, where global tech giants reveal the future of immersive shopping.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  },
];

const SPACES = [
  { name: "Dubai Fountain Stage", cap: "100,000+", type: "Outdoor / Mega Event" },
  { name: "Grand Atrium", cap: "8,000", type: "Indoor Activation" },
  { name: "Fashion Avenue", cap: "5,000", type: "Brand Launch / Show" },
  { name: "Business Bay Conference", cap: "2,500", type: "Conference / Media" },
  { name: "KidZania Event Dome", cap: "1,200", type: "Family / Brand" },
  { name: "Fountain Terrace", cap: "3,000", type: "Alfresco / VIP" },
];

const CAPABILITIES = [
  "360° LED Installations",
  "Broadcast-Ready Infrastructure",
  "Sound System: 150K Watts",
  "Dedicated Event Concierge",
  "Real-time Social Amplification",
  "Multi-zone Simultaneous Events",
  "Drone Show Licensing",
  "Arabic & International AV",
];

export default function EventsModule() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const activeEvent = PAST_EVENTS.find((e) => e.id === selectedEvent);

  return (
    <section id="events" className={`section ${styles.section}`} ref={ref}>
      <div className={styles.bg}>
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
          <span className="label">Events & Platform</span>
        </motion.div>

        <motion.h2
          className={`display-lg ${styles.headline}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
        >
          The World&apos;s Most
          <br />
          <span className="text-gold">Powerful Stage</span>
        </motion.h2>

        <motion.p
          className="subheading"
          style={{ maxWidth: "560px", marginBottom: "64px" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          The Dubai Mall is not just a venue. It is a global media platform — reaching
          100 million live visitors per year and 1 billion+ digital impressions.
          Every event here becomes a world event.
        </motion.p>

        {/* Past events interactive grid */}
        <div className={styles.eventsGrid}>
          {PAST_EVENTS.map((evt, i) => (
            <motion.button
              key={evt.id}
              className={`${styles.eventCard} ${selectedEvent === evt.id ? styles.eventCardActive : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onClick={() => setSelectedEvent(selectedEvent === evt.id ? null : evt.id)}
            >
              <img src={evt.img} alt={evt.name} className={styles.eventImg} />
              <div className={styles.eventInfo}>
                <div className={styles.eventTop}>
                  <span className={styles.eventType}>{evt.type}</span>
                  <span className={styles.eventYear}>{evt.year}</span>
                </div>
                <div className={styles.eventName}>{evt.name}</div>
                <div className={styles.eventMetric}>{evt.metric}</div>
              </div>
              <div className={styles.eventCaret}>{selectedEvent === evt.id ? "✕" : "+"}</div>
            </motion.button>
          ))}
        </div>

        {/* Expandable event detail */}
        <AnimatePresence>
          {activeEvent && (
            <motion.div
              className={styles.eventDetail}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <div className={styles.eventDetailInner}>
                <div>
                  <div className="label" style={{ marginBottom: "12px" }}>{activeEvent.type}</div>
                  <h3 className="display-md">{activeEvent.name}</h3>
                  <p className="subheading" style={{ marginTop: "16px", maxWidth: "540px" }}>{activeEvent.desc}</p>
                </div>
                <div className={styles.eventDetailStat}>
                  <div className={styles.eventDetailMetric}>{activeEvent.metric}</div>
                  <div className={styles.eventDetailYear}>Achieved in {activeEvent.year}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spaces */}
        <motion.div
          className={styles.spacesSection}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="label" style={{ marginBottom: "24px" }}>Event Spaces & Capacities</div>
          <div className={styles.spacesGrid}>
            {SPACES.map((s) => (
              <div key={s.name} className={styles.spaceCard}>
                <div className={styles.spaceCap}>{s.cap}</div>
                <div className={styles.spaceName}>{s.name}</div>
                <div className={styles.spaceType}>{s.type}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          className={styles.capsSection}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="label" style={{ marginBottom: "24px" }}>Production Capabilities</div>
          <div className={styles.capsGrid}>
            {CAPABILITIES.map((c) => (
              <div key={c} className={styles.cap}>
                <span className={styles.capDot}>◆</span>
                {c}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          className={styles.bigCta}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className={styles.bigCtaLeft}>
            <div className={styles.bigCtaHeadline}>Ready to take the stage?</div>
            <div className={styles.bigCtaSub}>Talk to our Events team about your brand activation, concert, or launch.</div>
          </div>
          <button
            className="btn-primary"
            style={{ fontSize: "14px", padding: "18px 40px" }}
            onClick={() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Book Your Event →
          </button>
        </motion.div>
      </div>

      <FloatingVisual 
        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
        alt="Dubai Mall Grand Event"
        delay={1.5}
        rotate={-2}
      />
    </section>
  );
}
