/**
 * Centralized motion variants for Framer Motion.
 * Features premium custom easings and hardware-accelerated transitions.
 */

// Premium easing curve (smooth deceleration, Apple-like)
export const premiumEase = [0.22, 1, 0.36, 1];

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: premiumEase }
  }
};

export const fadeUpNoBlurVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: premiumEase }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slowStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

export const fadeLeftVariant = {
  // Smaller x offset to prevent triggering horizontal scrollbar during animation
  hidden: { opacity: 0, x: -30, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: premiumEase }
  }
};

export const fadeRightVariant = {
  // Smaller x offset to prevent triggering horizontal scrollbar during animation
  hidden: { opacity: 0, x: 30, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: premiumEase }
  }
};

export const scaleVariant = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: premiumEase }
  }
};

export const navItemVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: premiumEase } 
  }
};

export const cardHoverVariant = {
  rest: { y: 0, scale: 1, boxShadow: "0px 10px 30px rgba(0,0,0,0)" },
  hover: { 
    y: -8, 
    scale: 1.02, 
    boxShadow: "0px 20px 40px rgba(139, 92, 246, 0.15)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};
