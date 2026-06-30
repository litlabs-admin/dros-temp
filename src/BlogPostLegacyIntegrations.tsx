import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function BlogPostLegacyIntegrations() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <title>Debt Collection System Integration: Why Legacy Stacks Break Down Before AI</title>
      <meta name="description" content="Why collections integrations break with legacy systems, how tool sprawl hurts RPC and compliance, and what to fix in your stack before adding AI agents." />

      <nav className="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/untitled_logo_1_basic-file.png" alt="DROS Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold text-white">DROS</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="/#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
              <a href="/#security" className="text-slate-300 hover:text-white transition-colors">Security</a>
              <Link to="/pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</Link>
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-48 bg-slate-900 border border-slate-800 rounded-lg shadow-xl py-2">
                      <Link to="/blogs" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">Blogs</Link>
                      <Link to="/events" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">Events</Link>
                      <Link to="/resources/videos" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">Videos</Link>
                      <a href="https://app.dros.ai/api-docs" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">API Docs</a>
                      <Link to="/release-notes" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">Release Notes</Link>
                      <Link to="/contact" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">Contact Us</Link>
                    </div>
                  </div>
                )}
              </div>
              <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 px-4 py-2 rounded-lg font-medium transition-all text-sm inline-block">
                Login
              </a>
              <a href="https://dros.ai/book-meeting" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105 inline-block">
                Book a Demo
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-4">
            <a href="/#features" className="block text-slate-300 hover:text-white transition-colors py-2">Features</a>
            <a href="/#benefits" className="block text-slate-300 hover:text-white transition-colors py-2">Benefits</a>
            <a href="/#security" className="block text-slate-300 hover:text-white transition-colors py-2">Security</a>
            <Link to="/pricing" className="block text-slate-300 hover:text-white transition-colors py-2">Pricing</Link>
            <Link to="/about" className="block text-slate-300 hover:text-white transition-colors py-2">About</Link>
            <div>
              <button
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors py-2 w-full"
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileResourcesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/blogs" className="block text-slate-400 hover:text-white transition-colors py-1">Blogs</Link>
                  <Link to="/events" className="block text-slate-400 hover:text-white transition-colors py-1">Events</Link>
                  <Link to="/resources/videos" className="block text-slate-400 hover:text-white transition-colors py-1">Videos</Link>
                  <a href="https://app.dros.ai/api-docs" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-white transition-colors py-1">API Docs</a>
                  <Link to="/release-notes" className="block text-slate-400 hover:text-white transition-colors py-1">Release Notes</Link>
                  <Link to="/contact" className="block text-slate-400 hover:text-white transition-colors py-1">Contact Us</Link>
                </div>
              )}
            </div>
            <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="block border border-slate-600 text-white px-4 py-2 rounded-lg font-medium text-center transition-all">Login</a>
            <a href="https://dros.ai/book-meeting" target="_blank" rel="noopener noreferrer" className="block bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold text-center transition-all">Book a Demo</a>
          </div>
        )}
      </nav>

      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <div className="mb-8">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium mb-6 group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to all blogs
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                Technology &amp; Integrations
              </span>
              <span className="text-slate-500 text-sm">14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Why Collections Integrations Break Down With Legacy Systems - and What to Fix First
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">

            <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-cyan-500 pl-6">
              If you run a collections team today, your tech stack probably didn't start with a clean whiteboard. It grew.
            </p>

            <p className="text-xl leading-relaxed text-slate-300">
              A case-management system here, a dialer there, a CRM, an SMS tool, a payment link, maybe a new AI pilot. Each one solved a local problem. Together, they now create a new one: nothing quite talks to anything else.
            </p>

            <p className="text-xl leading-relaxed text-slate-300">You feel it in small ways every day:</p>

            <ul className="space-y-3 text-slate-300 text-xl">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0"></span>
                collectors re-typing the same notes in two systems
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0"></span>
                balances that don't match between client files and your dialer
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0"></span>
                consent and contact caps that live in spreadsheets instead of one place
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0"></span>
                reporting that takes days because data has to be stitched from exports
              </li>
            </ul>

            <p className="text-xl leading-relaxed text-slate-300">
              This article answers a simple question: why are integrations so hard in collections - especially with legacy systems - and what should you fix first before you add anything new, including AI?
            </p>

            <hr className="border-slate-800" />

            <h2 className="text-2xl font-bold text-white mt-10">Do You Really Have an "Integration Problem" or Just Too Many Tools?</h2>

            <p className="text-xl leading-relaxed text-slate-300">
              Most leaders first describe the situation as "we have too many tools." That's true, but incomplete.
            </p>

            <p className="text-xl leading-relaxed text-slate-300">A typical mid-sized shop might have:</p>

            <ul className="space-y-3 text-slate-300 text-xl">
              {[
                'a legacy collections platform or case-management system',
                'a separate outbound dialer',
                'a CRM or ticketing tool used by some teams',
                'one or two SMS/email providers',
                'a client SFTP pipeline or portal',
                'a payment processor or payment portal',
                'new pilots: AI texting, AI voice, analytics',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xl leading-relaxed text-slate-300">On paper, each vendor says they "integrate." In practice you see:</p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {['swivel-chair work', 'inconsistent data', 'lost signals', 'compliance blind spots'].map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg px-5 py-4 text-slate-300 text-sm">
                  {item}
                </div>
              ))}
            </div>

            <p className="text-xl leading-relaxed text-slate-300">
              That's not just "too many tools." It's a stack that can't reliably share the minimum data needed to run collections as one system.
            </p>

            <hr className="border-slate-800" />

            <h2 className="text-2xl font-bold text-white mt-10">What Does "Good Integration" Actually Mean in a Collections Shop?</h2>

            <p className="text-xl leading-relaxed text-slate-300">
              In SaaS marketing, "integration" often means "we can push or pull some data via API." For operators, that isn't enough.
            </p>

            <p className="text-xl leading-relaxed text-slate-300">For a collections team, good integration only exists when it:</p>

            <div className="space-y-4 my-6">
              {[
                'Gives collectors one reliable view of balance, status, contact attempts, promises, disputes, and notes.',
                'Enforces rules in one place - especially for consent, contact caps, and time-of-day restrictions.',
                'Eliminates duplicate work instead of just moving the same manual entry to a new screen.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-slate-900/50 border border-slate-800 rounded-lg px-5 py-4">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-slate-300 text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-xl leading-relaxed text-slate-300 font-medium">A realistic test is simple:</p>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 space-y-4 my-6">
              <p className="text-xl leading-relaxed text-slate-300">Can a new collector sit down and work their queue from one main interface, or are they living inside four systems?</p>
              <p className="text-xl leading-relaxed text-slate-300">When compliance asks, "Show me every time we contacted John Doe in the last 60 days," can you answer that from one place?</p>
            </div>

            <p className="text-xl leading-relaxed text-slate-300">
              If not, you don't yet have good integration - no matter how many APIs you're paying for.
            </p>

            <hr className="border-slate-800" />

            <h2 className="text-2xl font-bold text-white mt-10">Why Are Collections Integrations So Hard With Legacy Systems?</h2>

            <p className="text-xl leading-relaxed text-slate-300">
              There are a few structural reasons this problem is worse in collections than in many other industries.
            </p>

            <div className="space-y-6 my-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">1. Legacy platforms weren't built for open integration</h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Many older collections systems and dialers were designed for batch file exchanges, not APIs. They use custom data models and proprietary formats, and even basic changes can require vendor support.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">2. Every client portfolio looks a little different</h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Agencies often serve dozens of clients, each with its own file layouts, business rules, status codes, and settlement logic. Standard integration gets harder when every feed has exceptions.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">3. Limited in-house engineering capacity</h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Most agencies don't have a full integration team. They may rely on an IT generalist, a vendor, or a freelancer who built scripts years ago and moved on.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">4. Point-to-point integrations don't scale</h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  The default approach is to connect System A to B, then B to C, then C to D. Over time, you end up with dozens of one-off mappings, hidden dependencies, and no single map of how data flows through the company.
                </p>
                <p className="text-slate-400 text-base mt-2 italic">This is how tool sprawl turns into operational fragility.</p>
              </div>
            </div>

            <hr className="border-slate-800" />

            <h2 className="text-2xl font-bold text-white mt-10">What Data Actually Needs to Flow Between Your Tools?</h2>

            <p className="text-xl leading-relaxed text-slate-300">
              A lot of integration pain comes from trying to sync everything instead of agreeing on a small set of must-have flows.
            </p>

            <p className="text-xl leading-relaxed text-slate-300">For a typical agency, the critical data routes are:</p>

            <div className="space-y-4 my-6">
              {[
                {
                  label: 'From clients or ERP into your operating layer',
                  items: ['placements', 'balances', 'account age', 'product', 'close codes', 'client-specific rules'],
                },
                {
                  label: 'From your operating layer into outreach tools',
                  items: ['who to contact', 'which channel to use', 'priority', 'consent and opt-out status', 'time-zone info', 'contact caps'],
                },
                {
                  label: 'From channels back into the operating layer',
                  items: ['call outcomes', 'RPCs', 'callbacks', 'notes', 'disputes', 'link clicks', 'replies'],
                },
                {
                  label: 'From payments back into the operating layer and client reporting',
                  items: ['settlements', 'partials', 'chargebacks', 'updated balances and statuses'],
                },
              ].map((group, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                  <p className="text-white font-medium text-base mb-3">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <span key={j} className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl leading-relaxed text-slate-300">
              If those four flows are solid, you can usually live with some legacy edges for a while. If they're broken, no amount of extra tools will help.
            </p>

            <hr className="border-slate-800" />

            <h2 className="text-2xl font-bold text-white mt-10">Should You Keep Building Custom Integrations, or Move to an Operating Layer?</h2>

            <p className="text-xl leading-relaxed text-slate-300">This is the fork in the road most agencies quietly reach.</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Option 1: Keep adding point-to-point integrations</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Pros</p>
                    <ul className="space-y-1 text-slate-300 text-base">
                      <li>incremental</li>
                      <li>cheaper at first</li>
                      <li>no big replatforming</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Cons</p>
                    <ul className="space-y-1 text-slate-300 text-base">
                      <li>every new tool adds complexity</li>
                      <li>more failure points</li>
                      <li>harder to maintain</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Option 2: Choose an operating layer and plug tools into that</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Pros</p>
                    <ul className="space-y-1 text-slate-300 text-base">
                      <li>one place to define data model, rules, and workflows</li>
                      <li>easier to swap tools under the hood</li>
                      <li>more control and visibility</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Cons</p>
                    <ul className="space-y-1 text-slate-300 text-base">
                      <li>some upfront work to map data and processes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl leading-relaxed text-slate-300">
              Once you're past a handful of debtor-touching tools, it usually becomes cheaper and safer to centralize on an operating layer and standardize integrations there.
            </p>

            <p className="text-xl leading-relaxed text-slate-400">
              That's the design philosophy behind DROS: it acts as the operating system for collections, so dialers, AI agents, and payment tools speak through it, not around it.
            </p>

            <hr className="border-slate-800" />

            <h2 className="text-2xl font-bold text-white mt-10">How Do You Reduce Tool Sprawl Without Ripping Out Legacy Systems?</h2>

            <p className="text-xl leading-relaxed text-slate-300">
              Ripping everything out is rarely realistic or smart. A better approach is to consolidate and reroute.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  step: 'Step 1',
                  title: 'Inventory every tool that can touch a debtor',
                  body: 'For each, note: channels, data it reads and writes, and who owns it.',
                },
                {
                  step: 'Step 2',
                  title: 'Tag them as core, duplicate, or nice-to-have',
                  body: 'Core: cannot do your job without it. Duplicate: overlapping tools doing the same thing. Nice-to-have: low-usage add-ons.',
                },
                {
                  step: 'Step 3',
                  title: 'Integrate around the core first',
                  body: 'Make sure there is one source of truth for account balance and status, contact attempts and outcomes, and consent and contact caps.',
                },
                {
                  step: 'Step 4',
                  title: 'Consolidate duplicates once flows are stable',
                  body: 'Drop extra SMS platforms or analytics layers once you\'ve proven a better path. Retire manual imports and exports that have been replaced by stable integrations.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                  <div className="flex-shrink-0">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{item.step}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">{item.title}</p>
                    <p className="text-slate-400 text-base leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl leading-relaxed text-slate-300">
              This way, legacy systems can keep doing their job under the hood while you modernize how they connect.
            </p>

            <hr className="border-slate-800" />

            <h2 className="text-2xl font-bold text-white mt-10">How Does Fixing Integrations Make AI Safer and More Useful?</h2>

            <p className="text-xl leading-relaxed text-slate-300">
              Many agencies now ask, "Can we add AI voice or chat?" The honest answer is: if your stack is fragmented, AI will amplify the mess.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-5">
                <p className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">Without clean integration</p>
                <ul className="space-y-2 text-slate-300 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    AI agents might call or text numbers without proper consent
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    they may use outdated balances or statuses
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    compliance and ops won't have a single view of what was said and done
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-5">
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">With a solid operating layer</p>
                <ul className="space-y-2 text-slate-300 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    AI checks the same consent and contact caps as humans
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    all outcomes and transcripts land back in one place
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✓</span>
                    you can start with small segments because routing and data are predictable
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xl leading-relaxed text-slate-300">
              Fixing integrations is one of the most important prerequisites for doing AI safely later.
            </p>

            <hr className="border-slate-800" />

            <h2 className="text-2xl font-bold text-white mt-10">How We Work With Agencies on Integrations Inside DROS</h2>

            <p className="text-xl leading-relaxed text-slate-300">
              When agencies work with us on DROS, we don't start by pushing a feature list. We usually start with:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Stack and data mapping',
                  body: 'We map existing tools, flows, and must-sync fields. We identify where DROS should become the source of truth and where legacy systems stay.',
                },
                {
                  title: 'Phase-one integrations',
                  body: 'Typically: DROS plus client feed, DROS plus dialer, DROS plus payment. The goal is one place where collectors and supervisors can see full account context and outcomes.',
                },
                {
                  title: 'Gradual consolidation',
                  body: 'Over time, we help teams retire duplicates and connect new tools, including AI agents, to DROS instead of directly to each other.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="text-white font-medium mb-1">{item.title}</p>
                    <p className="text-slate-400 text-base leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-slate-800" />

            <h2 className="text-2xl font-bold text-white mt-10">Conclusion</h2>

            <p className="text-xl leading-relaxed text-slate-300">
              Collections "integration projects" don't fail because JSON is hard. They fail because legacy systems were never designed to share data cleanly, every client and tool adds another custom rule, and no one steps back to decide what should be the operating layer and what should just be plugged into it.
            </p>

            <p className="text-xl leading-relaxed text-slate-300">
              If your collectors are living in six tools and your compliance team can't see a full contact history in one place, the next smart move isn't "buy another AI tool." It's:
            </p>

            <ul className="space-y-3 text-slate-300 text-xl">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0"></span>
                audit your current stack,
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0"></span>
                decide what really needs to talk to what,
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0"></span>
                and fix the plumbing before you turn up the pressure.
              </li>
            </ul>
          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              30-Minute Stack Review
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Want a structured way to look at this?
            </h3>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              We do 30-minute "stack review" calls with agencies in the 5–200 collector range. Bring a rough sketch of your tools and flows, and we'll walk through:
            </p>
            <ul className="space-y-2 text-slate-300 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-0.5">–</span>
                where integrations are likely to be breaking down
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-0.5">–</span>
                what a realistic 90-day plan could look like
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-0.5">–</span>
                whether DROS as an operating layer would actually help in your case
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://dros.ai/book-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Book a 30-Minute Stack Review
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://app.dros.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-slate-900 text-center"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              ← Back to all blogs
            </Link>
          </div>
        </div>
      </article>

      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/untitled_logo_1_basic-file.png" alt="DROS Logo" className="w-8 h-8" />
                <span className="text-xl font-bold">DROS</span>
              </div>
              <p className="text-slate-400 text-sm">The operating system for modern debt collection agencies.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="/#security" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link to="/resources/videos" className="hover:text-white transition-colors">Videos</Link></li>
                <li><a href="https://app.dros.ai/api-docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 DROS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
