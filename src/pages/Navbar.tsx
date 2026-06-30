import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type Lenis from 'lenis';
import { springSnappy, springStd } from '../lib/motion';

interface NavbarProps {
  transparent?: boolean;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 80;
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -navHeight });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

const RESOURCE_LINKS: [string, string, boolean][] = [
  ['Blogs', '/blogs', false],
  ['Newsroom', '/newsroom', false],
  ['Customer Stories', '/customer-stories', false],
  ['Events', '/events', false],
  ['Webinars', '/webinars', false],
  ['Videos', '/resources/videos', false],
  ['API Docs', 'https://app.dros.ai/api-docs', true],
  ['Release Notes', '/release-notes', false],
  ['Contact Us', '/contact', false],
];

/* Staggered reveal for the dropdown panel's links. */
const dropdownPanel: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...springSnappy, staggerChildren: 0.025, delayChildren: 0.04 },
  },
  exit: { opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.14, ease: [0.44, 0, 0.11, 1] } },
};

const dropdownItem: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: springSnappy },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!transparent) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  function handleAnchorClick(id: string) {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      scrollToId(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  }

  const solid = !transparent || scrolled;
  const isActive = (path: string) => location.pathname === path;

  const primaryLinks: { label: string; anchor: string }[] = [
    { label: 'How It Works', anchor: 'how-it-works' },
    { label: 'Use Cases', anchor: 'use-cases' },
    { label: 'Compliance', anchor: 'compliance' },
  ];

  const routeLinks: { label: string; to: string }[] = [
    { label: 'Pricing', to: '/pricing' },
    { label: 'Case Studies', to: '/customer-stories' },
  ];

  /* Shared styling for a desktop nav item: holds the sliding hover pill. */
  const itemClass =
    'relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors duration-200';

  /* The sliding highlight that follows the cursor between items. */
  const HoverPill = ({ id }: { id: string }) =>
    hovered === id ? (
      <motion.span
        layoutId="nav-hover-pill"
        className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32, mass: 0.6 }}
      />
    ) : null;

  return (
    <motion.nav
      initial={reduce ? false : { y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...springStd, delay: 0.05 }}
      className="fixed top-0 z-50 w-full"
    >
      <motion.div
        animate={{
          backgroundColor: solid ? 'rgba(4,7,15,0.72)' : 'rgba(4,7,15,0)',
          borderColor: solid ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)',
        }}
        transition={{ duration: 0.4, ease: [0.44, 0, 0.11, 1] }}
        style={{ backdropFilter: solid ? 'blur(20px)' : 'blur(0px)' }}
        className="border-b"
      >
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <motion.div
            animate={{ height: solid ? 64 : 76 }}
            transition={{ duration: 0.4, ease: [0.44, 0, 0.11, 1] }}
            className="flex items-center justify-between"
          >
            <Link to="/" className="group flex items-center" aria-label="DROS home">
              <motion.img
                src="/DROS_horizontal_dark_bg_1.svg"
                alt="DROS"
                className="h-8 w-auto"
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={springSnappy}
              />
            </Link>

            {/* Desktop primary nav */}
            <div
              className="hidden items-center lg:flex"
              onMouseLeave={() => setHovered(null)}
            >
              {primaryLinks.map(({ label, anchor }) => (
                <button
                  key={anchor}
                  onClick={() => handleAnchorClick(anchor)}
                  onMouseEnter={() => setHovered(anchor)}
                  className={`${itemClass} text-ink/65 hover:text-ink`}
                >
                  <HoverPill id={anchor} />
                  {label}
                </button>
              ))}

              {routeLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onMouseEnter={() => setHovered(to)}
                  className={`${itemClass} ${isActive(to) ? 'text-ink' : 'text-ink/65 hover:text-ink'}`}
                >
                  <HoverPill id={to} />
                  {label}
                </Link>
              ))}

              {/* Resources dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setHovered('resources');
                  setActiveDropdown('resources');
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`${itemClass} text-ink/65 hover:text-ink`}>
                  <HoverPill id="resources" />
                  Resources
                  <motion.span
                    animate={{ rotate: activeDropdown === 'resources' ? 180 : 0 }}
                    transition={springSnappy}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <div className="absolute left-0 top-full pt-3">
                      <motion.div
                        variants={dropdownPanel}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        style={{ transformOrigin: 'top left' }}
                        className="w-56 rounded-2xl border border-hair bg-surface/95 p-2 shadow-lift backdrop-blur-xl"
                      >
                        {RESOURCE_LINKS.map(([label, href, external]) => (
                          <motion.div key={label} variants={dropdownItem}>
                            {external ? (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-ink/70 transition-colors hover:bg-white/[0.05] hover:text-ink"
                              >
                                {label}
                                <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-60" />
                              </a>
                            ) : (
                              <Link
                                to={href}
                                className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-ink/70 transition-colors hover:bg-white/[0.05] hover:text-ink"
                              >
                                {label}
                                <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-60" />
                              </Link>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="https://app.dros.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3.5 py-2 text-sm text-ink/65 transition-colors hover:text-ink"
              >
                Login
              </a>
              <motion.button
                onClick={() => handleAnchorClick('demo')}
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={springSnappy}
                className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#080808]"
              >
                {/* Sheen sweep on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Talk to Our AI Agent
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="relative h-10 w-10 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="absolute left-1/2 top-1/2 flex w-6 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[5px]">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={springSnappy}
                  className="block h-[1.5px] w-6 rounded-full bg-ink"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block h-[1.5px] w-6 rounded-full bg-ink"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={springSnappy}
                  className="block h-[1.5px] w-6 rounded-full bg-ink"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.44, 0, 0.11, 1] }}
            className="overflow-hidden border-b border-hair bg-base/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
              className="space-y-1 px-6 py-5"
            >
              {primaryLinks.map(({ label, anchor }) => (
                <motion.button
                  key={anchor}
                  variants={dropdownItem}
                  onClick={() => handleAnchorClick(anchor)}
                  className="block w-full py-2.5 text-left text-ink/75 transition-colors hover:text-ink"
                >
                  {label}
                </motion.button>
              ))}

              {routeLinks.map(({ label, to }) => (
                <motion.div key={to} variants={dropdownItem}>
                  <Link
                    to={to}
                    className="block py-2.5 text-ink/75 transition-colors hover:text-ink"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={dropdownItem}>
                <button
                  onClick={() => setIsMobileResourcesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-2.5 text-ink/75 transition-colors hover:text-ink"
                >
                  Resources
                  <motion.span animate={{ rotate: isMobileResourcesOpen ? 180 : 0 }} transition={springSnappy}>
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isMobileResourcesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.44, 0, 0.11, 1] }}
                      className="ml-3 overflow-hidden border-l border-hair pl-3"
                    >
                      {RESOURCE_LINKS.map(([label, href, external]) =>
                        external ? (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 text-sm text-ink/55 transition-colors hover:text-ink"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {label}
                          </a>
                        ) : (
                          <Link
                            key={label}
                            to={href}
                            className="block py-2 text-sm text-ink/55 transition-colors hover:text-ink"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {label}
                          </Link>
                        ),
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={dropdownItem} className="space-y-3 pt-4">
                <a
                  href="https://app.dros.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full border border-line px-6 py-2.5 text-center text-ink/80"
                >
                  Login
                </a>
                <button
                  onClick={() => handleAnchorClick('demo')}
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-6 py-3 text-center font-medium text-[#080808]"
                >
                  Talk to Our AI Agent
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
