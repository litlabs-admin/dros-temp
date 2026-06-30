import type { Variants, Transition } from 'framer-motion';

/**
 * Shared motion language, ported from the Lateral Framer project.
 * Spring: damping 30 / stiffness 125 / mass 1. Fade-up reveals start at
 * opacity 0.001 + y 16px. Stagger 0.1s. Premium tween eases on the
 * [0.44, 0, 0.11, 1] curve. All reveals respect prefers-reduced-motion
 * via the global CSS rule in index.css (transforms collapse instantly).
 */

export const springStd: Transition = {
  type: 'spring',
  damping: 30,
  stiffness: 125,
  mass: 1,
};

export const springSnappy: Transition = {
  type: 'spring',
  damping: 30,
  stiffness: 125,
  mass: 0.1,
};

export const premiumTween: Transition = {
  type: 'tween',
  duration: 1.2,
  ease: [0.44, 0, 0.11, 1],
};

/** Standard in-view viewport config: fire once, when ~15% is visible. */
export const viewportOnce = { once: true, amount: 0.15 } as const;

/** Fade-up reveal for a single element. */
export const fadeUp: Variants = {
  hidden: { opacity: 0.001, y: 16 },
  show: { opacity: 1, y: 0, transition: springStd },
};

/** Larger fade-up for hero-scale elements. */
export const fadeUpLg: Variants = {
  hidden: { opacity: 0.001, y: 28 },
  show: { opacity: 1, y: 0, transition: springStd },
};

/** Container that staggers its children's reveals. */
export const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
