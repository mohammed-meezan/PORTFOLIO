"use client";

import React from "react";
import { projects } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Featured Engineering Work"
          title="Production-Quality Full-Stack Projects"
          subtitle="Real, working applications built with modern architectures—ranging from AI-driven mock interview platforms to healthcare management and e-commerce."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Project on Top */}
          {featuredProject && (
            <ProjectCard
              project={featuredProject}
              index={0}
              featured={true}
            />
          )}

          {/* Secondary Project Cards */}
          {secondaryProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx + 1}
              featured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
