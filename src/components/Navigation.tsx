"use client";

import { useEffect, useState } from "react";
import { useSlide } from "@/context/SlideContext";
import PersonalizationBanner from "./PersonalizationBanner";
import styles from "./Navigation.module.css";
import MagneticButton from "./MagneticButton";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "why", label: "Why Dubai Mall" },
  { id: "retail", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "experience", label: "Lifestyle" },
  { id: "attractions", label: "Attractions" },
  { id: "events", label: "Events" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Partner" },
];

export default function Navigation() {
  const { currentSlide, setSlide } = useSlide();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const index = NAV_ITEMS.findIndex(item => item.id === id);
    if (index !== -1) {
      setSlide(index);
    }
    setMenuOpen(false);
  };

  const active = NAV_ITEMS[currentSlide]?.id || "hero";

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <button className={styles.logo} onClick={() => scrollTo("hero")}>
            <span className={styles.logoIcon}>◆</span>
            <span className={styles.logoText}>Dubai Mall</span>
          </button>

          {/* Desktop nav links */}
          <ul className={styles.links}>
            {NAV_ITEMS.slice(1, -1).map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.link} ${active === item.id ? styles.linkActive : ""}`}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Integrated Personalization - Moved to right */}
          <div className={styles.rightActions}>
            <div className={styles.personalization}>
              <PersonalizationBanner />
            </div>

            {/* CTA */}
            <div className={styles.ctaWrapper}>
              <MagneticButton
                onClick={() => scrollTo("contact")}
                variant="gold"
              >
                Partner With Us
              </MagneticButton>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={styles.mobileLink}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
