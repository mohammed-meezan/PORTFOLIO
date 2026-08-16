"use client";

import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="mx-auto mt-24 max-w-5xl px-6 md:mt-32 lg:px-0">
      {/* Title */}
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-brand-purple">
          Selected Works
        </span>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          My Projects
        </h3>
      </div>

      {/* Philosophy Row matching amanjag.dev */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-[1fr_2fr]">
        <div className="text-xl text-zinc-900 dark:text-white">
          <div className="font-semibold">From concept to deployment</div>
          <div className="font-serif font-normal italic text-zinc-600 dark:text-zinc-400">
            Real Full-Stack Engineering
          </div>
        </div>

        <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
          Here are selected full-stack web applications demonstrating clean React/Next.js architecture, modular Node.js/Express APIs, PostgreSQL/MongoDB schemas with Prisma ORM, role-based authorization, and practical AI integrations.
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-12 flex flex-col gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};
