"use client";

import Link from "next/link";

const NAV_PILLS = [
  { label: "UX/UI", href: "/works/ux-ui", active: false },
  { label: "Brand Design", href: "/works/branding", active: true },
  { label: "Web Design", href: "/works/web-design", active: false },
  { label: "Editorial", href: "/works/editorial-design", active: false },
  { label: "Illustration", href: "/works/illustration", active: false },
];

export default function KawaiiOdpPage() {
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
                <span className="text-[#ff66b2]">Brand Design</span> — 2024
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05]">
                Kawaii OD 2025
              </h1>
              <p className="text-muted-foreground max-w-md leading-relaxed text-sm mt-8">
                Campagna visuale brand-led per Kawaii OD 2025. Estetica kawaii giapponese
                con elementi pop e colori pastello per un look giocoso e contemporaneo.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-12 lg:p-20 bg-[#fff5f8]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/kawaiiOD.PNG"
              alt="Kawaii OD 2025"
              className="w-full h-full object-contain p-4 max-h-[60vh]"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="site-rhythm-block border-b lg:border-b-0 lg:border-r border-border">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2 text-[#ff66b2]">
              01 — Campagna
            </p>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Un look pop e giocoso</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Brand identity che cattura lo spirito kawaii con una palette pastello,
              tipografia morbida e illustrazioni custom. Studiato per parlare a un
              pubblico giovane e social-native.
            </p>
          </div>
          <div className="site-rhythm-block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2 text-[#ff66b2]">
              02 — Dettagli
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div><span className="text-foreground font-medium">Ruolo:</span> Brand Design, Art Direction</div>
              <div><span className="text-foreground font-medium">Anno:</span> 2024</div>
              <div><span className="text-foreground font-medium">Concept:</span> Kawaii, pop, pastello, social</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}