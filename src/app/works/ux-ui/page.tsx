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
      <h1 className="text-4xl font-bold text-foreground">UX/UI</h1>
      <div className="mt-6 flex gap-3">
        <a href="/works/branding" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Brand design</a>
        <a href="/works/web-design" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Web Design</a>
      </div>
      <p className="text-foreground/70 mt-2">Selected UX/UI works and product interface explorations.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, i) => {
          const card = (
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="aspect-video bg-muted">
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    className={`h-full w-full ${project.imageClassName ?? "object-cover"} ${project.objectPositionClass ?? ""}`}
                    style={{ objectPosition: project.objectPosition }}
                  />
                ) : null}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                {project.description ? (
                  <p className="text-sm text-foreground/70">{project.description}</p>
                ) : (
                  <p className="text-sm text-foreground/70">Short description of the UX/UI project.</p>
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


