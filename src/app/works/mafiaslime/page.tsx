import { ProjectFooter, ProjectNav, ProjectSource } from "@/components/ProjectMedia";

const SOURCE = "https://www.figma.com/proto/Xdqen5eDiYpNobr0ozXieT/bellini_personale--Copy-?node-id=39-198&p=f&t=j0KKPirDqASmgpdX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=134%3A16";

export default function MafiaslimePage() {
  return (
    <main className="bg-background">
      <ProjectNav />
      <header className="site-rhythm-block mx-auto grid max-w-[1400px] items-end gap-8 md:grid-cols-2">
        <div><p className="mb-4 text-sm text-muted-foreground">Web design / Figma prototype</p><h1 className="text-5xl font-medium tracking-tight md:text-7xl">MafiaSlime II</h1></div>
        <div className="max-w-md md:justify-self-end">
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">A website concept for K100, bringing music, tour dates, and merchandise into one interface. Black-and-white photography and red lettering shape the visual direction.</p>
          <ProjectSource href={SOURCE} label="Open Figma prototype" />
        </div>
      </header>
      <figure className="mx-auto max-w-[1400px] px-6 pb-12 md:px-12 md:pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mafiaslime.png" alt="MafiaSlime II website concept for K100 with shop, tickets, and project navigation" width={1628} height={1094} className="block h-auto w-full" />
        <figcaption className="mt-4 text-sm text-muted-foreground">Homepage concept. Explore the screens and interactions in the Figma prototype.</figcaption>
      </figure>
      <ProjectFooter href={SOURCE} label="Open Figma prototype" />
    </main>
  );
}
