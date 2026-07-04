import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { fadeUpVariant } from '../../animations/variants';

const SocialLinks = ({ className = "" }) => {
  return (
    <motion.div variants={fadeUpVariant} className={`flex gap-4 ${className}`}>
      <a 
        href={import.meta.env.VITE_GITHUB_URL || '#'} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-12 h-12 rounded-xl border border-border bg-background-primary flex items-center justify-center text-text-primary hover:bg-text-secondary hover:text-background-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
      >
        <FiGithub size={20} />
      </a>
      <a 
        href={import.meta.env.VITE_LINKEDIN_URL || '#'} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-12 h-12 rounded-xl border border-border bg-background-primary flex items-center justify-center text-text-primary hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
      >
        <FiLinkedin size={20} />
      </a>
      <a 
        href={import.meta.env.VITE_INSTAGRAM_URL || '#'} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-12 h-12 rounded-xl border border-border bg-background-primary flex items-center justify-center text-text-primary hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
      >
        <FiInstagram size={20} />
      </a>
    </motion.div>
  );
};

export default SocialLinks;
