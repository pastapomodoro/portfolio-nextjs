import Link from "next/link";
import { ProjectFooter, ProjectVideo } from "@/components/ProjectMedia";
import MinidevDrawing from "@/components/MinidevDrawing";
import { MINIDEV_CANVAS_BG } from "@/lib/minidev-canvas";

const categories = [
  { label: "UX/UI", href: "/works/ux-ui" },
  { label: "Brand Design", href: "/works/branding" },
  { label: "Web Design", href: "/works/web-design" },
  { label: "Editorial", href: "/works/editorial-design" },
  { label: "Illustration", href: "/works/illustration" },
];

export default function MinidevPage() {
  return (
    <main className="bg-background">
      <nav aria-label="Project navigation" className="border-b border-border bg-background">
        <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-12">
          <Link href="/" className="shrink-0 text-sm font-medium tracking-tight hover:opacity-60">Eugenio Bellini</Link>
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
            {categories.map((category) => (
              <Link key={category.href} href={category.href} className={`shrink-0 px-4 py-1.5 text-xs transition-colors ${category.label === "UX/UI" ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted"}`}>
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section aria-labelledby="project-title" className="grid border-b border-border lg:grid-cols-[0.9fr_1.1fr]">
        <div className="site-rhythm-block flex flex-col justify-center lg:border-r lg:border-border">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">Product design concept</p>
          <h1 id="project-title" className="text-6xl font-medium leading-none tracking-tight md:text-8xl">MINIDEV</h1>
          <p className="mt-6 max-w-md text-2xl font-medium leading-snug tracking-tight md:text-3xl">A pocket-sized place for ideas.</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A product design concept created in Figma, exploring a portable device for voice notes and short video memos. Inspired by 1990s electronics, MINIDEV pairs a tactile form with a minimal interface.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
            <div><dt className="text-xs text-muted-foreground">Discipline</dt><dd className="mt-2">Product design</dd></div>
            <div><dt className="text-xs text-muted-foreground">Tool</dt><dd className="mt-2">Figma</dd></div>
          </dl>
          <a href="https://www.behance.net/gallery/226579647/MINIDEV-memo-recorder-portatile" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex self-start bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-bright">View project on Behance</a>
        </div>
        <figure className="flex min-w-0 items-center justify-center" style={{ backgroundColor: MINIDEV_CANVAS_BG }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/minidev.png" alt="MINIDEV portable memo recorder product design concept created in Figma" className="aspect-square w-full object-contain p-4 md:p-8 lg:aspect-auto lg:max-h-[760px]" />
        </figure>
      </section>

      <section aria-labelledby="concept-heading" className="site-rhythm-block">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <h2 id="concept-heading" className="max-w-sm text-3xl font-medium leading-tight tracking-tight md:text-4xl">Everyday recording,<br />reimagined as an object.</h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">MINIDEV explores how a dedicated device could make capturing an idea feel immediate. The Figma concept brings together the product&apos;s visual direction and interface, with an emphasis on portability, simple controls, and the character of retro technology.</p>
        </div>
        <div className="mt-10 grid gap-4 border-t border-border pt-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <h3 className="text-lg font-medium tracking-tight">Voice notes</h3>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">A simple recording experience for capturing an idea as it happens, with a clear focus on the essential controls.</p>
        </div>
      </section>
      <section aria-labelledby="form-heading" className="grid border-t border-border lg:grid-cols-[1.6fr_1fr]">
        <div className="site-rhythm-block lg:border-r lg:border-border">
          <MinidevDrawing />
        </div>
        <div className="site-rhythm-block flex flex-col justify-center">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">Form &amp; interaction</p>
          <h2 id="form-heading" className="max-w-sm text-3xl font-medium leading-tight tracking-tight md:text-4xl">Small in the hand.<br />Clear at a glance.</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">The rounded enclosure frames a generous screen, a perforated speaker grille, and three distinct controls. This form study translates the Figma concept into a front and side elevation, exploring how those elements sit together.</p>
          <dl className="mt-8 divide-y divide-border text-sm">
            <div className="py-5"><dt className="font-medium">Screen first</dt><dd className="mt-2 max-w-md leading-relaxed text-muted-foreground">A recessed display gives recordings a dedicated space and keeps the interface visually separate from the physical controls.</dd></div>
            <div className="py-5"><dt className="font-medium">A tactile lower edge</dt><dd className="mt-2 max-w-md leading-relaxed text-muted-foreground">Record, play, and cancel sit in a single row. Different symbols make each action easy to distinguish.</dd></div>
            <div className="py-5"><dt className="font-medium">Pocket-sized proportions</dt><dd className="mt-2 max-w-md leading-relaxed text-muted-foreground">A proposed 72 × 86 mm footprint and 18 mm depth give the concept a compact, handheld silhouette.</dd></div>
          </dl>
        </div>
      </section>
      <section aria-labelledby="minidev-gallery" className="site-rhythm-block border-t border-border">
        <h2 id="minidev-gallery" className="mb-8 text-3xl font-medium tracking-tight">Product studies</h2>
        <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-2">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/minidev-01.png" alt="MINIDEV front view showing the screen, speaker and recording controls" width={632} height={594} loading="lazy" className="h-auto w-full" />
            <figcaption className="mt-4 text-sm text-muted-foreground">Front view and controls</figcaption>
          </figure>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/minidev-02.png" alt="MINIDEV concept shown in a hand to illustrate its compact proportions" width={1024} height={1536} loading="lazy" className="h-auto w-full" />
            <figcaption className="mt-4 text-sm text-muted-foreground">Handheld concept</figcaption>
          </figure>
        </div>
      </section>
      <section aria-labelledby="minidev-motion" className="site-rhythm-block mx-auto max-w-6xl border-t border-border">
        <h2 id="minidev-motion" className="mb-8 text-3xl font-medium tracking-tight">Motion study</h2>
        <ProjectVideo href="https://www.behance.net/gallery/226579647/MINIDEV-memo-recorder-portatile" poster="/minidev.png" title="MINIDEV animation from the original Behance project" />
      </section>
      <ProjectFooter href="https://www.behance.net/gallery/226579647/MINIDEV-memo-recorder-portatile" />
    </main>
  );
}
