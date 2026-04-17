import { CV_HREF } from "@/lib/site-contact";

export default function Page() {
  return (
    <main className="site-rhythm-block mx-auto max-w-4xl">
      <div className="mb-12 text-center md:mb-14">
        <h1 className="text-5xl md:text-7xl font-light tracking-wide text-foreground mb-4 font-heading">Resume</h1>
        <div className="w-16 h-px bg-foreground mx-auto mb-6"></div>
        <p className="text-lg font-light text-muted-foreground max-w-xl mx-auto">
          Graphic designer and art direction student in Verona. AI developer and engineer. UX/UI,
          branding, and motion.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
        <div className="w-full md:w-2/3 space-y-8">
          <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-normal text-foreground mb-8 flex items-center gap-3 font-heading">
              <span className="text-muted-foreground text-3xl font-light">+</span> Highlights
            </h2>
            <ul className="space-y-6 text-foreground/80 text-lg font-light">
              <li className="flex gap-4 items-start">
                <span className="text-muted-foreground text-sm mt-1 font-mono">01.</span>
                <span>
                  Graphic design, art direction, and AI developer/engineer work — based in Verona
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-muted-foreground text-sm mt-1">02.</span>
                <span>Strong interest in UX/UI, motion, branding, and clear visual communication</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-muted-foreground text-sm mt-1">03.</span>
                <span>Comfortable with Adobe CC, Figma, Blender, and AI tools when they save time on a task</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <a
            href={CV_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-muted/50 p-10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl text-foreground"
          >
            <div className="p-4 bg-background rounded-full group-hover:bg-primary-foreground/20 transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-primary-foreground">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-normal tracking-wide mb-1">Download CV</h3>
              <p className="text-sm font-light opacity-70">PDF</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}


