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
      },

    ]
  },
  
        {
    id: "wisdom-primary-school",
    slug: "wisdom-primary-school",
    title: "Wisdom Nursery and Primary School",
    tagline:
      "Professional institutional website with responsive design, SEO optimization, and search engine integration.",
    description:
      "A production-ready institutional website built for Wisdom Nursery and Primary School to establish a professional online presence and make essential school information easily accessible.",
    fullOverview:
      "Wisdom Nursery and Primary School is a production institutional website developed for a real-world educational client. The platform presents the school's academics, facilities, gallery, and contact information through a clean and structured interface. It is fully responsive across mobile, tablet, and desktop devices, with a strong focus on SEO, performance, accessibility, and maintainability.",
    problem:
      "The school needed a professional online presence where parents and visitors could easily discover information about academics, facilities, school activities, and how to contact the institution.",
    solution:
      "Built a responsive and performance-focused institutional website using Next.js, TypeScript, and Tailwind CSS, with structured metadata, XML sitemap, robots.txt, and Google Search Console integration to improve search visibility and crawlability.",
    featured: false,
    category: "Educational Institution Website",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Google Search Console",
    ],
    features: [
      "Professional school website with structured institutional information",
      "Academics and educational programs showcase",
      "School facilities and infrastructure showcase",
      "Responsive image gallery for school activities and campus visuals",
      "Dedicated contact and school information sections",
      "Fully responsive UI for mobile, tablet, and desktop devices",
      "Reusable and maintainable UI components",
      "SEO-optimized page metadata",
      "XML sitemap generation for search-engine discovery",
      "robots.txt configuration for crawler management",
      "Google Search Console integration",
      "Optimized images and assets for improved page performance",
    ],
    architecture: {
      frontend:
        "Next.js application built with TypeScript and reusable responsive components styled using Tailwind CSS.",
      backend:
        "Frontend-focused institutional website without a dedicated backend service.",
      database:
        "No database required; the website primarily presents structured institutional content.",
      auth:
        "No authentication system required for this public-facing institutional website.",
      services: [
        "Google Search Console for search indexing and website monitoring",
        "Next.js SEO features for metadata, sitemap, and robots.txt configuration",
      ],
    },
    challenges: [
      {
        challenge:
          "Creating a professional institutional design that works consistently across mobile, tablet, and desktop screen sizes.",
        solution:
          "Developed reusable responsive components and carefully structured layouts using Tailwind CSS breakpoints and adaptive design patterns.",
      },
      {
        challenge:
          "Improving the school's discoverability through search engines.",
        solution:
          "Implemented structured page metadata, XML sitemap, robots.txt, and Google Search Console integration to support search indexing and crawlability.",
      },
      {
        challenge:
          "Maintaining good page performance while presenting multiple visual assets such as school facilities and gallery images.",
        solution:
          "Optimized image assets and page layouts to reduce unnecessary loading overhead while maintaining a visually engaging experience.",
      },
    ],
    learnings: [
      "Gained practical experience building a production website for a real-world client.",
      "Improved understanding of responsive UI development using Next.js and Tailwind CSS.",
      "Learned how technical SEO elements such as metadata, XML sitemaps, and robots.txt contribute to website discoverability.",
      "Gained hands-on experience integrating and monitoring a website through Google Search Console.",
      "Improved understanding of performance-focused asset and layout optimization.",
    ],
    demoUrl: "https://www.wisdomprimary.in/",
    githubUrl: "",
    image:
      "https://res.cloudinary.com/ddr1ynq4c/image/upload/v1790516047/favicon_hzx2qs.png",
    mockups: [
      {
        title: "School Homepage",
        description:
          "Professional landing page introducing the school and providing quick access to important institutional information.",
      },
      {
        title: "Academics & Facilities",
        description:
          "Structured sections showcasing academic offerings, school facilities, and the institution's educational environment.",
      },
      {
        title: "School Gallery",
        description:
          "Responsive gallery presenting campus visuals, activities, and important moments from school life.",
      },
      {
        title: "Contact & Information",
        description:
          "Accessible contact and institutional information designed to help parents and visitors connect with the school.",
      },
    ],
  },
];
