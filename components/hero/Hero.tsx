"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="mx-auto mt-16 max-w-5xl px-6 md:mt-28 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        {/* Intro */}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Full Stack Developer
        </p>

        {/* Name */}
        <h1 className="mb-6 font-serif text-5xl italic tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl">
          Mohammed Meezan
        </h1>

        {/* Main headline */}
        <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
          I engineer <span className="font-serif font-normal">&amp;</span> craft
          scalable full-stack web applications that solve real-world problems.
        </h2>

        {/* Supporting text */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg">
          I build modern, reliable, and user-focused digital experiences with a
          strong focus on clean architecture, performance, and great developer
          experience.
        </p>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="group rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 transition-transform hover:scale-[1.02]"
        >
          <div className="flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-pink to-brand-purple px-5 py-2.5 text-sm font-semibold text-white">
            <span>See Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </a>

        <Link
          href="/resume"
          className="group rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 transition-transform hover:scale-[1.02]"
        >
          <div className="flex items-center gap-2 rounded-md bg-background px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-all group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple group-hover:text-white dark:text-white">
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};
