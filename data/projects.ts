import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-interview-platform",
    slug: "ai-interview-platform",
    title: "AI Interview Preparation Platform",
    tagline: "AI-powered mock interviews, real-time voice feedback, and automated ATS resume scoring.",
    description:
      "An AI-powered interview preparation platform designed to help candidates practice interviews, analyze resumes, improve technical skills and track their preparation progress.",
    fullOverview:
      "The AI Interview Preparation Platform is a comprehensive career readiness platform engineered to bridge the gap between technical preparation and actual interview performance. Combining generative AI with voice recognition and document parsing, the system conducts simulated technical and behavioral interviews, evaluates speech and response semantics, and benchmarks candidate resumes against ATS parsers in real-time.",
    problem:
      "Job applicants often struggle to find realistic, objective mock interview partners and lack actionable feedback on their resume ATS compatibility and live interview speech pacing.",
    solution:
      "Architected a full-stack platform that leverages AI models to generate dynamic interview questions based on job descriptions, records audio/transcripts for intelligent assessment, parses PDF resumes for keyword relevance, and offers real-time analytics dashboards to track progress.",
    featured: true,
    category: "Full-Stack AI Application",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "OpenAI / Gemini APIs",
      "Cloudinary",
      "Socket.io",
      "Tailwind CSS",
    ],
    features: [
      "User authentication & session management with secure JWT tokens",
      "AI-driven dynamic mock interview simulations across tech stacks",
      "Resume upload with automated ATS compatibility scoring",
      "Real-time voice and transcript feedback",
      "Interactive coding challenge environment with test case feedback",
      "Comprehensive progress analytics dashboard",
      "Administrative dashboard for question banks and analytics",
      "Secure media and resume PDF storage via Cloudinary",
    ],
    architecture: {
      frontend: "React SPA with TypeScript, Tailwind CSS, and Web Audio API for voice capture.",
      backend: "Node.js & Express REST API with Socket.io for low-latency interview streaming.",
      database: "MongoDB with Mongoose schemas for users, sessions, questions, and scores.",
      auth: "JWT with bcrypt password hashing and token refresh mechanisms.",
      services: ["OpenAI / Gemini API for LLM intelligence", "Cloudinary for document assets"],
    },
    challenges: [
      {
        challenge: "Handling low-latency AI responses during interactive interview sessions.",
        solution: "Implemented streaming API responses and optimized payload structures over WebSocket connections to deliver instant feedback."
      },
      {
        challenge: "Accurately parsing diverse resume PDF formats without losing structural context.",
        solution: "Built a multi-pass parsing pipeline that extracts raw text, tokens, and section headers before sending normalized data to the scoring engine."
      }
    ],
    learnings: [
      "Mastered designing scalable REST and WebSocket architectures in Node.js.",
      "Gained deep hands-on experience structuring effective prompt templates and handling LLM rate limits.",
      "Strengthened understanding of state management and audio stream handling in React.",
    ],
    demoUrl: "https://example.com/demo/ai-interview-platform",
    githubUrl: "https://github.com/mohammed-meezan/ai-interview-platform",
    image: "/images/projects/ai-interview.svg",
    mockups: [
      {
        title: "AI Interview Simulation Dashboard",
        description: "Real-time question prompts with audio waveforms and instant evaluation metrics."
      },
      {
        title: "ATS Resume Analyzer",
        description: "Scoring breakdown with keyword match ratios and improvement recommendations."
      }
    ]
  },
  {
    id: "medilite",
    slug: "medilite",
    title: "MediLite — Healthcare Record Management",
    tagline: "Centralized medical record system with role-based access, QR emergency profiles, and SMS reminders.",
    description:
      "A full-stack healthcare record management platform designed to organize medical information and provide role-based access for patients, doctors and administrators.",
    fullOverview:
      "MediLite is an enterprise-grade medical information system created to simplify health record access while enforcing strict role-based data boundaries. It gives patients full custody over their medical history, enables physicians to review verified clinical records, and provides hospital administrators with compliance and audit capabilities. It also features emergency QR profile access and SMS-based medicine reminders.",
    problem:
      "Scattered physical records, lost prescriptions, and delayed doctor access during emergencies cause dangerous diagnostic bottlenecks.",
    solution:
      "Built a secure, centralized cloud medical vault with role-based access control (RBAC), QR code quick-scans for emergency medical summaries, automated Twilio SMS medicine reminders, and Cloudinary-backed diagnostic imaging storage.",
    featured: false,
    category: "Full-Stack Healthcare Platform",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Clerk Auth",
      "Cloudinary",
      "Tailwind CSS",
      "Docker",
      "Twilio API",
    ],
    features: [
      "Role-based authentication & authorization (Patient, Doctor, Admin)",
      "Patient health record vault and consultation timeline",
      "Doctor dashboard for patient diagnoses, prescriptions, and notes",
      "Administrator management portal for staff and clinical records",
      "Centralized medical records with Cloudinary document storage",
      "QR-based temporary profile access for emergency medical responders",
      "Automated medicine reminder scheduling via Twilio SMS API",
      "Relational schema with Prisma ORM and PostgreSQL",
      "Dockerized container environment for seamless deployment",
    ],
    architecture: {
      frontend: "React SPA with role-guarded routes, Tailwind CSS dashboards, and QR generators.",
      backend: "Node.js & Express REST API with middleware-enforced role checks.",
      database: "PostgreSQL managed through Prisma ORM for relational consistency and migrations.",
      auth: "Clerk Authentication integration supporting multi-role user metadata.",
      services: ["Cloudinary for high-resolution medical scans", "Twilio API for automated SMS schedules", "Docker for containerization"],
    },
    challenges: [
      {
        challenge: "Designing secure, role-restricted endpoints where doctors can only view authorized patient files.",
        solution: "Constructed granular Prisma queries paired with custom Express middleware verifying consent tokens and role claims."
      },
      {
        challenge: "Implementing time-limited QR access without exposing sensitive permanent patient identifiers.",
        solution: "Generated short-lived, encrypted signature tokens embedded in QR codes that expire automatically after clinical reviews."
      }
    ],
    learnings: [
      "Gained deep expertise with PostgreSQL schema design, foreign key relations, and Prisma migrations.",
      "Understood production authentication flows using Clerk and role-based access control (RBAC).",
      "Configured multi-container Docker environments for backend services and databases.",
    ],
    demoUrl: "https://example.com/demo/medilite",
    githubUrl: "https://github.com/mohammed-meezan/medilite-healthcare",
    image: "/images/projects/medilite.svg",
    mockups: [
      {
        title: "Doctor Clinical Dashboard",
        description: "Patient diagnosis records, lab test viewer, and digital prescription generator."
      },
      {
        title: "Emergency QR Profile",
        description: "Instant scannable medical summary highlighting blood type, allergies, and emergency contacts."
      }
    ]
  }
];
