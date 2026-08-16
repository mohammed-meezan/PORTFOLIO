"use client";

import React from "react";
import { journeyTimeline } from "@/data/experience";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Journey: React.FC = () => {
  return (
    <section id="experience" className="mx-auto mt-24 max-w-5xl px-6 md:mt-32 lg:px-0">
      {/* Title */}
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-brand-purple">
          Career &amp; Learning
        </span>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          My Experience
        </h3>
      </div>

      {/* Philosophy Row */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-[1fr_2fr]">
        <div className="text-xl text-zinc-900 dark:text-white">
          <div className="font-semibold">Hands-on industry exposure</div>
          <div className="font-serif font-normal italic text-zinc-600 dark:text-zinc-400">
            Internship, Academics &amp; Milestones
          </div>
        </div>

        <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
          A milestone-driven track record of formal computer application studies, team-based internship development at Ethnotech Academy, and persistent full-stack engineering work.
        </div>
      </div>

      {/* Experience Cards */}
      <div className="mt-12 space-y-6">
        {journeyTimeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.01] transition-transform duration-200"
          >
            <div className="rounded-[14px] bg-background p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-purple">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                {item.title}
              </h4>

              <p className="text-sm font-semibold text-brand-pink mb-4">
                {item.institution}
              </p>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {item.skills && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
