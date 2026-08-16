"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  Code,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayedCategories = selectedCategory
    ? skillCategories.filter((c) => c.title === selectedCategory)
    : skillCategories;

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-surface-300/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Technical Competencies"
          title="Modern Technologies & Full-Stack Tooling"
          subtitle="Proficiencies focused on building scalable, reliable, and user-centric web applications and AI-augmented services."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedCategory === null
                ? "bg-cyan-500 text-black font-semibold shadow-glow-cyan"
                : "bg-surface-100 text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.title
                  ? "bg-cyan-500 text-black font-semibold shadow-glow-cyan"
                  : "bg-surface-100 text-slate-300 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full flex flex-col justify-between border-white/[0.08] bg-surface-100/70 p-6 hover:border-cyan-500/30">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">
                          {category.title}
                        </h3>
                        <span className="text-xs text-slate-400">
                          {category.skills.length} core technologies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="subtle"
                          size="md"
                          className="bg-surface-200/80 hover:border-cyan-400/40 text-slate-200"
                        >
                          <Check className="w-3 h-3 text-cyan-400" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
