"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AccessModal.module.css";

declare global {
  interface Window {
    toggleAccessModal: () => void;
  }
}

export default function AccessModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    // Show after 10 seconds of interaction, or can be triggered by buttons
    const timer = setTimeout(() => {
      // Logic for auto-show could go here
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Expose toggle to window for easy access from other components
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.toggleAccessModal = handleToggle;
    }
  }, [handleToggle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Access request sent. Thank you for your interest.");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay}>
          <motion.div 
            className={styles.backdrop} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleToggle}
          />
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className={styles.close} onClick={handleToggle}>✕</button>
            <div className={styles.header}>
              <span className={styles.lock}>🔒</span>
              <h2 className={styles.title}>Partner Access</h2>
              <p className={styles.desc}>
                This section contains confidential executive data. 
                Please enter your credentials or request temporary access.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Corporate Email</label>
                <input 
                  type="email" 
                  className={styles.input} 
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Access Code</label>
                <input 
                  type="password" 
                  className={styles.input} 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                AUTHENTICATE
              </button>
            </form>

            <div className={styles.footer}>
              <span>New partner?</span>
              <button className={styles.requestLink}>Request Digital Key</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
