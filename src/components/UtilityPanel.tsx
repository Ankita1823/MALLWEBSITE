"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, FileText, Phone, Download, X, Copy, Check } from "lucide-react";
import MagneticButton from "./MagneticButton";
import styles from "./UtilityPanel.module.css";

const RESOURCES = [
  { name: "Retail Brochure 2024", size: "4.2 MB", type: "PDF" },
  { name: "Floor Plans - Level 1", size: "12.8 MB", type: "DWG/PDF" },
  { name: "Leasing Guidelines", size: "1.1 MB", type: "PDF" },
  { name: "Brand Guidelines", size: "8.4 MB", type: "PDF" },
];

export default function UtilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Toggle Button - Now using MagneticButton and moved to bottom right */}
      <div className={styles.toggleContainer}>
        <MagneticButton 
          variant="glass"
          onClick={toggle}
        >
          <div className={styles.toggleInner}>
            <span className={styles.toggleIcon}>{isOpen ? <X size={18} /> : <FileText size={18} />}</span>
            <span className={styles.toggleText}>RESOURCES</span>
          </div>
        </MagneticButton>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className={styles.wrapper}>
            <motion.div 
              className={styles.backdrop} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggle}
            />
            <motion.aside 
              className={styles.panel}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className={styles.header}>
                <h3 className={styles.title}>Partner Resources</h3>
                <button className={styles.close} onClick={toggle}><X size={20} /></button>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionLabel}>Presentation Toolbox</div>
                <div className={styles.toolbox}>
                  <button className={styles.toolBtn} onClick={handleCopy}>
                    {copied ? <Check size={16} color="var(--gold)" /> : <Copy size={16} />}
                    <span>{copied ? "COPIED" : "COPY LINK"}</span>
                  </button>
                  <button className={styles.toolBtn}>
                    <Share2 size={16} />
                    <span>SHARE ACCESS</span>
                  </button>
                </div>
              </div>

              <div className={styles.section}>
                <div className={styles.sectionLabel}>Downloadable Assets</div>
                <div className={styles.resourceList}>
                  {RESOURCES.map((res) => (
                    <div key={res.name} className={styles.resourceItem}>
                      <div className={styles.resIcon}><Download size={14} /></div>
                      <div className={styles.resInfo}>
                        <div className={styles.resName}>{res.name}</div>
                        <div className={styles.resMeta}>{res.type} • {res.size}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.contactFooter}>
                <div className={styles.footerLabel}>Direct Inquiries</div>
                <p className={styles.footerTxt}>Our leasing concierge is available 24/7 for premier partners.</p>
                <button className={styles.contactBtn}>
                  <Phone size={14} />
                  <span>CONNECT NOW</span>
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
