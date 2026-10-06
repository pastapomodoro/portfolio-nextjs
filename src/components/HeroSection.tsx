"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

/* Cinematic hero with unframed typography over the project film. */
export default function HeroSection() {
  const reduced = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (reduced) element.pause();
    else if (reduced === false) void element.play().catch(() => undefined);
  }, [reduced]);
  return (
    <>
      <nav className="folio-nav" aria-label="Main navigation">
        <div className="folio-nav-links"><a href="#works">Work <sup>04</sup></a><a href="#about">About</a><Link href="/services">Practice</Link><button type="button" className="folio-nav-contact" onClick={() => window.dispatchEvent(new Event("open-contact-modal"))} aria-label="Contact">Contact <ArrowUpRight size={15} /></button></div>
      </nav>
      <section id="home" className="cinema-hero" aria-label="Eugenio Bellini, designer based in Milan">
        <video ref={video} className="cinema-film" src="/comp2.mp4" poster="/GameMenu.png" loop muted playsInline preload="metadata" />
        <div className="cinema-shade" aria-hidden="true" />
        <div className="cinema-topline"><span>Design, in my own way.</span></div>
        <motion.div className="hero-title-overlay" initial={reduced ? false : { y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}>
          <p className="hero-location">Designer / Milan, IT</p>
          <h1><span>Eugenio</span><span>Bellini.</span></h1>
          <div className="hero-title-footer"><p>Interfaces. Images. Experiments.</p><a href="#works" aria-label="Explore selected work"><ArrowDown size={26} /></a></div>
        </motion.div>
        <a className="hero-feature-link" href="https://www.behance.net/gallery/244534131/Aethereal-Access-Game-Menu-Design-UXUI-Project" target="_blank" rel="noopener noreferrer"><span>On screen</span><strong>ETHEREAL:ACCESS_01</strong><ArrowUpRight size={18} /></a>
      </section>
    </>
  );
}
