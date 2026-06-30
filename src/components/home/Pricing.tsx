import { motion } from 'framer-motion';
import { Section, Container, Eyebrow } from '../ui';
import Reveal, { RevealItem } from '../Reveal';
import { trackCta } from '../../lib/analytics';

const PLANS = [
  {
    name: 'Starter',
    description: 'For collection teams automating their first AI outreach workflows.',
    price: '1,000',
    popular: false,
    ctaLabel: 'Get Started',
    ctaHref: 'https://app.dros.ai',
    ctaKey: 'pricing_starter_cta',
    external: true,
    sections: [
      {
        title: 'Accounts',
        features: ['Core AI calling', 'Basic reporting', 'FDCPA compliance built in'],
      },
      {
        title: 'Support',
        features: ['Standard integrations', 'Email support'],
      },
    ],
  },
  {
    name: 'Growth',
    description: 'For mid-market agencies scaling outreach across multiple portfolios.',
    price: '2,500',
    popular: true,
    ctaLabel: 'Get Started',
    ctaHref: 'https://app.dros.ai',
    ctaKey: 'pricing_growth_cta',
    external: true,
    sections: [
      {
        title: 'Accounts',
        features: ['Everything in Starter', 'Multi-agent deployment', 'Advanced analytics'],
      },
      {
        title: 'Integrations',
        features: ['CRM integrations', 'SSO/SAML', 'Priority support'],
      },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex operations and volume requirements.',
    price: null,
    popular: false,
    ctaLabel: 'Talk to Sales',
    ctaHref: '/book-meeting',
    ctaKey: 'pricing_enterprise_cta',
    external: false,
    sections: [
      {
        title: 'Accounts',
        features: ['Unlimited accounts', 'Custom integrations', 'Volume pricing'],
      },
      {
        title: 'Support',
        features: ['Dedicated account manager', 'Advanced security', 'SLA guarantee'],
      },
    ],
  },
];

function PlanCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <Section id="pricing" tone="base">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-4 font-display leading-tight" style={{ letterSpacing: '-0.01em' }}>
            <span className="block text-display text-ink">Simple Pricing</span>
            <span className="block text-display text-ink/40" style={{ fontWeight: 300 }}>Built for Collections</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/50">
            Start recovering more with AI built for US debt collections. Most customers see ROI within the first 30 days.
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="mt-12 grid gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <RevealItem key={plan.name}>
              <motion.div
                whileHover={{ y: -8, scale: 1.015, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
                onHoverStart={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)'; }}
                onHoverEnd={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                className="relative flex h-full flex-col overflow-hidden"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: 28, cursor: 'default', transition: 'border-color 0.22s ease' }}
              >
                {plan.popular && (
                  <div style={{ position: 'absolute', inset: 0, borderRadius: 18, pointerEvents: 'none', background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
                )}

                <div className="relative flex items-center justify-between" style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>{plan.name}</span>
                  {plan.popular && (
                    <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.65)', padding: '3px 10px', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 9999 }}>
                      Popular
                    </span>
                  )}
                </div>

                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', lineHeight: 1.6, marginBottom: 20 }}>
                  {plan.description}
                </p>

                {plan.price ? (
                  <>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 20, fontWeight: 500, color: '#fff', marginTop: 8, marginRight: 2, lineHeight: 1 }}>$</span>
                      <span style={{ fontSize: 48, fontWeight: 600, color: '#fff', lineHeight: '58px', fontVariantNumeric: 'tabular-nums' }}>
                        {plan.price}
                      </span>
                    </div>
                    <p style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 8, marginBottom: 20, fontWeight: 500 }}>
                      Per Month
                    </p>
                  </>
                ) : (
                  <div style={{ marginBottom: 28 }}>
                    <span style={{ fontSize: 32, fontWeight: 600, color: '#fff' }}>Custom</span>
                  </div>
                )}

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: 20 }} />

                <div className="flex flex-1 flex-col gap-5">
                  {plan.sections.map((sec) => (
                    <div key={sec.title}>
                      <p style={{ fontSize: 12, fontWeight: 600, color: '#fff', marginBottom: 10 }}>
                        {sec.title}
                      </p>
                      <div className="flex flex-col gap-2">
                        {sec.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <PlanCheck />
                            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.52)', lineHeight: 1.4 }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {plan.external ? (
                  <motion.a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCta(plan.ctaKey)}
                    whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    whileTap={{ scale: 0.97 }}
                    style={{ display: 'block', width: '100%', padding: '13px 0', textAlign: 'center', fontSize: 14, fontWeight: 500, color: '#000', background: '#fff', borderRadius: 9999, marginTop: 24, textDecoration: 'none', letterSpacing: '0.01em' }}
                  >
                    {plan.ctaLabel}
                  </motion.a>
                ) : (
                  <motion.a
                    href={plan.ctaHref}
                    onClick={() => trackCta(plan.ctaKey)}
                    whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    whileTap={{ scale: 0.97 }}
                    style={{ display: 'block', width: '100%', padding: '13px 0', textAlign: 'center', fontSize: 14, fontWeight: 500, color: '#fff', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 9999, marginTop: 24, textDecoration: 'none', letterSpacing: '0.01em' }}
                  >
                    {plan.ctaLabel}
                  </motion.a>
                )}
              </motion.div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
