"use client";

import { cn } from "@/lib/utils";
import { CV_HREF } from "@/lib/site-contact";

const SKILLS = [
  { category: "Design", items: ["Figma", "Photoshop", "Illustrator"] },
  {
    category: "Web & Motion",
    items: [
      "React",
      "HTML/CSS",
      "TypeScript",
      "Python",
      "Node.js",
      "Express",
      "Vite",
    ],
  },
  {
    category: "AI & Tools",
    items: [
      "ComfyUI",
      "Claude Code",
      "Cursor",
      "Google Cloud Console",
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="site-rhythm-header">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        {/* Bio */}
        <div className="site-rhythm-block max-md:py-10 space-y-6 border-b md:space-y-8 lg:border-b-0 lg:border-r border-border">
          <p className="text-2xl font-medium leading-[1.3] tracking-tight md:text-3xl lg:text-4xl">
            Interactive design and art direction student in Verona, Italy, plus AI developer and
            engineer work on the side.
          </p>
          <p className="max-w-lg leading-relaxed text-muted-foreground">
            I care about clear layouts, readable type, and UI that doesn&apos;t fight the user.
            I use the usual design apps, a bit of code when a prototype helps, and motion when
            it makes something easier to understand — not just for show.
          </p>
          <a
            href={CV_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Download CV
          </a>
        </div>

        {/* Skills — tight on mobile: Design | AI, then Web full width */}
        <div className="site-rhythm-block max-md:py-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className={cn(
                  group.category === "Web & Motion" &&
                    "col-span-2 max-lg:order-3 lg:col-span-1",
                  group.category === "AI & Tools" && "max-lg:order-2",
                  group.category === "Design" && "max-lg:order-1",
                )}
              >
                <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:mb-3 sm:text-xs sm:tracking-[0.2em] md:mb-4">
                  {group.category}
                </p>
                <ul className="max-md:space-y-1 md:space-y-1.5 lg:space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs leading-snug sm:text-sm sm:leading-normal">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
