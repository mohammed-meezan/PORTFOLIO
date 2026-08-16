import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Journey } from "@/components/journey/Journey";
import { Certifications } from "@/components/certifications/Certifications";
import { GitHubActivity } from "@/components/github/GitHubActivity";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Journey />
      <Certifications />
      <GitHubActivity />
      <ContactSection />
      <Footer />
    </main>
  );
}
