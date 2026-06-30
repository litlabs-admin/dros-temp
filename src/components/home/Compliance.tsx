import { ShieldCheck } from 'lucide-react';
import { Section, Container, Eyebrow, Button } from '../ui';
import Reveal, { RevealItem } from '../Reveal';

const STANDARDS = [
  { name: 'FDCPA', body: 'Every call scripted and logged to FDCPA standards.' },
  { name: 'TCPA', body: 'Consent tracking baked into every workflow.' },
  { name: 'SOC 2 Type II', body: 'Bank-level controls and continuous monitoring.' },
  { name: 'CFPB Reg F', body: 'Compliant cadencing and time-of-day controls built in.' },
  { name: 'State mini-FDCPA', body: 'State laws monitored and applied automatically.' },
];

const BADGES = ['SOC 2', 'FDCPA', 'TCPA', 'Reg F'];

export default function Compliance() {
  return (
    <Section id="compliance" tone="base">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Intro */}
          <Reveal>
            <Eyebrow>Compliance</Eyebrow>
            <h2 className="mt-6 font-display text-display text-ink">
              Compliance baked in - not an afterthought.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/55">
              For old-school collections buyers, compliance is the whole game. DROS treats it as a
              first-class feature, not a disclaimer - so every interaction is defensible by design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-hair bg-white/[0.03] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-ink/65"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" /> {b}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="primary" to="/book-meeting">Talk to Our AI Agent</Button>
            </div>
          </Reveal>

          {/* Divided list of standards */}
          <Reveal stagger={0.08} className="lg:pt-2">
            <div className="border-t border-hair">
              {STANDARDS.map((s) => (
                <RevealItem key={s.name}>
                  <div className="flex items-start gap-6 border-b border-hair py-5">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div className="flex-1">
                      <div className="font-medium text-ink">{s.name}</div>
                      <p className="mt-1 text-sm leading-relaxed text-ink/50">{s.body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Callout */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-card border border-accent/20 bg-gradient-to-br from-accent/[0.07] to-transparent p-8 md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <p className="relative max-w-4xl font-display text-2xl leading-snug text-ink md:text-[2rem]">
              DROS is the only AI collections platform where compliance is the product, not a
              checkbox.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
