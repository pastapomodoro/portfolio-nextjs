"use client";

import { useState } from "react";
import Link from "next/link";
import { MINIDEV_CANVAS_BG } from "@/lib/minidev-canvas";
import { OpensourceFolderTabCard } from "@/components/ui/opensource-folder-tab-card";

const projects = [
  { title: "MINIDEV", category: "Product", subtitle: "A pocket-sized place for ideas.", image: "/minidev.png", url: "/works/minidev", tool: "Figma", label: "Product design concept" },
  { title: "BloodMoon", category: "Brand", subtitle: "A visual world for Yukai.", image: "/bloodyrender.png", url: "/works/bloodmoon", tool: "Identity", label: "Visual identity" },
  { title: "MafiaSlime II", category: "Web", subtitle: "An interactive web concept.", image: "/mafiaslime.png", url: "/works/mafiaslime", tool: "Figma", label: "Web design" },
  { title: "Kawaii OD", category: "Brand", subtitle: "Pop culture, turned all the way up.", image: "/kawaiiOD.PNG", url: "/works/kawaii-od", tool: "Campaign", label: "Brand design" },
];
const filters = ["All", "Product", "Brand", "Web"];
export default function WorksSection() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter(project => filter === "All" || project.category === filter);
  return (
    <section id="works" className="folio-work folio-gutter" aria-labelledby="work-title">
      <div className="folio-section-top"><span>Selected projects</span><span aria-live="polite">{String(visible.length).padStart(2, "0")} projects</span></div>
      <div className="folio-work-heading"><h2 id="work-title">The work<span>.</span></h2><div className="folio-filters" aria-label="Filter projects">{filters.map(item => <button type="button" key={item} aria-pressed={item === filter} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      <div className="folio-project-grid">
        {visible.map((project) => <Link href={project.url} key={project.title} className="folio-project-entry" aria-label={`Open ${project.title}: ${project.label}`}>
          <OpensourceFolderTabCard appName={`${String(projects.indexOf(project) + 1).padStart(2, "0")} / ${project.category}`} cardLabel={project.label} title={project.title} subtitle={project.subtitle} primaryValue={project.tool} imageSrc={project.image} imageAlt={`${project.title} project artwork`} imageFit={project.category === "Product" || project.category === "Web" ? "contain" : "cover"} canvasBg={project.category === "Product" ? MINIDEV_CANVAS_BG : undefined} />
        </Link>)}
      </div>
    </section>
  );
}
