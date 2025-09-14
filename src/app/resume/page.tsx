export default function Page() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold text-foreground">Resume</h1>
      <p className="text-foreground/70 mt-2">Download my CV or view highlights below.</p>
      <div className="mt-8 space-y-4">
        <a
          href="/Eugenio-Bellini-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-foreground hover:bg-accent"
        >
          Open PDF in new tab
        </a>
        <div className="rounded-lg border border-border bg-card p-4">
          <h2 className="text-xl font-semibold text-foreground">Highlights</h2>
          <ul className="list-disc pl-5 text-foreground/80">
            <li>Graphic Design & Art Direction student based in Verona</li>
            <li>UX/UI, motion graphics, branding, visual storytelling</li>
            <li>AI-assisted workflows; Adobe CC, Figma, Blender</li>
          </ul>
        </div>
      </div>
    </main>
  )
}


