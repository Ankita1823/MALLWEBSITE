"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./ContactSection.module.css";

const PATHS = [
  { id: "retail", label: "Retail Leasing", icon: "◈" },
  { id: "luxury", label: "Luxury / Fashion Avenue", icon: "◈" },
  { id: "fnb", label: "F&B Leasing", icon: "◈" },
  { id: "popup", label: "Pop-up & Activations", icon: "◈" },
  { id: "events", label: "Events & Concerts", icon: "◈" },
  { id: "sponsor", label: "Sponsorship & Media", icon: "◈" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`section ${styles.section}`} ref={ref}>
      <div className={styles.bg} />

      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="label">Partner With Us</span>
        </motion.div>

        <div className={styles.layout}>
          {/* Left */}
          <div className={styles.left}>
            <motion.h2
              className={`display-lg ${styles.headline}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1 }}
            >
              Your Brand
              <br />
              Belongs Here
            </motion.h2>

            <motion.p
              className="subheading"
              style={{ maxWidth: "400px", marginTop: "24px", marginBottom: "40px" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              Whether you&apos;re looking to lease, sponsor, activate, or perform —
              there is a place for your brand at The Dubai Mall.
              Let&apos;s start the conversation.
            </motion.p>

            {/* Path selector */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="label" style={{ marginBottom: "16px" }}>I&apos;m Interested In</div>
              <div className={styles.paths}>
                {PATHS.map((p) => (
                  <button
                    key={p.id}
                    className={`${styles.pathBtn} ${selectedPath === p.id ? styles.pathBtnActive : ""}`}
                    onClick={() => setSelectedPath(selectedPath === p.id ? null : p.id)}
                  >
                    <span className={styles.pathIcon}>{p.icon}</span>
                    {p.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              className={styles.contactInfo}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="mailto:partnerships@dubaimall.com" className={styles.contactLink}>
                partnerships@dubaimall.com
              </a>
              <a href="tel:+97144488888" className={styles.contactLink}>
                +971 4 448 8888
              </a>
            </motion.div>
          </div>

          {/* Right — contact form */}
          <motion.div
            className={styles.formWrap}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  className={styles.form}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className={styles.input}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="company">Company</label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Brand or company name"
                        className={styles.input}
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@company.com"
                      className={styles.input}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="message">Tell us about your vision</label>
                    <textarea
                      id="message"
                      placeholder="Brand background, goals, timeline, budget range..."
                      className={`${styles.input} ${styles.textarea}`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                    />
                  </div>
                  {selectedPath && (
                    <input type="hidden" name="interest" value={selectedPath} />
                  )}
                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Send Enquiry →
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className={styles.success}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.successIcon}>◆</div>
                  <h3 className="heading">Thank You, {form.name || "Partner"}.</h3>
                  <p className="subheading" style={{ marginTop: "12px" }}>
                    Our partnerships team will review your enquiry and be in touch within 24 business hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer bar */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className={styles.footerLogo}>◆ Dubai Mall</div>
          <div className={styles.footerCopy}>© 2024 Emaar Properties. All rights reserved.</div>
          <div className={styles.footerLinks}>
            <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }); }}>Back to Top</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
