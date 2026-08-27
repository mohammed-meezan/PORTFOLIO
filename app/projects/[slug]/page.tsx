import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  AlertCircle,
  Lightbulb,
  BookOpen,
  Cpu,
  CheckCircle2,
  Terminal,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Mohammed Meezan Afzal",
    };
  }

  return {
    title: `${project.title} — Case Study | Mohammed Meezan Afzal`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      {/* Background ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded-lg bg-surface-100/60 border border-white/10 hover:border-cyan-500/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <Badge variant="cyan" dot size="sm">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="blue" size="sm">
                Featured Case Study
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="primary"
                size="md"
                icon={Github}
              >
                GitHub Repository
              </Button>
            )}

            {project.demoUrl && (
              <Button
                href={project.demoUrl}
                external
                variant="secondary"
                size="md"
                icon={ExternalLink}
              >
                Live Demonstration
              </Button>
            )}
          </div>
        </header>

        {/* Interactive Architecture & Visual Showcase */}
        <div className="code-window border border-white/10 bg-surface-200/90 shadow-2xl backdrop-blur-xl mb-12">
          <div className="flex items-center justify-between px-4 py-3 bg-surface-300 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>architecture-diagram.ts</span>
            </div>
            <div className="w-8" />
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> System Architecture &amp; Data Flow
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architecture.frontend && (
                <div className="p-4 rounded-xl bg-surface-100/70 border border-white/5">
                  <span className="text-xs text-slate-400 font-mono">
                    Client-Side Tier
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    {project.architecture.frontend}
                  </p>
                </div>
              )}

              {project.architecture.backend && (
                <div className="p-4 rounded-xl bg-surface-100/70 border border-white/5">
                  <span className="text-xs text-slate-400 font-mono">
                    Server &amp; API Tier
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    {project.architecture.backend}
                  </p>
                </div>
              )}

              {project.architecture.database && (
                <div className="p-4 rounded-xl bg-surface-100/70 border border-white/5">
                  <span className="text-xs text-slate-400 font-mono">
                    Data Persistence Tier
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    {project.architecture.database}
                  </p>
                </div>
              )}

              {project.architecture.auth && (
                <div className="p-4 rounded-xl bg-surface-100/70 border border-white/5">
                  <span className="text-xs text-slate-400 font-mono">
                    Security &amp; Auth
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    {project.architecture.auth}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Problem Card */}
          <Card className="p-6 sm:p-8 bg-surface-100/60 border-red-500/20">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              The Challenge &amp; Problem
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </Card>

          {/* Solution Card */}
          <Card className="p-6 sm:p-8 bg-surface-100/60 border-emerald-500/20">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              The Engineering Solution
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </Card>
        </div>

        {/* Overview Narrative */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            Project Overview
          </h2>
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-100/50 border border-white/10 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>{project.fullOverview}</p>
          </div>
        </section>

        {/* Key Features Breakdown */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            Implemented Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface-100/60 border border-white/5 text-sm text-slate-200"
              >
                <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Challenges & Solutions */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            Key Technical Hurdles &amp; Resolutions
          </h2>
          <div className="space-y-4">
            {project.challenges.map((ch, idx) => (
              <Card key={idx} className="p-6 bg-surface-100/70 border-white/10">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-amber-400 font-mono">
                    Hurdle {idx + 1}:
                  </span>
                  {ch.challenge}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-4 border-l-2 border-cyan-400">
                  <strong className="text-cyan-400 font-mono">
                    Resolution:
                  </strong>{" "}
                  {ch.solution}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            What I Learned &amp; Takeaways
          </h2>
          <div className="p-6 rounded-2xl bg-surface-100/60 border border-white/10 space-y-2.5">
            {project.learnings.map((learning, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{learning}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Grid */}
        <section className="mb-16 pt-8 border-t border-white/10">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
            Full Technology Stack Used
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="subtle"
                size="md"
                className="bg-surface-100 border-white/10 text-slate-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/#projects"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Projects
          </Link>
          <Link
            href="/#contact"
            className="text-xs font-mono text-slate-400 hover:text-white"
          >
            Get In Touch &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
