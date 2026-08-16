"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Github, Linkedin, Mail, FileText, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <section id="about" className="mx-auto mt-24 max-w-5xl px-6 md:mt-32 lg:px-0">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-brand-purple">
          About Me
        </span>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          {siteConfig.name}
        </h3>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-[1fr_2fr]">
        {/* Left Column Philosophy */}
        <div className="text-xl text-zinc-900 dark:text-white">
          <div className="font-semibold">My approach to the work is</div>
          <div className="font-serif font-normal italic text-zinc-600 dark:text-zinc-400">
            logic, consistency, and scalability
          </div>
        </div>

        {/* Right Column Narrative + Socials */}
        <div className="flex flex-col gap-6 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
          <p>
            I&apos;m <strong>Mohammed Meezan Afzal</strong>, a motivated BCA graduate (MIT Degree College, Mysore — CGPA: 7.9) and MERN Stack Developer with practical internship experience in full-stack web development at <strong>Ethnotech Academy</strong>.
          </p>
          <p>
            I specialize in developing responsive user interfaces, secure backend services, database-driven applications (PostgreSQL, MongoDB, Prisma ORM), and integrating modern AI capabilities. I prioritize writing clean, maintainable code with robust error handling and intuitive user experiences.
          </p>

          {/* Social Links with Gradient Borders matching amanjag.dev */}
          <div className="flex flex-wrap gap-3 pt-2">
            {/* GitHub */}
            <a
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              href={siteConfig.github}
              className="group cursor-pointer rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-2 rounded-md bg-background p-2.5 text-zinc-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple group-hover:text-white transition-all">
                <Github className="w-5 h-5" />
                <span className="text-xs font-semibold">GitHub</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              href={siteConfig.linkedin}
              className="group cursor-pointer rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-2 rounded-md bg-background p-2.5 text-zinc-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple group-hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
                <span className="text-xs font-semibold">LinkedIn</span>
              </div>
            </a>

            {/* Email */}
            <a
              title="Email"
              href={`mailto:${siteConfig.email}`}
              className="group cursor-pointer rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-2 rounded-md bg-background p-2.5 text-zinc-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
                <span className="text-xs font-semibold">Email</span>
              </div>
            </a>

            {/* Resume */}
            <a
              title="Resume"
              href="/resume"
              className="group cursor-pointer rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-2 rounded-md bg-background p-2.5 text-zinc-800 dark:text-white group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple group-hover:text-white transition-all">
                <FileText className="w-5 h-5" />
                <span className="text-xs font-semibold">Resume</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
