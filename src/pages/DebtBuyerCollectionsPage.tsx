export const route = '/collections/debt-buyer';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { trackCta } from '../lib/analytics';

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('db-in'); obs.disconnect(); } },
      { threshold: 0.06, rootMargin: '0px 0px -36px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`db-rv ${className}`} style={{ transitionDelay: delay ? `${delay}ms` : undefined }}>
      {children}
    </div>
  );
}

// ─── Persona data ─────────────────────────────────────────────────────────────
const PERSONAS = [
  {
    tab: 'Portfolio Owner / Principal',
    desc: 'Returns, strategy, oversight',
    role: 'Portfolio Owner / Principal',
    h: 'See what your acquisition is actually doing.',
    items: [
      'One workspace per portfolio - accounts, contacts, and outcomes in one place',
      'AI covers volume outreach so you\'re not paying for headcount to reach every account',
      'Know which accounts are in AI hands, which are in human queues, and which have been resolved',
      'Add a new acquisition as a new workspace - same rules, running in parallel without extra setup',
    ],
  },
  {
    tab: 'Collections Manager',
    desc: 'Agents, queues, coverage',
    role: 'Collections Manager',
    h: 'Run AI and human collectors from one OS.',
    items: [
      'Queues show exactly which accounts need human attention - with full context already attached',
      'Set routing rules once - DROS decides whether AI or human handles each account, automatically',
      'AI handles inbound 24/7 so after-hours contacts don\'t fall through the cracks',
      'Every AI interaction logged as transcript and tags - your collectors walk in informed, not cold',
    ],
  },
  {
    tab: 'Compliance Lead',
    desc: 'Guardrails, consent, audit',
    role: 'Compliance Lead',
    h: 'Guardrails in the platform, not in a policy doc.',
    items: [
      'DNC and consent revocations honored in real time across every channel - no manual syncing',
      'Call-rule enforcement, Reg F limits, and time-of-day windows encoded at the OS layer',
      'AI agents use approved scripts and disclosures on every interaction - full audit trail per account',
      'Escalation triggers route accounts out of AI reach the moment a compliance signal is detected',
    ],
  },
];

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Can I keep a separate workspace for each portfolio I acquire?',
    a: 'Yes - that\'s exactly how DROS is designed to be used for debt buyers. Each acquisition gets its own workspace with its own account list, queues, agent assignments, and engagement history. Portfolios don\'t bleed into each other. You can run multiple acquisitions in parallel and manage them independently from the same DROS account.',
  },
  {
    q: 'Does DROS replace my existing dialer or CRM?',
    a: 'No - DROS sits above your existing dialer and CRM as an engagement OS. Your current tools stay in place and connect to DROS as execution endpoints. The engagement logic, routing rules, and compliance guardrails live in DROS - so if you swap a dialer later, the rules don\'t need to be rebuilt. They live in the OS layer, not inside any individual tool.',
  },
  {
    q: 'What compliance rules does DROS handle out of the box for debt buyers?',
    a: 'DROS enforces DNC and consent management centrally - revocations are honored in real time across every channel. It applies Reg F call frequency limits, time-of-day windows, and configurable channel restrictions before any attempt is made. AI agents use your approved scripts and required disclosures on every interaction, with a full audit trail per account. You can layer in additional internal policies on top of these defaults.',
  },
  {
    q: 'How does DROS handle the handoff between AI and my human collectors?',
    a: 'You define the escalation rules - dispute language, hardship signals, balance thresholds, or any other trigger you set. When AI detects one of those signals, it stops and routes to the right human queue immediately. Your collector sees the full account timeline - every prior attempt, what the AI said, what the consumer said, and what flags were raised - before they pick up the phone. No briefing required.',
  },
  {
    q: "We're a small team. Is DROS too complex for us?",
    a: "DROS is built to scale down as well as up. A lean team running one or two portfolios can use DROS to punch above their weight - AI handles volume outreach while your collectors focus on the accounts that actually need a human conversation. You don't need a large ops team to configure it; we'll walk through your setup in the first session and get you to a working state before you go live.",
  },
];

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DROS',
  applicationCategory: 'BusinessApplication',
  description: 'DROS is a collections engagement OS for debt buyers who self-collect on purchased portfolios. Run AI agents, human collectors, and compliance guardrails per acquisition in one platform.',
  url: 'https://dros.ai',
  featureList: [
    'Portfolio workspaces per acquisition',
    'AI voice and digital agents for debt buyer collections',
    'Human collector queues with full account context',
    'DNC and consent management',
    'Reg F and UDAAP guardrails',
    'Call-rule enforcement',
    'Escalation routing from AI to human',
    'Full engagement transcript per account',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function Eyebrow({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className="flex items-center justify-center mb-5">
      <span className={`inline-block border rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase ${light ? 'border-slate-300 text-slate-600' : 'border-white/20 text-slate-300'}`}>{label}</span>
    </div>
  );
}

function DarkInlineCta({ title, desc, linkLabel, linkHref }: { title: string; desc: string; linkLabel: string; linkHref: string }) {
  return (
    <div className="mt-10 sm:mt-12 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-6 sm:px-9 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
      <div className="flex-1 min-w-0">
        <div className="text-[15px] font-bold text-white mb-1">{title}</div>
        <div className="text-sm text-slate-400 leading-relaxed">{desc}</div>
      </div>
      <Link
        to="/book-meeting"
        onClick={() => trackCta(linkLabel)}
        className="inline-flex items-center gap-2 font-bold text-sm px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5 flex-shrink-0 w-full sm:w-auto justify-center sm:justify-start"
        style={{ background: '#03D2FC', color: '#010C20' }}
      >
        {linkLabel} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function LightInlineCta({ title, desc, linkLabel }: { title: string; desc: string; linkLabel: string }) {
  return (
    <div className="mt-10 sm:mt-12 bg-[#F3F8FC] border border-slate-200 rounded-2xl px-5 py-6 sm:px-9 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 shadow-sm">
      <div className="flex-1 min-w-0">
        <div className="text-[15px] font-bold text-slate-900 mb-1">{title}</div>
        <div className="text-sm text-slate-500 leading-relaxed">{desc}</div>
      </div>
      <Link
        to="/book-meeting"
        onClick={() => trackCta(linkLabel)}
        className="inline-flex items-center gap-2 font-bold text-sm text-teal-600 hover:gap-3 transition-all flex-shrink-0 whitespace-nowrap"
      >
        {linkLabel} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DebtBuyerCollectionsPage() {
  const [activePersona, setActivePersona] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <style>{`
        .db-rv { opacity: 0; transform: translateY(20px); transition: opacity .65s cubic-bezier(.22,.68,0,1.1), transform .65s cubic-bezier(.22,.68,0,1.1); }
        .db-in { opacity: 1; transform: none; }
        @keyframes dbFadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
      `}</style>

      <Helmet>
        <title>AI Agents for Debt Buyer Collections | DROS</title>
        <meta name="description" content="DROS helps debt buyers who self-collect run AI agents and human collectors on purchased portfolios - with per-acquisition workspaces, Reg F guardrails, and full engagement history in one platform. Built for charged-off portfolio recovery teams." />
        <meta name="keywords" content="debt buyer collections software, AI agents for debt collection, charged off portfolio collections, purchased portfolio collections platform, debt buyer collections platform, AI debt collection software, self-collect debt buyer, collections software charged off accounts, Reg F debt buyer, debt recovery AI agents" />
        <link rel="canonical" href="https://dros.ai/collections/debt-buyer" />
        <meta property="og:title" content="AI Agents for Debt Buyer Collections | DROS" />
        <meta property="og:description" content="DROS helps debt buyers who self-collect run AI agents and human collectors on purchased portfolios - with per-acquisition workspaces, Reg F guardrails, and full engagement history in one platform." />
        <meta property="og:image" content="https://dros.ai/dros-logo-horizontal.svg" />
        <meta property="og:url" content="https://dros.ai/collections/debt-buyer" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://dros.ai/dros-logo-horizontal.svg" />
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-950 pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-950 to-blue-950/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] bg-[radial-gradient(ellipse_at_50%_30%,rgba(6,182,212,.07)_0%,rgba(6,182,212,.03)_40%,transparent_65%)]" />
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)',
              backgroundSize: '72px 72px',
              maskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%,black 0%,transparent 100%)',
            }}
          />
        </div>
        <div className="relative max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-cyan-400/25 bg-cyan-400/[0.07] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-cyan-400">Debt buyers who self-collect</span>
            </div>
            <h1
              className="font-bold text-white mb-5 max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(30px,5.5vw,66px)', lineHeight: 1.07, letterSpacing: '-.03em' }}
            >
              The engagement OS for{' '}
              <em className="not-italic text-cyan-400">debt buyers who collect</em>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-[560px] mx-auto mb-10 font-normal">
              You bought the portfolio. Now run outreach on it - with AI agents, human collectors, and compliance guardrails working together in one OS, per acquisition.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link
                to="/book-meeting"
                onClick={() => trackCta('Book a walkthrough - hero')}
                className="inline-flex items-center gap-2 font-bold text-base px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
                style={{ background: '#03D2FC', color: '#010C20' }}
              >
                Book a walkthrough <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-slate-900 border-y border-white/[0.05] py-5">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
          {[
            'One workspace per portfolio acquisition',
            'AI + human agents in the same OS',
            'Compliance guardrails built into the engagement layer',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-400 text-center sm:text-left">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── THE SELF-COLLECT REALITY ── */}
      <section className="bg-white py-14 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center mb-10 md:mb-14">
              <Eyebrow label="The self-collect reality" light />
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.25] text-slate-900 mb-4">
                Most debt buyers run collections{' '}
                <em className="not-italic text-teal-600">without infrastructure built for it.</em>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[560px] mx-auto mt-4">
                You have the portfolio. The problem is running outreach on it cleanly - across accounts, channels, and collectors - without stitching together tools that weren't designed to work together.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-[20px] overflow-hidden">
              {[
                {
                  icon: '📋',
                  t: 'Accounts loaded, then what?',
                  d: 'You import a portfolio file and end up with a flat list of accounts. No prioritization logic, no channel strategy, no clear ownership of who works what - just a spreadsheet or a basic dialer queue.',
                },
                {
                  icon: '🔀',
                  t: 'No single view across agents and channels',
                  d: 'AI outreach, human collectors, and inbound calls all touch the same accounts - but there\'s no unified timeline. Contacts get repeated, context gets lost, and the left hand doesn\'t know what the right hand did.',
                },
                {
                  icon: '🗂️',
                  t: 'Compliance logic lives outside the system',
                  d: 'Call rules, consent handling, and Reg F guardrails are in someone\'s head or a policy doc - not encoded into the platform. One missed revocation or off-script exchange can create exposure across the whole portfolio.',
                },
              ].map((item, i) => (
                <div key={i} className={`px-6 sm:px-10 py-8 sm:py-12 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-slate-200' : ''}`}>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <div className="text-[15px] sm:text-[17px] font-bold text-slate-900 mb-2">{item.t}</div>
                  <div className="text-[14px] sm:text-[15px] text-slate-500 leading-[1.7]">{item.d}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-6 bg-[#F3F8FC] border border-slate-200 rounded-2xl p-5 sm:p-7 flex gap-4 items-start">
              <div className="text-2xl flex-shrink-0 mt-0.5">💡</div>
              <div>
                <div className="text-[15px] sm:text-[16px] font-bold text-slate-900 mb-1.5">The fix isn't a better dialer - it's an OS layer above it</div>
                <div className="text-[14px] sm:text-[15px] text-slate-500 leading-[1.7]">DROS sits above your existing tools and gives you engagement strategy, AI and human coordination, and compliance logic in one place - so every contact attempt on every account follows the same rules, automatically.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BUILT FOR YOUR TEAM (persona tabs) ── */}
      <section className="bg-[#f7f9fc] border-y border-slate-200/60 py-14 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center mb-10 md:mb-14">
              <Eyebrow label="Built for your team" light />
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.25] text-slate-900 mb-4">
                Whether you're running a lean team{' '}
                <em className="not-italic text-teal-600">or building a proper collections operation</em>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[560px] mx-auto mt-4">
                Select a role to see what DROS changes for you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            {/* Tab strip - scrollable on mobile */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden mb-5 bg-white shadow-sm">
              <div className="flex overflow-x-auto sm:grid sm:grid-cols-3" style={{ scrollSnapType: 'x mandatory' }}>
                {PERSONAS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePersona(i)}
                    style={{ scrollSnapAlign: 'start', minWidth: '200px' }}
                    className={`relative text-left px-5 sm:px-6 py-4 sm:py-5 flex-shrink-0 sm:flex-shrink transition-all border-r border-slate-200 last:border-r-0 ${activePersona === i ? 'bg-slate-950' : 'bg-white hover:bg-slate-50'}`}
                  >
                    {activePersona === i && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg,#DD39F9,#03D2FC)' }} />
                    )}
                    <div className={`text-[13px] sm:text-[15px] font-semibold leading-tight mb-1 pr-4 ${activePersona === i ? 'text-white' : 'text-slate-900'}`}>{p.tab}</div>
                    <div className={`text-[12px] sm:text-[13px] font-normal ${activePersona === i ? 'text-cyan-400' : 'text-slate-500'}`}>{p.desc}</div>
                    <div className={`absolute right-3 top-1/2 -translate-y-1/2 text-lg transition-transform ${activePersona === i ? 'rotate-90 text-cyan-400' : 'text-slate-400'}`}>›</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab card */}
            <div key={activePersona} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm" style={{ animation: 'dbFadeUp .25s ease' }}>
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-cyan-600 mb-2">{PERSONAS[activePersona].role}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-5">{PERSONAS[activePersona].h}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAS[activePersona].items.map((item, i) => (
                  <div key={i} className="bg-[#F3F8FC] border border-slate-200 rounded-xl px-5 py-4 text-[14px] sm:text-[15px] font-light text-slate-700 leading-relaxed relative pl-8">
                    <span className="absolute left-3 top-4 text-[13px] font-bold text-cyan-600">→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PORTFOLIO WORKSPACES (dark) ── */}
      <section className="bg-slate-950 py-14 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center mb-10 md:mb-14">
              <div className="flex items-center justify-center mb-5">
                <span className="inline-block border border-white/20 text-slate-300 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">Portfolio workspaces</span>
              </div>
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.25] text-white mb-4">
                One workspace per acquisition.{' '}
                <em className="not-italic" style={{ background: 'linear-gradient(135deg,#DD39F9,#03D2FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Every account in its own context.</em>
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-[560px] mx-auto mt-4">
                Load a portfolio into DROS and it becomes its own workspace - accounts, engagement history, and guardrails kept separate from every other acquisition you're running at the same time.
              </p>
            </div>
          </Reveal>

          {/* Dashboard mockup */}
          <Reveal delay={160}>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,.5)]" style={{ background: '#0d1b2e' }}>
              {/* Mobile top bar */}
              <div className="flex sm:hidden items-center justify-between px-4 py-3 border-b" style={{ background: '#0a1628', borderColor: 'rgba(255,255,255,.07)' }}>
                <div>
                  <div className="text-[13px] font-bold text-white">Q2 2025 - Mixed Consumer</div>
                  <div className="text-[10px] text-slate-500 font-light">3,847 accounts</div>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
              </div>

              <div className="flex">
                {/* Sidebar - desktop only */}
                <div className="hidden sm:flex flex-col flex-shrink-0" style={{ width: '200px', background: '#0a1628', borderRight: '1px solid rgba(255,255,255,.07)' }}>
                  <div className="px-4 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,.07)' }}>
                    <div className="text-[14px] font-bold text-white">DROS</div>
                    <div className="text-[10px] font-light text-slate-500 mt-0.5">Debt Resolution OS</div>
                  </div>
                  <div className="px-4 py-2.5 text-[12px] font-medium text-slate-300 border-b flex items-center justify-between cursor-pointer" style={{ borderColor: 'rgba(255,255,255,.06)', background: 'rgba(255,255,255,.04)' }}>
                    <span className="truncate mr-1">Meridian Recovery LLC</span>
                    <ChevronDown className="w-3 h-3 text-slate-500 flex-shrink-0" />
                  </div>
                  <div className="px-4 pt-3 pb-1 text-[10px] font-semibold tracking-[0.08em] uppercase text-slate-600">All Workspaces</div>
                  {[
                    { name: 'Q1 2025 - Retail Credit', active: false },
                    { name: 'FY24 Auto Deficiency', active: false },
                    { name: 'Q2 2025 - Mixed Consumer', active: true },
                    { name: 'Mar Telecom Batch', active: false },
                  ].map((ws, i) => (
                    <div
                      key={i}
                      className={`px-4 py-2 text-[11.5px] cursor-pointer border-l-2 transition-all truncate ${ws.active ? 'text-white border-cyan-400' : 'text-slate-400 border-transparent hover:text-white hover:bg-white/5'}`}
                      style={ws.active ? { background: 'rgba(3,210,252,.08)' } : {}}
                    >
                      {ws.name}
                    </div>
                  ))}
                  <div className="px-4 py-2 text-[12px] font-medium text-cyan-400 cursor-pointer">+ Create Workspace</div>
                  <div className="mt-auto border-t pt-3 pb-2" style={{ borderColor: 'rgba(255,255,255,.07)' }}>
                    {['Engage', 'Automation', 'Priority Queue'].map((n, i) => (
                      <div key={i} className="px-4 py-1.5 text-[12px] text-slate-500 cursor-pointer hover:text-white">{n}</div>
                    ))}
                  </div>
                </div>

                {/* Main area */}
                <div className="flex-1 min-w-0 p-4 sm:p-5">
                  <div className="hidden sm:flex items-start justify-between mb-5 gap-2">
                    <div>
                      <div className="text-[18px] font-bold text-white leading-tight">Dashboard</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-light">Q2 2025 - Mixed Consumer · 3,847 accounts</div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="text-[11px] font-semibold px-3 py-1.5 rounded-lg text-slate-950" style={{ background: '#03D2FC' }}>Edit Dashboard</button>
                      <button className="text-[11px] font-medium px-3 py-1.5 rounded-lg text-white border" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.12)' }}>Manage</button>
                    </div>
                  </div>

                  {/* Stat cards row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
                    {[
                      { label: 'Total to Collect', val: '$4,182,340', sub: 'Outstanding balance', ico: '$', bg: 'linear-gradient(135deg,#f97316,#ef4444)' },
                      { label: 'Total Collected', val: '$318,750', sub: 'All time collections', ico: '✓', bg: 'linear-gradient(135deg,#03D2FC,#0ea5e9)' },
                      { label: 'Total Accounts', val: '3,847', sub: 'Active accounts', ico: '👤', bg: 'linear-gradient(135deg,#03D2FC,#6366f1)' },
                    ].map((s, i) => (
                      <div key={i} className="rounded-xl p-3 flex items-center justify-between gap-2" style={{ background: '#132035', border: '1px solid rgba(255,255,255,.08)' }}>
                        <div className="min-w-0">
                          <div className="text-[9px] font-medium tracking-wide uppercase text-slate-400 mb-1">{s.label}</div>
                          <div className="text-[16px] sm:text-[18px] font-bold text-white leading-none">{s.val}</div>
                          <div className="text-[9px] text-slate-500 mt-1 font-light">{s.sub}</div>
                        </div>
                        <div className="w-8 h-8 rounded-[8px] flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: s.bg }}>{s.ico}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stat cards row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
                    {[
                      { label: 'Scheduled Today', val: '$28,400', sub: 'Due today or overdue', ico: '!', bg: 'linear-gradient(135deg,#f59e0b,#f97316)' },
                      { label: 'Scheduled This Month', val: '$143,200', sub: 'Pending this month', ico: '⏱', bg: 'linear-gradient(135deg,#03D2FC,#0ea5e9)' },
                      { label: 'Total Scheduled', val: '$391,500', sub: 'Total payment scheduled', ico: '📅', bg: 'linear-gradient(135deg,#03D2FC,#6366f1)' },
                    ].map((s, i) => (
                      <div key={i} className="rounded-xl p-3 flex items-center justify-between gap-2" style={{ background: '#132035', border: '1px solid rgba(255,255,255,.08)' }}>
                        <div className="min-w-0">
                          <div className="text-[9px] font-medium tracking-wide uppercase text-slate-400 mb-1">{s.label}</div>
                          <div className="text-[16px] sm:text-[18px] font-bold text-white leading-none">{s.val}</div>
                          <div className="text-[9px] text-slate-500 mt-1 font-light">{s.sub}</div>
                        </div>
                        <div className="w-8 h-8 rounded-[8px] flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: s.bg }}>{s.ico}</div>
                      </div>
                    ))}
                  </div>

                  {/* Charts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      {
                        title: 'Collected Payments', ico: '↗', icoBg: '#10b981',
                        rows: [{ label: 'May 2025', val: '$84,200', pct: 72 }, { label: 'Apr 2025', val: '$116,950', pct: 100 }],
                        barColor: '#03D2FC',
                      },
                      {
                        title: 'Scheduled Payments', ico: '▦', icoBg: '#6366f1',
                        rows: [{ label: 'Jun 2025', val: '$143,200', pct: 88 }, { label: 'Jul 2025', val: '$97,400', pct: 60 }],
                        barColor: '#DD39F9',
                      },
                    ].map((chart, ci) => (
                      <div key={ci} className="rounded-xl p-3.5" style={{ background: '#132035', border: '1px solid rgba(255,255,255,.08)' }}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 rounded-md flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: chart.icoBg }}>{chart.ico}</div>
                          <div className="text-[12px] sm:text-[13px] font-semibold text-white">{chart.title}</div>
                        </div>
                        {chart.rows.map((row, ri) => (
                          <div key={ri}>
                            <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1.5">
                              <span>{row.label}</span><span className="font-medium">{row.val}</span>
                            </div>
                            <div className="h-1 rounded bg-white/[0.07] mb-2.5 overflow-hidden">
                              <div className="h-full rounded" style={{ width: `${row.pct}%`, background: chart.barColor }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-[13px] text-slate-500 mt-4 leading-relaxed px-2">
              Each workspace shows its own dashboard - totals, scheduled payments, and activity are scoped to that acquisition only.
            </p>
          </Reveal>

          <DarkInlineCta
            title="Multiple acquisitions run in parallel - never mixed together"
            desc="Add a new portfolio as a new workspace. Engagement rules, account history, and compliance state stay separate from every other acquisition you're working."
            linkLabel="Book a portfolio walkthrough"
            linkHref="/book-meeting"
          />
        </div>
      </section>

      {/* ── CONTEXT-AWARE AI AGENTS (white) ── */}
      <section className="bg-white py-14 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center mb-10 md:mb-14">
              <Eyebrow label="Context-aware AI agents" light />
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.25] text-slate-900 mb-4">
                AI that knows what's already{' '}
                <em className="not-italic text-teal-600">happened on every account</em>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[560px] mx-auto mt-4">
                Charged-off accounts have often been contacted before - by you, or by a previous collector. DROS AI never calls blind. It works from every prior attempt, outcome, and consumer signal already logged in that workspace.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              {/* Left: account thread */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-cyan-600 mb-5">What the AI sees before every contact attempt</div>
                <div className="relative flex flex-col gap-0">
                  <div className="absolute left-[17px] top-6 bottom-6 w-px bg-slate-200" />
                  {[
                    {
                      ico: '📥',
                      t: 'Account loaded - Q2 2025 Acquisition',
                      d: 'Balance $2,840 · Charged off Mar 2024 · No prior contact in this workspace',
                      time: 'Day 1', active: false,
                    },
                    {
                      ico: '🤖',
                      t: 'AI voice attempt - no answer',
                      d: 'Voicemail left. Required disclosures delivered. Callback link sent via SMS.',
                      time: 'Day 3', active: false,
                    },
                    {
                      ico: '💬',
                      t: 'AI SMS - consumer replied "call me after 6"',
                      d: 'Preference logged. Outreach window updated. Next attempt scheduled 6-8pm.',
                      time: 'Day 5', active: false,
                    },
                    {
                      ico: '📞',
                      t: 'AI voice - right party connected',
                      d: 'Called at 6:14pm per consumer preference. Opened with prior voicemail reference. Consumer asked about payment options - AI offered 3-month plan within approved threshold.',
                      time: 'Day 7 · Now', active: true,
                    },
                  ].map((ev, i) => (
                    <div key={i} className="flex gap-3 sm:gap-3.5 py-3 sm:py-3.5 relative">
                      <div
                        className={`w-[34px] h-[34px] rounded-full flex items-center justify-center text-base flex-shrink-0 relative z-10 border ${
                          ev.active
                            ? 'bg-cyan-50 border-cyan-300 shadow-[0_0_0_3px_rgba(6,182,212,.12)]'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        {ev.ico}
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <div className={`text-[13px] sm:text-[14px] font-semibold mb-1 leading-tight ${ev.active ? 'text-slate-900' : 'text-slate-800'}`}>{ev.t}</div>
                        {ev.active ? (
                          <div className="text-[12px] sm:text-[13px] text-slate-700 bg-cyan-50 border border-cyan-200/60 rounded-lg p-2.5 leading-[1.6] font-light">{ev.d}</div>
                        ) : (
                          <div className="text-[12px] sm:text-[13px] text-slate-500 leading-[1.6] font-light">{ev.d}</div>
                        )}
                        <div className={`text-[11px] font-medium mt-1.5 ${ev.active ? 'text-cyan-500' : 'text-slate-400'}`}>{ev.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: feature points */}
              <div className="flex flex-col">
                {[
                  { ico: '🧠', h: 'Every prior attempt is context', d: 'The AI knows what was said, what the consumer signalled, and what was promised - on every prior interaction in that workspace. No repeated intros, no ignored preferences.' },
                  { ico: '🎯', h: 'Timing and channel adapt per account', d: 'Consumer said evening only? Replied to SMS but not calls? The AI adjusts - and logs why - so the pattern carries forward across every future attempt.' },
                  { ico: '⚠️', h: 'Escalation triggers fire instantly', d: 'Dispute language, hardship signals, "wrong person" claims, or any flag you define - AI stops mid-conversation and routes to your human queue with the full thread attached.' },
                  { ico: '📋', h: 'Full transcript, every time', d: 'Every AI call and message is logged as a transcript with tags. Your collectors, and your compliance record, have the complete picture - without anyone taking notes.' },
                ].map((pt, i) => (
                  <div key={i} className={`flex gap-3 sm:gap-4 py-5 sm:py-6 ${i < 3 ? 'border-b border-slate-100' : ''}`}>
                    <div className="text-2xl flex-shrink-0 w-8 sm:w-9 text-center mt-0.5">{pt.ico}</div>
                    <div className="min-w-0">
                      <div className="text-[15px] sm:text-[16px] font-semibold text-slate-900 mb-1.5">{pt.h}</div>
                      <div className="text-[14px] sm:text-[15px] text-slate-500 leading-[1.65] font-light">{pt.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <LightInlineCta
            title="AI that gets smarter with every contact attempt"
            desc="The more accounts your team works through DROS, the richer the context the AI has to work from - on that account, and on future acquisitions in the same workspace."
            linkLabel="See AI agents in action"
          />
        </div>
      </section>

      {/* ── AI vs HUMAN (light gray) ── */}
      <section className="bg-[#f7f9fc] border-y border-slate-200/60 py-14 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center mb-10 md:mb-14">
              <Eyebrow label="AI + human agents" light />
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.25] text-slate-900 mb-4">
                AI handles the volume -{' '}
                <em className="not-italic text-teal-600">your team handles the judgment calls</em>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[560px] mx-auto mt-4">
                Charged-off portfolios have a lot of accounts and wide variance. DROS routes each one to the right agent type - with rules for when AI must stop and a human must take over.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-[20px] overflow-hidden border border-slate-200">
              {/* AI side */}
              <div className="bg-[#f0fdf9] border-b md:border-b-0 md:border-r border-cyan-100 p-6 sm:p-11">
                <span className="inline-block text-xs font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full bg-cyan-100 text-teal-700 mb-4">AI agents</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight mb-5">Volume outreach, 24/7 availability</h3>
                <ul className="space-y-0">
                  {[
                    'Reach high volumes of accounts without proportional headcount - consistent tone every time',
                    'Right-party verification, balance confirmation, and payment collection within your policy limits',
                    'Offer payment plans and settle within pre-approved thresholds - no human needed',
                    'Inbound calls and messages handled around the clock on every active portfolio',
                    'Full transcript and tags logged per interaction - ready for any human who picks up the account next',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] sm:text-[15px] text-slate-700 py-2.5 border-b border-slate-200/70 last:border-b-0 leading-snug font-light pl-5 relative">
                      <span className="absolute left-0 top-3 text-slate-400 font-bold">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 p-4 rounded-xl bg-cyan-100/60 text-teal-700 text-[13px] sm:text-[14px] leading-[1.65]">
                  AI coverage means you can work far more accounts per dollar on a purchased portfolio - without sacrificing consistency or documentation quality.
                </div>
              </div>

              {/* Human side */}
              <div className="bg-[#faf9ff] p-6 sm:p-11">
                <span className="inline-block text-xs font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 mb-4">Human collectors</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight mb-5">High-stakes, high-judgment conversations</h3>
                <ul className="space-y-0">
                  {[
                    'Accounts where the consumer raises a dispute, challenge, or documentation question',
                    'Hardship cases, arrangements beyond standard policy, or sensitive account flags',
                    'High-balance accounts your team has flagged for personal attention',
                    'Any escalation trigger your rules define - DROS routes with the full account timeline attached',
                    'Settlement negotiations where judgment matters more than script',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] sm:text-[15px] text-slate-700 py-2.5 border-b border-slate-200/70 last:border-b-0 leading-snug font-light pl-5 relative">
                      <span className="absolute left-0 top-3 text-slate-400 font-bold">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 p-4 rounded-xl bg-slate-100 text-slate-700 text-[13px] sm:text-[14px] leading-[1.65]">
                  When AI detects an escalation signal, it stops and routes to your human queue - with every prior touch, outcome, and note visible before your collector says hello.
                </div>
              </div>
            </div>

            <p className="text-center text-[13px] sm:text-[14px] text-slate-500 mt-5 leading-relaxed max-w-[600px] mx-auto px-2">
              <strong className="text-slate-800 font-semibold">You set the routing rules.</strong> DROS enforces them on every account, on every channel, every time - without anyone having to remember the policy manually.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── COMPLIANCE GUARDRAILS (dark) ── */}
      <section className="bg-slate-950 py-14 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center mb-10 md:mb-14">
              <div className="flex items-center justify-center mb-5">
                <span className="inline-block border border-white/20 text-slate-300 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">Engagement guardrails</span>
              </div>
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.25] text-white mb-4">
                Compliance in the platform -{' '}
                <em className="not-italic" style={{ background: 'linear-gradient(135deg,#DD39F9,#03D2FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>not in people's heads</em>
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-[560px] mx-auto mt-4">
                Debt buyers who self-collect carry the same compliance exposure as any collections operation. DROS encodes the rules once and enforces them automatically - on every account, every contact attempt.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  ico: '🔕', label: 'DNC & consent management', h: 'Revocations honored in real time',
                  d: 'DNC registrations and consent revocations are held centrally. The moment a consumer opts out - on any channel - all future attempts on that account stop automatically. No manual syncing, no lag, no missed revocations.',
                  highlight: true,
                },
                {
                  ico: '📞', label: 'Call-rule enforcement', h: 'Frequency, timing, and channel limits',
                  d: 'Contact frequency caps, time-of-day windows, and channel restrictions are enforced at the OS layer before any attempt is made - by AI or human agents. Rules apply consistently across every account in every portfolio workspace.',
                  highlight: false,
                },
                {
                  ico: '⚖️', label: 'Reg F & UDAAP guardrails', h: 'Policies encoded as operating rules',
                  d: 'Reg F call limits, required disclosures, and UDAAP-aware escalation triggers are configured into DROS as guardrails - not policy documents. AI agents use approved scripts and disclosures on every interaction, with a full audit trail per account.',
                  highlight: false,
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-transform hover:-translate-y-0.5 ${
                    card.highlight
                      ? 'border border-cyan-400/25 bg-cyan-400/[0.07]'
                      : 'border border-white/[0.08] bg-white/[0.03]'
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-px ${card.highlight ? 'bg-cyan-400' : 'bg-white/[0.12]'}`} />
                  <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.1em] uppercase text-cyan-400 mb-3">
                    <span>{card.ico}</span>{card.label}
                  </div>
                  <div className="text-[16px] sm:text-[19px] font-bold text-white mb-2.5 leading-tight">{card.h}</div>
                  <div className="text-[14px] sm:text-[15px] text-slate-300 leading-[1.75] font-light">{card.d}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <DarkInlineCta
            title="Every contact attempt is logged and auditable"
            desc="Who contacted the account, on what channel, with what script, and what the outcome was - all stored per account. Clean audit trail without any extra work from your team."
            linkLabel="Talk about compliance setup"
            linkHref="/book-meeting"
          />
        </div>
      </section>

      {/* ── WITHOUT vs WITH (white) ── */}
      <section className="bg-white py-14 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center mb-10 md:mb-14">
              <Eyebrow label="The DROS difference" light />
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.25] text-slate-900 mb-4">
                From disconnected tools{' '}
                <em className="not-italic text-teal-600">to one engagement OS per portfolio</em>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[560px] mx-auto mt-4">
                Most self-collecting debt buyers are stitching things together. DROS replaces that with a single layer that coordinates everything.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-[18px] overflow-hidden border border-slate-200">
              <div className="bg-[#F3F8FC] p-6 sm:p-11 border-b md:border-b-0 md:border-r border-slate-200">
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-slate-400 mb-3">Without DROS</div>
                <div className="text-[17px] sm:text-[20px] font-bold text-slate-900 mb-4 leading-tight">Stitched together, hard to control</div>
                <div className="flex flex-col gap-1">
                  {[
                    'Portfolio accounts sit in a spreadsheet or flat dialer list - no prioritization, no strategy layer',
                    'AI outreach and human collectors work from different systems - no shared timeline per account',
                    'Compliance rules live in a doc or someone\'s head - inconsistently applied, hard to prove',
                    'Each new portfolio acquisition means repeating the same setup across disconnected tools',
                    'No clean view of who touched what account, when, and what happened',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 rounded-lg bg-white/60">
                      <span className="text-red-400 text-[13px] font-bold mt-0.5 flex-shrink-0">✗</span>
                      <span className="text-[14px] sm:text-[15px] text-slate-600 font-light leading-[1.55]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 sm:p-11">
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-cyan-600 mb-3">With DROS</div>
                <div className="text-[17px] sm:text-[20px] font-bold text-slate-900 mb-4 leading-tight">One OS, every portfolio, every channel</div>
                <div className="flex flex-col gap-1">
                  {[
                    'Each acquisition gets its own workspace - accounts, queues, strategy, and history in one place',
                    'AI and human agents work from the same account timeline - nothing repeated, nothing missed',
                    'Compliance guardrails encoded at the OS layer - enforced automatically on every contact attempt',
                    'New portfolio loaded? Workspace is ready - same rules, same setup, running in parallel',
                    'Full account timeline per contact - auditable, attributable, no manual logging',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 rounded-lg bg-cyan-50/50">
                      <span className="text-cyan-600 text-[13px] font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-[14px] sm:text-[15px] text-slate-700 font-light leading-[1.55]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GETTING STARTED (light) ── */}
      <section className="bg-[#f7f9fc] border-y border-slate-200/60 py-14 md:py-[120px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-14">
          <Reveal>
            <div className="max-w-[720px] mx-auto text-center mb-10 md:mb-14">
              <Eyebrow label="Getting started" light />
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.25] text-slate-900 mb-4">
                Load a portfolio and start{' '}
                <em className="not-italic text-teal-600">collecting in three steps</em>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[560px] mx-auto mt-4">
                We start from your actual portfolio file, team setup, and current workflow - not a blank slate.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-[18px] overflow-hidden bg-white">
              {[
                {
                  num: '01',
                  h: 'Load your portfolio as a workspace',
                  d: 'Bring your portfolio file. We\'ll help you load accounts into a DROS workspace, review your current engagement setup, and identify what rules need to be encoded before outreach starts.',
                  items: ['Portfolio accounts loaded per acquisition', 'Existing dialer and CRM connections reviewed', 'Initial segmentation and strategy mapped'],
                },
                {
                  num: '02',
                  h: 'Configure AI, human routing, and guardrails',
                  d: 'Define which accounts go to AI first, when escalation kicks in, and what the compliance rules are. DROS models your exact setup - approved scripts, call rules, consent handling - encoded once and applied everywhere.',
                  items: ['AI vs human routing thresholds set', 'Compliance rules and call windows encoded', 'Approved scripts and disclosures configured'],
                },
                {
                  num: '03',
                  h: 'Go live, monitor, and add portfolios',
                  d: 'Start outreach on a defined slice. Track contacts, escalations, and outcomes across AI and human agents in one view. Add the next portfolio acquisition as a new workspace - your setup carries over.',
                  items: ['Live contact and escalation tracking', 'AI and human performance in one view', 'Next acquisition ready to load immediately'],
                },
              ].map((step, i) => (
                <div key={i} className={`p-6 sm:p-10 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-slate-200' : ''}`}>
                  <div
                    className="text-[36px] sm:text-[52px] font-bold leading-none mb-4 opacity-30"
                    style={{ background: 'linear-gradient(135deg,#DD39F9,#03D2FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {step.num}
                  </div>
                  <div className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-2.5 leading-tight">{step.h}</div>
                  <div className="text-[14px] sm:text-[15px] text-slate-500 leading-[1.7] font-light mb-4">{step.d}</div>
                  <ul className="space-y-1.5">
                    {step.items.map((item, j) => (
                      <li key={j} className="text-[13px] sm:text-[14px] text-slate-500 pl-4 relative font-light leading-snug">
                        <span className="absolute left-0 top-1 text-[11px] font-bold text-cyan-600">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <LightInlineCta
            title="Bring a real portfolio file"
            desc="We'll walk through how DROS would set up a workspace for it - accounts, routing logic, compliance rules, and AI vs human split - based on your actual team and current workflow."
            linkLabel="Book a portfolio walkthrough"
          />
        </div>
      </section>

      {/* ── FAQ (white) ── */}
      <section className="bg-white py-14 md:py-[120px]">
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-14">
          <Reveal>
            <div className="text-center mb-10">
              <Eyebrow label="Common questions" light />
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-[1.25] text-slate-900 mb-2">
                Frequently asked{' '}
                <em className="not-italic text-teal-600">about DROS for debt buyers</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              {FAQS.map((faq, i) => (
                <div key={i} className={i < FAQS.length - 1 ? 'border-b border-slate-100' : ''}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-start gap-3 sm:gap-4 transition-colors hover:bg-slate-50"
                  >
                    <span className={`text-[14px] sm:text-[15.5px] font-medium leading-snug ${openFaq === i ? 'text-cyan-700' : 'text-slate-900'}`}>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform text-slate-400 ${openFaq === i ? 'rotate-180 text-cyan-600' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-[14px] sm:text-[15px] text-slate-500 leading-[1.85] font-light">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative bg-slate-950 py-20 sm:py-32 overflow-hidden border-t border-white/[0.05]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-[radial-gradient(ellipse,rgba(221,57,249,.07)_0%,rgba(3,210,252,.05)_40%,transparent_60%)]" />
        </div>
        <div className="relative max-w-[820px] mx-auto px-5 sm:px-6 lg:px-14 text-center">
          <Reveal>
            <div className="flex items-center justify-center mb-5">
              <span className="inline-block border border-white/20 text-slate-300 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">Ready to see it</span>
            </div>
            <h2 className="text-[26px] sm:text-4xl md:text-[52px] font-bold leading-[1.25] text-white mb-5">
              See DROS on your{' '}
              <em className="not-italic" style={{ background: 'linear-gradient(135deg,#DD39F9,#03D2FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>next portfolio acquisition</em>
            </h2>
            <p className="text-base sm:text-lg font-light text-slate-400 max-w-[520px] mx-auto mb-10 leading-[1.8]">
              Bring a recent portfolio file and your current team setup. We'll walk through how DROS would run it - workspaces, AI and human routing, compliance guardrails - based on your actual workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Link
                to="/book-meeting"
                onClick={() => trackCta('Book a portfolio walkthrough - footer')}
                className="inline-flex items-center justify-center gap-2 font-bold text-base px-6 py-4 rounded-xl transition-all hover:-translate-y-0.5"
                style={{ background: '#03D2FC', color: '#010C20' }}
              >
                Book a portfolio walkthrough <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-slate-300 hover:text-white font-semibold text-base px-6 py-4 rounded-xl border border-white/[0.14] hover:border-white/30 transition-all"
              >
                Talk to us about debt-buyer collections
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {['No commitment required', 'Bring a real portfolio file', 'Works with your existing stack', 'Small team or growing operation'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-slate-500">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
