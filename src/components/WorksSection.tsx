"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
  year: string;
}

const PROJECTS: Project[] = [
  {
    title: "ETHEREAL:ACCES_01",
    category: "UX/UI Design",
    image: "/GameMenu.png",
    url: "https://www.behance.net/gallery/244534131/Aethereal-Access-Game-Menu-Design-UXUI-Project",
    year: "2025",
  },
  {
    title: "Cinematic Love Affairs",
    category: "Editorial Design",
    image: "/cinematicloveraffairs.png",
    url: "https://www.behance.net/gallery/234516509/Cinematic-Love-Affairs",
    year: "2024",
  },
  {
    title: "BloodMoon",
    category: "Visual Identity",
    image: "/bloodmoon.png",
    url: "https://www.behance.net/gallery/234642147/BloodMoon-VIsual-Identity",
    year: "2024",
  },
  {
    title: "MafiaSlime II",
    category: "Web Design",
    image: "/mafiaslime.png",
    url: "https://www.figma.com/proto/Xdqen5eDiYpNobr0ozXieT/bellini_personale--Copy-?node-id=39-198&p=f&t=j0KKPirDqASmgpdX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=134%3A16",
    year: "2024",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-2xl aspect-[4/3] bg-card cursor-pointer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.3 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />

      {/* Bottom gradient + info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/65 to-transparent">
        <p className="text-[10px] text-white/45 uppercase tracking-[0.26em] font-light mb-1">
          {project.category}&nbsp;&nbsp;·&nbsp;&nbsp;{project.year}
        </p>
        <p
          className="text-base sm:text-lg text-white/90 leading-tight"
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
          }}
        >
          {project.title}
        </p>
      </div>

      {/* View pill on hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-y-0.5 group-hover:translate-y-0 transition-all duration-300">
        <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-[10px] text-white/80 tracking-wide">
          View ↗
        </span>
      </div>
    </motion.a>
  );
}

export default function WorksSection() {
  return (
    <section id="works" className="bg-background py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14 flex items-end justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-border" />
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.35em]">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl text-foreground font-light leading-tight">
              Featured{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontStyle: "italic",
                  color: "#4ade80",
                }}
              >
                projects
              </span>
            </h2>
          </div>

          <a
            href="https://www.behance.net/eugnbll"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-200 group tracking-wide"
          >
            Behance
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
          </a>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          <div className="sm:col-span-1 md:col-span-7">
            <ProjectCard project={PROJECTS[0]} index={0} />
          </div>
          <div className="sm:col-span-1 md:col-span-5">
            <ProjectCard project={PROJECTS[1]} index={1} />
          </div>
          <div className="sm:col-span-1 md:col-span-5">
            <ProjectCard project={PROJECTS[2]} index={2} />
          </div>
          <div className="sm:col-span-1 md:col-span-7">
            <ProjectCard project={PROJECTS[3]} index={3} />
          </div>
        </div>

        {/* Mobile: view all */}
        <div className="mt-7 flex justify-center md:hidden">
          <a
            href="https://www.behance.net/eugnbll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-200 tracking-wide"
          >
            View all on Behance ↗
          </a>
        </div>
      </div>
    </section>
  );
}
