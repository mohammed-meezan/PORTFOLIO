"use client";

import React from "react";
import {
  TypeScriptLogo,
  JavaScriptLogo,
  NextJsLogo,
  ReactLogo,
  NodeJsLogo,
  HtmlLogo,
  TailwindCssLogo,
  CssLogo,
  GitHubLogo,
  ExpressJsLogo,
  VercelLogo,
  MongoDbLogo,
  JWTLogo,
  ClerkLogo,
  CloudinaryLogo,
} from "@/components/icons/icons";

export const Skills: React.FC = () => {
  const SKILLS = [
    {
      name: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      logo: HtmlLogo,
    },

    {
      name: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      logo: CssLogo,
    },
    {
      name: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: JavaScriptLogo,
    },
    {
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
      logo: TypeScriptLogo,
    },

    {
      name: "Next.js",
      href: "https://nextjs.org/",
      logo: NextJsLogo,
    },
    {
      name: "React.js",
      href: "https://react.dev/",
      logo: ReactLogo,
    },
    {
      name: "Node.js",
      href: "https://nodejs.org/",
      logo: NodeJsLogo,
    },

    {
      name: "Tailwind CSS",
      href: "https://tailwindcss.com/",
      logo: TailwindCssLogo,
    },
    {
      name: "Git & GitHub",
      href: "https://github.com/",
      logo: GitHubLogo,
    },
    {
      name: "Express.js",
      href: "https://expressjs.com/",
      logo: ExpressJsLogo,
    },
    {
      name: "Vercel",
      href: "https://vercel.com/",
      logo: VercelLogo,
    },
    {
      name: "MongoDB",
      href: "https://www.mongodb.com/",
      logo: MongoDbLogo,
    },
    {
      name: "JWT",
      href: "https://jwt.io",
      logo: JWTLogo,
    },
    {
      name: "Clerk",
      href: "https://clerk.com/",
      logo: ClerkLogo,
    },
    {
      name: "Cloudinary",
      href: "https://cloudinary.com/",
      logo: CloudinaryLogo,
    },
  ];
  return (
    <section
      id="skills"
      className="mx-auto mt-24 max-w-5xl px-6 md:mt-32 lg:px-0"
    >
      {/* Title */}
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-brand-purple">
          Capabilities
        </span>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          My Skills
        </h3>
      </div>

      {/* Philosophy Row */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-[1fr_2fr]">
        <div className="text-xl text-zinc-900 dark:text-white">
          <div className="font-semibold">I build things for people</div>
          <div className="font-serif font-normal italic text-zinc-600 dark:text-zinc-400">
            I can Design, Develop, Deploy
          </div>
        </div>

        <div className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
          My core stack is{" "}
          <strong>
            Next.js and the modern MERN ecosystem (React, Node.js, Express,
            MongoDB)
          </strong>
          . I focus on building responsive user interfaces, modular REST APIs,
          secure role-based authorization, and connecting cutting-edge cloud
          &amp; AI architectures.
        </div>
      </div>

      {/* 2. Work Stack Interactive Grid matching reference */}

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
        {SKILLS.map((skill) => {
          const Icon = skill.logo;
          return (
            <a
              key={skill.name}
              href={skill.href}
              target="_blank"
              className="flex items-center gap-1.5 font-mono text-zinc-500 dark:hover:text-zinc-100 transition-all duration-200 hover:text-zinc-700 group"
            >
              <Icon className="size-6" />
              <span className="text-nowrap tracking-tight group-hover:underline underline-offset-2">
                {skill.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
};
