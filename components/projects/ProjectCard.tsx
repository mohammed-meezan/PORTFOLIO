"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Code2,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  featured = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl bg-surface-100/90 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-card flex flex-col justify-between ${
        featured ? "lg:col-span-12 ring-1 ring-cyan-500/20" : "lg:col-span-6"
      }`}
    >
      {/* Featured Ribbon */}
      {featured && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-gradient-to-l from-cyan-500 to-blue-600 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            FEATURED PROJECT
          </div>
        </div>
      )}

      <div>
        {/* Visual Mockup Area */}
        <div className="relative w-full h-56 sm:h-64 md:h-72 bg-gradient-to-br from-surface-300 via-surface-200 to-surface-100 p-6 flex flex-col justify-between border-b border-white/[0.08] overflow-hidden">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar inside mockup visual */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
              <span className="text-[11px] font-mono text-slate-400 ml-2">
                0{index + 1} • {project.category}
              </span>
            </div>
            <Badge variant="subtle" size="sm" className="font-mono text-[10px]">
              Active Architecture
            </Badge>
          </div>

          {/* Center Graphic / Simulated Terminal Preview */}
          <div className="relative z-10 my-auto p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-bold">{project.title}</span>
            </div>
            <p className="text-xs text-slate-300 line-clamp-2 italic font-mono">
              &quot;{project.tagline}&quot;
            </p>
          </div>

          {/* Bottom stack preview pills */}
          <div className="relative z-10 flex flex-wrap items-center gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Key Features &amp; Implementation
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.slice(0, 4).map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-slate-300 leading-normal"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* All Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="subtle" size="sm" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Action CTA Footer */}
      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex flex-wrap items-center gap-3">
        <Button
          href={`/projects/${project.slug}`}
          variant="primary"
          size="sm"
          icon={ArrowRight}
          iconPosition="right"
          className="flex-1 sm:flex-initial"
        >
          View Case Study
        </Button>

        {project.githubUrl && (
          <Button
            href={project.githubUrl}
            external
            variant="secondary"
            size="sm"
            icon={Github}
            className="flex-1 sm:flex-initial"
          >
            Source Code
          </Button>
        )}

        {project.demoUrl && (
          <Button
            href={project.demoUrl}
            external
            variant="outline"
            size="sm"
            icon={ExternalLink}
            className="flex-1 sm:flex-initial"
          >
            Live Demo
          </Button>
        )}
      </div>
    </motion.div>
  );
};
