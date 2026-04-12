"use client";

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
        <div className="p-6 md:p-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        {/* Bio */}
        <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-border">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-[1.3] mb-8">
            Interactive Designer & Art Direction student based in Verona, Italy.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            I work at the intersection of creativity and technology — blending
            traditional design principles with modern digital experiences. Currently
            focused on UX/UI, branding, and motion graphics.
          </p>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Download CV
          </a>
        </div>

        {/* Skills */}
        <div className="p-6 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((group) => (
              <div key={group.category}>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm">
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
