"use client";

import { useState } from "react";
import { MINIDEV_CANVAS_BG } from "@/lib/minidev-canvas";

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
  /** Disable image zoom animation on hover for this project */
  disableHoverZoom?: boolean;
  /** Custom object-position to preserve key artwork areas */
  objectPosition?: string;
}

const PROJECTS: Project[] = [
  {
    title: "MINIDEV",
    category: "UX/UI",
    image: "/minidev.png",
    url: "https://www.behance.net/gallery/226579647/MINIDEV-memo-recorder-portatile",
    year: "2024",
    canvasBg: MINIDEV_CANVAS_BG,
    imageClassName:
      "object-contain object-center w-full h-full p-1 sm:p-2 md:py-10 lg:py-14",
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
    imageClassName:
      "object-contain object-center w-full h-full p-1 sm:p-2 md:p-0",
    disableHoverZoom: true,
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
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 lg:min-h-[60vh] ${isEven ? "" : "lg:flex-row-reverse"}`}
      >

        {/* Image side — square tile on mobile so media fills the frame (not a thin banner) */}
        <div
          className={`relative aspect-square w-full overflow-hidden lg:aspect-auto lg:min-h-0 lg:h-full lg:min-h-[50vh] ${project.canvasBg ? "" : "bg-muted"} ${isEven ? "lg:order-2" : "lg:order-1"}`}
          style={project.canvasBg ? { backgroundColor: project.canvasBg } : undefined}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
              project.imageClassName ?? "object-cover"
            } ${isHovered && !project.disableHoverZoom ? "scale-105" : "scale-100"}`}
            style={{ objectPosition: project.objectPosition }}
          />
        </div>

        {/* Info side */}
        <div
          className={`site-rhythm-block flex flex-col justify-between ${isEven ? "lg:order-1" : "lg:order-2"}`}
        >
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

          <div
            className={`flex items-center pt-10 md:pt-12 ${project.sourceLabel ? "justify-between" : ""}`}
          >
            <span
              className={`text-sm transition-opacity duration-200 max-md:opacity-100 ${
                isHovered ? "md:opacity-100" : "md:opacity-0"
              }`}
            >
              Open project →
            </span>
            {project.sourceLabel ? (
              <span className="text-xs text-muted-foreground">{project.sourceLabel}</span>
            ) : null}
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
        <div className="site-rhythm-header flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected work
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
    </section>
  );
}
