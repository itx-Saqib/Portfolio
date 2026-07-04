import { motion } from 'framer-motion';
import { staggerContainer } from '../../animations/variants';

const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`py-24 min-h-screen flex flex-col justify-center overflow-x-clip ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
