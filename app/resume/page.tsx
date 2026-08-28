import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Resume — Mohammed Meezan Afzal | MERN Stack Developer",
  description:
    "Official resume of Mohammed Meezan Afzal, MERN Stack Developer with internship experience at Ethnotech Academy and BCA from MIT Degree College.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 transition-colors max-w-3xl mx-auto">
      {/* Top Action Bar */}
      <div className=" mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/resume/Mohammed_Meezan_Afzal_Resume.pdf"
            download="Mohammed_Meezan_Afzal_Resume.pdf"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple hover:opacity-95 text-white shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>

      {/* Resume Paper Container */}
     <div className="w-full h-screen">
      <iframe
        src="./resume/Mohammed_Meezan_Afzal_Resume.pdf#&navpanes=0&scrollbar=0"
        width="100%"
        height="100%"
        allow="autoplay"
        title="Mohammed Sadiq full stack web developer resume preview"
      />
    </div>
    </div>
  );
}
