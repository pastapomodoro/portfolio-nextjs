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
      <h1 className="text-4xl font-bold text-foreground">Editorial Design</h1>
      <div className="mt-6 flex gap-3">
        <Link href="/works/ux-ui" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Ux/Ui</Link>
        <Link href="/works/branding" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Brand design</Link>
        <Link href="/works/web-design" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Web Design</Link>
      </div>
      <p className="text-foreground/70 mt-2">Editorial projects: layouts, magazines, books, and print experiments.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, i) => {
          const card = (
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="aspect-[16/9] bg-muted">
                {project.imageSrc ? (
                  <Image src={project.imageSrc} alt={project.title} width={1920} height={1080} className="h-full w-full object-cover" />
                ) : null}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                {project.description ? (
                  <p className="text-sm text-foreground/70">{project.description}</p>
                ) : (
                  <p className="text-sm text-foreground/70">Short description of the editorial design project.</p>
                )}
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




