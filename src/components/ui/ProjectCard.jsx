/**
 * ProjectCard.jsx — Reusable, premium project card component.
 *
 * Props (from projects.js):
 *   project  — Single project object from the constants file
 *   index    — Card index (used for staggered entrance delay)
 */

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheckCircle, FiClock } from 'react-icons/fi';
import { fadeUpVariant, cardHoverVariant } from '../../animations/variants';

/* ─── Status Badge ────────────────────────────────────────────────────── */
const StatusBadge = ({ status }) => {
  const isCompleted = status === 'Completed';
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
        isCompleted
          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
          : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
      }`}
    >
      {isCompleted ? <FiCheckCircle size={11} /> : <FiClock size={11} />}
      {status}
    </span>
  );
};

/* ─── Main Card ───────────────────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const { title, subtitle, desc, tech, github, live, status, accentColor } = project;

  return (
    <motion.article
      variants={cardHoverVariant}
      initial="rest"
      whileHover="hover"
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden
                 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm
                 transition-all duration-500 ease-out cursor-pointer"
    >
      {/* Animated gradient top border */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accentColor}
                    opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Subtle gradient glow on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-0
                    group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`}
      />

      {/* Image Thumbnail */}
      {project.image && (
        <div className="relative h-36 w-full overflow-hidden border-b border-white/[0.08]">
          <motion.img 
            src={project.image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 to-transparent z-10" />
        </div>
      )}

      {/* Card Body */}
      <div className="relative flex flex-col flex-grow p-5">

        {/* Header row: status badge */}
        <div className="flex items-center justify-between mb-3">
          <StatusBadge status={status} />
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-transparent
                       group-hover:bg-clip-text group-hover:bg-gradient-to-r
                       group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-xs text-text-muted font-medium tracking-wide uppercase mb-2">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {desc}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-full
                         bg-white/5 border border-white/10 text-text-secondary
                         hover:border-text-secondary/40 transition-colors duration-200 cursor-default
                         hover:text-text-primary hover:bg-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07] mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-text-muted
                         hover:text-text-primary transition-colors duration-200"
            >
              <FiGithub size={16} />
              Source Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-2 text-sm font-semibold
                         bg-gradient-to-r from-violet-500 to-cyan-500
                         text-white px-4 py-2 rounded-lg
                         hover:opacity-90 transition-opacity duration-200 shadow-lg"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
          {!live && !github && (
            <span className="ml-auto text-xs text-text-muted italic">Coming Soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
