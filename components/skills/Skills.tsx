"use client";

import React, { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Tools & DevOps" | "AI & Cloud";
}

const workStack: SkillItem[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML5 / CSS3", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },
  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "Prisma ORM", category: "Databases" },
  { name: "Docker", category: "Tools & DevOps" },
  { name: "Git & GitHub", category: "Tools & DevOps" },
  { name: "Clerk Auth", category: "Tools & DevOps" },
  { name: "Cloudinary", category: "Tools & DevOps" },
  { name: "Twilio API", category: "Tools & DevOps" },
  { name: "OpenAI API", category: "AI & Cloud" },
  { name: "Gemini API", category: "AI & Cloud" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Databases",
  "Tools & DevOps",
  "AI & Cloud",
] as const;

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? workStack
      : workStack.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="mx-auto mt-24 max-w-5xl px-6 md:mt-32 lg:px-0">
      {/* Title */}
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-brand-purple">
          Capabilities
        </span>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          My Skills
        </h3>
      </div>

      {/* Philosophy Row */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-[1fr_2fr]">
        <div className="text-xl text-zinc-900 dark:text-white">
          <div className="font-semibold">I build things for people</div>
          <div className="font-serif font-normal italic text-zinc-600 dark:text-zinc-400">
            I can Architect, Develop, Deploy
          </div>
        </div>

        <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
          My core stack is <strong>Next.js and the modern MERN ecosystem (React, Node.js, Express, PostgreSQL / MongoDB with Prisma ORM)</strong>. I focus on building responsive user interfaces, modular REST APIs, secure role-based access control (RBAC), and connecting cutting-edge AI models for smart workflow automation.
        </div>
      </div>

      {/* Categories Row matching amanjag.dev */}
      <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_2fr]">
        <div className="flex items-center gap-3 text-xl text-zinc-900 dark:text-white font-semibold">
          <span>Categories</span>
          <ArrowRight className="w-4 h-4 text-brand-purple" />
        </div>

        <nav className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer select-none rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-sm"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* Work Stack Grid matching amanjag.dev */}
      <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_2fr]">
        <div className="flex items-center gap-3 text-xl text-zinc-900 dark:text-white font-semibold">
          <span>Work Stack</span>
          <ArrowRight className="w-4 h-4 text-brand-purple" />
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-purple/50 transition-colors text-sm font-medium text-zinc-800 dark:text-zinc-200"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple shrink-0" />
              <span className="truncate">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
