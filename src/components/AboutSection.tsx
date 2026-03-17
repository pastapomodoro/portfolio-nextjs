"use client";

import { motion } from "framer-motion";

const SKILLS: Record<string, string[]> = {
  "Design & Prototyping": ["Figma", "Photoshop", "Illustrator", "InDesign"],
  "Web & Motion": ["React", "HTML/CSS", "After Effects", "Premiere Pro"],
  "AI & Tools": ["ComfyUI", "Claude Code", "Cursor", "Google AI Studio"],
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 5 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.38 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-border" />
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.35em]">
                About
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl text-foreground font-light mb-8 leading-tight">
              Hello, I&apos;m{" "}
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontStyle: "italic",
                  color: "#4ade80",
                }}
              >
                Eugenio.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Interactive Designer &amp; Art Direction student based in Verona,
                Italy. I work at the intersection of creativity and technology —
                blending traditional design principles with modern digital
                experiences.
              </p>
              <p>
                Currently focused on UX/UI, branding, and motion graphics, with
                an eye for the nuances that make systems feel alive. I also
                leverage cutting-edge AI tools to expand creative boundaries.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border/60 text-sm text-muted-foreground/60 hover:text-foreground hover:border-border transition-all duration-300"
              >
                Download CV ↓
              </a>
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-9"
          >
            {Object.entries(SKILLS).map(([category, skills], groupIndex) => (
              <div key={category}>
                <p className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.3em] mb-3.5 font-light">
                  {category}
                </p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delayChildren: groupIndex * 0.12 }}
                >
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={chipVariants}
                      className="px-3.5 py-1.5 rounded-full border border-border text-sm text-foreground/65 hover:text-foreground hover:border-foreground/30 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
