"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { projects } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  Github,
  GitBranch,
  ExternalLink,
  Code2,
  FolderGit2,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export const GitHubActivity: React.FC = () => {
  return (
    <section id="github" className="py-20 md:py-28 relative bg-surface-300/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Open Source & Codebase"
          title="Building. Learning. Shipping."
          subtitle="Explore the source repositories, commit history, and technical architecture of my full-stack applications directly on GitHub."
        />

        <div className="max-w-5xl mx-auto">
          {/* Main GitHub Profile Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 sm:p-8 bg-surface-100/80 border-white/10 hover:border-cyan-500/30 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-surface-50 to-surface-200 border border-white/15 flex items-center justify-center text-cyan-400 shadow-lg">
                    <Github className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">
                        {siteConfig.name}
                      </h3>
                      <Badge variant="cyan" size="sm">
                        Developer
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                      Full-Stack &amp; MERN Web Engineering
                    </p>
                  </div>
                </div>

                <Button
                  href={siteConfig.github}
                  external
                  variant="primary"
                  size="md"
                  icon={Github}
                  className="w-full sm:w-auto"
                >
                  Visit GitHub Profile
                </Button>
              </div>

              {/* Technologies Distribution */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 block">
                  Primary Stack Distribution Across Repositories
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5">
                    <span className="text-xs text-slate-400">Frontend</span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      TypeScript / React
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5">
                    <span className="text-xs text-slate-400">Backend</span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Node.js / Express
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5">
                    <span className="text-xs text-slate-400">Databases</span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      PostgreSQL / MongoDB
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5">
                    <span className="text-xs text-slate-400">AI / Cloud</span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      OpenAI / Cloudinary
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Repository Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="h-full p-5 rounded-2xl bg-surface-100/60 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                        <FolderGit2 className="w-4 h-4" />
                        <span className="truncate">{project.slug}</span>
                      </div>
                      <Badge variant="subtle" size="sm" className="text-[10px]">
                        Public
                      </Badge>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-2 line-clamp-1">
                      {project.title}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-200 text-slate-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.githubUrl || siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 pt-3 border-t border-white/5 transition-colors"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
