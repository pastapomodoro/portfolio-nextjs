"use client";

import { Mic, Moon, Globe, Palette, Aperture } from "lucide-react";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";

// Each orbital node is a project. Edit titles / links / icons here.
const TOOLFOLIO_DATA: TimelineItem[] = [
  {
    id: 1,
    title: "MINIDEV",
    date: "2024 – 2025",
    content: "Portable memo recorder: product concept, UX/UI and editorial.",
    category: "UX/UI",
    icon: Mic,
    relatedIds: [2, 5],
    status: "completed",
    energy: 95,
    url: "https://www.behance.net/gallery/226579647/MINIDEV-memo-recorder-portatile",
  },
  {
    id: 2,
    title: "BloodMoon",
    date: "2024 – 2025",
    content: "Visual identity and art direction for the BloodMoon brand.",
    category: "Visual Identity",
    icon: Moon,
    relatedIds: [1, 3],
    status: "completed",
    energy: 90,
    url: "https://www.behance.net/gallery/234642147/BloodMoon-VIsual-Identity",
  },
  {
    id: 3,
    title: "MafiaSlime II",
    date: "2024 – 2025",
    content: "Interactive web design and prototyping built in Figma.",
    category: "Web Design",
    icon: Globe,
    relatedIds: [2, 4],
    status: "completed",
    energy: 80,
    url: "https://www.figma.com/proto/Xdqen5eDiYpNobr0ozXieT/bellini_personale--Copy-?node-id=39-198",
  },
  {
    id: 4,
    title: "Kawaii OD 2025",
    date: "2024 – 2025",
    content: "Brand design and playful visual system for Kawaii OD.",
    category: "Brand Design",
    icon: Palette,
    relatedIds: [3, 5],
    status: "completed",
    energy: 85,
    url: "https://www.behance.net/gallery/226585309/Kawaii-OD-2025",
  },
  {
    id: 5,
    title: "ETHEREAL:ACCESS_01",
    date: "2024 – 2025",
    content: "Game menu UX/UI exploration: motion and interface design.",
    category: "UX/UI",
    icon: Aperture,
    relatedIds: [4, 1],
    status: "in-progress",
    energy: 70,
    url: "https://www.behance.net/gallery/244534131/Aethereal-Access-Game-Menu-Design-UXUI-Project",
  },
];

export default function ToolfolioSection() {
  return (
    <section id="toolfolio" className="bg-background pt-16">
      {/* Header */}
      <div className="border-b border-border">
        <div className="site-rhythm-header flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Toolfolio
          </h2>
          <span className="text-xs text-muted-foreground">
            {TOOLFOLIO_DATA.length} Projects
          </span>
        </div>
      </div>

      {/* Orbital canvas */}
      <div className="relative h-[calc(100svh-8rem)] min-h-[560px]">
        <RadialOrbitalTimeline timelineData={TOOLFOLIO_DATA} />

        {/* Hint */}
        <span className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Tap a node to open a project
        </span>
      </div>
    </section>
  );
}
