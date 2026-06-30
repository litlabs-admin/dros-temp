import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container, Button } from '../ui';
import { RevealItem } from '../Reveal';
import { staggerContainer } from '../../lib/motion';
import { trackCta } from '../../lib/analytics';

// Faint client / membership strip along the hero's bottom edge (like Lateral).
const CLIENTS = ['Greystone', 'Utah Consumer Finance', 'RMAi', 'ACA International', 'DebtLink'];

export default function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden bg-base">
      {/* Full-bleed hero photograph */}
      <img
        src="/hero-lateral.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Left-weighted dark scrim for text legibility + bottom fade for the logo strip */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-base via-base/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-base to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-transparent" />

      <Container wide className="relative flex min-h-[100svh] flex-col justify-center pb-40 pt-28">
        <motion.div
          className="max-w-2xl border-l border-white/20 pl-6 md:pl-8"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12)}
        >
          {/* Announcement pill */}
          <RevealItem>
            <a
              href="/customer-stories"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[0.8rem] text-ink/85 backdrop-blur-md transition-colors hover:bg-white/[0.1]"
            >
              AI-Native Collections Platform
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </RevealItem>

          {/* Two-tone Sentient headline */}
          <RevealItem large>
            <h1 className="mt-7 font-display text-display-lg text-ink">
              Stop chasing debtors.
              <br />
              <span className="text-ink/55">Start recovering revenue.</span>
            </h1>
          </RevealItem>

          {/* Subheadline */}
          <RevealItem>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink/70">
              DROS is the only AI engagement OS built exclusively for US debt collections.
              FDCPA-compliant. SOC2 ready. Proven across first-party and third-party collections.
            </p>
          </RevealItem>

          {/* CTAs */}
          <RevealItem>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  trackCta('hero_talk_to_ai_agent');
                  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Talk to Our AI Agent
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                to="/book-meeting"
                onClick={() => trackCta('hero_book_a_demo')}
                className="!px-0 text-ink/75 hover:text-ink"
              >
                Book a Demo
              </Button>
            </div>
          </RevealItem>
        </motion.div>
      </Container>

      {/* Client / membership logo strip */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/[0.06]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Container wide className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5">
          {CLIENTS.map((c) => (
            <span key={c} className="font-mono text-xs uppercase tracking-wider text-ink/35">
              {c}
            </span>
          ))}
        </Container>
      </motion.div>
    </header>
  );
}
