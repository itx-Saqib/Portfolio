import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, cardHoverVariant } from '../animations/variants';
import SectionWrapper from '../components/layout/SectionWrapper';
import { FiCode, FiTarget, FiZap } from 'react-icons/fi';

const About = () => {
  const cards = [
    {
      icon: <FiCode size={24} />,
      title: "Clean Code",
      desc: "Writing maintainable, scalable, and heavily documented code is my primary directive."
    },
    {
      icon: <FiTarget size={24} />,
      title: "Goal Oriented",
      desc: "Focused on delivering measurable business value through strategic technical decisions."
    },
    {
      icon: <FiZap size={24} />,
      title: "AI-Powered",
      desc: "Utilizing cutting-edge AI tools to accelerate development and optimize complex workflows."
    }
  ];

  return (
    <SectionWrapper id="about">
      <motion.div variants={fadeUpVariant} className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
        <div className="w-16 h-1 bg-text-secondary rounded-full"></div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        <motion.div variants={fadeUpVariant} className="space-y-6 text-text-secondary text-base md:text-lg leading-relaxed max-w-4xl">
          <p>
            Hello! I'm Muhammad Saqib Fareed, a passionate software engineer specializing in building exceptional digital experiences. My journey in web development started with a profound curiosity for how things work on the internet, which quickly evolved into a dedicated career.
          </p>
          <p>
            Today, I leverage a robust stack of modern technologies, including React, Node.js, and specialized AI integrations, to architect comprehensive Full Stack applications. My focus is not just on writing code that works, but writing code that is clean, highly performant, and easily scalable.
          </p>
          <p>
            I strongly believe in continuous learning. The tech landscape evolves rapidly, and I stay ahead of the curve by constantly exploring new frameworks, refining my design aesthetics, and integrating AI-driven workflows to maximize efficiency.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={cardHoverVariant}
              initial="rest"
              whileHover="hover"
              className="glass-card p-6 rounded-xl flex flex-col h-full overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-text-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-text-primary mb-4 bg-white/5 w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-text-secondary group-hover:text-background-primary transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-text-primary font-semibold mb-2">{card.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-grow">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
