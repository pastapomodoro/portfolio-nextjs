"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

const ROLES = ["Creative", "Art Director", "Designer", "Interactive"];

const NAV_ITEMS = [
  { label: "Home", href: "home" },
  { label: "Works", href: "works" },
  { label: "Archive", href: "all-projects" },
  { label: "About", href: "about" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Navbar({ scrollY }: { scrollY: number }) {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/[0.08] bg-card/80 px-2 py-2 pointer-events-auto transition-shadow duration-300 ${
          scrollY > 80 ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        {/* Logo mark */}
        <div className="relative mr-1 cursor-pointer group">
          <div
            className="absolute -inset-[1.5px] rounded-full"
            style={{
              background: "linear-gradient(135deg, #89aacc, #4e85bf)",
            }}
          />
          <div className="relative w-8 h-8 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-95">
            <Image
              src="/pfp.png"
              alt="Eugenio Bellini"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="hidden sm:block w-px h-5 bg-border mx-1.5" />

        {/* Nav links */}
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActive(item.label);
              scrollTo(item.href);
            }}
            className={`${item.label === "Home" ? "hidden sm:flex" : "flex"} text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 cursor-pointer ${
              active === item.label
                ? "text-foreground bg-border/60"
                : "text-muted-foreground hover:text-foreground hover:bg-border/30"
            }`}
          >
            {item.label}
          </button>
        ))}

        <div className="hidden sm:block w-px h-5 bg-border mx-1.5" />

        {/* Say hi */}
        <div className="relative group">
          <span
            className="absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(90deg, #89aacc, #4e85bf)",
            }}
          />
          <a
            href="mailto:eugenio.bellini@yahoo.it"
            className="relative flex items-center gap-1 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-card text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Say hi <span className="text-[10px] ml-0.5">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2200
    );
    return () => clearInterval(t);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".name-reveal", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(".blur-in", {
        opacity: 0,
        filter: "blur(12px)",
        y: 22,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar scrollY={scrollY} />

      <section
        id="home"
        ref={sectionRef}
        className="hero-grid-bg relative min-h-screen flex flex-col overflow-hidden"
      >
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10 pt-24 pb-20">
          {/* Name */}
          <h1
            className="name-reveal text-[clamp(4rem,12vw,8.5rem)] leading-[0.86] tracking-tight text-foreground mb-7"
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontStyle: "italic",
            }}
          >
            Eugenio
            <br />
            Bellini
          </h1>

          {/* Role line */}
          <p className="blur-in text-base md:text-lg text-muted-foreground mb-3 min-h-[1.75rem]">
            A{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                className="inline-block"
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontStyle: "italic",
                  color: "#b8ff57",
                }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>{" "}
            designer.
          </p>

          {/* Description */}
          <p className="blur-in text-sm md:text-base text-muted-foreground/60 max-w-sm mb-8 md:mb-12 leading-relaxed">
            Crafting clean digital experiences at the intersection of design,
            motion, and technology.
          </p>

          {/* CTA buttons */}
          <div className="blur-in flex items-center gap-3 md:gap-4 flex-wrap justify-center">
            {/* See Works — solid */}
            <div className="relative group">
              <span
                className="absolute -inset-[1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, #89aacc, #4e85bf)",
                }}
              />
              <button
                onClick={() => scrollTo("works")}
                className="relative rounded-full text-sm px-7 py-3.5 bg-foreground text-background group-hover:bg-background group-hover:text-foreground transition-all duration-300 cursor-pointer z-10"
              >
                See Works
              </button>
            </div>

            {/* Reach out — outlined */}
            <div className="relative group">
              <span
                className="absolute -inset-[1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, #89aacc, #4e85bf)",
                }}
              />
              <a
                href="mailto:eugenio.bellini@yahoo.it"
                className="relative flex items-center gap-1.5 rounded-full text-sm px-7 py-3.5 border border-border bg-background text-foreground transition-colors duration-200 z-10"
              >
                Get in touch ↗
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5">
          <span className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.25em]">
            Scroll
          </span>
          <div className="w-px h-10 bg-border/50 relative overflow-hidden">
            <div
              className="absolute w-full h-[45%] bg-muted-foreground/60 animate-scroll-down"
            />
          </div>
        </div>
      </section>
    </>
  );
}
