
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FallingPattern } from "@/components/ui/falling-pattern";
// import OrbitingSkills from "@/components/ui/orbiting-skills";
import { SocialLinks } from "@/components/ui/social-links";
import { RevealImageList } from "@/components/ui/reveal-images";
import { Footer } from "@/components/ui/footer-section";
import { SlidingBanner } from "@/components/ui/sliding-banner";
// Tiles removed from sections per request

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Standard */}
      <section id="home" className="relative min-h-screen w-full bg-background overflow-hidden flex flex-col justify-center pt-20">
        <FallingPattern className="absolute inset-0 z-0 opacity-[0.03]" color="var(--foreground)" backgroundColor="transparent" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
          <div className="max-w-5xl mb-12">
            <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-light tracking-tighter text-foreground leading-[0.9] mb-8 font-heading">
              Eugenio <span className="text-muted-foreground font-extralight italic">Bellini</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
              Graphic Designer, Art Director & UX/UI Enthusiast. Crafting clean, digital experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <Button asChild size="lg" className="rounded-full px-10 py-6 bg-foreground text-background hover:bg-foreground/80 hover:scale-105 transition-all duration-300 font-light text-lg">
              <Link href="/#projects">View Works</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-6 border-border/50 text-foreground hover:bg-muted/50 hover:border-foreground/20 hover:scale-105 transition-all duration-300 font-light text-lg backdrop-blur-sm">
              <a href="mailto:eugenio.bellini@yahoo.it">Get in touch</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground/70 font-light mt-auto">
            <span>Interactive Designer</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-foreground/20"></span>
            <span>Graphic Designer</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-foreground/20"></span>
            <span>Art Director</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-foreground/20"></span>
            <span>UX/UI Enthusiast</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-foreground/20"></span>
            <span>Verona, IT</span>
          </div>
        </div>
      </section>

      {/* Sliding Banner Divider */}
      <div className="py-24 bg-background border-y border-border">
        <SlidingBanner height="h-64 md:h-96" speed={15} />
      </div>

      {/* Projects entry (Reveal list) */}
      <section id="projects" className="relative py-32 px-6 bg-background">
        <div className="container mx-auto max-w-6xl relative z-10">
          <RevealImageList />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 bg-background">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-24 group">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6 inline-block relative">
              About Me
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-foreground transition-all duration-500 group-hover:w-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="group/heading mb-8">
                <h3 className="text-2xl font-normal text-foreground inline-block relative">
                  Hello, I'm Eugenio.
                  <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-border transition-all duration-500 group-hover/heading:w-full group-hover/heading:bg-foreground"></span>
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 hover:text-foreground/80 transition-colors duration-300">
                I am an Interactive Designer & Art Direction student based in Verona, Italy. My work lives at the intersection of creativity and technology, seamlessly blending traditional design principles with modern digital experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 hover:text-foreground/80 transition-colors duration-300">
                Currently, my focus is on UX/UI design, branding, and motion graphics. I believe in continuous learning and adapting to new workflows, particularly leveraging cutting-edge AI tools to augment the creative process and craft compelling visual narratives.
              </p>

              <div className="mt-8">
                <SocialLinks
                  socials={[
                    {
                      name: "Instagram",
                      image: "https://link-hover-lndev.vercel.app/instagram.png",
                      href: "https://instagram.com/benzodiazepics",
                    },
                    {
                      name: "GitHub",
                      image: "https://cdn.simpleicons.org/github/000000",
                      href: "https://github.com/pastapomodoro",
                    },
                    {
                      name: "Mail",
                      image: "https://cdn.simpleicons.org/gmail/ea4335",
                      href: "mailto:eugenio.bellini@yahoo.it",
                    },
                    {
                      name: "LinkedIn",
                      image: "https://link-hover-lndev.vercel.app/linkedin.png",
                      href: "https://linkedin.com/",
                    },
                  ]}
                  className="gap-4"
                />
              </div>
            </div>

            <div className="space-y-12 pl-0 lg:pl-12 border-l border-border/10">
              <div className="group/section">
                <h4 className="text-lg font-light text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-border group-hover/section:w-16 group-hover/section:bg-foreground transition-all duration-500"></span>
                  Design & Prototyping
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe Photoshop", "Illustrator", "InDesign"].map((skill, i) => (
                    <span key={skill} className="px-4 py-2 text-sm bg-muted/30 text-foreground/80 font-light rounded-full border border-border/20 hover:bg-muted hover:border-foreground/30 hover:-translate-y-1 hover:text-foreground hover:shadow-sm transition-all duration-300 cursor-default" style={{ animationDelay: `${i * 100}ms` }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="group/section">
                <h4 className="text-lg font-light text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-border group-hover/section:w-16 group-hover/section:bg-foreground transition-all duration-500"></span>
                  Web & Motion
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "HTML/CSS", "After Effects", "Premiere Pro"].map((skill, i) => (
                    <span key={skill} className="px-4 py-2 text-sm bg-muted/30 text-foreground/80 font-light rounded-full border border-border/20 hover:bg-muted hover:border-foreground/30 hover:-translate-y-1 hover:text-foreground hover:shadow-sm transition-all duration-300 cursor-default" style={{ animationDelay: `${i * 100}ms` }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="group/section">
                <h4 className="text-lg font-light text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-border group-hover/section:w-16 group-hover/section:bg-foreground transition-all duration-500"></span>
                  AI Tools & Workflows
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Topaz Labs", "Google AI Studio", "ComfyUI", "Weavy", "Claude Code", "Cursor", "Generative AI"].map((skill, i) => (
                    <span key={skill} className="px-4 py-2 text-sm bg-muted/30 text-foreground/80 font-light rounded-full border border-border/20 hover:bg-muted hover:border-foreground/30 hover:-translate-y-1 hover:text-foreground hover:shadow-sm transition-all duration-300 cursor-default" style={{ animationDelay: `${i * 100}ms` }}>{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
