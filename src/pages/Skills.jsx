import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/layout/SectionWrapper';
import skillCategories from '../constants/skills';

const Skills = () => {

  return (
    <SectionWrapper id="skills">
      <motion.div variants={fadeUpVariant} className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
        <div className="w-16 h-1 bg-text-secondary rounded-full"></div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={fadeUpVariant}
            className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col h-full group hover:border-text-secondary transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-border flex items-center justify-center text-text-primary group-hover:scale-110 group-hover:bg-text-secondary group-hover:text-background-primary transition-all duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary">{category.title}</h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariant}
                  className="group/skill flex items-center gap-3 px-4 py-3 bg-background-primary border border-border rounded-xl hover:border-text-secondary hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-default hover:-translate-y-1"
                >
                  <span className="text-xl group-hover/skill:scale-110 group-hover/skill:rotate-3 transition-transform duration-300">{skill.icon}</span>
                  <span className="text-sm font-semibold text-text-secondary group-hover/skill:text-text-primary transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
