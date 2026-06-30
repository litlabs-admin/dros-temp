import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, Container, Heading, Eyebrow } from '../ui';
import Counter from '../Counter';
import Reveal, { RevealItem } from '../Reveal';

const STUDIES = [
  {
    name: 'Greystone',
    body: 'Replaced manual dialing with always-on AI outreach and lifted right-party contact across the portfolio.',
    metric: '+312%',
    metricLabel: 'contact rate',
    href: '/customer-stories/greystone-associates',
  },
  {
    name: 'Utah Consumer Finance',
    body: 'Automated first- and third-party follow-ups while keeping a complete, audit-ready compliance record.',
    metric: '$1.2M',
    metricLabel: 'recovered',
    href: '/customer-stories/utah-consumer-finance',
  },
];

export default function SocialProof() {
  return (
    <Section id="case-studies" tone="light">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-ink-grey">Proof</Eyebrow>
          <Heading as="h2" size="display" className="mt-4 text-ink-dark">
            Results that speak for themselves
          </Heading>
        </Reveal>

        {/* Case study cards */}
        <Reveal stagger={0.1} className="mt-14 grid gap-5 md:grid-cols-2">
          {STUDIES.map(({ name, body, metric, metricLabel, href }) => (
            <RevealItem key={name}>
              <div className="group flex h-full flex-col rounded-card border border-line-dark bg-white p-8 transition-transform hover:-translate-y-1">
                <div className="font-display text-xl text-ink-dark">{name}</div>
                <p className="mt-4 flex-1 leading-relaxed text-ink-grey">{body}</p>
                <div className="mt-6 flex items-end justify-between border-t border-line-dark pt-6">
                  <div>
                    <div className="font-display text-3xl text-ink-dark">{metric}</div>
                    <div className="text-xs text-ink-grey">{metricLabel}</div>
                  </div>
                  <Link
                    to={href}
                    className="inline-flex items-center gap-1.5 text-sm text-ink-grey transition-colors group-hover:text-ink-dark"
                  >
                    Read the story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>

        {/* Metric banner */}
        <Reveal className="mt-6">
          <div className="grid gap-px overflow-hidden rounded-card border border-line-dark sm:grid-cols-3">
            {[
              { value: 4.2, suffix: 'M+', decimals: 1, label: 'Accounts processed' },
              { value: 71, suffix: '%', label: 'Average contact rate' },
              { value: 100, suffix: '%', label: 'Compliance score' },
            ].map((m) => (
              <div key={m.label} className="bg-white p-8 text-center">
                <div className="font-display text-4xl text-ink-dark md:text-5xl">
                  <Counter to={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
                </div>
                <div className="mt-2 text-sm text-ink-grey">{m.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonial */}
        <Reveal className="mt-6">
          <div className="rounded-card border border-line-dark bg-white p-8 md:p-12">
            <Quote className="h-8 w-8 text-ink-dark/20" />
            <blockquote className="mt-5 max-w-3xl font-display text-2xl leading-snug text-ink-dark/90 md:text-[1.75rem]">
              DROS does the outreach we never had the staff for - and every call comes back fully
              logged and compliant. It pays for itself.
            </blockquote>
            <div className="mt-6 text-sm text-ink-grey">
              VP of Collections, leading US agency
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
