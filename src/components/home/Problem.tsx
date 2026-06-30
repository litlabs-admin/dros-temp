import { Clock, AlertTriangle, TrendingDown } from 'lucide-react';
import { Section, Container, Button } from '../ui';
import Reveal, { RevealItem } from '../Reveal';
import { trackCta } from '../../lib/analytics';

const PAIN_POINTS = [
  {
    icon: Clock,
    body: 'Your collectors are spending 80% of their time on calls that go nowhere.',
  },
  {
    icon: AlertTriangle,
    body: 'Your compliance risk grows every time a human makes the wrong call.',
  },
  {
    icon: TrendingDown,
    body: "You're leaving recovery rates on the table because you can't scale outreach.",
  },
];

export default function Problem() {
  return (
    <Section id="problem" tone="light">
      <Container>
        <Reveal className="max-w-3xl text-center mx-auto">
          <RevealItem>
            <h2 className="font-display text-display text-ink-dark">Sound familiar?</h2>
          </RevealItem>
        </Reveal>

        <Reveal stagger={0.1} className="mt-14 grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map(({ icon: Icon, body }, i) => (
            <RevealItem key={i}>
              <div className="flex flex-col gap-5 rounded-card border border-line-dark bg-white p-8 h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-dark bg-[#F5F4F1]">
                  <Icon className="h-5 w-5 text-ink-dark" />
                </div>
                <p className="text-ink-grey leading-relaxed">{body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-12 text-center">
          <RevealItem>
            <p className="font-display text-xl text-ink-dark md:text-2xl">
              DROS solves all three - with AI built specifically for collections.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="mt-8">
              <Button variant="onLight" to="/book-meeting" onClick={() => trackCta('reality_book_demo')}>
                Talk to Our AI Agent
              </Button>
            </div>
          </RevealItem>
        </Reveal>
      </Container>
    </Section>
  );
}
