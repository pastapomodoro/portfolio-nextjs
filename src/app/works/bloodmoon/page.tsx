"use client";

import Link from "next/link";

const BLOODMOON_RED = "#ff2020";

const galleryImages = [
  { src: "/bloodmoon-01.png", alt: "BloodMoon — copertina" },
  { src: "/bloodyrender.png", alt: "BloodMoon — render" },
  { src: "/bloodmoon-02.png", alt: "BloodMoon — visual identity" },
  { src: "/bloodmoon-03.png", alt: "BloodMoon — dettaglio" },
];

const NAV_PILLS = [
  { label: "UX/UI", href: "/works/ux-ui", active: false },
  { label: "Brand Design", href: "/works/branding", active: true },
  { label: "Web Design", href: "/works/web-design", active: false },
  { label: "Editorial", href: "/works/editorial-design", active: false },
  { label: "Illustration", href: "/works/illustration", active: false },
];

export default function BloodmoonPage() {
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
                <span style={{ color: BLOODMOON_RED }}>Visual Identity</span> — 2024
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05]">
                BloodMoon
              </h1>
              <p className="text-muted-foreground max-w-md leading-relaxed text-sm mt-8">
                Visual identity per l&apos;album di debutto di Yukai, DJ milanese.
                Unisce l&apos;energia brutale della tekno con un immaginario oscuro
                e visionario. La luna rossa come simbolo di trasformazione.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-border pt-10">
              <a
                href="https://www.behance.net/gallery/234642147/BloodMoon-VIsual-Identity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium uppercase tracking-wider hover:opacity-80 transition-opacity"
                style={{ backgroundColor: BLOODMOON_RED, color: "#ffffff" }}
              >
                View on Behance →
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-12 lg:p-20 bg-[#0b0b0f]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bloodmoon-01.png"
              alt="BloodMoon"
              className="w-full h-full object-contain p-4 max-h-[60vh]"
            />
          </div>
        </div>
      </section>

      {/* Gallery 4-up */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative aspect-square ${i < 2 ? "border-b border-border" : ""} ${i % 2 === 0 ? "md:border-r border-border" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain p-4 bg-[#0b0b0f]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="site-rhythm-block border-b lg:border-b-0 lg:border-r border-border">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2" style={{ color: BLOODMOON_RED }}>
              01 — Concept
            </p>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Un&apos;alba artistica</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              &ldquo;Bloodmoon&rdquo; rappresenta l&apos;alba artistica di Yukai. La luna rossa,
              simbolo ciclico di trasformazione, illumina la notte e scandisce il ritmo
              ipnotico dei suoni. Estetica che fonde misticismo e urbanità, con richiami
              all&apos;immaginario gotico e decadente.
            </p>
          </div>
          <div className="site-rhythm-block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2" style={{ color: BLOODMOON_RED }}>
              02 — Motion
            </p>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">CD animato</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Il disco è stato creato in Photoshop e animato in After Effects per simulare
              il movimento reale del vinile. Lettering curato in Illustrator, elementi
              grafici essenziali e simbolici per rafforzare l&apos;identità tekno.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}