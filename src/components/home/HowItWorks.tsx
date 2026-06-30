import { useEffect, useRef, useState } from 'react';
import {
  Upload, Database, Phone, MessageSquare, Mail, BarChart3, ArrowUpRight, FileCheck, Search,
} from 'lucide-react';
import { Section, Container, Eyebrow, Button } from '../ui';
import Reveal from '../Reveal';

const TABS = [
  { n: '01', title: 'Connect your portfolio', sub: 'Upload accounts via CSV or API, no migration project.' },
  { n: '02', title: 'AI agents make contact', sub: 'Compliant calls, texts and follow-ups across every channel.' },
  { n: '03', title: 'You collect, we handle the rest', sub: 'Real-time recovery, escalation and a full audit trail.' },
];

const SHOWCASES = [
  {
    visual: <ImportVisual />,
    heading: 'Onboard in minutes',
    body: 'Map accounts to your workflow with a CSV or a single API call. DROS syncs balances, contacts and history with no rip-and-replace.',
    href: '/collections/first-party',
    metrics: [{ v: '5 min', c: 'Average setup time' }, { v: '0', c: 'Migration projects' }],
  },
  {
    visual: <ContactVisual />,
    heading: 'Reach every account',
    body: 'AI agents call, text and follow up on your behalf, scripted to FDCPA and Reg F standards and logged in full for every interaction.',
    href: '/features/context-aware-voice-ai-agents-for-debt-collection',
    metrics: [{ v: '3x', c: 'Right-party contact rate' }, { v: '100%', c: 'Compliant and logged' }],
  },
  {
    visual: <DashboardVisual />,
    heading: 'See recovery in real time',
    body: 'Track collected revenue, contact rates and compliance live, with automatic escalation to human agents the moment it is needed.',
    href: '/pricing',
    metrics: [{ v: '+18%', c: 'Recovery lift' }, { v: '24/7', c: 'Always-on outreach' }],
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = refs.current.findIndex((r) => r === e.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );
    refs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <Section id="how-it-works" tone="base">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>How DROS works</Eyebrow>
          <h2 className="mt-6 font-display text-display text-ink">
            Built for collections teams who move faster
          </h2>
          <p className="mt-5 text-lg text-ink/55">
            Three steps from portfolio to payment - every interaction compliant, logged and working
            around the clock.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          {/* Sticky numbered tabs */}
          <div className="hidden lg:block">
            <div className="sticky top-28 space-y-7">
              {TABS.map((t, i) => (
                <button
                  key={t.n}
                  onClick={() => refs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  className="block w-full text-left"
                >
                  <div className="flex items-baseline gap-3">
                    <span className={`font-mono text-xs ${active === i ? 'text-accent' : 'text-ink/30'}`}>{t.n}</span>
                    <span className={`text-lg transition-colors ${active === i ? 'text-ink' : 'text-ink/40'}`}>
                      {t.title}
                    </span>
                  </div>
                  {active === i && (
                    <p className="ml-7 mt-2 max-w-[14rem] text-sm leading-relaxed text-ink/50">{t.sub}</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Showcases */}
          <div className="space-y-20 lg:space-y-28">
            {SHOWCASES.map((s, i) => (
              <Reveal key={i} large>
                <div ref={(el) => { refs.current[i] = el; }}>
                  {/* Mobile tab label */}
                  <div className="mb-5 flex items-baseline gap-3 lg:hidden">
                    <span className="font-mono text-xs text-accent">{TABS[i].n}</span>
                    <span className="text-lg text-ink">{TABS[i].title}</span>
                  </div>

                  <FrameTilt>{s.visual}</FrameTilt>

                  <div className="mt-8 flex items-start justify-between gap-6">
                    <h3 className="font-display text-2xl text-ink md:text-[1.75rem]">{s.heading}</h3>
                    <Button variant="primary" size="md" to={s.href} className="shrink-0">
                      Learn More
                    </Button>
                  </div>
                  <p className="mt-4 max-w-2xl text-ink/55">{s.body}</p>

                  <div className="mt-8 grid max-w-md grid-cols-2 gap-px overflow-hidden">
                    {s.metrics.map((m, j) => (
                      <div key={j} className={j > 0 ? 'border-l border-hair pl-8' : ''}>
                        <div className="font-display text-3xl text-ink md:text-4xl">{m.v}</div>
                        <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-wider text-ink/45">{m.c}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <Testimonial />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* Slight 3D tilt + top fade, echoing Lateral's framed screenshots. */
function FrameTilt({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative" style={{ perspective: '1600px' }}>
      <div
        className="overflow-hidden rounded-xl border border-line bg-[#0A0E17] shadow-lift"
        style={{ transform: 'rotateX(3deg)' }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Coded DROS dashboard UIs (dark, like Lateral's product screens) ── */
function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 border-b border-hair px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md border border-hair bg-base/60 px-3 py-1.5 text-xs text-ink/35">
          <Search className="h-3 w-3" /> Search accounts, agents, reports...
        </div>
      </div>
      <div className="flex">
        <div className="hidden w-40 shrink-0 space-y-1 border-r border-hair p-3 sm:block">
          {['Dashboard', 'Agents', 'Chat', 'Workflows', 'Reports', 'Settings'].map((it, i) => (
            <div key={it} className={`rounded-md px-2.5 py-1.5 text-xs ${i === 4 ? 'bg-white/[0.06] text-ink' : 'text-ink/40'}`}>{it}</div>
          ))}
        </div>
        <div className="flex-1 p-5">{children}</div>
      </div>
    </div>
  );
}

function ImportVisual() {
  const rows = [['ACC-10428', '$2,140.00'], ['ACC-10429', '$880.50'], ['ACC-10430', '$5,302.00']];
  return (
    <Chrome>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-ink/80"><Upload className="h-4 w-4 text-accent" /> portfolio_q3.csv</div>
        <span className="flex items-center gap-1.5 text-xs text-emerald-300"><Database className="h-3.5 w-3.5" /> 4,218 mapped</span>
      </div>
      <div className="mt-4 space-y-2">
        {rows.slice(0, 3).map(([id, amt]) => (
          <div key={id} className="flex items-center justify-between rounded-lg border border-hair bg-surface/50 px-3 py-2.5 text-xs">
            <span className="font-mono text-ink/70">{id}</span>
            <span className="text-ink/80">{amt}</span>
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-accent">Mapped</span>
          </div>
        ))}
      </div>
    </Chrome>
  );
}

function ContactVisual() {
  const ch = [
    { icon: Phone, label: 'Voice call', detail: 'Connected - 2m 14s' },
    { icon: MessageSquare, label: 'SMS follow-up', detail: 'Delivered' },
    { icon: Mail, label: 'Email summary', detail: 'Opened' },
  ];
  return (
    <Chrome>
      <div className="flex items-center justify-between text-sm text-ink/80">
        <span>Accounts Agent</span><span className="text-xs text-accent">Reg F compliant</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {ch.map(({ icon: Icon, label, detail }) => (
          <div key={label} className="flex items-center gap-3 rounded-lg border border-hair bg-surface/50 px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent"><Icon className="h-4 w-4" /></div>
            <div className="flex-1"><div className="text-xs font-medium text-ink/80">{label}</div><div className="text-[11px] text-ink/45">{detail}</div></div>
            <FileCheck className="h-3.5 w-3.5 text-emerald-400" />
          </div>
        ))}
      </div>
    </Chrome>
  );
}

function DashboardVisual() {
  return (
    <Chrome>
      <div className="flex items-center justify-between text-sm text-ink/80">
        <span className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-accent" /> Recovery overview</span>
        <span className="flex items-center gap-1 text-xs text-emerald-300"><ArrowUpRight className="h-3.5 w-3.5" /> +18.4%</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-hair bg-surface/50 p-3"><div className="text-[11px] text-ink/45">Collected</div><div className="mt-1 font-display text-2xl text-ink">$842K</div></div>
        <div className="rounded-lg border border-hair bg-surface/50 p-3"><div className="text-[11px] text-ink/45">Contact rate</div><div className="mt-1 font-display text-2xl text-ink">71%</div></div>
      </div>
      <div className="mt-3 flex h-16 items-end gap-1.5 rounded-lg border border-hair bg-surface/40 px-3 pb-3 pt-2">
        {[40, 55, 48, 62, 70, 66, 82, 78, 90].map((h, i) => (<span key={i} className="flex-1 rounded-t bg-accent/60" style={{ height: `${h}%` }} />))}
      </div>
    </Chrome>
  );
}

function Testimonial() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-dark bg-paper p-8 md:p-10">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-grey">Greystone</div>
      <blockquote className="mt-5 max-w-3xl font-display text-xl leading-snug text-ink-dark md:text-2xl">
        &ldquo;DROS does the outreach we never had the staff for, and every call comes back fully
        logged and compliant. It pays for itself.&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-dark font-mono text-sm text-white">VC</div>
        <div>
          <div className="text-sm font-medium text-ink-dark">VP of Collections</div>
          <div className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-grey">Leading US agency</div>
        </div>
      </div>
    </div>
  );
}
