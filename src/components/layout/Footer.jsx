import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '../../animations/variants';

const Footer = () => {
  const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL || '#';
  const githubUrl = import.meta.env.VITE_GITHUB_URL || '#';
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || '#';

  return (
    <footer className="border-t border-white/5 bg-background-primary py-8 relative overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center relative z-10"
      >
        <motion.p variants={fadeUpVariant} className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Muhammad Saqib Fareed. All rights reserved.
        </motion.p>
        <motion.div variants={staggerContainer} className="flex space-x-6 mt-4 md:mt-0 text-text-muted">
          <motion.a 
            variants={fadeUpVariant}
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-text-primary transition-colors transform hover:scale-110 hover:-translate-y-1"
          >
            <span className="sr-only">GitHub</span>
            <FiGithub size={20} />
          </motion.a>
          <motion.a 
            variants={fadeUpVariant}
            href={linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#0A66C2] transition-colors transform hover:scale-110 hover:-translate-y-1"
          >
            <span className="sr-only">LinkedIn</span>
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a 
            variants={fadeUpVariant}
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#E1306C] transition-colors transform hover:scale-110 hover:-translate-y-1"
          >
            <span className="sr-only">Instagram</span>
            <FiInstagram size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
