"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"architecture" | "stack">("architecture");

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <div className="mb-4">
              <Badge variant="cyan" dot size="md">
                {siteConfig.status} • 2026 Grad
              </Badge>
            </div>

            {/* Greeting */}
            <span className="text-slate-400 font-mono text-sm sm:text-base tracking-wider uppercase">
              Hello, I&apos;m
            </span>

            {/* Name */}
            <h1 className="mt-1 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
              <span className="text-gradient-silver">Mohammed</span>{" "}
              <span className="text-gradient-cyan">Meezan Afzal</span>
            </h1>

            {/* Role Title */}
            <div className="mt-3 inline-flex items-center gap-2">
              <span className="text-lg sm:text-2xl font-semibold text-cyan-400 font-mono">
                &gt; {siteConfig.role}
              </span>
            </div>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {siteConfig.tagline}
            </p>

            {/* Quick Context Highlights */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                {siteConfig.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:inline-block" />
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                BCA — MIT Degree College
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto font-semibold"
              >
                View Projects
              </Button>

              <Button
                href={siteConfig.resumePath}
                external
                variant="secondary"
                size="lg"
                icon={Download}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Secondary Social & Contact Links */}
            <div className="mt-10 pt-6 border-t border-white/10 w-full flex items-center gap-5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface-100 hover:bg-surface-50 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface-100 hover:bg-surface-50 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-2.5 rounded-lg bg-surface-100 hover:bg-surface-50 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Developer Visual / Interactive Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="code-window border border-white/10 bg-surface-200/90 shadow-2xl backdrop-blur-xl">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-surface-300 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>developer.config.ts</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Window Tabs */}
              <div className="flex border-b border-white/10 bg-surface-100/50 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`px-4 py-2 flex items-center gap-2 border-r border-white/10 transition-colors ${
                    activeTab === "architecture"
                      ? "bg-surface-200 text-cyan-400 border-b-2 border-b-cyan-400"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  Profile.ts
                </button>
                <button
                  onClick={() => setActiveTab("stack")}
                  className={`px-4 py-2 flex items-center gap-2 border-r border-white/10 transition-colors ${
                    activeTab === "stack"
                      ? "bg-surface-200 text-cyan-400 border-b-2 border-b-cyan-400"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  StackSummary.json
                </button>
              </div>

              {/* Window Code Content */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                {activeTab === "architecture" ? (
                  <div className="space-y-1">
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-yellow-300">developer</span>{" "}
                      <span className="text-purple-400">:</span>{" "}
                      <span className="text-emerald-300">DeveloperProfile</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">name</span>:{" "}
                      <span className="text-emerald-300">&quot;Mohammed Meezan Afzal&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">role</span>:{" "}
                      <span className="text-emerald-300">&quot;MERN Stack Developer&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">education</span>: &#123;
                    </p>
                    <p className="pl-8">
                      <span className="text-cyan-300">degree</span>:{" "}
                      <span className="text-emerald-300">&quot;BCA&quot;</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-cyan-300">college</span>:{" "}
                      <span className="text-emerald-300">&quot;MIT Degree College&quot;</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-cyan-300">gradYear</span>:{" "}
                      <span className="text-yellow-300">2026</span>,
                    </p>
                    <p className="pl-4">&#125;,</p>
                    <p className="pl-4">
                      <span className="text-cyan-300">coreSpecialties</span>: [
                    </p>
                    <p className="pl-8 text-emerald-300">
                      &quot;Full-Stack Web Engineering&quot;,
                    </p>
                    <p className="pl-8 text-emerald-300">
                      &quot;REST APIs &amp; Auth (JWT/Clerk)&quot;,
                    </p>
                    <p className="pl-8 text-emerald-300">
                      &quot;Database Schema Architecture&quot;,
                    </p>
                    <p className="pl-8 text-emerald-300">
                      &quot;Generative AI Integrations&quot;,
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-cyan-300">openToRelocate</span>:{" "}
                      <span className="text-purple-400">true</span>,
                    </p>
                    <p>&#125;;</p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p>&#123;</p>
                    <p className="pl-4">
                      <span className="text-cyan-300">&quot;frontend&quot;</span>: [
                      <span className="text-emerald-300">&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Tailwind CSS&quot;</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">&quot;backend&quot;</span>: [
                      <span className="text-emerald-300">&quot;Node.js&quot;, &quot;Express.js&quot;, &quot;REST APIs&quot;, &quot;JWT&quot;</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">&quot;databases&quot;</span>: [
                      <span className="text-emerald-300">&quot;MongoDB&quot;, &quot;PostgreSQL&quot;, &quot;Prisma ORM&quot;</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">&quot;cloud_tools&quot;</span>: [
                      <span className="text-emerald-300">&quot;Docker&quot;, &quot;Cloudinary&quot;, &quot;Git/GitHub&quot;, &quot;Vercel&quot;</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">&quot;ai_apis&quot;</span>: [
                      <span className="text-emerald-300">&quot;OpenAI API&quot;, &quot;Gemini API&quot;</span>]
                    </p>
                    <p>&#125;</p>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2.5 bg-surface-300/80 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ready for hire
                </span>
                <span>UTF-8 • TypeScript</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
