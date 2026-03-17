"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface Category {
  label: string;
  count: string;
  projects: Project[];
}

const CATEGORIES: Category[] = [
  {
    label: "UX/UI Design",
    count: "03",
    projects: [
      {
        title: "ETHEREAL:ACCES_01",
        description: "Game Menu Design",
        image: "/GameMenu.png",
        url: "https://www.behance.net/gallery/244534131/Aethereal-Access-Game-Menu-Design-UXUI-Project?platform=direct",
      },
      {
        title: "Korg ESX1 × Hatsune Miku",
        description: "Concept UI Design",
        image: "/miku/Cattura.PNG",
        url: "https://www.behance.net/gallery/234275497/Korg-ESX2-x-Hatsune-Miku",
      },
      {
        title: "MINIDEV",
        description: "Portable Memo Recorder UI",
        image: "/minidev.png",
        url: "https://www.behance.net/gallery/226579647/MINIDEV-memo-recorder-portatile",
      },
    ],
  },
  {
    label: "Brand Design",
    count: "03",
    projects: [
      {
        title: "Kawaii OD 2025",
        description: "Brand Design",
        image: "/kawaiiOD.PNG",
        url: "https://www.behance.net/gallery/226585309/Kawaii-OD-2025",
      },
      {
        title: "BloodMoon",
        description: "Visual Identity",
        image: "/bloodmoon.png",
        url: "https://www.behance.net/gallery/234642147/BloodMoon-VIsual-Identity",
      },
      {
        title: "Fuji Rock",
        description: "Brand Identity Restyling",
        image: "/fuji.png",
        url: "https://www.behance.net/gallery/234644025/Fuji-Rock-Brand-Identity-e-Restyling?share=1",
      },
    ],
  },
  {
    label: "Web Design",
    count: "02",
    projects: [
      {
        title: "MafiaSlime II",
        description: "Web Design — K100 Label",
        image: "/mafiaslime.png",
        url: "https://www.figma.com/proto/Xdqen5eDiYpNobr0ozXieT/bellini_personale--Copy-?node-id=39-198&p=f&t=j0KKPirDqASmgpdX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=134%3A16",
      },
      {
        title: "HellPulse Visual",
        description: "Music Visual Generator",
        image: "/hellpulse.png",
        url: "https://hell-pulse-visuals.vercel.app/",
      },
    ],
  },
  {
    label: "Editorial Design",
    count: "02",
    projects: [
      {
        title: "Cinematic Love Affairs",
        description: "Booklet — Love in Cinema",
        image: "/cinematicloveraffairs.png",
        url: "https://www.behance.net/gallery/234516509/Cinematic-Love-Affairs",
      },
      {
        title: "A Certain Blue",
        description: "Digital Editorial — Colour",
        image: "/certainblu.png",
        url: "https://www.behance.net/gallery/234515935/A-certain-blue-enters-your-soul-Editorial-Project",
      },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex rounded-xl overflow-hidden aspect-[4/3] bg-card border border-border cursor-pointer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/60 to-transparent">
        <p
          className="text-sm text-white/90 leading-tight"
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
          }}
        >
          {project.title}
        </p>
        <p className="text-[10px] text-white/35 mt-0.5 font-light">
          {project.description}
        </p>
      </div>

      {/* Hover view pill */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="relative">
          <span
            className="absolute -inset-[1px] rounded-full"
            style={{ background: "linear-gradient(90deg, #89aacc, #4e85bf)" }}
          />
          <span className="relative flex items-center gap-1 px-3 py-1 rounded-full bg-background text-[10px] text-foreground">
            View ↗
          </span>
        </div>
      </div>
    </a>
  );
}

function CategoryRow({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* Category header row — click to toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="group w-full flex items-center justify-between py-5 md:py-10 border-t border-border hover:border-foreground/30 transition-colors duration-500 cursor-pointer text-left"
      >
        {/* Left: index + label */}
        <div className="flex items-baseline gap-5 md:gap-8">
          <span className="text-xs text-muted-foreground/40 tabular-nums font-light hidden sm:block">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className="text-2xl md:text-5xl lg:text-6xl font-light text-foreground/50 group-hover:text-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3"
          >
            {category.label}
          </h3>
        </div>

        {/* Right: count + arrow */}
        <div className="flex items-center gap-4 md:gap-6 shrink-0">
          <span className="text-xs text-muted-foreground/40 tabular-nums hidden sm:block">
            {category.count} projects
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-foreground/40 group-hover:text-foreground transition-colors duration-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12H19M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* Expandable project grid */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="grid"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-8 md:pb-10">
              <div
                className={`grid gap-4 md:gap-5 ${
                  category.projects.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {category.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AllProjectsSection() {
  return (
    <section
      id="all-projects"
      className="bg-background py-16 md:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-border" />
            <span className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.35em]">
              All Work
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground font-light leading-tight">
            Browse by{" "}
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontStyle: "italic",
                color: "#4ade80",
              }}
            >
              category
            </span>
          </h2>
        </motion.div>

        {/* Category rows */}
        <div>
          {CATEGORIES.map((cat, i) => (
            <CategoryRow key={cat.label} category={cat} index={i} />
          ))}
          {/* Final border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
