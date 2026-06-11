"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
// import ToolfolioSection from "@/components/ToolfolioSection"; // hidden — re-enable to show the toolfolio
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-background min-h-screen">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* <ToolfolioSection /> hidden for now */}
          <HeroSection />
          <WorksSection />
          <AboutSection />
          <ContactSection />
        </>
      )}
    </main>
  );
}
