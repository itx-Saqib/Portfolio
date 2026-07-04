import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/layout/SectionWrapper';
import { FiMonitor, FiServer, FiSmartphone, FiDatabase, FiCloud, FiCpu } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      desc: "Creating pixel-perfect, highly responsive, and accessible user interfaces using React, Next.js, and Tailwind CSS.",
      icon: <FiMonitor size={28} />
    },
    {
      title: "Backend Development",
      desc: "Architecting robust and secure server-side applications, RESTful APIs, and microservices using Node.js and Express.",
      icon: <FiServer size={28} />
    },
    {
      title: "Database Design",
      desc: "Designing optimized relational (PostgreSQL) and NoSQL (MongoDB) database schemas for high-performance data retrieval.",
      icon: <FiDatabase size={28} />
    },
    {
      title: "AI Integrations",
      desc: "Integrating powerful LLMs and AI tools into applications to automate workflows and provide intelligent user experiences.",
      icon: <FiCpu size={28} />
    },
    {
      title: "Cloud & Deployment",
      desc: "Deploying scalable applications on modern cloud infrastructure (Vercel, AWS, Render) with automated CI/CD pipelines.",
      icon: <FiCloud size={28} />
    },
    {
      title: "Responsive Design",
      desc: "Ensuring applications look flawless and perform optimally across all devices, from ultra-wide desktops to mobile phones.",
      icon: <FiSmartphone size={28} />
    }
  ];

  return (
    <SectionWrapper id="services">
      <motion.div variants={fadeUpVariant} className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What I Do</h2>
        <div className="w-16 h-1 bg-text-secondary rounded-full"></div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            variants={fadeUpVariant}
            className="glass-card p-6 sm:p-8 rounded-2xl group hover:border-text-secondary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] cursor-pointer"
          >
            <div className="w-14 h-14 bg-background-primary border border-border rounded-xl flex items-center justify-center text-text-primary mb-6 group-hover:bg-text-secondary group-hover:text-background-primary group-hover:scale-110 transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">{service.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Services;
