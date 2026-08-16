"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { Certification } from "@/types";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { CertModal } from "./CertModal";
import { Award, ExternalLink, Eye, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Verified Credentials"
          title="Certifications &amp; Practical Training"
          subtitle="Validated programs demonstrating technical competency in modern full-stack development, frameworks, and web architectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between p-6 bg-surface-100/70 border-white/[0.08] hover:border-cyan-500/30 overflow-hidden group">
                <div>
                  {/* Certificate Image Preview */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-full h-48 sm:h-56 rounded-xl bg-surface-300 border border-white/10 mb-6 overflow-hidden cursor-pointer group-hover:border-cyan-500/40 transition-all"
                  >
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-cyan-500 text-black text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        Preview Certificate
                      </span>
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400">
                      {cert.issuer}
                    </span>
                    <Badge variant="subtle" size="sm">
                      {cert.issueDate}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="subtle"
                        size="sm"
                        className="text-[11px] bg-surface-200/60"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  <Button
                    onClick={() => setSelectedCert(cert)}
                    variant="secondary"
                    size="sm"
                    icon={Eye}
                    className="flex-1"
                  >
                    Preview
                  </Button>

                  <Button
                    href={cert.credentialUrl}
                    external
                    variant="outline"
                    size="sm"
                    icon={ExternalLink}
                    className="flex-1"
                  >
                    Direct Link
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CertModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
