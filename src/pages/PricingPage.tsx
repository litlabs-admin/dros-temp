export const route = '/pricing';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { trackCta } from '../lib/analytics';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const gradStyle = {
  background: 'linear-gradient(90deg, #DD39F9, #03D2FC)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};
const gradBg = { background: 'linear-gradient(90deg, #DD39F9, #03D2FC)' };

// Kept for compare table below
const BASE = { s: 20, p: 199, b: 499, bp: 1999 };
function price(base: number, annual: boolean) {
  return '$' + Math.round(base * (annual ? 0.8 : 1)).toLocaleString();
}

const CHECK = (
  <span className="inline-flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#03D2FC" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
  </span>
);
const CROSS = (
  <span className="inline-flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(13,27,62,0.18)" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
  </span>
);

type Row =
  | { cat: string }
  | { f: string; d: (string | React.ReactNode)[] };

const TABLE_ROWS: Row[] = [
  { cat: 'Accounts & Capacity' },
  { f: 'Active accounts',         d: ['100', '500', '5,000', '20,000', <span key="u1" style={{ color: '#1A237E', fontWeight: 500 }}>Unlimited</span>, <span key="u2" style={{ color: '#DD39F9', fontWeight: 500 }}>Unlimited</span>] },
  { f: 'AI calling minutes / mo', d: ['50', '100', '1,000', '4,000', '20,000', <span key="u3" style={{ color: '#DD39F9', fontWeight: 500 }}>Unlimited</span>] },
  { f: 'Workspaces',              d: ['2', '5', '25', 'Unlimited', 'Unlimited', 'Unlimited'] },
  { f: 'Team members',            d: ['Up to 3', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
  { cat: 'Features' },
  { f: 'Standard access to platform', d: [CHECK, CHECK, CHECK, CHECK, CHECK, CHECK] },
  { f: 'Workflow automation',         d: [CROSS, CHECK, CHECK, CHECK, CHECK, CHECK] },
  { f: 'Multi-channel engagement',    d: [CROSS, CHECK, CHECK, CHECK, CHECK, CHECK] },
  { f: 'All compliance tools',        d: [CROSS, CROSS, CHECK, CHECK, CHECK, CHECK] },
  { f: 'Advanced analytics',          d: [CROSS, CROSS, CROSS, CHECK, CHECK, CHECK] },
  { f: 'Dedicated account manager',   d: [CROSS, CROSS, CROSS, CHECK, CHECK, CHECK] },
  { f: '24/7 phone support',          d: [CROSS, CROSS, CROSS, CHECK, CHECK, CHECK] },
  { f: 'API access',                  d: [CROSS, CROSS, CROSS, CHECK, CHECK, CHECK] },
  { f: 'Custom integrations',         d: [CROSS, CROSS, CROSS, CROSS, CHECK, CHECK] },
  { f: 'White-label options',         d: [CROSS, CROSS, CROSS, CROSS, CROSS, CHECK] },
  { f: 'SLA guarantee',               d: [CROSS, CROSS, CROSS, CROSS, CROSS, CHECK] },
  { cat: 'Support' },
  { f: 'Priority support',            d: [CROSS, CROSS, CHECK, CHECK, CHECK, CHECK] },
];

const FAQS = [
  { q: 'Can I switch plans at any time?', a: "Yes. Upgrades are immediate — your new limits apply right away and you're billed the prorated difference. Downgrades apply at the start of your next billing cycle, so you keep your current limits until then." },
  { q: "What exactly counts as an 'account'?", a: "An account is one active debtor record in DROS. Archived accounts don't count toward your limit — you only pay for what you're actively working. Your dashboard shows your live count at all times." },
  { q: 'What happens when I hit my AI calling minutes limit?', a: "You get an in-app alert at 80% usage. Calls already in progress won't be cut off. Once you hit the limit, outbound AI campaigns pause. You can purchase additional minutes instantly from your dashboard, or upgrade — no downtime." },
  { q: 'Is Reg F compliance actually built in, or do I configure it?', a: "Both. You configure the rules once at campaign level — call frequency caps, time-of-day windows, opt-out handling — and DROS enforces them automatically from there. No per-call manual management. Available from Professional tier upward; Starter gives you the workflow foundation to build on." },
  { q: 'How long does onboarding actually take?', a: "Most teams run their first AI campaign within 48 hours of signing up. DROS provides pre-built call flows, a guided setup checklist, and live support. Enterprise clients get a dedicated onboarding engineer who works through your tech stack and compliance configuration directly." },
  { q: 'Do you integrate with our existing CRM or dialer?', a: "API access is included from Business tier upward, enabling custom integrations with your existing stack. We have pre-built connectors for common collections CRMs. On lower tiers, you can import and export data via CSV — live API sync is a Business-tier feature." },
  { q: "We're a third-party agency — does DROS support that?", a: "Yes. DROS handles both first-party collections and third-party agency workflows. Run multiple client portfolios in separate workspaces, each with its own call flows, compliance settings, and reporting. Unlimited workspaces from Business tier upward.", aNode: <>Yes. DROS handles both <Link to="/collections/first-party" className="underline underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: '#03D2FC' }}>first-party collections</Link> and <Link to="/collections/third-party" className="underline underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: '#03D2FC' }}>third-party agency</Link> workflows. Run multiple client portfolios in separate workspaces, each with its own call flows, compliance settings, and reporting. Unlimited workspaces from Business tier upward.</> },
  { q: "What does 'white-label' mean on Enterprise?", a: "Enterprise clients deploy DROS under their own brand — custom domain, logo, and UI skin. Used by agencies offering AI collections as a managed service, or large servicers who want DROS embedded inside their own platform." },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a as string },
  })),
};

function ShieldCheck() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#03D2FC" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>;
}
function Lock() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#03D2FC" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
}
function FileCheck() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#03D2FC" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><polyline points="9 12 11 14 15 10" /></svg>;
}
function MonitorIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#03D2FC" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
}

const COMPLIANCE_BADGES = [
  { label: 'FDCPA Compliant', icon: <ShieldCheck /> },
  { label: 'Reg F Ready', icon: <ShieldCheck /> },
  { label: 'SOC 2 Type II', icon: <Lock /> },
  { label: 'ISO 27001', icon: <Lock /> },
  { label: 'HIPAA Compliant', icon: <FileCheck /> },
  { label: 'TCPA Controls Built-in', icon: <FileCheck /> },
  { label: '99.9% Uptime SLA', icon: <MonitorIcon /> },
];

const PLANS = [
  {
    name: 'Core',
    description: 'For growing companies automating their first finance workflows.',
    monthly: 99,
    popular: false,
    ctaKey: 'pricing_core_cta',
    sections: [
      { title: 'Agents', features: ['1 AI agent', 'Up to 500 transactions per month'] },
      { title: 'Integrations', features: ['Standard integrations', 'SSO/SAML integration'] },
    ],
  },
  {
    name: 'Growth',
    description: 'For mid-market companies scaling multiple finance workflows.',
    monthly: 189,
    popular: true,
    ctaKey: 'pricing_growth_cta',
    sections: [
      { title: 'Agents', features: ['3 AI agents', 'Up to 2500 transactions per month'] },
      { title: 'Integrations', features: ['Premium integrations', 'SSO/SAML integration'] },
    ],
  },
  {
    name: 'Pro',
    description: 'For large organizations with complex finance operations.',
    monthly: 299,
    popular: false,
    ctaKey: 'pricing_pro_cta',
    sections: [
      { title: 'Agents', features: ['Unlimited AI agents', 'Unlimited transactions'] },
      { title: 'Integrations', features: ['All integrations', 'Advanced security'] },
    ],
  },
];

function PlanCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AnimatedPrice({ monthly, annual }: { monthly: number; annual: boolean }) {
  const display = annual ? Math.round(monthly * 0.8) : monthly;

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <span style={{ fontSize: 22, fontWeight: 500, color: '#fff', marginTop: 10, marginRight: 2, lineHeight: 1 }}>$</span>
      <div style={{ overflow: 'hidden', height: 68 }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={display}
            initial={{ y: annual ? 68 : -68, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: annual ? -68 : 68, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.44, 0, 0.11, 1] }}
            style={{ display: 'block', fontSize: 60, fontWeight: 600, color: '#fff', lineHeight: '68px', fontVariantNumeric: 'tabular-nums' }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: '#000' }}>
      <Helmet>
        <title>Pricing - DROS</title>
        <meta name="description" content="Simple, transparent pricing for AI-powered debt collection. Plans built to scale with your portfolio." />
        <link rel="canonical" href="https://dros.ai/pricing" />
        <meta property="og:title" content="Pricing - DROS" />
        <meta property="og:description" content="Simple, transparent pricing for AI-powered debt collection. Plans built to scale with your portfolio." />
        <meta property="og:url" content="https://dros.ai/pricing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ background: '#000', paddingTop: 120, paddingBottom: 64 }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          {/* Eyebrow */}
          <p style={{ fontSize: 11, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.32)', marginBottom: 28, textTransform: 'uppercase', fontWeight: 500 }}>
            &#9632; PRICING
          </p>

          {/* Two-tone heading */}
          <h1 style={{ fontFamily: "'Sentient', serif", lineHeight: 1.06, marginBottom: 24, letterSpacing: '-0.01em' }}>
            <span style={{ display: 'block', fontSize: 'clamp(52px, 7vw, 72px)', fontWeight: 400, color: '#fff' }}>Simple Pricing</span>
            <span style={{ display: 'block', fontSize: 'clamp(52px, 7vw, 72px)', fontWeight: 300, color: 'rgba(255,255,255,0.38)' }}>Built for Scale</span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.52)', maxWidth: 500, margin: '0 auto 40px', fontWeight: 400 }}>
            Start automating finance workflows for less than the cost of a single employee. Most customers see 10x ROI in the first year.
          </p>

          {/* Billing toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <span
              onClick={() => setAnnual(false)}
              style={{ fontSize: 14, cursor: 'pointer', userSelect: 'none', color: !annual ? '#fff' : 'rgba(255,255,255,0.38)', fontWeight: !annual ? 500 : 400, transition: 'color 0.2s' }}
            >
              Monthly
            </span>

            <div
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle billing period"
              role="switch"
              aria-checked={annual}
              style={{ position: 'relative', width: 52, height: 28, borderRadius: 14, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', cursor: 'pointer', flexShrink: 0 }}
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                style={{ position: 'absolute', top: 4, left: annual ? 28 : 4, width: 20, height: 20, borderRadius: '50%', background: '#fff' }}
              />
            </div>

            <span
              onClick={() => setAnnual(true)}
              style={{ fontSize: 14, cursor: 'pointer', userSelect: 'none', color: annual ? '#fff' : 'rgba(255,255,255,0.38)', fontWeight: annual ? 500 : 400, transition: 'color 0.2s' }}
            >
              Yearly
            </span>

            <span style={{ fontSize: 12, fontWeight: 500, color: '#fff', padding: '4px 12px', border: '1px solid rgba(255,255,255,0.22)', borderRadius: 9999, letterSpacing: '0.01em' }}>
              Save 20%
            </span>
          </div>
        </div>
      </section>

      {/* ── PLAN CARDS ── */}
      <section style={{ background: '#000', paddingBottom: 96 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {PLANS.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
                style={{
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 18,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default',
                  transition: 'border-color 0.22s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onHoverStart={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)';
                }}
                onHoverEnd={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                {/* Subtle glow on Popular card */}
                {plan.popular && (
                  <div style={{ position: 'absolute', inset: 0, borderRadius: 18, pointerEvents: 'none', background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
                )}

                {/* Plan name + Popular badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, position: 'relative' }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>{plan.name}</span>
                  {plan.popular && (
                    <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.65)', padding: '3px 10px', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 9999 }}>
                      Popular
                    </span>
                  )}
                </div>

                {/* Description */}
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', lineHeight: 1.6, marginBottom: 24 }}>
                  {plan.description}
                </p>

                {/* Animated price */}
                <AnimatedPrice monthly={plan.monthly} annual={annual} />

                {/* PER USER/MONTH label */}
                <p style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 8, marginBottom: 22, fontWeight: 500 }}>
                  Per User/Month
                </p>

                {/* Divider */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: 22 }} />

                {/* Feature sections */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {plan.sections.map((section) => (
                    <div key={section.title}>
                      <p style={{ fontSize: 12, fontWeight: 600, color: '#fff', marginBottom: 10 }}>
                        {section.title}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {section.features.map((feature) => (
                          <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <PlanCheck />
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.52)', lineHeight: 1.4 }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <motion.a
                  href="https://app.dros.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCta(plan.ctaKey)}
                  whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '13px 0',
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#000',
                    background: '#fff',
                    borderRadius: 9999,
                    marginTop: 24,
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                  }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COMPARE TABLE ── */}
      <section className="py-20" style={{ background: '#F5F7FF' }}>
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full mb-5" style={{ color: '#1A237E', background: 'rgba(26,35,126,0.07)', border: '0.5px solid rgba(26,35,126,0.15)' }}>Full breakdown</span>
            <h2 className="font-medium leading-tight tracking-tight mb-2" style={{ fontSize: 'clamp(22px,2.8vw,34px)', color: '#0D1B3E' }}>Compare all plans</h2>
            <p className="text-sm font-light" style={{ color: 'rgba(13,27,62,0.55)' }}>Everything side by side.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-sm" style={{ border: '0.5px solid rgba(13,27,62,0.1)' }}>
            <table style={{ width: '100%', minWidth: 820, borderCollapse: 'collapse', fontSize: 13 }}>
              <thead style={{ background: '#fff', position: 'sticky', top: 64, zIndex: 5 }}>
                {/* Plan name row */}
                <tr>
                  <th style={{ width: '26%', padding: '16px 12px 4px', textAlign: 'left', fontSize: 11, fontWeight: 500, color: 'rgba(13,27,62,0.55)', textTransform: 'uppercase', letterSpacing: '0.06em' }}></th>
                  {['Free', 'Starter', 'Professional', 'Business', 'Biz Plus', 'Enterprise'].map((name, i) => (
                    <th key={name} style={{ padding: '16px 12px 4px', textAlign: 'center', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: i === 1 ? '#1A237E' : i === 5 ? '#DD39F9' : 'rgba(13,27,62,0.55)', whiteSpace: 'nowrap' }}>{name}</th>
                  ))}
                </tr>
                {/* Price row */}
                <tr>
                  <th style={{ padding: '2px 12px 14px', textAlign: 'left', borderBottom: '0.5px solid rgba(13,27,62,0.1)' }}></th>
                  <th style={{ padding: '2px 12px 14px', textAlign: 'center', borderBottom: '0.5px solid rgba(13,27,62,0.1)' }}>
                    <span style={{ fontSize: 20, fontWeight: 500, color: '#0D1B3E', display: 'block' }}>$0</span>
                  </th>
                  <th style={{ padding: '2px 12px 14px', textAlign: 'center', borderBottom: '0.5px solid rgba(13,27,62,0.1)' }}>
                    <span style={{ fontSize: 20, fontWeight: 500, color: '#0D1B3E', display: 'block' }}>{price(BASE.s, annual)}</span>
                    <span style={{ fontSize: 11, color: 'rgba(13,27,62,0.55)', fontWeight: 300 }}>/mo</span>
                  </th>
                  <th style={{ padding: '2px 12px 14px', textAlign: 'center', borderBottom: '0.5px solid rgba(13,27,62,0.1)' }}>
                    <span style={{ fontSize: 20, fontWeight: 500, color: '#0D1B3E', display: 'block' }}>{price(BASE.p, annual)}</span>
                    <span style={{ fontSize: 11, color: 'rgba(13,27,62,0.55)', fontWeight: 300 }}>/mo</span>
                  </th>
                  <th style={{ padding: '2px 12px 14px', textAlign: 'center', borderBottom: '0.5px solid rgba(13,27,62,0.1)' }}>
                    <span style={{ fontSize: 20, fontWeight: 500, color: '#0D1B3E', display: 'block' }}>{price(BASE.b, annual)}</span>
                    <span style={{ fontSize: 11, color: 'rgba(13,27,62,0.55)', fontWeight: 300 }}>/mo</span>
                  </th>
                  <th style={{ padding: '2px 12px 14px', textAlign: 'center', borderBottom: '0.5px solid rgba(13,27,62,0.1)' }}>
                    <span style={{ fontSize: 20, fontWeight: 500, color: '#0D1B3E', display: 'block' }}>{price(BASE.bp, annual)}</span>
                    <span style={{ fontSize: 11, color: 'rgba(13,27,62,0.55)', fontWeight: 300 }}>/mo</span>
                  </th>
                  <th style={{ padding: '2px 12px 14px', textAlign: 'center', borderBottom: '0.5px solid rgba(13,27,62,0.1)' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, display: 'block', ...gradStyle }}>Custom</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, idx) => {
                  if ('cat' in row) {
                    return (
                      <tr key={idx}>
                        <td colSpan={7} style={{ padding: '12px 12px 6px', fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(3,150,200,0.9)', background: 'rgba(3,210,252,0.05)', borderTop: '0.5px solid rgba(3,210,252,0.12)', borderBottom: '0.5px solid rgba(3,210,252,0.08)' }}>{row.cat}</td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? '#fff' : '#FAFBFF' }}>
                      <td style={{ padding: '10px 12px', borderBottom: '0.5px solid rgba(13,27,62,0.07)', color: '#0D1B3E', fontSize: 13 }}>{row.f}</td>
                      {row.d.map((cell, ci) => (
                        <td key={ci} style={{ padding: '10px 12px', borderBottom: '0.5px solid rgba(13,27,62,0.07)', textAlign: 'center', fontSize: 12, color: '#0D1B3E' }}>{cell}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: '#06122E' }}>
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <h2 className="font-medium leading-tight tracking-tight text-white mb-11" style={{ fontSize: 'clamp(22px,2.8vw,34px)' }}>What our customers say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { initials: 'DB', quote: '"A lot of software in this industry feels outdated. With DROS, things that used to take an entire day can now be done much faster, and the visibility across portfolios has been vital for our operations."', name: 'Darryl Brown', role: 'Principal, Greystone and Associates' },
              { initials: 'VP', quote: '"The ability to automate reminders and redialling without constant manual oversight was exactly what we needed at this scale."', name: 'VP of Collections', role: 'Consumer Finance Company, Utah' },
            ].map(({ initials, quote, name, role }) => (
              <div key={name} className="rounded-2xl p-7 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.09)' }}>
                <div className="absolute -top-4 left-5 text-[120px] font-medium leading-none pointer-events-none select-none" style={{ color: 'rgba(3,210,252,0.07)' }}>"</div>
                <p className="text-sm leading-[1.75] mb-6 relative" style={{ color: 'rgba(255,255,255,0.82)', fontWeight: 300 }}>{quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(221,57,249,0.25), rgba(3,210,252,0.25))', border: '0.5px solid rgba(3,210,252,0.3)', color: '#03D2FC' }}>{initials}</div>
                  <div>
                    <div className="text-sm font-medium text-white">{name}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.32)' }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE BADGES ── */}
      <section className="py-14" style={{ background: '#EEF1FA' }}>
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full mb-5" style={{ color: '#1A237E', background: 'rgba(26,35,126,0.07)', border: '0.5px solid rgba(26,35,126,0.15)' }}>Built for the industry</span>
          <h2 className="font-medium tracking-tight mb-2" style={{ fontSize: 'clamp(20px,2.8vw,34px)', color: '#0D1B3E' }}>Security &amp; compliance, covered</h2>
          <p className="text-sm font-light mb-8" style={{ color: 'rgba(13,27,62,0.55)' }}>Every plan runs on infrastructure built for the regulatory demands of debt collections.</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {COMPLIANCE_BADGES.map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 text-xs shadow-sm" style={{ border: '0.5px solid rgba(13,27,62,0.1)', color: '#0D1B3E' }}>
                {icon}
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: '#010C20' }}>
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full mb-5" style={{ color: '#03D2FC', background: 'rgba(3,210,252,0.08)', border: '0.5px solid rgba(3,210,252,0.22)' }}>Common questions</span>
          <h2 className="font-medium text-white mb-11 leading-tight tracking-tight" style={{ fontSize: 'clamp(22px,2.8vw,34px)' }}>If it's not here, talk to us.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl px-5 py-4 cursor-pointer transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: openFaq === i ? '0.5px solid rgba(3,210,252,0.35)' : '0.5px solid rgba(255,255,255,0.09)' }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-start gap-3">
                  <span className="text-sm font-medium text-white leading-snug">{faq.q}</span>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-200"
                    style={{ color: openFaq === i ? '#03D2FC' : 'rgba(255,255,255,0.28)', transform: openFaq === i ? 'rotate(180deg)' : 'none' }}
                  />
                </div>
                {openFaq === i && (
                  <p className="text-sm mt-3 leading-[1.7] font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>{(faq as { aNode?: React.ReactNode }).aNode ?? faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── END CTA ── */}
      <section className="py-20" style={{ background: '#F5F7FF' }}>
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="rounded-2xl px-8 sm:px-12 py-16 text-center relative overflow-hidden" style={{ background: '#010C20', border: '0.5px solid rgba(221,57,249,0.2)' }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 500, height: 280, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(221,57,249,0.1) 0%, transparent 70%)' }} />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-3 leading-tight">Not sure which plan fits?</h2>
              <p className="text-sm sm:text-base font-light mb-7 max-w-md mx-auto leading-[1.65]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Talk to a DROS expert. We'll map your portfolio size, tech stack, and compliance requirements to the right plan - or build one around you.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {['Free 30-min assessment', 'No commitment required', 'Implementation roadmap included'].map(perk => (
                  <span key={perk} className="text-xs px-3.5 py-1.5 rounded-full" style={{ color: 'rgba(221,57,249,0.85)', background: 'rgba(221,57,249,0.08)', border: '0.5px solid rgba(221,57,249,0.2)' }}>{perk}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to="/book-meeting"
                  onClick={() => trackCta('pricing_endcta_expert')}
                  className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-medium text-white transition-all hover:opacity-85 w-full sm:w-auto"
                  style={gradBg}
                >Talk to an Expert</Link>
                <a
                  href="https://app.dros.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCta('pricing_endcta_trial')}
                  className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-85 w-full sm:w-auto"
                  style={{ color: 'rgba(255,255,255,0.8)', border: '0.5px solid rgba(255,255,255,0.25)' }}
                >Start Free Trial</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
