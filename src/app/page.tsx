 
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
        <FallingPattern className="absolute inset-0 z-0 opacity-10" color="var(--foreground)" backgroundColor="transparent" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="flex flex-col border-b border-border/40 pb-12 mb-12">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-foreground leading-none mb-10">
                Eugenio<br />
                <span className="text-muted-foreground font-extralight">Bellini</span>
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 font-light w-fit">
                <Link href="/#projects">View Works</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border text-foreground hover:bg-muted font-light w-fit">
                <a href="mailto:eugenio.bellini@yahoo.it">Contact</a>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs tracking-widest uppercase text-muted-foreground font-light">
            <span>Graphic Designer</span>
            <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-primary/50"></span>
            <span>Art Director</span>
            <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-primary/50"></span>
            <span>Based in Verona, Italy</span>
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
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
              About Me
            </h2>
            <div className="w-16 h-px bg-foreground mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-normal text-foreground mb-8">Hi, I’m Eugenio</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 whitespace-pre-line">
                {`Hi, I’m Eugenio, 22, based in Verona. I am a Graphic Design & Art Direction student passionate about UX/UI, motion graphics, branding, and innovative visual storytelling. I enjoy exploring the intersection of creativity and technology, using traditional design skills alongside AI-driven tools to enhance ideas and workflows.`}
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

            <div className="space-y-6">
              <Card className="relative border-border bg-card shadow-sm hover:shadow-md transition-all duration-500 ease-out overflow-hidden rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-normal text-foreground flex items-center gap-2">
                    Toolset
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-light text-base">
                    Tecnologie e competenze che utilizzo nei miei progetti
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-4">
                      <h5 className="text-xs font-normal text-muted-foreground tracking-widest uppercase">
                        Design & Prototyping
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">Adobe Photoshop</Badge>
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">Illustrator</Badge>
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">InDesign</Badge>
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">Figma</Badge>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    <div className="space-y-4">
                      <h5 className="text-xs font-normal text-muted-foreground tracking-widest uppercase">
                        Motion & Video
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">After Effects</Badge>
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">Premiere Pro</Badge>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    <div className="space-y-4">
                      <h5 className="text-xs font-normal text-muted-foreground tracking-widest uppercase">
                        3D & Visualization
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">Blender</Badge>
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">Hunyuan3D</Badge>
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">Meshy AI</Badge>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    <div className="space-y-4">
                      <h5 className="text-xs font-normal text-muted-foreground tracking-widest uppercase">
                        Web & Digital
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">HTML</Badge>
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">CSS</Badge>
                        <Badge variant="secondary" className="px-3 py-1 text-xs bg-muted text-foreground font-light border border-border/50 hover:bg-muted/80 rounded-full">React</Badge>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h5 className="text-xs font-normal text-muted-foreground tracking-widest uppercase">AI Tools</h5>
                        <div className="text-sm font-light text-foreground">Alta esperienza</div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-xs font-normal text-muted-foreground tracking-widest uppercase">Lingue</h5>
                        <div className="text-sm font-light text-foreground">Inglese fluente</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
