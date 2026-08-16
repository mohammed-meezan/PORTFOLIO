"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Menu, X, MessageSquare } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 lg:px-0">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-zinc-900 dark:text-white font-bold text-lg tracking-tight hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 inline-block">
            <span className="w-full h-full rounded-[6px] bg-background flex items-center justify-center text-xs font-bold text-zinc-900 dark:text-white">
              {siteConfig.initials}
            </span>
          </span>
          <span className="font-semibold">{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav Items + Actions */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Contact Button */}
          <a
            href="#contact"
            className="group cursor-pointer rounded-lg bg-gradient-to-r from-brand-pink to-brand-purple p-0.5 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-2 rounded-md bg-background px-4 py-1.5 text-sm font-medium text-zinc-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-brand-pink group-hover:to-brand-purple group-hover:text-white transition-all">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </div>
          </a>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 md:hidden"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-background px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-base font-medium text-brand-purple hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Resume (View / Download)
          </a>
        </div>
      )}
    </header>
  );
};
