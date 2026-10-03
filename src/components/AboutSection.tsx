import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { CV_HREF } from "@/lib/site-contact";

export default function AboutSection() {
  return (
    <section id="about" className="folio-about folio-gutter" aria-labelledby="about-title">
      <div className="folio-section-top"><span>A little context</span><span>Milan, Italy</span></div>
      <div className="folio-about-layout">
        <h2 id="about-title" className="about-y2k-art"><Image src="/about-y2k.png" alt="#ABOUT." width={2172} height={724} priority /></h2>
        <div className="folio-about-copy"><p>I&apos;m Eugenio, a designer based in Milan. I make interfaces, visual identities, and experiments with code.</p><p>I like clear ideas, strange references, and making digital things feel a little more human.</p><a href={CV_HREF} target="_blank" rel="noopener noreferrer" className="folio-text-link">Download CV <ArrowUpRight size={18} /></a></div>
      </div>
      <div className="folio-practice"><p>In the toolkit</p><div>{["Figma", "Photoshop", "Illustrator", "React", "TypeScript", "Python", "ComfyUI"].map(tool => <span key={tool}>{tool}</span>)}</div></div>
    </section>
  );
}
