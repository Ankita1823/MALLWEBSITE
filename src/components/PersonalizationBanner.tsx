"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
import { User, Check, Edit2 } from "lucide-react";
import styles from "./PersonalizationBanner.module.css";

export default function PersonalizationBanner() {
  const { partnerName, setPartnerName } = useSlide();
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState(partnerName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerName(val || "Premier Partner");
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        {!isEditing ? (
          <motion.button 
            key="display"
            className={styles.trigger}
            onClick={() => setIsEditing(true)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <User size={12} className={styles.icon} />
            <span className={styles.text}>PREPARED FOR: <span className={styles.name}>{partnerName}</span></span>
            <Edit2 size={10} className={styles.editIcon} />
          </motion.button>
        ) : (
          <motion.form 
            key="edit"
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <input 
              autoFocus
              className={styles.input}
              value={val}
              onChange={(e) => setVal(e.target.value)}
              placeholder="Enter Partner Name..."
            />
            <button type="submit" className={styles.submit}>
              <Check size={14} />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
