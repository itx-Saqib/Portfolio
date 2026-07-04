import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/layout/SectionWrapper';
import { FiDownload } from 'react-icons/fi';
import TypewriterEffect from '../components/ui/TypewriterEffect';
import HeroImage from '../components/ui/HeroImage';
import SocialLinks from '../components/ui/SocialLinks';
import { HERO_ROLES } from '../constants/hero';

const Home = () => {
  return (
    <SectionWrapper id="home" className="pt-32 pb-16">
      {/* Grid: single-col on mobile (image above, text below), two-col on lg+ */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start max-w-7xl mx-auto w-full">
        
        {/* Left Content Column */}
        <motion.div 
          className="order-2 lg:order-1 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="hidden lg:block h-[1px] w-8 bg-text-muted"></span>
            <span className="text-text-muted text-sm font-semibold tracking-widest uppercase">
              Available for new opportunities
            </span>
            <span className="hidden lg:block h-[1px] w-8 bg-text-muted"></span>
          </motion.div>
          
          <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="block">Hello, I'm</span>
            {/* whitespace-nowrap prevents 'M. Saqib' breaking across lines */}
            <span className="block text-text-secondary whitespace-nowrap">M. Saqib</span>
          </motion.h1>
          
          {/* Role row: flex-wrap to gracefully handle very small screens if absolutely necessary, but generally single line */}
          <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center lg:justify-start items-center mb-6">
            <span className="text-lg md:text-xl lg:text-2xl text-text-muted mr-2 font-light">I am a</span>
            <span className="text-lg md:text-xl lg:text-2xl font-semibold text-text-secondary whitespace-nowrap">
              <TypewriterEffect words={HERO_ROLES} />
            </span>
          </motion.div>
          
          <motion.p variants={fadeUpVariant} className="text-base md:text-lg text-text-muted mb-8 max-w-xl leading-relaxed">
            I build modern, scalable, and AI-powered web applications using the MERN stack, React ecosystem, and cutting-edge AI tools. My focus is on creating fast, responsive, and user-friendly digital experiences with clean architecture and production-ready code.
          </motion.p>

          <SocialLinks className="mb-10 justify-center lg:justify-start" />
          
          <motion.div variants={fadeUpVariant} className="flex justify-center lg:justify-start flex-wrap gap-5">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-text-primary text-background-primary px-8 py-4 rounded-full font-semibold hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              <FiDownload className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </motion.div>


        </motion.div>

        {/* Right Image Column — overflow-hidden prevents accent decorations from causing page scroll */}
        <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end lg:items-start lg:pt-[52px] lg:pr-3 overflow-hidden">
          <HeroImage />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
