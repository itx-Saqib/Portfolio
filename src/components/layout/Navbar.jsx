import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../ui/Logo';

/**
 * Navbar.jsx — Premium Floating Capsule Navbar
 *
 * Layout strategy:
 *  - A full-width fixed wrapper handles the 20px top offset and side padding.
 *  - The capsule (max-w-5xl, mx-auto, rounded-full) lives inside it.
 *  - This avoids the left-1/2 / -translate-x-1/2 overflow bug entirely.
 */

const navLinks = [
  { name: 'Home',     id: 'home' },
  { name: 'About',    id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact',  id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 120;
      navLinks.forEach(link => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) setActiveSection(link.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <>
      {/*
        ── Outer wrapper: full-width fixed, provides the 20px gap from top
           and the side padding. Does NOT set the capsule shape.
      */}
      <div className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-6 md:px-8">
        {/* ── Inner capsule: centered, capped width, pill shape ── */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
          aria-label="Primary navigation"
          className="mx-auto max-w-5xl rounded-full transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(5,8,22,0.90)' : 'rgba(5,8,22,0.75)',
            backdropFilter: scrolled ? 'blur(24px)' : 'blur(18px)',
            WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(18px)',
            border: '1px solid rgba(124,58,237,0.18)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.45), 0 0 30px rgba(124,58,237,0.10)'
              : '0 4px 24px rgba(0,0,0,0.30), 0 0 20px rgba(124,58,237,0.06)',
          }}
        >
          <div className={`flex items-center justify-between px-5 sm:px-8 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>

            {/* Logo — always left */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex-shrink-0"
            >
              <Logo onClick={(e) => handleNavClick(e, 'home')} />
            </motion.div>

            {/* Desktop nav links — always center-right, hidden on mobile */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className={`relative px-5 py-2 rounded-full text-sm font-semibold tracking-wide select-none transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {/* Gliding active pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        style={{
                          background: 'linear-gradient(90deg, rgba(124,58,237,0.25) 0%, rgba(6,182,212,0.20) 100%)',
                          border: '1px solid rgba(124,58,237,0.30)',
                          boxShadow: '0 0 14px rgba(124,58,237,0.28)',
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile hamburger — always right */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(prev => !prev)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-white/8 text-white hover:bg-white/15 transition-colors focus:outline-none flex-shrink-0"
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center justify-center"
                >
                  {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* ── Full-Screen Mobile Menu ────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center overflow-hidden"
            style={{
              background: 'rgba(5,8,22,0.96)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
            }}
          >
            {/* Ambient glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'rgba(124,58,237,0.12)', filter: 'blur(80px)' }} />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'rgba(6,182,212,0.10)', filter: 'blur(80px)' }} />

            <nav className="flex flex-col items-center gap-3 w-full px-8 relative z-10">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ delay: i * 0.07 + 0.05, type: 'spring', stiffness: 280, damping: 22 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full max-w-xs text-center px-8 py-4 rounded-full text-2xl font-bold tracking-wide transition-all duration-200 ${
                      isActive ? 'text-white' : 'text-white/65 hover:text-white'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(90deg, rgba(124,58,237,0.20) 0%, rgba(6,182,212,0.15) 100%)'
                        : 'transparent',
                      border: isActive ? '1px solid rgba(124,58,237,0.30)' : '1px solid transparent',
                      boxShadow: isActive ? '0 0 20px rgba(124,58,237,0.22)' : 'none',
                    }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
