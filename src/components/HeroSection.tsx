"use client";

import { useState } from "react";
import { EmailMeButton } from "@/components/EmailMeButton";

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
        <div className="flex h-16 items-center justify-between px-6 md:px-12">
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
          <div className="site-rhythm-block flex min-h-[50vh] flex-col justify-between border-b lg:min-h-[calc(100vh-4rem)] lg:border-b-0 lg:border-r border-border">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Graphic Designer · Art Director · AI Developer &amp; Engineer
              </p>
              <h1 className="mb-8 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Interfaces, brands,
                <br />
                and motion.
              </h1>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                I&apos;m an interactive design and art direction student in Verona, Italy.
                I also build with AI tooling and small full-stack experiments. Most of my time still
                goes to UX/UI, branding, and motion.
              </p>
            </div>

            <div className="mt-10 flex justify-end border-t border-border pt-10 md:mt-12 md:pt-12">
              <EmailMeButton label="Get in touch" />
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
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-8 pt-16 md:px-12 md:pb-10 md:pt-20">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
                  Recent piece
                </p>
                <h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight">
                  ETHEREAL:ACCESS_01
                </h2>
                <p className="mt-2 text-sm text-white/60">UX/UI design, 2025</p>
              </div>

              {/* View indicator */}
              <div
                className={`absolute top-8 right-8 md:top-10 md:right-10 px-4 py-2 bg-white text-black text-xs uppercase tracking-wider transition-opacity duration-200 ${
                  hoveredProject === "ethereal" ? "opacity-100" : "opacity-0"
                }`}
              >
                Open project →
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
