 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, Award, Users } from "lucide-react";
import Link from "next/link";
import { FallingPattern } from "@/components/ui/falling-pattern";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import { SocialLinks } from "@/components/ui/social-links";
import { RevealImageList } from "@/components/ui/reveal-images";
import { Footer } from "@/components/ui/footer-section";
import { SlidingBanner } from "@/components/ui/sliding-banner";
// Tiles removed from sections per request

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Standard */}
      <section id="home" className="relative min-h-[70vh] md:min-h-screen px-4 md:px-6 bg-background border-b border-border overflow-hidden flex items-center">
        <FallingPattern className="absolute inset-0 z-0 opacity-60" color="var(--primary)" backgroundColor="var(--background)" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Eugenio Bellini
              </h1>
              <div className="h-1 w-24 bg-primary my-6 rounded-full" />
              
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/#projects">View portfolio</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="mailto:eugenio.bellini@yahoo.it">Contact me</a>
                </Button>
              </div>

              
            </div>
            <div className="hidden lg:flex justify-center">
              <OrbitingSkills />
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Banner Divider */}
      <SlidingBanner height="h-80 md:h-[26rem]" speed={10} />

      {/* Projects entry (Reveal list) */}
      <section id="projects" className="relative py-16 px-6 bg-black">
        <div className="container mx-auto max-w-6xl relative z-10">
          <RevealImageList />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chi Sono
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Hi, I’m Eugenio</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-line">{`Hi, I’m Eugenio, 22, based in Verona. I am a Graphic Design & Art Direction student passionate about UX/UI, motion graphics, branding, and innovative visual storytelling. I enjoy exploring the intersection of creativity and technology, using traditional design skills alongside AI-driven tools to enhance ideas and workflows.`}</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">{`I approach each project with curiosity and adaptability, aiming to create solutions that are both functional and visually engaging, while constantly learning new techniques and staying updated on design trends. My work reflects a balance between aesthetic impact and strategic thinking, driven by a desire to communicate ideas clearly and effectively.`}</p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-green-400">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">Clienti Soddisfatti</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">Progetti Completati</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Star className="w-5 h-5" />
                  <span className="text-sm">Anni di Esperienza</span>
                </div>
              </div>

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
                      image: "https://cdn.simpleicons.org/github/ffffff",
                      href: "https://github.com/pastapomodoro",
                    },
                    {
                      name: "Mail",
                      image: "https://cdn.simpleicons.org/gmail/ffffff",
                      href: "mailto:eugenio.bellini@yahoo.it",
                    },
                    {
                      name: "LinkedIn",
                      image: "https://link-hover-lndev.vercel.app/linkedin.png",
                      href: "https://linkedin.com/",
                    },
                  ]}
                  className="gap-2"
                />
              </div>
            </div>

            <div className="space-y-6">
              <Card className="relative border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl shadow-2xl shadow-black/20 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none hover:shadow-3xl hover:shadow-black/30 transition-all duration-500 ease-out">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                    🛠️ Toolset
                  </CardTitle>
                  <CardDescription className="text-foreground/70">
                    Tecnologie e competenze che utilizzo nei miei progetti
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-primary flex items-center gap-2">
                        🎨 Design & Prototyping
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Adobe Photoshop</Badge>
                        <Badge variant="secondary" className="text-xs">Illustrator</Badge>
                        <Badge variant="secondary" className="text-xs">InDesign</Badge>
                        <Badge variant="secondary" className="text-xs">Figma</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-primary flex items-center gap-2">
                        🎬 Motion & Video
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">After Effects</Badge>
                        <Badge variant="secondary" className="text-xs">Premiere Pro</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-primary flex items-center gap-2">
                        🎯 3D & Visualization
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Blender</Badge>
                        <Badge variant="secondary" className="text-xs">Hunyuan3D</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-primary flex items-center gap-2">
                        💻 Web & Digital
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">HTML</Badge>
                        <Badge variant="secondary" className="text-xs">CSS</Badge>
                        <Badge variant="secondary" className="text-xs">React</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-primary flex items-center gap-2">
                        🤖 AI Tools
                      </h5>
                      <Badge variant="outline" className="text-xs border-green-500 text-green-400">
                        Alta esperienza con strumenti basati su AI
                      </Badge>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-primary flex items-center gap-2">
                        🌍 Lingue
                      </h5>
                      <Badge variant="outline" className="text-xs border-blue-500 text-blue-400">
                        Inglese fluente - Livello professionale
                      </Badge>
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
