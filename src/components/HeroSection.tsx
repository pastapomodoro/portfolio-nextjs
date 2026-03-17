"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import gsap from "gsap";

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
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-black/65 px-2 py-2 pointer-events-auto transition-shadow duration-300 ${
          scrollY > 80 ? "shadow-lg shadow-black/50" : ""
        }`}
      >
        <div className="relative mr-1 cursor-pointer group">
          <div
            className="absolute -inset-[1.5px] rounded-full"
            style={{ background: "linear-gradient(135deg, #4ade80, #22c55e)" }}
          />
          <div className="relative w-8 h-8 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-95">
            <Image src="/pfp.png" alt="Eugenio Bellini" fill className="object-cover" />
          </div>
        </div>

        <div className="hidden sm:block w-px h-5 bg-white/10 mx-1.5" />

        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => { setActive(item.label); scrollTo(item.href); }}
            className={`${item.label === "Home" ? "hidden sm:flex" : "flex"} text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 cursor-pointer ${
              active === item.label
                ? "text-white bg-white/12"
                : "text-white/55 hover:text-white/85 hover:bg-white/7"
            }`}
          >
            {item.label}
          </button>
        ))}

        <div className="hidden sm:block w-px h-5 bg-white/10 mx-1.5" />

        <a
          href="mailto:eugenio.bellini@yahoo.it"
          className="flex items-center gap-1 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-white/55 hover:text-white/85 transition-colors duration-200"
        >
          Say hi <span className="text-[10px] ml-0.5">↗</span>
        </a>
      </div>
    </nav>
  );
}

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.from(".name-reveal", {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.05,
        });
        gsap.from(".blur-in", {
          opacity: 0,
          y: 16,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        });
      }, sectionRef);
      return () => ctx.revert();
    }, 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <Navbar scrollY={scrollY} />

      <section
        id="home"
        ref={sectionRef}
        className="relative min-h-screen flex flex-col overflow-hidden bg-[#080808]"
      >
        {/* Subtle green-tinted radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 0%, rgba(74,222,128,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10 pt-28 pb-24">

          {/* Status badge */}
          <div className="blur-in mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-[11px] text-white/70 tracking-wide">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            Verona, Italy · Available for projects
          </div>

          {/* Name */}
          <h1
            className="name-reveal text-[clamp(4.5rem,14vw,10rem)] leading-[0.84] tracking-tight text-white mb-8"
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontStyle: "italic",
            }}
          >
            Eugenio
            <br />
            Bellini
          </h1>

          {/* Role */}
          <p className="blur-in text-sm md:text-base text-white/65 mb-10 tracking-wide">
            Interactive Designer&nbsp;&nbsp;·&nbsp;&nbsp;Art Director
          </p>

          {/* CTAs */}
          <div className="blur-in flex items-center gap-3 flex-wrap justify-center">
            <button
              onClick={() => scrollTo("works")}
              className="rounded-full text-sm px-7 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 cursor-pointer font-medium tracking-wide"
            >
              See Works
            </button>
            <a
              href="mailto:eugenio.bellini@yahoo.it"
              className="flex items-center gap-1.5 rounded-full text-sm px-7 py-3 border border-white/20 text-white/70 hover:text-white hover:border-white/35 transition-all duration-300 tracking-wide"
            >
              Get in touch ↗
            </a>
          </div>

          {/* Green accent line */}
          <div className="blur-in mt-16 flex items-center gap-3 text-[10px] text-white/30 uppercase tracking-[0.3em]">
            <div className="w-8 h-px" style={{ background: "#4ade80", opacity: 0.5 }} />
            Design · Motion · Technology
            <div className="w-8 h-px" style={{ background: "#4ade80", opacity: 0.5 }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-white/10 relative overflow-hidden">
            <div className="absolute w-full h-[45%] animate-scroll-down" style={{ background: "#4ade80", opacity: 0.7 }} />
          </div>
        </div>
      </section>
    </>
  );
}
