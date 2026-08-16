export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview: string;
  problem: string;
  solution: string;
  featured: boolean;
  category: string;
  technologies: string[];
  features: string[];
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    auth?: string;
    services?: string[];
  };
  challenges: {
    challenge: string;
    solution: string;
  }[];
  learnings: string[];
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  mockups?: {
    title: string;
    description: string;
  }[];
}

export interface Skill {
  name: string;
  iconName?: string;
  level?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  imageUrl: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  type: "education" | "milestone" | "certification";
  description: string;
  skills?: string[];
}

export interface SiteConfig {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  resumePath: string;
  siteUrl: string;
  education: {
    degree: string;
    college: string;
    graduationYear: string;
    location: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
