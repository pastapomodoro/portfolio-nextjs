import Link from "next/link";

export function ProjectNav() {
  return <nav aria-label="Project navigation" className="flex flex-wrap items-center justify-between gap-5 border-b border-border px-6 py-6 md:px-12">
    <Link href="/" className="text-sm hover:opacity-60">Eugenio Bellini</Link>
    <Link href="/#works" className="text-sm text-muted-foreground hover:text-foreground">All projects</Link>
  </nav>;
}

export function ProjectSource({ href, label = "View on Behance" }: { href: string; label?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block text-sm underline underline-offset-4 hover:opacity-60">{label}</a>;
}

export function ProjectVideo({ href, title, poster }: { href: string; title: string; poster: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="group block min-w-0">
    <div className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" loading="lazy" className="aspect-video w-full object-contain bg-black" />
      <span className="absolute bottom-4 left-4 bg-background px-4 py-2 text-sm text-foreground underline underline-offset-4">Watch on Behance</span>
    </div>
    <p className="mt-4 text-sm text-muted-foreground group-hover:text-foreground">{title}</p>
  </a>;
}

export function ProjectFooter({ href, label }: { href: string; label?: string }) {
  return <footer className="site-rhythm-header flex flex-wrap justify-between gap-5 border-t border-border text-sm">
    <Link href="/#works" className="underline underline-offset-4 hover:opacity-60">Back to selected work</Link>
    <ProjectSource href={href} label={label} />
  </footer>;
}
