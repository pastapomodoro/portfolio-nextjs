import Image from "next/image"
import Link from "next/link"

type Project = {
  title: string
  href?: string
  imageSrc?: string
  description?: string
  objectPosition?: string
}

const projects: Project[] = [
  {
    title: "Kawaii OD 2025",
    href: "https://www.behance.net/gallery/226585309/Kawaii-OD-2025",
    imageSrc: "/kawaiiOD.PNG",
    description: "Campaign and packaging look",
    objectPosition: "40% center"
  },
  {
    title: "BloodMoon - Visual Identity",
    href: "https://www.behance.net/gallery/234642147/BloodMoon-VIsual-Identity",
    imageSrc: "/bloodmoon.png",
    description: "Full visual identity package"
  },
  {
    title: "Fuji Rock - Restyling Brand Identity",
    href: "https://www.behance.net/gallery/234644025/Fuji-Rock-Brand-Identity-e-Restyling?share=1",
    imageSrc: "/fuji.png",
    description: "Brand Identity Restyling"
  }
]

export default function Page() {
  return (
    <main className="site-rhythm-block mx-auto max-w-6xl">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-8 md:mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-foreground mb-4">Brand Design</h1>
          <p className="text-lg font-light text-muted-foreground max-w-xl">Logos, color systems, and rollout mockups from a few school and personal briefs.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/works/ux-ui" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">UX/UI</Link>
          <Link href="/works/branding" className="rounded-full px-5 py-2 text-sm font-light bg-primary text-primary-foreground shadow-sm transition-colors">Brand Design</Link>
          <Link href="/works/web-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Web Design</Link>
          <Link href="/works/editorial-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Editorial</Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, i) => {
          const card = (
            <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[16/10] bg-muted/50 relative overflow-hidden">
                {project.imageSrc ? (
                  <Image src={project.imageSrc} alt={project.title} width={1920} height={1080} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: project.objectPosition }} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-medium">Image coming soon</div>
                )}
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-xl font-normal tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {project.description || "Description coming soon."}
                </p>
              </div>
            </div>
          )

          return project.href ? (
            <Link key={i} href={project.href} target="_blank" rel="noopener noreferrer" className="block">{card}</Link>
          ) : (
            <div key={i}>{card}</div>
          )
        })}
      </div>
    </main>
  )
}




