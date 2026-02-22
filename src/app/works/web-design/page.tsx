import Image from "next/image"
import Link from "next/link"

type Project = {
  title: string
  href?: string
  imageSrc?: string
  description?: string
  imageClassName?: string
}

const projects: Project[] = [
  {
    title: "MafiaSlime II",
    href: "https://www.figma.com/proto/Xdqen5eDiYpNobr0ozXieT/bellini_personale--Copy-?node-id=39-198&p=f&t=j0KKPirDqASmgpdX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=134%3A16",
    imageSrc: "/mafiaslime.png",
    description: "Sito web per l'etichetta K100"
  },
  {
    title: "HellPulse Visual",
    href: "https://hell-pulse-visuals.vercel.app/",
    imageSrc: "/hellpulse.png",
    description: "Generatore di visual musicali"
  }
]

export default function Page() {
  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-foreground mb-4">Web Design</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/works/ux-ui" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">UX/UI</Link>
          <Link href="/works/branding" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Brand Design</Link>
          <Link href="/works/web-design" className="rounded-full px-5 py-2 text-sm font-light bg-primary text-primary-foreground shadow-sm transition-colors">Web Design</Link>
          <Link href="/works/editorial-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Editorial</Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, i) => {
          const card = (
            <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[16/10] bg-muted/50 relative overflow-hidden">
                {project.imageSrc ? (
                  <Image src={project.imageSrc} alt={project.title} width={1920} height={1080} className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${project.imageClassName ?? "object-cover"}`} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-medium">Image coming soon</div>
                )}
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-normal tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {project.description || "Short description of the web design project."}
                </p>
              </div>
            </div>
          )

          return project.href ? (
            <a key={i} href={project.href} target="_blank" rel="noopener noreferrer" className="block">{card}</a>
          ) : (
            <div key={i}>{card}</div>
          )
        })}
      </div>
    </main>
  )
}

