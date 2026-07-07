"use client";

import Link from "next/link";

const NAV_PILLS = [
  { label: "UX/UI", href: "/works/ux-ui", active: false },
  { label: "Brand Design", href: "/works/branding", active: false },
  { label: "Web Design", href: "/works/web-design", active: true },
  { label: "Editorial", href: "/works/editorial-design", active: false },
  { label: "Illustration", href: "/works/illustration", active: false },
];

export default function MafiaslimePage() {
  return (
    <main className="bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex h-16 items-center justify-between px-6 md:px-12">
          <Link href="/" className="text-sm font-medium tracking-tight hover:opacity-60 transition-opacity">
            Eugenio Bellini
          </Link>
          <div className="flex items-center gap-2 overflow-x-auto">
            {NAV_PILLS.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className={`whitespace-nowrap px-4 py-1.5 text-xs font-light transition-colors ${
                  p.active
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background hover:bg-muted text-foreground"
                }`}
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section className="min-h-screen bg-background pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
          <div className="site-rhythm-block flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-4">
                <span className="text-[#00cc66]">Web Design</span> — 2024
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05]">
                MafiaSlime II
              </h1>
              <p className="text-muted-foreground max-w-md leading-relaxed text-sm mt-8">
                Sito web per MafiaSlime II, gioco online. Design giocoso e colorato
                con elementi dinamici per un&apos;esperienza di navigazione coinvolgente.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-12 lg:p-20 bg-[#0b0b0f]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mafiaslime.png"
              alt="MafiaSlime II"
              className="w-full h-full object-contain p-4 max-h-[60vh]"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="site-rhythm-block border-b lg:border-b-0 lg:border-r border-border">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2 text-[#00cc66]">
              01 — Overview
            </p>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Un sito per la community</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Design pensato per catturare l&apos;energia del gioco e della community.
              Interfaccia dinamica che riflette il tono vivace e competitivo del brand.
            </p>
          </div>
          <div className="site-rhythm-block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2 text-[#00cc66]">
              02 — Dettagli
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div><span className="text-foreground font-medium">Ruolo:</span> UI/UX Design, Sviluppo Frontend</div>
              <div><span className="text-foreground font-medium">Strumenti:</span> Figma, Framer</div>
              <div><span className="text-foreground font-medium">Concept:</span> Giocoso, dinamico, colorato</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}