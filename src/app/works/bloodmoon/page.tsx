import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BloodmoonPage() {
  return (
    <main className="bloodmoon-page bg-background text-foreground">
      <nav className="flex items-center justify-between gap-6 px-6 py-6 md:px-12" aria-label="Project navigation"><Link href="/" className="text-sm">Eugenio Bellini</Link><Link href="/#works" className="text-sm text-muted-foreground hover:text-foreground">All projects ↗</Link></nav>
      <header className="site-rhythm-block grid items-end gap-8 md:grid-cols-2">
        <div><p className="mb-4 text-sm text-muted-foreground">Visual identity / Yukai</p><h1 className="text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl">BloodMoon</h1></div>
        <div className="max-w-md md:justify-self-end"><p className="text-sm leading-relaxed text-muted-foreground">A visual identity for Milan-based DJ Yukai. The raw energy of tekno, shaped through gothic lettering and a red moon.</p><a href="https://www.behance.net/gallery/234642147/BloodMoon-VIsual-Identity" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 text-sm underline underline-offset-4">View on Behance <ArrowUpRight size={16} /></a></div>
      </header>
      <figure className="mx-auto max-w-6xl px-6 pb-12 md:px-12 md:pb-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bloodyrender.png" alt="BloodMoon metallic gothic lettering with violet and red highlights" className="mx-auto w-full max-w-4xl" />
        <figcaption className="mt-4 flex justify-between gap-4 text-xs text-muted-foreground"><span>BloodMoon / Lettering study</span><span>Visual identity</span></figcaption>
      </figure>
      <section className="site-rhythm-block grid items-center gap-10 border-t border-border lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]" aria-labelledby="bloodmoon-wordmark">
        <div className="max-w-sm"><p className="mb-4 text-xs text-muted-foreground">The wordmark</p><h2 id="bloodmoon-wordmark" className="text-3xl font-medium tracking-tight md:text-4xl">Sharp forms.<br />A darker voice.</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Pointed letterforms and deep red tones bring the music&apos;s intensity into the identity.</p></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bloodmoon-01.png" alt="BloodMoon red gothic wordmark on black" className="mx-auto w-full max-w-xl" />
      </section>
      <section className="site-rhythm-block border-t border-border" aria-labelledby="bloodmoon-mood">
        <div className="mb-12 grid gap-5 md:grid-cols-2"><h2 id="bloodmoon-mood" className="text-3xl font-medium tracking-tight md:text-4xl">Inside the atmosphere.</h2><p className="max-w-md text-sm leading-relaxed text-muted-foreground md:justify-self-end">A reference board exploring red moons, urban mysticism, and gothic imagery. These references set the mood and color direction.</p></div>
        <figure className="mx-auto max-w-4xl">
          <div className="bloodmoon-mood-crop">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bloodmoon-02.png" alt="BloodMoon inspiration board with red moons, gothic references, and a red and grey palette" />
          </div>
          <figcaption className="mt-6 text-xs text-muted-foreground">Visual research / Reference imagery</figcaption>
        </figure>
      </section>
      <section className="site-rhythm-block grid items-center gap-10 border-t border-border lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]" aria-labelledby="bloodmoon-artwork">
        <figure className="bloodmoon-art-crop">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bloodmoon-03.png" alt="Red speaker encircled by a sculptural gothic frame" />
        </figure>
        <div className="max-w-sm lg:justify-self-end"><p className="mb-4 text-xs text-muted-foreground">Artwork</p><h2 id="bloodmoon-artwork" className="text-3xl font-medium tracking-tight md:text-4xl">Sound takes form.</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">A speaker becomes the center of the visual world, surrounded by a spiked frame in red and violet.</p></div>
      </section>
      <footer className="site-rhythm-header flex justify-between gap-6 border-t border-border text-sm"><Link href="/#works" className="hover:text-brand">Back to selected work</Link><span className="text-muted-foreground">BloodMoon / Yukai</span></footer>
    </main>
  );
}
