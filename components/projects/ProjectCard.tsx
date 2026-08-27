"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { ExternalLink, Github, ArrowRight, Check, Pickaxe } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.01] transition-transform duration-300"
    >
      <div className="h-full rounded-[14px] bg-background p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple">
              0{index + 1} • {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-pink/10 text-brand-pink border border-brand-pink/20">
                <Pickaxe className="w-3.5 h-3.5" />
                In Progress
              </span>
            )}
          </div>

          {/* Project Title */}
          <h4 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-brand-purple transition-colors"
            >
              {project.title}
            </Link>
          </h4>

          {/* Tagline */}
          <p className="text-sm font-medium text-brand-purple mb-4">
            &quot;{project.tagline}&quot;
          </p>

          {/* Description */}
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Features Bullet points */}
          <div className="mb-6 space-y-2 border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
              Key Implementations:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300">
              {project.features.slice(0, 4).map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.02] transition-transform text-xs font-semibold"
          >
            <div className="flex items-center gap-1.5 rounded-[6px] bg-gradient-to-r from-brand-pink to-brand-purple px-4 py-2 text-white">
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 border border-zinc-300 dark:border-zinc-700 hover:border-brand-purple text-zinc-700 dark:text-zinc-300 hover:text-brand-purple text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
