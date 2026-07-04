import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/layout/SectionWrapper';
import ProjectCard from '../components/ui/ProjectCard';
import projects from '../constants/projects';

/**
 * Projects — "Selected Projects" section.
 * All project data lives in src/constants/projects.js for easy maintenance.
 */
const Projects = () => {
  return (
    <SectionWrapper id="projects">
      {/* Section heading */}
      <motion.div variants={fadeUpVariant} className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Projects</h2>
        <div className="w-16 h-1 bg-text-secondary rounded-full" />
      </motion.div>

      {/* Project grid — staggered entrance */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, idx) => (
          <motion.div key={project.title} variants={fadeUpVariant} className="h-full">
            <ProjectCard project={project} index={idx} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
