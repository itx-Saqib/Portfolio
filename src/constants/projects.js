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

import mediflowImg from '../assets/MediFlow.png';
import sonyImg from '../assets/sony-wh-1000.png';
import vybeImg from '../assets/vybe-ai.png';
import auraLuxeImg from '../assets/aura-luxe.png';

const GITHUB = import.meta.env.VITE_GITHUB_URL;
const MEDIFLOW_GITHUB = import.meta.env.VITE_MEDIFLOW_GITHUB_URL;
const SONY_GITHUB = import.meta.env.VITE_SONY_GITHUB_URL;

const projects = [
  // 1 — Sony WH-1000XM6 Landing Page
  {
    title: "Sony WH-1000XM6 Landing Page",
    subtitle: "Premium Product Showcase",
    desc: "A highly interactive, visually striking product landing page for the Sony WH-1000XM6 headphones. Built with a focus on premium aesthetics, featuring smooth scroll animations, glassmorphism UI elements, and a responsive modern layout.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    github: SONY_GITHUB,
    live: "https://sony-wh-1000-xm-6-one.vercel.app/",
    status: "Completed",
    accentColor: "from-gray-300 via-slate-400 to-zinc-500",
    image: sonyImg,
  },
  // 2 — MediFlow
  {
    title: "MediFlow",
    subtitle: "Medical Store Management System",
    desc: "A full-stack pharmacy management system with secure JWT authentication, role-based access control, medicine inventory, customer management, and a responsive admin dashboard. Built with production-ready architecture and a clean REST API.",
    tech: [
      "React.js", "Tailwind CSS",
      "Node.js", "Express.js", "MongoDB",
      "JWT", "Axios", "Framer Motion",
    ],
    github: MEDIFLOW_GITHUB,
    live: "https://medi-flow-ecru.vercel.app/",
    status: "Completed",
    accentColor: "from-violet-500 via-purple-500 to-cyan-400",
    image: mediflowImg,
  },
  // 3 — AURA Luxe
  {
    title: "AURA Luxe",
    subtitle: "Premium Fashion & Lifestyle E-Commerce",
    desc: "A full-featured luxury e-commerce platform built with Next.js, offering a premium shopping experience across fashion, footwear, timepieces, and fragrances. Features a dynamic hero carousel with Swiper.js, product filtering, wishlist, cart, dark mode, and a sleek amber-accented design system.",
    tech: [
      "Next.js", "Tailwind CSS", "TypeScript",
      "Swiper.js", "DummyJSON API", "Vercel"
    ],
    github: "https://github.com/itx-Saqib/new_Ecommerce",
    live: "https://new-ecommerce-mu.vercel.app/",
    status: "Completed",
    accentColor: "from-amber-400 via-orange-500 to-yellow-400",
    image: auraLuxeImg,
  },
  // 4 — VYBE AI
  {
    title: "VYBE AI",
    subtitle: "AI-Powered Productivity Platform",
    desc: "VYBE AI is an AI-powered productivity platform that integrates multiple AI services into a single modern web application. The platform is designed to help users perform AI-assisted tasks such as intelligent conversations, workflow automation, voice processing, image editing, and content generation from one centralized dashboard. The project is being built with a strong focus on scalability, performance, clean architecture, and an exceptional user experience.",
    tech: [
      "Next.js", "Tailwind CSS", "TypeScript",
      "Node.js", "Express.js", "MongoDB", "AI APIs"
    ],
    github: "https://github.com/itx-Saqib/VYBE_AI",
    live: "https://vybe-ai-orpin.vercel.app/",
    status: "In Development",
    accentColor: "from-cyan-400 via-blue-500 to-indigo-500",
    image: vybeImg,
  },
];

export default projects;
