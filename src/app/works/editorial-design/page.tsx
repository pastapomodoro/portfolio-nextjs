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
    title: "Cinematic Love Affairs",
    href: "https://www.behance.net/gallery/234516509/Cinematic-Love-Affairs",
    imageSrc: "/cinematicloveraffairs.png",
    description: "Booklet exploring love in cinema"
  },
  {
    title: "A certain Blue enters your soul",
    href: "https://www.behance.net/gallery/234515935/A-certain-blue-enters-your-soul-Editorial-Project",
    imageSrc: "/certainblu.png",
    description: "Digital editorial on the color Blue"
  }
]

export default function Page() {
  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-foreground mb-4">Editorial Design</h1>
          <p className="text-lg font-light text-muted-foreground max-w-xl">Editorial projects: layouts, magazines, books, and print experiments focusing on typography and grid systems.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/works/ux-ui" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">UX/UI</Link>
          <Link href="/works/branding" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Brand Design</Link>
          <Link href="/works/web-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Web Design</Link>
          <Link href="/works/editorial-design" className="rounded-full px-5 py-2 text-sm font-light bg-primary text-primary-foreground shadow-sm transition-colors">Editorial</Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, i) => {
          const card = (
            <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[16/10] bg-muted/50 relative overflow-hidden">
                {project.imageSrc ? (
                  <Image src={project.imageSrc} alt={project.title} width={1920} height={1080} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-medium">Image coming soon</div>
                )}
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-normal tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {project.description || "Short description of the editorial design project."}
                </p>
              </div>
            </div>
          )

          return project.href ? (
            <Link
              key={i}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {card}
            </Link>
          ) : (
            <div key={i}>{card}</div>
          )
        })}
      </div>
    </main>
  )
}




