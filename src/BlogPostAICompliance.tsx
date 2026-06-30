import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function BlogPostAICompliance() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
              <a href="https://dros.ai/book-meeting" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-lg font-semibold transition-all hover:scale-105 inline-block">
                Book a demo
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-4 space-y-4">
              <a href="/#features" className="block text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="/#benefits" className="block text-slate-300 hover:text-white transition-colors">Benefits</a>
              <a href="/#security" className="block text-slate-300 hover:text-white transition-colors">Security</a>
              <Link to="/pricing" className="block text-slate-300 hover:text-white transition-colors">Pricing</Link>
              <Link to="/about" className="block text-slate-300 hover:text-white transition-colors">About</Link>
              <div>
                <button
                  onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                  className="flex items-center justify-between w-full text-slate-300 hover:text-white transition-colors"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileResourcesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link to="/blogs" className="block text-slate-400 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                    <Link to="/events" className="block text-slate-400 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Events</Link>
                    <Link to="/resources/videos" className="block text-slate-400 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Videos</Link>
                    <a href="https://app.dros.ai/api-docs" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>API Docs</a>
                    <Link to="/release-notes" className="block text-slate-400 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Release Notes</Link>
                    <Link to="/contact" className="block text-slate-400 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                  </div>
                )}
              </div>
              <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="block w-full text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 px-6 py-2.5 rounded-lg font-medium transition-colors text-center">
                Login
              </a>
              <a href="https://dros.ai/book-meeting" target="_blank" rel="noopener noreferrer" className="block w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-lg font-semibold transition-colors text-center">
                Book a demo
              </a>
            </div>
          </div>
        )}
      </nav>

      <article className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold rounded-full">Collections Strategy</span>
              <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold rounded-full">Compliance & Operations</span>
              <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold rounded-full">Technology & Integrations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              How to Integrate AI Agents Into Collections Without{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Blowing Up Compliance
              </span>
            </h1>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <span>18 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              US debt collection agencies are being squeezed from both sides: more accounts and tougher consumers on one end, tighter regulations and higher operating costs on the other. AI voice agents and conversational automation look like a way out - higher coverage, lower cost per contact, 24/7 availability.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              But most leaders we speak to carry the same concern:
            </p>

            <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 my-10 bg-slate-900/50 rounded-r-xl pr-6">
              <p className="text-xl text-slate-200 italic font-medium">
                "If an AI says the wrong thing at the wrong time, we are still on the hook."
              </p>
            </blockquote>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              They're not wrong. Poorly governed AI can create TCPA exposure (automated calls or texts without consent can trigger fines of $500–$1,500 per violation), increase FDCPA and Regulation F risk, and generate CFPB complaints faster than a human team ever could.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              The opportunity is real - so is the risk. This article focuses on a practical question: how do you integrate AI agents into your collections workflows in a way that protects compliance and actually makes agents' lives easier? We'll focus on agencies with 5-200 collectors and outline steps you can take over the next quarter, not someday.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Understanding Where AI Actually Fits in Your Workflow
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              The worst way to deploy AI is "everywhere, at once." The shops that see value treat AI as a specialized teammate, not a full replacement.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              In practice, that means assigning AI agents to specific, lower-risk tasks where the rules are clear and the scripts are stable, such as:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Initial contact attempts on low-balance or early-stage accounts',
                'Identity confirmation and intent checks ("is this still a good number, are you willing to talk?")',
                'Inbound call routing and FAQs ("what\'s my balance, how do I pay?")'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xl text-slate-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-3"></span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-8 my-10">
              <p className="text-lg text-slate-300 leading-relaxed">
                A 20-collector agency we worked with ran a pilot where AI voice agents handled the first outbound attempt on a subset of medical accounts. The AI verified identity, delivered compliant disclosures, and asked a simple intent question (willing to talk now, schedule a time, or prefer self-service). Only when a positive signal appeared did the call transfer to a human collector. This preserved agent time for real conversations and increased right-party contacts, without asking compliance to sign off on fully automated negotiations.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">Actionable ideas</h3>
            <ul className="space-y-3 mb-12">
              {[
                'Segment accounts by balance, age, and dispute history; allow AI only on low-balance, low-complexity segments to start.',
                'Use AI for inbound triage and FAQs to cut queue times and reduce burnout on repetitive questions.',
                'Log every AI-to-human handoff with outcome codes so you can see which flows actually help agents and which need redesign.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
                  <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              How Day-to-Day Workflows Change When AI Shows Up
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Adding AI without redesigning workflows is a recipe for chaos: double calls, inconsistent notes, confused consumers, and frustrated agents.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              In a healthy setup, day-to-day work shifts along these lines:
            </p>

            <div className="grid gap-4 mb-8">
              {[
                { label: 'AI', text: 'Handles first touches, simple reminders, identity checks, and routing.' },
                { label: 'Collectors', text: 'Spend a higher share of their time on arrangements, disputes, and nuanced hardship conversations.' },
                { label: 'Supervisors', text: 'Watch AI metrics (connection rate, handoff rate, complaint signals) alongside traditional KPIs.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                  <span className="text-cyan-400 font-bold text-sm min-w-[90px]">{item.label}</span>
                  <span className="text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              One mid-sized agency we supported saw heavy resistance at first - collectors assumed AI was there to replace them. Leadership turned that around by:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Involving top performers in script design and reviewing AI call samples together',
                'Setting clear "red lines" where only humans could decide (settlements, disputes, vulnerable consumers)',
                'Showing, with data, that AI removed low-value calls and increased the number of meaningful conversations per collector'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xl text-slate-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-3"></span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">Actionable ideas</h3>
            <ul className="space-y-3 mb-12">
              {[
                'Form a small pilot squad with ops, compliance, QA, and frontline collectors to co-design AI scripts and flows.',
                'Document explicit "AI stops here" rules (e.g., any mention of dispute, bankruptcy, deceased, military service → immediate human handoff).',
                'Train collectors on how to read AI-generated notes, flags, and transcripts so they can move faster instead of re-asking everything.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
                  <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Navigating Compliance Risks: Guardrails Before Growth
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Collections is already one of the most regulated contact center environments. AI doesn't change that - it just scales whatever you encode.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">Key risk areas we see most often:</p>

            <ul className="space-y-4 mb-8">
              {[
                { title: 'Consent and contact limits (TCPA, Reg F)', text: 'Automated calls or SMS without proper consent can trigger TCPA fines of $500–$1,500 per violation, and Reg F\'s "7-in-7" rule limits call attempts per debt in any seven-day window.' },
                { title: 'Timing and channel rules', text: 'Contacting outside allowed hours or mixing channels in ways that exceed frequency limits.' },
                { title: 'Script drift', text: 'Models or scripts that slowly diverge from approved language and disclosures.' },
                { title: 'Record-keeping', text: 'High AI volume with no reliable audit trail of what was said, when, and to whom.' }
              ].map((item, i) => (
                <li key={i} className="bg-slate-900/50 border border-red-900/30 rounded-xl p-5">
                  <p className="font-semibold text-red-400 mb-2">{item.title}</p>
                  <p className="text-slate-300">{item.text}</p>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">Key safeguards</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Centralize consent management so AI agents check the same records as humans before calling or texting; update opt-outs in real time.',
                'Hard-code contact windows, frequency caps (including Reg F\'s 7-in-7 across channels), and jurisdiction rules into the AI platform.',
                'Lock scripts and flows behind approval processes; limit who can change them and keep version history.',
                'Record and store AI calls and transcripts with retention policies that satisfy exam and litigation needs.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xl text-slate-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-3"></span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">Actionable ideas</h3>
            <ul className="space-y-3 mb-12">
              {[
                'Run a focused AI compliance impact assessment before your first pilot: map laws (FDCPA, TCPA, Reg F, state rules) to specific AI actions.',
                'Have compliance review sample AI calls and messages weekly during pilots; flag and fix issues early.',
                'Treat compliance capability as a pass/fail vendor filter before you evaluate "smarts" or UX.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
                  <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Measuring Success: Beyond "We Saved Some Minutes"
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              If you only measure AI by "calls automated" or "minutes saved," you'll either overestimate success or miss early warning signs.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">A more honest scorecard combines:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                { label: 'RPC / Right-Party Engagement', text: 'Did total meaningful contacts (AI + human) go up or down?' },
                { label: 'Collector Productivity', text: 'Did humans handle more high-value conversations per day, or just wait for transfers?' },
                { label: 'Consumer Experience', text: 'Complaints, dispute rates, and tone issues tied to AI interactions.' },
                { label: 'Compliance Incidents', text: 'Any uptick in potential violations, disputes about disclosure, or CFPB/AG complaints.' }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 border border-cyan-500/20 rounded-xl p-5">
                  <p className="font-semibold text-cyan-400 mb-2">{item.label}</p>
                  <p className="text-slate-300 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              Expect a learning curve: in the first few weeks, RPC or handle times may wobble as scripts and routing settle. The key is to be explicit about what "good" looks like before you start.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">Actionable ideas</h3>
            <ul className="space-y-3 mb-12">
              {[
                'Capture baselines for RPC, kept PTPs, agent handle time, complaint rate, and contact frequency before the pilot.',
                'Build a simple dashboard that shows AI and human metrics side by side for the pilot segment.',
                'Run weekly pilot reviews to adjust scripts, routing, and segmentation; don\'t wait for the quarter\'s end to course-correct.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
                  <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Field Insight: Avoiding Tool Sprawl While Adding AI
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              One of the fastest ways to create new risk is to slap an AI tool on the side of an already messy stack.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">We've seen agencies running:</p>

            <ul className="space-y-2 mb-8">
              {['A dialer', 'A CRM', 'Two different SMS tools', 'A separate AI texting pilot', 'A standalone voice AI agent'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xl text-slate-300">
                  <span className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-3"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              The result: missed callbacks, fragmented consent data, and no reliable way to prove who contacted a debtor when. Exactly the kind of environment regulators warn about when they talk about "tool sprawl" and fragmented controls.
            </p>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 my-10 text-center">
              <p className="text-2xl font-bold text-white">The lesson is simple: consolidate before you accelerate.</p>
            </div>

            <h3 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">Actionable ideas</h3>
            <ul className="space-y-3 mb-12">
              {[
                'Inventory every tool that can contact a debtor (human or automated). Map: what channels, which data, which rules?',
                'Where possible, favor platforms that integrate cleanly with your dialer/CRM or act as an orchestrator, rather than adding fifth and sixth point solutions.',
                'Assign a single owner (often in operations) responsible for AI tool governance, data quality, and compliance reporting.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
                  <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Next Steps: How to Pilot AI Agents Responsibly
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              A good AI rollout in collections is closer to a controlled experiment than a big-bang go-live.
            </p>

            <div className="space-y-4 mb-12">
              {[
                { step: '1', title: 'Pick a narrow, lower-risk segment', text: 'For example: balances under $500, no prior disputes, no special populations.' },
                { step: '2', title: 'Define clear KPIs and guardrails', text: 'Success = improved RPC or contact quality without increased complaints or violations.' },
                { step: '3', title: 'Run AI and humans in parallel at first', text: 'Compare outcomes on similar segments so you know what\'s working.' },
                { step: '4', title: 'Involve collectors and compliance continuously', text: 'Weekly reviews of transcripts and metrics; fast iteration on scripts and routing.' },
                { step: '5', title: 'Document everything', text: 'Scripts, decisions, metrics, reviews - this becomes your AI playbook and compliance trail.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-slate-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              If you're already consolidating systems onto an operating layer like DROS, that orchestration makes it easier to test AI in one place and see the downstream impact across teams. If you're not there yet, the same principles still apply - they'll just take more manual glue.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Conclusion
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Integrating AI agents into US debt collection isn't primarily a technology problem. It's a workflow and governance problem: where AI fits, what it's allowed to do, how it's monitored, and how it changes the day for your people.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Agencies that treat AI as a targeted teammate, start in low-risk segments, bake in compliance guardrails, keep humans in the loop for judgment calls, and avoid tool sprawl are already seeing higher right-party engagement and more productive collectors without increasing regulatory exposure.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">If you're considering a move:</p>

            <ul className="space-y-3 mb-12">
              {[
                'Audit your current workflows and tech stack for obvious AI "fit points" and compliance gaps.',
                'Design a narrow pilot with clear metrics and shared ownership across ops and compliance.',
                'Use what you learn to decide where AI truly adds value, and where human collectors should always stay in control.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xl text-slate-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-3"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              That's how you get the upside of AI agents in collections, without blowing up your risk profile.
            </p>
          </div>

          <div className="mt-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to explore this without committing to a full rollout?
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We often start with a 30-day pilot on a narrow segment, with shared KPIs across ops and compliance. If that sounds useful, reach out and we'll see if it makes sense for your shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://dros.ai/book-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Talk to Our Team
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
