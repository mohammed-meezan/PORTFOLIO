import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Journey } from "@/components/journey/Journey";
import { Certifications } from "@/components/certifications/Certifications";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Journey />
      <Certifications />
      <ContactSection />
      <Footer />
    </main>
  );
}
