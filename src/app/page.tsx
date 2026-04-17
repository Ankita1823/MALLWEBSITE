"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSlide } from "@/context/SlideContext";

import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import IntroVideo from "@/components/IntroVideo";
import AccessModal from "@/components/AccessModal";
import UtilityPanel from "@/components/UtilityPanel";
import Atmosphere from "@/components/Atmosphere";
import ForegroundParallax from "@/components/ForegroundParallax";
import PersonalizationBanner from "@/components/PersonalizationBanner";
import OpeningHero from "@/components/OpeningHero";
import WhyThisProperty from "@/components/WhyThisProperty";
import RetailLuxury from "@/components/RetailLuxury";
import LuxurySection from "@/components/LuxurySection";
import DiningLifestyle from "@/components/DiningLifestyle";
import AttractionsSection from "@/components/AttractionsSection";
import ImageCardGallery from "@/components/ImageCardGallery";
import EventsModule from "@/components/EventsModule";
import ContactSection from "@/components/ContactSection";
import SplitScreenSlide from "@/components/SplitScreenSlide";
import Cursor from "@/components/Cursor";

const SLIDES = [
  { id: "hero", component: OpeningHero },
  { id: "why", component: WhyThisProperty },
  { id: "retail", component: RetailLuxury },
  { id: "luxury", component: LuxurySection },
  { id: "dining", component: DiningLifestyle },
  { id: "experience", component: () => (
    <section className="section" id="lifestyle">
      <div className="section-inner">
        <div className="section-header">
          <span className="label">Experience Showcase</span>
        </div>
        <h2 className="display-md" style={{ marginBottom: "60px" }}>
          A World of <span className="text-gold">Discovery</span>
        </h2>
        <ImageCardGallery />
      </div>
    </section>
  )},
  { id: "attractions", component: AttractionsSection },
  { id: "events", component: EventsModule },
  { id: "vision", component: SplitScreenSlide },
  { id: "contact", component: ContactSection },
];

export default function Home() {
  const { currentSlide, nextSlide, prevSlide, isIntroComplete } = useSlide();

  const handleWheel = (e: React.WheelEvent) => {
    if (!isIntroComplete) return;
    if (e.deltaY > 30) nextSlide();
    else if (e.deltaY < -30) prevSlide();
  };

  const PageComponent = SLIDES[currentSlide].component;

  return (
    <div onWheel={handleWheel} style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <Cursor />
      <IntroVideo />
      <Atmosphere />
      <ForegroundParallax />
      <AccessModal />
      <UtilityPanel />
      <Sidebar />
      <Navigation />
      
      <main className="main-content">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -10, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              position: "absolute", 
              inset: 0,
              width: "100%",
              height: "100%"
            }}
          >
            <PageComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
