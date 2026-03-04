"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
}

const PROJECTS: Project[] = [
  {
    title: "ETHEREAL:ACCES_01",
    category: "UX/UI Design",
    image: "/GameMenu.png",
    url: "https://www.behance.net/gallery/244534131/Aethereal-Access-Game-Menu-Design-UXUI-Project",
  },
  {
    title: "Cinematic Love Affairs",
    category: "Editorial Design",
    image: "/cinematicloveraffairs.png",
    url: "https://www.behance.net/gallery/234516509/Cinematic-Love-Affairs",
  },
  {
    title: "BloodMoon",
    category: "Visual Identity",
    image: "/bloodmoon.png",
    url: "https://www.behance.net/gallery/234642147/BloodMoon-VIsual-Identity",
  },
  {
    title: "MafiaSlime II",
    category: "Web Design",
    image: "/mafiaslime.png",
    url: "https://www.figma.com/proto/Xdqen5eDiYpNobr0ozXieT/bellini_personale--Copy-?node-id=39-198&p=f&t=j0KKPirDqASmgpdX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=134%3A16",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] bg-card border border-border cursor-pointer block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Project image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Bottom label — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-[10px] md:text-xs text-white/45 uppercase tracking-wider font-light mb-1">
          {project.category}
        </p>
        <p
          className="text-base md:text-xl text-white/90"
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
          }}
        >
          {project.title}
        </p>
      </div>

      {/* Hover: view button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/25 backdrop-blur-[1px]">
        <div className="relative">
          <span
            className="absolute -inset-[1.5px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #89aacc, #4e85bf)",
            }}
          />
          <span className="relative flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-background text-sm text-foreground">
            View project ↗
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function WorksSection() {
  return (
    <section id="works" className="bg-background py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-border" />
              <span className="text-[11px] text-muted-foreground uppercase tracking-[0.32em]">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Featured{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontStyle: "italic",
                  color: "#b8ff57",
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
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            View all on Behance
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              ↗
            </span>
          </a>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          <div className="md:col-span-7">
            <ProjectCard project={PROJECTS[0]} index={0} />
          </div>
          <div className="md:col-span-5">
            <ProjectCard project={PROJECTS[1]} index={1} />
          </div>
          <div className="md:col-span-5">
            <ProjectCard project={PROJECTS[2]} index={2} />
          </div>
          <div className="md:col-span-7">
            <ProjectCard project={PROJECTS[3]} index={3} />
          </div>
        </div>

        {/* Mobile: view all */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="https://www.behance.net/eugnbll"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            View all on Behance ↗
          </a>
        </div>
      </div>
    </section>
  );
}
