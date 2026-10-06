import Link from "next/link";
import { CONTACT_MAILTO, CV_HREF } from "@/lib/site-contact";

const AREAS = [
  {
    title: "Visual identity",
    description: "Lettering, colour, and imagery for music and personal projects. I develop a visual direction through references, sketches, and applications.",
    tools: "Photoshop, Illustrator",
    project: "BloodMoon",
    href: "/works/bloodmoon",
  },
  {
    title: "Interfaces & web",
    description: "Layouts and interactive prototypes, from a game menu to a small brand website. I work on typography, navigation, and the details of each screen.",
    tools: "Figma",
    project: "MafiaSlime II",
    href: "/works/mafiaslime",
  },
  {
    title: "Generative visuals",
    description: "Image and video experiments for creative production, including automotive and fashion. I refine prompts, compare outputs, and build ComfyUI and Weavy workflows around the visual brief.",
    tools: "ComfyUI, Weavy, Adobe tools",
  },
  {
    title: "Creative prototyping",
    description: "Product concepts and small internal tools. I use Figma to explore form and interaction, and AI-assisted development to try ideas in code.",
    tools: "Figma, Codex, Claude Code",
    project: "MINIDEV",
    href: "/works/minidev",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <nav aria-label="Main navigation" className="border-b border-border">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-6 md:px-12">
          <Link href="/" className="text-sm font-medium tracking-tight hover:opacity-60">Eugenio Bellini</Link>
          <div className="flex flex-wrap items-center gap-5 text-sm md:gap-8">
            <Link href="/#works" className="text-muted-foreground hover:text-foreground">Work</Link>
            <Link href="/services" aria-current="page">Practice</Link>
            <Link href="/#about" className="text-muted-foreground hover:text-foreground">About</Link>
            <a href={CONTACT_MAILTO} className="text-muted-foreground hover:text-foreground">Contact</a>
          </div>
        </div>
      </nav>

      <section className="site-rhythm-block mx-auto max-w-[1200px]">
        <h1 className="text-5xl font-medium tracking-tight md:text-7xl">My practice.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I work across graphic design, interfaces, and generative imagery.
          Some projects start with a visual reference, others with an interaction
          I want to explore.
        </p>
      </section>

      <section id="services" aria-label="Areas of work" className="mx-auto max-w-[1200px] scroll-mt-6 px-6 md:px-12">
        {AREAS.map((area) => (
          <article key={area.title} className="grid gap-5 border-t border-border py-9 md:grid-cols-[1fr_1.4fr] md:gap-12 md:py-12">
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{area.title}</h2>
            <div className="max-w-xl">
              <p className="text-base leading-relaxed text-muted-foreground">{area.description}</p>
              <p className="mt-5 text-sm text-muted-foreground">{area.tools}</p>
              {area.href && <Link href={area.href} className="mt-5 inline-block text-sm underline underline-offset-4 hover:opacity-60">View {area.project}</Link>}
            </div>
          </article>
        ))}
      </section>

      <section aria-labelledby="background-title" className="site-rhythm-block mx-auto grid max-w-[1200px] gap-5 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <h2 id="background-title" className="text-2xl font-medium tracking-tight md:text-3xl">Background</h2>
        <div className="max-w-xl text-base leading-relaxed text-muted-foreground">
          <p>I studied Graphic Design &amp; Art Direction at NABA in Milan. At Accenture Song, I worked on generative visual production, creative workflows, and prototypes for internal tools.</p>
          <a href={CV_HREF} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm text-foreground underline underline-offset-4 hover:opacity-60">Download CV</a>
        </div>
      </section>

      <footer className="site-rhythm-header flex flex-wrap items-center justify-between gap-5 border-t border-border text-sm">
        <Link href="/#works" className="underline underline-offset-4 hover:opacity-60">Back to work</Link>
        <a href={CONTACT_MAILTO} className="underline underline-offset-4 hover:opacity-60">Email me</a>
      </footer>
    </main>
  );
}
