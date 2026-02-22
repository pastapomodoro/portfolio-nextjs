import Image from "next/image"

type Project = {
  title: string
  href?: string
  imageSrc?: string
  description?: string
  objectPositionClass?: string
  objectPosition?: string
  imageClassName?: string
}

const projects: Project[] = [
  {
    title: "ETHEREAL:ACCES_01",
    href: "https://www.behance.net/gallery/244534131/Aethereal-Access-Game-Menu-Design-UXUI-Project?platform=direct",
    imageSrc: "/GameMenu.png",
    description: "GAME MENU DESIGN / UX-UI"
  },
  {
    title: "Korg ESX1 x Hatsune Miku",
    href: "https://www.behance.net/gallery/234275497/Korg-ESX2-x-Hatsune-Miku",
    imageSrc: "/miku/Cattura.PNG",
    description: "Concept UI for Korg ESX1 × Hatsune Miku",
    objectPositionClass: "",
    objectPosition: "center 8%"
  },
  {
    title: "MINIDEV – memo recorder portatile",
    href: "https://www.behance.net/gallery/226579647/MINIDEV-memo-recorder-portatile",
    imageSrc: "/minidev.png",
    description: "Portable memo recorder UI",
    imageClassName: "object-contain"
  },
]

export default function Page() {
  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-foreground mb-4">UX/UI</h1>
          <p className="text-lg font-light text-muted-foreground max-w-xl">Selected UX/UI works and product interface explorations focusing on usability and aesthetics.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="/works/ux-ui" className="rounded-full px-5 py-2 text-sm font-light bg-primary text-primary-foreground shadow-sm transition-colors">UX/UI</a>
          <a href="/works/branding" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Brand Design</a>
          <a href="/works/web-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Web Design</a>
          <a href="/works/editorial-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Editorial</a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, i) => {
          const card = (
            <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[16/10] bg-muted/50 relative overflow-hidden">
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${project.imageClassName ?? "object-cover"} ${project.objectPositionClass ?? ""}`}
                    style={{ objectPosition: project.objectPosition }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-medium">Image coming soon</div>
                )}
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-normal tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {project.description || "Short description of the UX/UI project."}
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


