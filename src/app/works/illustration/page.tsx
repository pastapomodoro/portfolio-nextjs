export default function Page() {
  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-foreground">Illustration</h1>
      <div className="mt-6 flex gap-3">
        <a href="/works/ux-ui" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Ux/Ui</a>
        <a href="/works/branding" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Brand design</a>
        <a href="/works/web-design" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Web Design</a>
      </div>
      <p className="text-foreground/70 mt-2">Selected illustrations and visual experiments.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
            <div className="aspect-video bg-muted" />
            <div className="p-4">
              <h3 className="font-semibold text-foreground">Project {i}</h3>
              <p className="text-sm text-foreground/70">Short description of the illustration project.</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}




