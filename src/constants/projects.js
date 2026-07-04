/**
 * projects.js — Central source of truth for all portfolio projects.
 * Add, update or reorder projects here without touching the component layer.
 *
 * Fields:
 *   title       — Project display name
 *   subtitle    — Short tagline shown below the title
 *   desc        — One-paragraph description
 *   tech        — Array of technology badge strings
 *   github      — Source code URL. Pass null to hide the button.
 *   live        — Live demo URL. Pass null to hide the button.
 *   status      — Badge label, e.g. "Completed", "In Progress", "Open Source"
 *   accentColor — Tailwind gradient classes used for the animated top border
 */

const GITHUB = import.meta.env.VITE_GITHUB_URL;
const MEDIFLOW_GITHUB = import.meta.env.VITE_MEDIFLOW_GITHUB_URL;

import mediflowImg from '../assets/MediFlow.png';
import portfolioImg from '../assets/Portfolio.png';

const projects = [
  {
    title: "MediFlow",
    subtitle: "Medical Store Management System",
    desc: "A full-stack pharmacy management system with secure JWT authentication, role-based access control, medicine inventory, customer management, and a responsive admin dashboard. Built with production-ready architecture and a clean REST API.",
    tech: [
      "React.js", "Redux Toolkit", "Tailwind CSS",
      "Node.js", "Express.js", "MongoDB",
      "JWT", "Axios", "Framer Motion",
    ],
    github: MEDIFLOW_GITHUB,
    live: "https://medi-flow-ecru.vercel.app/",
    status: "Completed",
    accentColor: "from-violet-500 via-purple-500 to-cyan-400",
    image: mediflowImg,
  },
  {
    title: "VYBE AI",
    subtitle: "AI-Powered Productivity Platform",
    desc: "VYBE AI is an AI-powered productivity platform that integrates multiple AI services into a single modern web application. The platform is designed to help users perform AI-assisted tasks such as intelligent conversations, workflow automation, voice processing, image editing, and content generation from one centralized dashboard. The project is being built with a strong focus on scalability, performance, clean architecture, and an exceptional user experience.",
    tech: [
      "Next.js", "React.js", "Tailwind CSS", "Redux Toolkit", "Framer Motion", 
      "Formik", "Yup", "Supabase", "OpenAI API", "Google Gemini API", 
      "Apify API", "Google Flow API", "Voice-to-Text API", "Text-to-Speech API", 
      "Background Remover API", "Vercel"
    ],
    github: null,
    live: null,
    status: "In Development",
    accentColor: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    title: "Developer Portfolio",
    subtitle: "Personal Brand & Showcase",
    desc: "A premium, animated single-page portfolio built with React and Framer Motion, featuring a particle background engine, typewriter roles, and glassmorphism UI.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    github: `${GITHUB}/portfolio`,
    live: null,
    status: "Completed",
    accentColor: "from-rose-400 via-pink-500 to-purple-500",
    image: portfolioImg,
  },
];

export default projects;
