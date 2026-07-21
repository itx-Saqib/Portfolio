import { FiCpu, FiTerminal, FiGlobe, FiCode, FiLayers } from 'react-icons/fi';
import {
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiVercel,
  SiRender,
  SiFigma
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Frontend",
    icon: <FiLayers size={24} />,
    skills: [
      { name: "HTML5",           icon: <SiHtml5         className="text-[#E34F26]" /> },
      { name: "CSS3",            icon: <SiCss           className="text-[#1572B6]" /> },
      { name: "Bootstrap 5",     icon: <SiBootstrap     className="text-[#7952B3]" /> },
      { name: "Tailwind CSS",    icon: <SiTailwindcss   className="text-[#06B6D4]" /> },
      { name: "JavaScript",      icon: <SiJavascript    className="text-[#F7DF1E]" /> },
      { name: "TypeScript",      icon: <SiTypescript    className="text-[#3178C6]" /> },
      { name: "React.js",        icon: <SiReact         className="text-[#61DAFB]" /> },
      { name: "React Router",    icon: <FiGlobe         className="text-[#CA4245]" /> },
      { name: "Next.js",         icon: <SiNextdotjs     className="text-text-primary" /> },
      { name: "Framer Motion",   icon: <SiFramer        className="text-[#0055FF]" /> },
    ]
  },
  {
    title: "Backend",
    icon: <FiTerminal size={24} />,
    skills: [
      { name: "Node.js",         icon: <SiNodedotjs     className="text-[#339933]" /> },
      { name: "Express.js",      icon: <SiExpress       className="text-text-primary" /> },
    ]
  },
  {
    title: "Database",
    icon: <FiCode size={24} />,
    skills: [
      { name: "MongoDB",         icon: <SiMongodb       className="text-[#47A248]" /> },
    ]
  },
  {
    title: "Tools & Others",
    icon: <FiCpu size={24} />,
    skills: [
      { name: "Git",             icon: <SiGit           className="text-[#F05032]" /> },
      { name: "GitHub",          icon: <SiGithub        className="text-text-primary" /> },
      { name: "VS Code",         icon: <TbBrandVscode   className="text-[#007ACC]" /> },
      { name: "Cursor",          icon: <FiCpu           className="text-text-primary" /> },
      { name: "Google AI Studio",icon: <FiGlobe         className="text-[#4285F4]" /> },
      { name: "Postman",         icon: <SiPostman       className="text-[#FF6C37]" /> },
      { name: "npm",             icon: <SiNpm           className="text-[#CB3837]" /> },
      { name: "Vercel",          icon: <SiVercel        className="text-text-primary" /> },
      { name: "Render",          icon: <SiRender        className="text-text-primary" /> },
      { name: "Antigravity",     icon: <FiCpu           className="text-[#7C3AED]" /> },
      { name: "Figma",           icon: <SiFigma         className="text-[#F24E1E]" /> },
    ]
  }
];

export default skillCategories;
