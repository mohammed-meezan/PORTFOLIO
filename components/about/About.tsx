"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import {
  GraduationCap,
  Layers,
  Sparkles,
  MapPin,
  CheckCircle,
  Database,
  Lock,
  Server,
  Cloud,
  Layout,
} from "lucide-react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      subtitle: siteConfig.education.degree,
      detail: `${siteConfig.education.college} (Graduating ${siteConfig.education.graduationYear})`,
      color: "text-cyan-400",
    },
    {
      icon: Layers,
      title: "Core Focus",
      subtitle: "Full-Stack Web Development",
      detail: "React, Node.js, Express, PostgreSQL & MongoDB",
      color: "text-blue-400",
    },
    {
      icon: Sparkles,
      title: "Interests",
      subtitle: "Web Apps • AI Integrations",
      detail: "Building production-grade tools with modern LLM APIs",
      color: "text-emerald-400",
    },
    {
      icon: MapPin,
      title: "Location",
      subtitle: siteConfig.location,
      detail: "Open to Remote & On-site Roles across India",
      color: "text-purple-400",
    },
  ];

  const practicalAreas = [
    {
      icon: Lock,
      title: "Authentication & Security",
      desc: "JWT, bcrypt, Clerk Auth, role-based access control (RBAC)",
    },
    {
      icon: Server,
      title: "REST APIs & Backend",
      desc: "Modular Express routers, middleware chains, async handlers",
    },
    {
      icon: Database,
      title: "Database Architectures",
      desc: "PostgreSQL with Prisma ORM and MongoDB with Mongoose",
    },
    {
      icon: Cloud,
      title: "Cloud & Media Storage",
      desc: "Cloudinary media pipelines and Dockerized deployment",
    },
    {
      icon: Layout,
      title: "Responsive Dashboards",
      desc: "Component-driven React UI with Tailwind CSS and state systems",
    },
    {
      icon: Sparkles,
      title: "AI API Integrations",
      desc: "Connecting OpenAI and Gemini APIs for real-time evaluations",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="About Me"
          title="Bridging Theoretical Foundations with Real-World Full-Stack Engineering"
          subtitle="A dedicated developer combining computer applications coursework with hands-on project architectures."
        />

        {/* 4 Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between border-white/[0.07] bg-surface-100/60 p-5">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-surface-50 border border-white/10 flex items-center justify-center mb-4">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                      {item.title}
                    </span>
                    <h3 className="text-base font-semibold text-white mt-1">
                      {item.subtitle}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-white/5">
                    {item.detail}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bio & Practical Experience Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Bio */}
          <div className="lg:col-span-6 bg-surface-100/50 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Developer Background
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a <strong>Bachelor of Computer Applications (BCA)</strong> graduate/student at{" "}
                <strong>MIT Degree College, Mysore</strong> (CGPA: <strong>7.9</strong>), with practical
                internship experience in full-stack web development at <strong>Ethnotech Academy</strong>.
              </p>
              <p>
                My expertise centers on the modern JavaScript ecosystem—including <strong>React.js, Node.js, Express.js, PostgreSQL (Prisma ORM), MongoDB, Tailwind CSS, Docker</strong> and <strong>Git</strong>.
              </p>
              <p>
                I specialize in developing responsive user interfaces, modular REST APIs, secure role-based access control (RBAC), and cloud-integrated applications (Cloudinary, Twilio SMS) that solve real-world problems.
              </p>
            </div>
          </div>

          {/* Practical Capabilities Grid */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Demonstrated Hands-on Areas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {practicalAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="p-4 rounded-xl bg-surface-200/60 border border-white/5 hover:border-cyan-500/20 transition-all"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-semibold text-white">
                        {area.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
