import { ProjectFooter, ProjectNav, ProjectSource } from "@/components/ProjectMedia";

const SOURCE = "https://www.behance.net/gallery/226585309/Kawaii-OD-2025";

export default function KawaiiOdPage() {
  return (
    <main className="bg-background">
      <ProjectNav />
      <header className="site-rhythm-block mx-auto grid max-w-[1400px] items-end gap-8 md:grid-cols-2">
        <div><p className="mb-4 text-sm text-muted-foreground">Brand design / 2025</p><h1 className="text-5xl font-medium tracking-tight md:text-7xl">Kawaii OD</h1></div>
        <div className="max-w-md md:justify-self-end">
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">A visual project combining everyday objects, pop references, and bright colour. The dinnerware concept brings pill-like forms into a playful graphic setting.</p>
          <ProjectSource href={SOURCE} />
        </div>
      </header>
      <figure className="mx-auto max-w-[1400px] px-6 pb-12 md:px-12 md:pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/kawaiiOD.PNG" alt="Kawaii OD dinnerware concept with pill-shaped plates on a bright green background" width={1106} height={650} className="block h-auto w-full" />
        <figcaption className="mt-4 text-sm text-muted-foreground">Dinnerware concept / Kawaii OD 2025</figcaption>
      </figure>
      <ProjectFooter href={SOURCE} />
    </main>
  );
}
