
import { TeamMember, Project, Hackathon } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Adil Ait Elhoussine",
    role: "Full-stack Developer (Java/Spring/Laravel)",
    avatar: "https://res.cloudinary.com/dbap6a4vd/image/upload/v1766223581/me-full_kesdfb.jpg",
    bio: "",
    contacts: {
      github: "https://github.com/adilelhoussine",
      linkedin: "https://linkedin.com/in/adil-ait-elhoussine",
      email: "mailto:adil@code-z.app"
    }
  },
  {
    name: "SalahEddine Daha",
    role: "Front-end Lead (Full-stack Node.js)",
    avatar: "https://res.cloudinary.com/dbap6a4vd/image/upload/v1766223513/salah_m3byqc.webp",
    bio: "",
    contacts: {
      github: "https://github.com/SalahEddineDaha",
      linkedin: "https://linkedin.com/in/salah-eddine-daha",
      email: "mailto:salah@code-z.app"
    }
  },
  {
    name: "Mohammed Abdessetar Elyagoubi",
    role: "Full-stack Developer (Java/Spring/Laravel)",
    avatar: "https://res.cloudinary.com/dbap6a4vd/image/upload/v1766223551/mohamed_satar_pxmgrq.webp",
    bio: "",
    contacts: {
      github: "https://github.com/elyagoubi",
      linkedin: "https://linkedin.com/in/mohammed-abdessetar-elyagoubi",
      email: "mailto:mohammed@code-z.app"
    }
  },
  {
    name: "Abdelkouddous ElAlami",
    role: "Full-stack Developer (Java/Spring/Laravel)",
    avatar: "https://res.cloudinary.com/dbap6a4vd/image/upload/v1766223512/abdokodous_bveqek.webp",
    bio: "",
    contacts: {
      github: "https://github.com/abdelkoudous",
      linkedin: "https://linkedin.com/in/abdelkouddous-elalami",
      email: "mailto:abdel@code-z.app"
    }
  },
  {
    name: "Ismail Baguni",
    role: "Full-stack Developer (Java/Spring/Laravel)",
    avatar: "https://res.cloudinary.com/dbap6a4vd/image/upload/v1766223512/ismail_qtwkjl.webp",
    bio: "",
    contacts: {
      github: "https://github.com/ismailbaguni",
      linkedin: "https://linkedin.com/in/ismail-baguni",
      email: "mailto:ismail@code-z.app"
    }
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Sanad",
    description: "A comprehensive web and mobile solution utilizing advanced neural networks for early-stage breast cancer detection. Designed for accessibility and accuracy in underserved regions.",
    tags: ["Healthcare", "AI", "Mobile", "Web"],
    image: "https://picsum.photos/seed/sanad/800/600"
  },
  {
    title: "EcoShift",
    description: "An sophisticated B2B AI carbon footprint tracker. Featuring deep reasoning agents, a high-performance backend, and real-time visualization dashboards to help enterprises reach Net Zero.",
    tags: ["Sustainability", "Agentic AI", "SaaS", "Enterprise"],
    image: "https://picsum.photos/seed/ecoshift/800/600"
  }
];

export const HACKATHONS: Hackathon[] = [
  {
    name: "YouCode Hackathon",
    status: "Won",
    description: "Secured first place for developing Sanad, recognized for social impact and technical innovation.",
    year: "2025"
  },
  {
    name: "Sofrecom Hackathon",
    status: "Participating",
    description: "Currently in the final stages. Pushing the boundaries of EcoShift's AI capabilities.",
    year: "2025"
  }
];
