"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { Certification } from "@/types";
import { Button } from "../ui/Button";

interface CertModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertModal: React.FC<CertModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-100 border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-surface-200/90">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {cert.title}
            </h3>
            <p className="text-xs text-cyan-400 font-mono">
              {cert.issuer} • {cert.issueDate}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface-100 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Open original certificate in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-surface-100 hover:bg-white/10 text-slate-300 hover:text-white transition-colors focus:outline-none"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[450px] bg-black/60 p-4 flex items-center justify-center overflow-auto">
          <div className="relative w-full h-[350px] sm:h-[500px]">
            <Image
              src={cert.imageUrl}
              alt={cert.title}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              priority
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-surface-200/90 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>{cert.description}</span>
          <Button
            href={cert.credentialUrl}
            external
            variant="outline"
            size="sm"
            icon={ExternalLink}
          >
            View High-Res
          </Button>
        </div>
      </div>
    </div>
  );
};
