import Link from "next/link"

export default function Page() {
  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-foreground mb-4">Illustration</h1>
          <p className="text-lg font-light text-muted-foreground max-w-xl">Selected illustrations and visual experiments focusing on creativity and aesthetics.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/works/ux-ui" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">UX/UI</Link>
          <Link href="/works/branding" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Brand Design</Link>
          <Link href="/works/web-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Web Design</Link>
          <Link href="/works/editorial-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Editorial</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" />
    </main>
  )
}




