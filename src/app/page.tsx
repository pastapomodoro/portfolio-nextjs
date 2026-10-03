import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="folio-home">
      <HeroSection />
      <WorksSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
