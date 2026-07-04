import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariant, fadeLeftVariant, fadeRightVariant, staggerContainer } from '../animations/variants';
import SectionWrapper from '../components/layout/SectionWrapper';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import SocialLinks from '../components/ui/SocialLinks';

// ------------------------------------------------------------------
// DATA — Real contact information for Muhammad Saqib Fareed
// ------------------------------------------------------------------
const contactInfo = [
  {
    icon: <FiMail size={22} />,
    label: "Email",
    value: "devwithsaqib@gmail.com",
    href: "mailto:devwithsaqib@gmail.com",
    isLink: true,
  },
  {
    icon: <FiPhone size={22} />,
    label: "Phone",
    value: "+92 314 3142813",
    href: "tel:+923143142813",
    isLink: true,
  },
  {
    icon: <FiMapPin size={22} />,
    label: "Location",
    value: "Faisalabad, Pakistan",
    href: null,
    isLink: false,
  },
];

// ------------------------------------------------------------------
// SUB-COMPONENT — Individual contact info card
// ------------------------------------------------------------------
const ContactCard = ({ info }) => {
  const content = (
    <motion.div
      variants={fadeLeftVariant}
      className="glass-card p-5 md:p-6 rounded-2xl flex items-center gap-5 group hover:border-text-secondary transition-all duration-300 cursor-pointer"
    >
      {/* Icon container — slides/scales on hover */}
      <div className="w-12 h-12 shrink-0 bg-background-primary border border-border rounded-xl flex items-center justify-center text-text-primary group-hover:bg-text-secondary group-hover:text-background-primary group-hover:scale-110 transition-all duration-300">
        {info.icon}
      </div>

      <div>
        <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-text-muted mb-0.5">
          {info.label}
        </p>
        <p className="text-base font-semibold text-text-primary group-hover:text-text-secondary transition-colors">
          {info.value}
        </p>
      </div>
    </motion.div>
  );

  // Wrap in anchor only when a href is provided
  return info.isLink ? (
    <a href={info.href} target={info.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

// ------------------------------------------------------------------
// MAIN SECTION
// ------------------------------------------------------------------
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) return "Valid email is required.";
    if (!formData.subject.trim()) return "Subject is required.";
    if (!formData.message.trim() || formData.message.length < 10) return "Message must be at least 10 characters long.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setErrorMessage("Formspree endpoint is not configured.");
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Failed to send message. Please try again later.");
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus('error');
    }
  };

  return (
    <SectionWrapper id="contact">
      {/* Section header */}
      <motion.div variants={fadeUpVariant} className="mb-16 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h2>
        <div className="w-16 h-1 bg-text-secondary rounded-full mb-6"></div>
        <p className="text-text-muted text-lg leading-relaxed">
          Currently open to new opportunities. Whether you have a project in mind, a question, or just want to connect — feel free to reach out. I'll get back to you as soon as possible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

        {/* ── Left column: contact cards ── */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-5">
            {contactInfo.map((info) => (
              <ContactCard key={info.label} info={info} />
            ))}
          </div>

          {/* Social Links under cards */}
          <SocialLinks className="pt-2" />

          {/* Subtle closing message */}
          <motion.p
            variants={fadeUpVariant}
            className="text-text-muted text-sm leading-relaxed pt-6 border-t border-border mt-2"
          >
            Based in <span className="text-text-secondary font-medium">Faisalabad, Pakistan</span> — available for remote work worldwide and open to on-site opportunities.
          </motion.p>
        </motion.div>

        {/* ── Right column: contact form ── */}
        <motion.div 
          variants={fadeRightVariant} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className={`glass-card p-7 md:p-9 rounded-2xl space-y-6 transition-opacity duration-300 ${status === 'success' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onSubmit={handleSubmit}
          >
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg">
                <FiAlertCircle className="shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-text-secondary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-background-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-text-secondary transition-colors disabled:opacity-50"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-background-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-text-secondary transition-colors disabled:opacity-50"
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-text-secondary">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
                className="w-full bg-background-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-text-secondary transition-colors disabled:opacity-50"
                disabled={status === 'loading'}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-text-secondary">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project or just say hi..."
                required
                className="w-full bg-background-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-text-secondary transition-colors resize-none disabled:opacity-50"
                disabled={status === 'loading'}
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={status !== 'loading' ? { y: -2 } : {}}
              whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
              className="group w-full flex items-center justify-center gap-3 bg-text-primary text-background-primary py-4 rounded-xl font-bold tracking-wide shadow-lg hover:bg-accent transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <FiLoader className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FiSend
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </>
              )}
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center glass-card rounded-2xl p-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                  className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4"
                >
                  <FiCheckCircle size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
                <p className="text-text-muted mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 bg-background-primary border border-border hover:border-text-secondary rounded-lg text-sm font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
