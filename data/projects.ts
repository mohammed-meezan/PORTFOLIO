import { Project } from "@/types";

export const projects: Project[] = [

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
