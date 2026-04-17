import Link from "next/link"

export default function Page() {
  return (
    <main className="site-rhythm-block mx-auto max-w-6xl">
      <div className="mb-12 flex flex-wrap items-center justify-between gap-8 md:mb-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-foreground mb-4">Illustration</h1>
          <p className="text-lg font-light text-muted-foreground max-w-xl">Personal drawings and style tests. I&apos;ll add more here when I stop tweaking files.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/works/ux-ui" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">UX/UI</Link>
          <Link href="/works/branding" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Brand Design</Link>
          <Link href="/works/web-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Web Design</Link>
          <Link href="/works/editorial-design" className="rounded-full px-5 py-2 text-sm font-light border border-border bg-background hover:bg-muted text-foreground transition-colors">Editorial</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3" />
    </main>
  )
}




