import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Download, Printer, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Resume — Mohammed Meezan Afzal | MERN Stack Developer",
  description: "Official resume of Mohammed Meezan Afzal, MERN Stack Developer with internship experience at Ethnotech Academy and BCA from MIT Degree College.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6">
      {/* Top Action Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors p-2.5 rounded-lg bg-surface-100/80 border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/resume/Mohammed_Meezan_Afzal_Resume.pdf"
            download="Mohammed_Meezan_Afzal_Resume.pdf"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Resume Paper Container */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 shadow-2xl rounded-sm p-8 sm:p-12 md:p-16 print:p-0 print:shadow-none print:max-w-none font-serif leading-relaxed text-[13.5px] border border-slate-200">
        {/* Header */}
        <header className="text-center pb-4 mb-5 border-b border-slate-300">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-serif">
            Mohammed Meezan Afzal
          </h1>
          <p className="text-base font-semibold text-slate-800 mt-1 font-serif">
            MERN Stack Developer
          </p>
          <p className="text-xs sm:text-sm text-slate-700 mt-1 font-sans">
            Mysore, India &nbsp;|&nbsp; 8095138674 &nbsp;|&nbsp;{" "}
            <a
              href="mailto:mohammedmeezanafzal@gmail.com"
              className="text-blue-700 hover:underline"
            >
              mohammedmeezanafzal@gmail.com
            </a>
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-sans mt-1.5 font-medium text-blue-800">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <span>|</span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-5">
          <h2 className="text-xs font-bold font-sans uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-slate-800 leading-relaxed text-justify text-[13px]">
            Motivated BCA graduate and MERN Stack Developer with internship experience in full-stack web development. Skilled in React.js, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Prisma ORM, REST APIs, Tailwind CSS, Docker and Git. Experienced in developing responsive user interfaces, secure backend services, database-driven applications and API integrations. Passionate about building scalable, maintainable and user-focused web applications.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-5">
          <h2 className="text-xs font-bold font-sans uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2">
            Technical Skills
          </h2>
          <div className="text-[13px] text-slate-800 space-y-1">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
              <span className="sm:col-span-4 font-bold font-sans text-slate-900">
                Languages &amp; Frontend:
              </span>
              <span className="sm:col-span-8">
                JavaScript, HTML5, CSS3, React.js, Tailwind CSS
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
              <span className="sm:col-span-4 font-bold font-sans text-slate-900">
                Backend &amp; APIs:
              </span>
              <span className="sm:col-span-8">
                Node.js, Express.js, REST APIs
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
              <span className="sm:col-span-4 font-bold font-sans text-slate-900">
                Databases &amp; ORM:
              </span>
              <span className="sm:col-span-8">
                MongoDB, PostgreSQL, Prisma ORM
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
              <span className="sm:col-span-4 font-bold font-sans text-slate-900">
                Tools &amp; Platforms:
              </span>
              <span className="sm:col-span-8">
                Git, GitHub, Docker, Clerk Authentication, Cloudinary, Twilio API
              </span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-xs font-bold font-sans uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2">
            Experience
          </h2>

          <div className="mb-2">
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <h3 className="font-bold text-slate-950 text-[13.5px]">
                Intern, Full-Stack Web Development
              </h3>
              <span className="font-bold text-slate-900 text-[13.5px]">
                Ethnotech Academy
              </span>
            </div>

            <ul className="list-disc list-outside ml-5 mt-1.5 space-y-1 text-slate-800 text-[12.5px] leading-relaxed">
              <li>
                Developed and maintained REST APIs and responsive user interfaces as part of full-stack web development tasks.
              </li>
              <li>
                Collaborated using Git version control workflows in a team-based software development environment.
              </li>
              <li>
                Worked on full-stack web development using modern frontend and backend technologies.
              </li>
              <li>
                Developed responsive user interfaces using React.js, JavaScript, HTML5, CSS3 and Tailwind CSS.
              </li>
              <li>
                Built and integrated REST APIs using Node.js and Express.js.
              </li>
              <li>
                Worked with databases and backend services for data-driven web applications.
              </li>
              <li>
                Used Git and GitHub for version control, source code management and collaborative development workflows.
              </li>
              <li>
                Gained practical experience in software development, debugging, API integration and responsive application development.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-5">
          <h2 className="text-xs font-bold font-sans uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2">
            Projects
          </h2>

          <div>
            <h3 className="font-bold text-slate-950 text-[13.5px] mb-1">
              MediLite — Healthcare Record Management System
            </h3>

            <ul className="list-disc list-outside ml-5 space-y-1 text-slate-800 text-[12.5px] leading-relaxed">
              <li>
                Developed a full-stack healthcare record management platform using React.js, Node.js, Express.js, PostgreSQL and Prisma ORM.
              </li>
              <li>
                Implemented role-based authentication and authorization using Clerk for Patients, Doctors and Administrators.
              </li>
              <li>
                Built centralized medical record management functionality for secure digital storage and retrieval of healthcare information.
              </li>
              <li>
                Integrated Cloudinary for secure medical document and media storage.
              </li>
              <li>
                Implemented QR-based temporary profile access to provide controlled access to patient information.
              </li>
              <li>
                Integrated Twilio SMS API to automate medicine reminders and improve patient engagement.
              </li>
              <li>
                Designed responsive dashboards using Tailwind CSS for different user roles and workflows.
              </li>
              <li>
                Developed modular REST APIs and optimized database queries using Prisma ORM.
              </li>
              <li>
                Containerized the application using Docker to simplify development, testing and deployment.
              </li>
            </ul>

            <div className="mt-2 pl-2">
              <span className="font-bold text-slate-900 text-[12.5px] block mb-1">
                Impact
              </span>
              <ul className="list-disc list-outside ml-5 space-y-0.5 text-slate-800 text-[12px] leading-relaxed">
                <li>Improved medical record accessibility through centralized digital storage.</li>
                <li>Enhanced healthcare data security through authentication, authorization, and temporary QR-based access.</li>
                <li>Increased patient engagement using automated medicine reminder notifications.</li>
                <li>Built a scalable backend architecture with modular services and optimized database queries.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-xs font-bold font-sans uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2">
            Education
          </h2>

          <div className="space-y-2 text-[13px]">
            <div>
              <div className="flex flex-wrap items-baseline justify-between">
                <span className="font-bold text-slate-950">
                  Bachelor of Computer Applications (BCA)
                </span>
                <span className="font-semibold text-slate-900">
                  MIT Degree College, Mysore
                </span>
              </div>
              <p className="text-xs text-slate-700 font-sans">
                CGPA: 7.9
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline justify-between">
                <span className="font-bold text-slate-950">
                  Pre-University Education (PUC)
                </span>
                <span className="font-semibold text-slate-900">
                  Sarada Vilas College
                </span>
              </div>
              <p className="text-xs text-slate-700 font-sans">
                Percentage: 76%
              </p>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section>
          <h2 className="text-xs font-bold font-sans uppercase tracking-wider text-blue-900 border-b border-slate-300 pb-1 mb-2">
            Certification
          </h2>

          <div className="space-y-1.5 text-[12.5px] text-slate-800">
            <div>
              <p className="font-bold text-slate-950">
                Internship Completion Certificate – Ethnotech Academy
              </p>
              <a
                href="/images/certificates/ethnotech-certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-700 hover:underline font-sans inline-flex items-center gap-1"
              >
                View Certificate <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div>
              <p className="font-bold text-slate-950">
                Meta Frontend Development Certificate – Coursera
              </p>
              <a
                href="https://res.cloudinary.com/jmn7uizq/image/upload/v1786546532/Coursera_OCCJ4FBMGFB3_page-0001_argmzz.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-700 hover:underline font-sans inline-flex items-center gap-1"
              >
                View Certificate <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div>
              <p className="font-bold text-slate-950">
                Git &amp; GitHub Certificate – Coursera
              </p>
              <a
                href="https://res.cloudinary.com/jmn7uizq/image/upload/v1786546532/Coursera_OCCJ4FBMGFB3_page-0001_argmzz.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-700 hover:underline font-sans inline-flex items-center gap-1"
              >
                View Certificate <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div>
              <p className="font-bold text-slate-950">
                Typescript Certificate – Coursera
              </p>
              <a
                href="https://res.cloudinary.com/jmn7uizq/image/upload/v1786546532/Coursera_OCCJ4FBMGFB3_page-0001_argmzz.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-700 hover:underline font-sans inline-flex items-center gap-1"
              >
                View Certificate <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
