import { motion } from 'framer-motion';
import { fadeUpVariant, fadeLeftVariant, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/layout/SectionWrapper';
import { FiCheckCircle, FiBookOpen } from 'react-icons/fi';
import { SiHtml5, SiCss, SiJavascript, SiBootstrap, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiRedux, SiSupabase, SiNextdotjs, SiTypescript, SiPostgresql } from 'react-icons/si';

// ------------------------------------------------------------------
// DATA — All real education data for Muhammad Saqib Fareed
// ------------------------------------------------------------------
const educationData = [
  {
    institution: "SMIT",
    fullName: "Saylani Mass IT Training Program",
    course: "Web Design Crash Course",
    status: "completed",
    period: "2025",
    description:
      "Completed the Web Design Crash Course covering HTML5, CSS3, JavaScript, Responsive Web Design, and Web Design Fundamentals.",
    topics: [
      { name: "HTML5",      icon: <SiHtml5       className="text-[#E34F26]" /> },
      { name: "CSS3",       icon: <SiCss         className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript  className="text-[#F7DF1E]" /> },
    ],
  },
  {
    institution: "Corvit Systems",
    fullName: "Corvit Systems",
    course: "Full Stack Web Development",
    status: "completed",
    period: "2025",
    description:
      "Completed a rigorous Full Stack Web Development program, acquiring hands-on experience building complete web applications from the ground up — covering responsive UIs, RESTful API design, database integration, authentication, and production deployment.",
    topics: [
      { name: "HTML5",      icon: <SiHtml5       className="text-[#E34F26]" /> },
      { name: "CSS3",       icon: <SiCss         className="text-[#1572B6]" /> },
      { name: "Bootstrap 5",icon: <SiBootstrap   className="text-[#7952B3]" /> },
      { name: "JavaScript", icon: <SiJavascript  className="text-[#F7DF1E]" /> },
      { name: "React.js",   icon: <SiReact       className="text-[#61DAFB]" /> },
      { name: "Node.js",    icon: <SiNodedotjs   className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress     className="text-text-primary" /> },
      { name: "MongoDB",    icon: <SiMongodb     className="text-[#47A248]" /> },
    ],
  },
  {
    institution: "SMIT",
    fullName: "Saylani Mass IT Training Program",
    course: "AI-Driven Web & App Development",
    status: "enrolled",
    period: "2025 – 2026",
    description:
      "Currently enrolled in the **AI-Driven Full Stack Web & App Development** program at **SMIT**. I have successfully completed the Web Development track, covering modern frontend, backend, databases, deployment, and AI-assisted development workflows. I actively use modern AI development tools such as **Google AI Studio**, **Cursor AI**, and **Antigravity** to build production-ready web applications. I am currently continuing the Mobile App Development module using **React Native**, with the program expected to be completed in **2026**.",
    // Topics grouped by sub-category for richer display
    topicGroups: [
      {
        label: "Full Stack Web",
        items: [
          { name: "HTML5",       icon: <SiHtml5        className="text-[#E34F26]" /> },
          { name: "CSS3",        icon: <SiCss          className="text-[#1572B6]" /> },
          { name: "Tailwind CSS",icon: <SiTailwindcss  className="text-[#06B6D4]" /> },
          { name: "TypeScript",  icon: <SiTypescript   className="text-[#3178C6]" /> },
          { name: "React.js",    icon: <SiReact        className="text-[#61DAFB]" /> },
          { name: "Redux Toolkit",icon: <SiRedux       className="text-[#764ABC]" /> },
          { name: "Next.js",     icon: <SiNextdotjs    className="text-text-primary" /> },
          { name: "Supabase",    icon: <SiSupabase     className="text-[#3ECF8E]" /> },
          { name: "PostgreSQL",  icon: <SiPostgresql   className="text-[#336791]" /> },
          { name: "MongoDB",     icon: <SiMongodb      className="text-[#47A248]" /> },
          { name: "Express.js",  icon: <SiExpress      className="text-text-primary" /> },
          { name: "Node.js",     icon: <SiNodedotjs    className="text-[#339933]" /> },
        ],
      },
      {
        label: "Mobile App Development",
        items: [
          { name: "React Native (Currently Learning)", icon: <SiReact className="text-[#61DAFB]" /> },
        ],
      },
      {
        label: "AI Tools & Workflow",
        items: [
          { name: "Google AI Studio",       icon: null },
          { name: "Cursor AI",              icon: null },
          { name: "Antigravity",            icon: null },
          { name: "AI Development Tools",   icon: null },
        ],
      },
    ],
  },
];

// ------------------------------------------------------------------
// SUB-COMPONENTS
// ------------------------------------------------------------------

/** Status badge showing Completed or Currently Enrolled alongside the year */
const TimelineBadge = ({ status, period }) => {
  const isEnrolled = status === 'enrolled';
  return (
    <div className="flex flex-col sm:items-end gap-1">
      <span
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border ${
          isEnrolled
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            : 'bg-white/5 border-border text-text-muted'
        }`}
      >
        <span className="text-white/90 mr-1">{period}</span>
        <span className="text-white/20 mr-1">—</span>
        {isEnrolled ? (
          <>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Currently Enrolled
          </>
        ) : (
          <>
            <FiCheckCircle className="text-text-secondary" />
            Completed
          </>
        )}
      </span>
    </div>
  );
};

/** Animated chip representing a single technology */
const SkillChip = ({ skill }) => (
  <motion.div
    variants={fadeUpVariant}
    className="flex items-center gap-2 px-3 py-2 bg-background-primary border border-border rounded-lg text-xs font-semibold text-text-secondary hover:border-text-secondary hover:shadow-[0_0_10px_rgba(255,255,255,0.07)] transition-all duration-300 cursor-pointer"
  >
    {skill.icon && <span className="text-base">{skill.icon}</span>}
    {skill.name}
  </motion.div>
);

/** Card for an education entry — used in the timeline */
const EducationCard = ({ edu }) => (
  <motion.div
    variants={fadeLeftVariant}
    className="glass-card p-6 md:p-8 rounded-2xl hover:border-text-secondary transition-all duration-300 group cursor-pointer"
  >
    {/* Header row */}
    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 mb-6">
      <div>
        {/* Course name */}
        <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1 group-hover:text-text-secondary transition-colors">
          {edu.course}
        </h3>
        {/* Institution name */}
        <p className="text-text-secondary font-medium flex items-center gap-2">
          <FiBookOpen className="text-text-muted" />
          {edu.fullName}
        </p>
      </div>

      <div className="flex flex-col items-start xl:items-end gap-2 shrink-0">
        <TimelineBadge status={edu.status} period={edu.period} />
      </div>
    </div>

    {/* Description */}
    <p className="text-text-muted text-sm leading-relaxed mb-8">
      {edu.description}
    </p>

    {/* Topics — either flat list or grouped sub-categories */}
    {edu.topicGroups ? (
      <div className="space-y-5">
        {edu.topicGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[0.65rem] font-bold text-text-muted tracking-[0.18em] uppercase mb-3">
              {group.label}
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {group.items.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    ) : (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {edu.topics.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </motion.div>
    )}
  </motion.div>
);

// ------------------------------------------------------------------
// MAIN SECTION
// ------------------------------------------------------------------
const Education = () => {
  return (
    <SectionWrapper id="education">
      {/* Section header */}
      <motion.div variants={fadeUpVariant} className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Learning Journey</h2>
        <div className="w-16 h-1 bg-text-secondary rounded-full mb-6"></div>
        <p className="text-text-muted max-w-xl leading-relaxed text-lg">
          My education path — from foundational web technologies to AI-powered full-stack development.
        </p>
      </motion.div>

      {/* Vertical timeline */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative border-l border-border ml-3 md:ml-6 space-y-14 pb-8"
      >
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={fadeUpVariant}
            className="relative pl-8 md:pl-14"
          >
            {/* 
              Timeline dot — larger, glowing ring for the currently enrolled entry
              to make it instantly stand out from the rest.
            */}
            <div
              className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-text-secondary bg-background-primary ${
                edu.status === 'enrolled'
                  ? 'shadow-[0_0_14px_4px_rgba(52,211,153,0.35)]'
                  : 'shadow-[0_0_10px_rgba(255,255,255,0.15)]'
              }`}
            />

            {/* Institution label on the left (visible md+) */}
            <div className="mb-4">
              <span className="inline-block text-[0.65rem] font-bold tracking-[0.2em] uppercase text-text-muted bg-background-primary border border-border px-3 py-1 rounded-md">
                {edu.institution}
              </span>
            </div>

            <EducationCard edu={edu} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Education;
