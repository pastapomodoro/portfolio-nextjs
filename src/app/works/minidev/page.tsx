"use client";

import Link from "next/link";
import { MINIDEV_CANVAS_BG } from "@/lib/minidev-canvas";

const features = [
  { num: "01", title: "Registrazione vocale", desc: "Cattura note vocali con un tap. Il dispositivo ottimizza automaticamente il gain e riduce il rumore di fondo per una qualità chiara in qualsiasi ambiente." },
  { num: "02", title: "Memo video brevi", desc: "Registra clip video istantanee pensate per appunti visivi, tutorial rapidi e aggiornamenti in mobilità — senza attese né menu complessi." },
  { num: "03", title: "Interfaccia portatile", desc: "Design compatto pensato per l'uso con una mano. Schermo essenziale, feedback tattile e controlli minimi per un'esperienza fluida e immediata." },
];

const NAV_PILLS = [
  { label: "UX/UI", href: "/works/ux-ui", active: true },
  { label: "Brand Design", href: "/works/branding", active: false },
  { label: "Web Design", href: "/works/web-design", active: false },
  { label: "Editorial", href: "/works/editorial-design", active: false },
  { label: "Illustration", href: "/works/illustration", active: false },
];

export default function MinidevPage() {
  return (
    <main className="bg-background">
      {/* Fixed nav */}
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

      {/* Hero split */}
      <section className="min-h-screen bg-background pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
          <div className="site-rhythm-block flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-4">
                <span className="text-[--brand]">UX/UI</span> — 2024
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05]">
                MINIDEV
              </h1>
              <p className="text-muted-foreground max-w-md leading-relaxed text-sm mt-8">
                Concept di dispositivo tascabile per contenuti vocali e video. Ispirato ai
                dispositivi retrò e alla nuova wave di tech minimale. Interfaccia essenziale
                con feedback fisico, estetica 90s tech.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-border pt-10">
              <a
                href="https://www.behance.net/gallery/226579647/MINIDEV-memo-recorder-portatile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[--brand] text-[--brand-foreground] text-sm font-medium uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                View on Behance →
              </a>
            </div>
          </div>
          <div
            className="flex items-center justify-center aspect-square lg:aspect-auto lg:h-full"
            style={{ backgroundColor: MINIDEV_CANVAS_BG }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/minidev.png"
              alt="MINIDEV"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Split section: image sx, descrizione dx */}
            <section className="min-h-screen bg-background border-t border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
                <div
                  className="flex items-center justify-center aspect-square lg:aspect-auto lg:h-full"
                  style={{ backgroundColor: MINIDEV_CANVAS_BG }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/minidev-grid.png"
                    alt="MINIDEV"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="site-rhythm-block flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border">
                  <div className="bg-background p-8 md:p-12 border border-border">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-4">
                      <span className="text-[--brand]">UI Design</span> — Concept
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                      Design essenziale,
                      <br />
                      impatto visivo
                    </h2>
                    <p className="text-muted-foreground max-w-md leading-relaxed text-sm">
                      Un&apos;interfaccia pensata per essere immediata. Iceberg UI che mette
                      al centro il contenuto, con controlli minimi e un feedback visivo
                      chiaro. Ogni elemento ha una ragione funzionale, niente è decorativo.
                    </p>
                  </div>
                </div>
              </div>
            </section>

      {/* Features */}
      <section className="border-t border-border">
        <div className="site-rhythm-block">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-6">
            Caratteristiche
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {features.map((f) => (
              <div key={f.num} className="border-t border-border pt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-3">
                  {f.num}
                </p>
                <h3 className="text-base font-medium tracking-tight mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}