import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import profileImg from '../../assets/Saqib.jpeg';


/**
 * HeroImage.jsx — Premium animated profile image for the Hero section.
 *
 * Implements a 3-layer design system:
 * Layer 1: High-quality perfect circle image.
 * Layer 2: Rotating conic-gradient border (Purple -> Violet -> Indigo).
 * Layer 3: Soft matching outer glow.
 */
const HeroImage = () => {
  const mouseY = useMotionValue(0);

  // Layer 5 Desktop Parallax (Y-axis only to prevent layout shifting)
  const parallaxY = useTransform(mouseY, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cy = window.innerHeight / 2;
      mouseY.set(e.clientY - cy);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: parallaxY }}
      className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] flex justify-center items-center mx-auto"
    >
      {/* ── Layer 3: Soft Outer Glow ─────────────────────────────────────── */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 70%)',
          filter: 'blur(45px)',
          zIndex: 0,
        }}
      />



      {/* ── Layer 1 & 2: Floating Image with Animated Border ─────────────── */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 p-2 sm:p-3 rounded-full group"
      >
        {/* Animated Gradient Border (Layer 2) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'conic-gradient(from 0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.9), rgba(255,255,255,0.1))',
            padding: '3px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        
        {/* Inner Glass Shell for depth */}
        <div className="absolute inset-[3px] rounded-full bg-background-primary/50 backdrop-blur-sm z-0" />

        {/* Profile Image (Layer 1) */}
        <div className="relative overflow-hidden rounded-full z-10 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] shadow-2xl">
          <img
            src={profileImg}
            alt="M. Saqib – Full Stack Developer"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            draggable={false}
            loading="eager"
          />
          {/* Subtle overlay gradient on hover for premium depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
          {/* Inner shadow for inset depth */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
