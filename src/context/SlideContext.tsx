"use client";

import React, { createContext, useContext, useState } from "react";

interface SlideContextType {
  currentSlide: number;
  setSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  isIntroComplete: boolean;
  completeIntro: () => void;
  partnerName: string;
  setPartnerName: (name: string) => void;
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export function SlideProvider({ children }: { children: React.ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [partnerName, setPartnerName] = useState("Vogue Group");

  // Total slides count should be synced with the main Switch in page.tsx
  const totalSlides = 10; 

  const setSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const completeIntro = () => setIsIntroComplete(true);

  return (
    <SlideContext.Provider value={{ currentSlide, setSlide, nextSlide, prevSlide, isIntroComplete, completeIntro, partnerName, setPartnerName }}>
      {children}
    </SlideContext.Provider>
  );
}

export function useSlide() {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error("useSlide must be used within a SlideProvider");
  }
  return context;
}
