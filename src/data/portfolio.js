import intellicrmImg from "../assets/projects/featured/iCRM.png";
import chronoLock from "../assets/projects/featured/chronolock.png";
import redis from "../assets/projects/featured/redis.png";

export const experience = [
  {
    role: "Software Developer Intern",
    company: "IntelliSeven Technology Solutions Inc.",
    location: "Quezon City, Philippines",
    dates: "Feb 2026 – May 2026",
    bullets: [
      "Built IntelliCRM, a full-stack CRM application using React, Node.js, Express.js, and MongoDB.",
      "Took ownership of both frontend and backend development after the initial collaboration phase.",
      "Delivered a production-ready system used by 20+ employees to improve customer tracking and sales workflows.",
    ],
  },
  {
    role: "Software Developer (Contract)",
    company: "ASG Platforms",
    location: "Albay, Philippines",
    dates: "Jan 2025 – Apr 2025",
    bullets: [
      "Developed full-stack web applications using React, Tailwind CSS, Node.js, Express.js, and Firebase.",
      "Implemented authentication, Firestore integration, REST APIs, and backend services.",
      "Built a Redis-inspired in-memory database in Node.js with custom data structures and persistence features.",
    ],
  },
];

export const projects = [
  {
    name: "IntelliCRM",
    description:
      "A full-stack CRM system with real-time notifications and role-based access control, adopted by 20+ employees to streamline customer management and sales operations.",
    image: intellicrmImg,
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API", "JWT"],
    githubUrl: "https://github.com/MarkVincent06/CRM_System",
    liveUrl: "https://intellicrm-system.vercel.app",
  },
  {
    name: "ChronoLock",
    description:
      "A cross-platform mobile app for laboratory access control, attendance monitoring, and smart door lock integration, supporting seat management for 300+ users.",
    image: chronoLock,
    tech: ["React Native", "Node.js", "MySQL", "REST API"],

    githubUrl: "https://github.com/MarkVincent06/ChronoLock_Mobile",
    liveUrl: null,
  },
  {
    name: "Redish-Store",
    description:
      "A Redis-inspired in-memory database supporting strings, lists, hashes, sets, JSON, streams, and geospatial data — with AOF persistence, pub/sub, and transactions.",
    image: redis,
    tech: ["JavaScript", "Node.js", "Redis Concepts"],
    githubUrl: "https://github.com/MarkVincent06/redish-store",
    liveUrl: null,
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "PHP", icon: "SiPhp" },
      { name: "Java", icon: "FaJava" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss" },
      { name: "C++", icon: "SiCplusplus" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "SiReact", core: true },
      { name: "Tailwind CSS", icon: "SiTailwindcss", core: true },
      { name: "Bootstrap", icon: "SiBootstrap" },
      { name: "Sass", icon: "SiSass" },
      { name: "Axios", icon: "TbApi" },
      { name: "jQuery", icon: "SiJquery" },
    ],
  },
  {
    category: "Backend & databases",
    items: [
      { name: "Node.js", icon: "SiNodedotjs", core: true },
      { name: "Express.js", icon: "SiExpress", core: true },
      { name: "MongoDB", icon: "SiMongodb", core: true },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "Redis", icon: "SiRedis" },
      { name: "Laravel", icon: "SiLaravel" },
      { name: "MySQL", icon: "SiMysql" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman" },
      { name: "Figma", icon: "SiFigma" },
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MarkVincent06",
    icon: "FaGithub",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/markvincentcleofe06",
    icon: "FaFacebookF",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/just.krammm_",
    icon: "FaInstagram",
  },
  { name: "X", href: "https://x.com/cleofemarkv", icon: "FaXTwitter" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mark-vincent06",
    icon: "FaLinkedinIn",
  },
];

export const email = "vincentmariscotescleofe@gmail.com";
