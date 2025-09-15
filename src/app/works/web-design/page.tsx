import Image from "next/image"
import Link from "next/link"

type Project = {
  title: string
  href?: string
  imageSrc?: string
  description?: string
}

const projects: Project[] = [
  {
    title: "MafiaSlime II",
    href: "https://www.figma.com/proto/Xdqen5eDiYpNobr0ozXieT/bellini_personale--Copy-?node-id=39-198&p=f&t=j0KKPirDqASmgpdX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=134%3A16",
    imageSrc: "/mafiaslime.png",
    description: "Sito web per l'etichetta K100"
  },
  {
    title: "PromptRunners WebApp",
    href: "https://www.figma.com/proto/XHgM7Rf43tH4im3FLxf0Zc/newletter?node-id=42-170&starting-point-node-id=44%3A171&t=AgUUJCQWXgdtYMrV-1",
    imageSrc: "/promptrunners.png",
    description: "WebApp per gestione newsletter e prompt workflows"
  },
  {
    title: "Studio Veritas",
    href: "https://studioveritas.vercel.app/",
    imageSrc: "/studioveritas.png",
    description: "Sito web per commercialisti"
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
      <h1 className="text-4xl font-bold text-foreground">Web Design</h1>
      <div className="mt-6 flex gap-3">
        <Link href="/works/ux-ui" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Ux/Ui</Link>
        <Link href="/works/branding" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Brand design</Link>
        <Link href="/works/web-design" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Web Design</Link>
        <Link href="/works/editorial-design" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Editorial design</Link>
      </div>
      <p className="text-foreground/70 mt-2">Responsive websites, landing pages and UI explorations.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, i) => {
          const card = (
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="aspect-video bg-muted">
                {project.imageSrc ? (
                  <Image src={project.imageSrc} alt={project.title} width={1920} height={1080} className="h-full w-full object-cover" />
                ) : null}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                {project.description ? (
                  <p className="text-sm text-foreground/70">{project.description}</p>
                ) : (
                  <p className="text-sm text-foreground/70">Short description of the web design project.</p>
                )}
              </div>
            </div>
          )

          return project.href ? (
            <a key={i} href={project.href} target="_blank" rel="noopener noreferrer">{card}</a>
          ) : (
            <div key={i}>{card}</div>
          )
        })}
      </div>
    </main>
  )
}

