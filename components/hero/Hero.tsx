"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, FileText, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="mx-auto mt-16 max-w-5xl px-6 md:mt-28 lg:px-0">
      <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between gap-10">
        {/* Left Headline Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="mb-4 font-serif text-5xl italic text-zinc-900 dark:text-white md:text-6xl">
            hello world
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[38px] md:leading-[54px] tracking-tight text-zinc-900 dark:text-white font-semibold">
            I engineer <span className="font-serif font-normal">&amp;</span> craft scalable full-stack web applications, that solve your{" "}
            <span className="font-serif italic font-normal">engineering tasks</span>
          </h2>
        </motion.div>

        {/* Right Narrative Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-sm text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
        >
          Hello, I&apos;m <span className="font-semibold text-zinc-900 dark:text-white">{siteConfig.name}</span>, a MERN Stack Developer with practical internship experience in{" "}
          <span className="font-semibold text-zinc-900 dark:text-white">full-stack web development</span> — architecting robust APIs, responsive UIs, and AI-powered solutions.
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="group cursor-pointer rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.02] transition-transform"
        >
          <div className="flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-pink to-brand-purple px-5 py-2.5 text-sm font-semibold text-white">
            <span>See Projects</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </a>

        <Link
          href="/resume"
          className="group cursor-pointer rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.02] transition-transform"
        >
          <div className="flex items-center gap-2 rounded-md bg-background px-5 py-2.5 text-sm font-semibold text-zinc-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple group-hover:text-white transition-all">
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};
