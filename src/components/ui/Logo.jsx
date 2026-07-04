import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';

const Logo = ({ onClick }) => {
  return (
    <a
      href="#home"
      onClick={onClick}
      aria-label="MSF Home"
      className="group flex items-center gap-2 focus:outline-none"
    >
      <motion.div
        initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-background-primary border border-border group-hover:border-text-secondary group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
      >
        <FiCode size={20} className="text-text-primary group-hover:text-text-secondary transition-colors duration-300" />
      </motion.div>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="flex items-baseline"
      >
        <span className="text-xl font-extrabold tracking-tighter text-text-primary group-hover:text-text-secondary transition-colors duration-300">
          MSF
        </span>
      </motion.div>
    </a>
  );
};

export default Logo;
