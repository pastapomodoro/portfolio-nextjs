"use client";

import { useState } from "react";
import { MINIDEV_CANVAS_BG } from "@/lib/minidev-canvas";
import { MAFIASLIME_CANVAS_BG } from "@/lib/mafiaslime-canvas";

interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
  year: string;
  sourceLabel?: string;
  /** Extra classes for <img> (e.g. object-contain when cover crops the artwork) */
  imageClassName?: string;
  /** Solid fill behind object-contain (matches render canvas) */
  canvasBg?: string;
}

const PROJECTS: Project[] = [
  {
    title: "MINIDEV",
    category: "UX/UI",
    image: "/MINIDEV.png",
    url: "https://www.behance.net/gallery/226579647/MINIDEV-memo-recorder-portatile",
    year: "2024",
    canvasBg: MINIDEV_CANVAS_BG,
    imageClassName:
      "object-contain object-center w-full h-full py-6 md:py-10 lg:py-14 px-0",
  },
  {
    title: "BloodMoon",
    category: "Visual Identity",
    image: "/bloodyrender.png",
    url: "https://www.behance.net/gallery/234642147/BloodMoon-VIsual-Identity",
    year: "2024",
  },
  {
    title: "MafiaSlime II",
    category: "Web Design",
    image: "/mafiaslime.png",
    url: "https://www.figma.com/proto/Xdqen5eDiYpNobr0ozXieT/bellini_personale--Copy-?node-id=39-198",
    year: "2024",
    canvasBg: MAFIASLIME_CANVAS_BG,
    imageClassName:
      "object-contain object-center w-full h-full py-6 md:py-10 lg:py-14 px-0",
  },
  {
    title: "Kawaii OD 2025",
    category: "Brand Design",
    image: "/kawaiiOD.PNG",
    url: "https://www.behance.net/gallery/226585309/Kawaii-OD-2025",
    year: "2024",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] ${isEven ? "" : "lg:flex-row-reverse"}`}>

        {/* Image side */}
        <div
          className={`relative overflow-hidden ${project.canvasBg ? "" : "bg-muted"} ${isEven ? "lg:order-2" : "lg:order-1"}`}
          style={project.canvasBg ? { backgroundColor: project.canvasBg } : undefined}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
              project.imageClassName ?? "object-cover"
            } ${isHovered ? "scale-105" : "scale-100"}`}
          />
        </div>

        {/* Info side */}
        <div className={`flex flex-col justify-between p-6 md:p-12 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {project.category}
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
              {project.title}
            </h3>
            <p className="text-muted-foreground">{project.year}</p>
          </div>

          <div className="flex items-center justify-between pt-8">
            <span
              className={`text-sm transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              View Project →
            </span>
            <span className="text-xs text-muted-foreground">
              {project.sourceLabel ?? "Behance"}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function WorksSection() {
  return (
    <section id="works" className="bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="flex items-center justify-between p-6 md:p-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected Work
          </h2>
          <span className="text-xs text-muted-foreground">
            {PROJECTS.length} Projects
          </span>
        </div>
      </div>

      {/* Projects */}
      {PROJECTS.map((project, i) => (
        <ProjectRow key={project.title} project={project} index={i} />
      ))}

      {/* View all */}
      <div className="border-b border-border">
        <a
          href="https://www.behance.net/eugnbll"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 md:p-12 hover:bg-muted transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">View all work on Behance</span>
            <span>→</span>
          </div>
        </a>
      </div>
    </section>
  );
}
