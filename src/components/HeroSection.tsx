"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Work", href: "works" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <>
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          <button
            onClick={() => scrollTo("home")}
            className="text-sm font-medium tracking-tight hover:opacity-60 transition-opacity cursor-pointer"
          >
            Eugenio Bellini
          </button>
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen bg-background pt-16">
        {/* Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">

          {/* Left - Info */}
          <div className="flex flex-col justify-between p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-border">
            <div className="pt-8 md:pt-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Graphic Designer & Art Director
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
                Creating visual
                <br />
                experiences that
                <br />
                <span className="italic" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                  resonate.
                </span>
              </h1>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Interactive Designer & Art Direction student based in Verona, Italy.
                Focused on UX/UI, branding, and motion graphics.
              </p>
            </div>

            <div className="flex items-center justify-between pt-12 border-t border-border mt-12">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">Available for projects</span>
              </div>
              <a
                href="mailto:eugenio.bellini@yahoo.it"
                className="text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right - Featured Project Preview */}
          <div className="relative bg-muted">
            <a
              href="https://www.behance.net/gallery/244534131/Aethereal-Access-Game-Menu-Design-UXUI-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full min-h-[50vh] lg:min-h-full relative group"
              onMouseEnter={() => setHoveredProject("ethereal")}
              onMouseLeave={() => setHoveredProject(null)}
            >
                <video
                src="/comp2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
                  Featured Project
                </p>
                <h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight">
                  ETHEREAL:ACCESS_01
                </h2>
                <p className="text-sm text-white/60 mt-2">UX/UI Design — 2025</p>
              </div>

              {/* View indicator */}
              <div
                className={`absolute top-6 right-6 md:top-12 md:right-12 px-4 py-2 bg-white text-black text-xs uppercase tracking-wider transition-opacity duration-200 ${
                  hoveredProject === "ethereal" ? "opacity-100" : "opacity-0"
                }`}
              >
                View Project →
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
