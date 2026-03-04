"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const SOCIALS = [
  {
    label: "Instagram",
    handle: "@benzodiazepics",
    href: "https://instagram.com/benzodiazepics",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "pastapomodoro",
    href: "https://github.com/pastapomodoro",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    handle: "eugnbll",
    href: "https://www.behance.net/eugnbll",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.443 5.35c.638 0 1.234.05 1.77.198.537.099.992.297 1.38.545.389.247.695.594.903 1.04.207.396.306.892.306 1.487 0 .644-.148 1.189-.44 1.585-.295.396-.737.74-1.32.99.79.248 1.384.644 1.77 1.239.387.595.58 1.338.58 2.18 0 .693-.148 1.288-.395 1.783-.247.496-.64.892-1.073 1.189-.44.297-.94.495-1.528.594-.59.099-1.17.148-1.77.148H1V5.35h6.443zm-.39 5.546c.492 0 .895-.099 1.22-.347.32-.248.477-.645.477-1.14 0-.297-.05-.544-.148-.742-.099-.198-.247-.346-.444-.445-.198-.099-.394-.148-.64-.198-.248-.05-.492-.05-.737-.05H3.68v2.922h3.373zm.197 5.644c.297 0 .545-.05.793-.099.247-.05.493-.148.69-.297.197-.148.346-.346.493-.594.099-.247.197-.594.197-.99 0-.792-.197-1.338-.64-1.634-.44-.297-1.03-.446-1.77-.446H3.68v4.06h3.57zM17.49 5.35h5.51v1.486h-5.51V5.35zm-1.03 12.3c-.445.495-1.18.743-2.11.743-.593 0-1.093-.099-1.487-.346-.395-.198-.74-.496-.99-.842-.247-.347-.394-.743-.492-1.19-.099-.444-.148-.84-.148-1.287h7.923c.05-.792-.049-1.486-.297-2.18-.197-.692-.543-1.287-1.03-1.782-.49-.496-1.078-.892-1.77-1.189-.693-.297-1.484-.446-2.374-.446-.84 0-1.58.149-2.273.446-.69.297-1.284.693-1.77 1.189-.49.495-.84 1.09-1.087 1.832-.247.74-.345 1.535-.345 2.375 0 .89.098 1.685.345 2.425.247.74.64 1.385 1.087 1.88.493.495 1.08.89 1.77 1.14.693.247 1.48.395 2.373.395 1.133 0 2.078-.247 2.87-.792.79-.544 1.33-1.387 1.57-2.474h-2.027c-.148.544-.443.94-.733 1.303zm-2.11-6.035c.493 0 .94.099 1.285.247.345.149.64.347.84.595.197.247.346.494.444.79.1.247.148.545.148.842h-5.51c.049-.297.148-.595.296-.842.148-.297.345-.544.593-.742.247-.198.543-.347.84-.446.296-.099.643-.148 1.064-.444z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "eugenio.bellini@yahoo.it",
    href: "mailto:eugenio.bellini@yahoo.it",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const MARQUEE_TEXT =
  "EUGENIO BELLINI\u2002•\u2002GRAPHIC DESIGNER\u2002•\u2002ART DIRECTOR\u2002•\u2002UX/UI\u2002•\u2002";

export default function ContactSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 38,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section
      id="contact"
      className="bg-background pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden"
    >
      {/* Marquee */}
      <div className="overflow-hidden mb-16 md:mb-24 select-none">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap inline-block"
          style={{ willChange: "transform" }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl lg:text-[5.5rem] text-foreground/[0.055]"
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontStyle: "italic",
              }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Main contact block */}
        <motion.div
          className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left: label + statement */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-border" />
              <span className="text-[11px] text-muted-foreground uppercase tracking-[0.32em]">
                Contact
              </span>
            </div>

            <p className="text-3xl md:text-4xl text-foreground leading-snug mb-6">
              Open to{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontStyle: "italic",
                  color: "#b8ff57",
                }}
              >
                new work.
              </span>
            </p>

            <p className="text-sm md:text-base text-muted-foreground/70 leading-relaxed max-w-xs">
              Student designer, currently open to freelance projects,
              internships, and creative collaborations.
            </p>
          </div>

          {/* Right: email + CV */}
          <div className="flex flex-col gap-4 items-start md:items-end">
            <motion.div whileTap={{ scale: 0.97 }}>
              <div className="relative group">
                <span
                  className="absolute -inset-[1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, #89aacc, #4e85bf)",
                  }}
                />
                <a
                  href="mailto:eugenio.bellini@yahoo.it"
                  className="relative flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-background text-foreground text-sm transition-all duration-300"
                >
                  eugenio.bellini@yahoo.it ↗
                </a>
              </div>
            </motion.div>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-1"
            >
              Download CV ↓
            </a>
          </div>
        </motion.div>

        {/* Social card */}
        <motion.div
          className="mb-12 md:mb-16 rounded-2xl border border-border bg-card/40 p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-start gap-3 p-4 md:p-5 rounded-xl border border-border/60 bg-background/50 hover:border-foreground/20 transition-colors duration-300"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Icon */}
                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {s.icon}
                </span>

                {/* Labels */}
                <div>
                  <p className="text-xs text-foreground font-medium mb-0.5">
                    {s.label}
                  </p>
                  <p className="text-[11px] text-muted-foreground/50 truncate max-w-[120px] md:max-w-full">
                    {s.handle}
                  </p>
                </div>

                {/* Arrow — slides in on hover */}
                <span className="mt-auto text-[10px] text-muted-foreground/30 group-hover:text-foreground/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer bar */}
        <div className="border-t border-border pt-7 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </div>
            <span className="text-sm text-muted-foreground">
              Available for projects
            </span>
          </div>

          <p className="text-[11px] text-muted-foreground/35">
            © {new Date().getFullYear()} Eugenio Bellini. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
