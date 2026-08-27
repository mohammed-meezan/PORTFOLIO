"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { Certification } from "@/types";
import { CertModal } from "./CertModal";
import { Eye, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section
      id="certificates"
      className="mx-auto mt-24 max-w-5xl px-6 md:mt-32 lg:px-0"
    >
      {/* Title */}
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-brand-purple">
          Credentials
        </span>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          My Certificates
        </h3>
      </div>

      {/* Philosophy Row */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-[1fr_2fr]">
        <div className="text-xl text-zinc-900 dark:text-white">
          <div className="font-semibold">Verified achievements</div>
          <div className="font-serif font-normal italic text-zinc-600 dark:text-zinc-400">
            Internship &amp; Coursera Specializations
          </div>
        </div>

        <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
          Formal credentials earned through competitive coursework and
          real-world internship programs, validating competencies across
          Full-Stack Web Development, Frontend Engineering, and Git Version
          Control.
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.01] transition-transform duration-200"
          >
            <div className="h-full rounded-[14px] bg-background p-6 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Certificate Image Preview */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-full h-48 sm:h-52 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-5 overflow-hidden cursor-pointer group-hover:border-brand-purple/50 transition-all"
                >
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      Preview Certificate
                    </span>
                  </div>
                </div>

                {/* Issuer & Date */}
                <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono text-brand-purple font-semibold">
                  <span>{cert.issuer}</span>
                  <span className="text-zinc-500">{cert.issueDate}</span>
                </div>

                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {cert.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 py-2 px-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-brand-purple text-zinc-700 dark:text-zinc-300 hover:text-brand-purple text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Direct Link</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Preview Modal */}
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};
