"use client";

import React from "react";
import { journeyTimeline } from "@/data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import {
  GraduationCap,
  Code2,
  Award,
  Calendar,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const typeIconMap = {
  education: GraduationCap,
  milestone: Code2,
  certification: Award,
};

const typeColorMap = {
  education: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  milestone: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  certification: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
};

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 relative bg-surface-300/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Education & Milestones"
          title="My Developer Journey"
          subtitle="A transparent, milestone-based timeline highlighting academic foundation, continuous full-stack skill building, and practical application engineering."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 ml-2 sm:ml-6">
          {journeyTimeline.map((item, index) => {
            const Icon = typeIconMap[item.type] || Sparkles;
            const colorClass = typeColorMap[item.type] || "text-cyan-400 border-cyan-500/30 bg-cyan-500/10";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-xl border flex items-center justify-center backdrop-blur-md shadow-md transition-transform group-hover:scale-110 ${colorClass}`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Timeline content card */}
                <Card className="p-6 bg-surface-100/70 border-white/[0.08] hover:border-cyan-500/30">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-300 mb-3">
                    {item.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {item.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="subtle"
                          size="sm"
                          className="text-[11px] bg-surface-200/80"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
