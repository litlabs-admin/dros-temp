import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function BlogPostDigitalFirst() {
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
              <a href="/#features" className="text-slate-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="/#benefits" className="text-slate-300 hover:text-white transition-colors">
                Benefits
              </a>
              <a href="/#security" className="text-slate-300 hover:text-white transition-colors">
                Security
              </a>
              <Link to="/pricing" className="text-slate-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                About
              </Link>
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
                      <Link
                        to="/blogs"
                        className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/events"
                        className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        Events
                      </Link>
                      <Link
                        to="/resources/videos"
                        className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        Videos
                      </Link>
                      <a
                        href="https://app.dros.ai/api-docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        API Docs
                      </a>
                      <Link
                        to="/release-notes"
                        className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        Release Notes
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        Contact Us
                      </Link>
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

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-4 space-y-4">
              <a href="/#features" className="block text-slate-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="/#benefits" className="block text-slate-300 hover:text-white transition-colors">
                Benefits
              </a>
              <a href="/#security" className="block text-slate-300 hover:text-white transition-colors">
                Security
              </a>
              <Link to="/pricing" className="block text-slate-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="block text-slate-300 hover:text-white transition-colors">
                About
              </Link>
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
                    <Link
                      to="/blogs"
                      className="block text-slate-400 hover:text-white transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blogs
                    </Link>
                    <Link
                      to="/events"
                      className="block text-slate-400 hover:text-white transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Events
                    </Link>
                    <Link
                      to="/resources/videos"
                      className="block text-slate-400 hover:text-white transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Videos
                    </Link>
                    <a
                      href="https://app.dros.ai/api-docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-slate-400 hover:text-white transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      API Docs
                    </a>
                    <Link
                      to="/release-notes"
                      className="block text-slate-400 hover:text-white transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Release Notes
                    </Link>
                    <Link
                      to="/contact"
                      className="block text-slate-400 hover:text-white transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Digital-First Collections for Small Agencies: What's Actually Changing in 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">(and How to Catch Up)</span>
            </h1>
            <p className="text-2xl text-slate-300 font-light mb-8">
              A Practical Guide to Adopting AI and Automation
            </p>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <span>12 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Consumers expect simple, fast digital experiences everywhere - banking, shopping, billing. Collections is no exception. For small agencies that still depend on spreadsheets, manual dial lists, and human-only outreach, this shift is painful. Account volumes are rising in many portfolios, compliance scrutiny is intensifying, and customers now prefer to respond on their own terms. That means there is both a clear risk, falling behind and a big opportunity: the agencies that adopt pragmatic, digital-first approaches now will recover more money with less cost.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              In plain terms: going digital is not about tech for tech's sake. It is about <strong className="text-white">reducing friction between the moment a customer is contactable and the moment they pay</strong>. That is where modest, practical automation and AI can make a real difference.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              The Market Snapshot: What's Changed for Small Collection Agencies
            </h2>

            <ul className="list-disc pl-8 mb-8 space-y-3 text-xl text-slate-300">
              <li>More agencies now offer self-service portals and digital channels. Industry reporting shows a notable jump in portals and digital outreach adoption in recent years.</li>
              <li>Macro signals show slight increases in delinquencies and shifting account mixes heading into 2026, so volume pressure remains real for many firms.</li>
              <li>AI tooling for collections moved from experimental pilots to operational deployments in 2025–26. Practical uses include conversational voice agents, predictive scoring, and automated reminder sequences that reduce routine agent work.</li>
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              These shifts are the backdrop: more digital channels, more regulatory attention, and faster, cheaper tooling appearing in the market. For a small shop, that combination is both a threat (do nothing and you fall behind) and an opportunity (move tactically and you win share).
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Why Consumers Really Prefer Digital-First Collections
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Ask any borrower: they want convenience, dignity, and control. A phone call can be invasive or awkward. An SMS with a short pay link or an email that lets someone pay on their own time reduces friction and lowers complaints. Studies and industry trackers show digital channels, email and SMS are being used more often to drive consumers to online payment portals.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              This does not mean calls are dead. It means the best recovery strategies use both channels and pick the right touch at the right time.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              <strong className="text-white">Practical takeaway:</strong> Treat phone, SMS, and portal as an integrated playbook. You will get better results when each channel has a clear role.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Where AI Actually Helps Small Agencies (Beyond the Hype)
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              There is a lot of hype about "AI replacing agents." That is not the immediate opportunity for small agencies. The practical advantages that are already delivering value are:
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Automating Routine Outreach
            </h3>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Voice AI and automated calling handle high-volume reminders, inbound queries and simple PTP captures so humans can focus on complex disputes and negotiations. This reduces agent churn and cost per contact.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Faster PTP Capture and Same-Call Outcomes
            </h3>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Conversational AI recognizes intent in the call, captures a promise-to-pay or routes to payment options, and logs the outcome instantly. That reduces follow-ups and speeds collections.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Smarter Account Prioritization
            </h3>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              AI can augment scoring and suggest which accounts are worth human time today. When combined with behavioral signals, this raises recovery yield per collector.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Consistent Compliance Guardrails
            </h3>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Modern systems enforce approved language, time-window rules, and record transcripts automatically so teams have defensible audit trails. That reduces legal risk when done correctly.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Better Collector Productivity
            </h3>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              Removing repetitive tasks lets collectors handle 2x–4x more high-value work in the same shift according to multiple case studies and vendor reports.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              <strong className="text-white">Bottom line:</strong> AI's real contribution for small agencies is throughput and consistency. It makes existing teams more effective rather than replacing them.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              A Realistic 90-Day Digital-First Plan for 5–50 Collector Shops
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              You do not need a full digital overhaul to get wins. Here is a pragmatic roadmap that's low risk and fast to measure.
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Days 1–30: Map and Pick
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-slate-300">
                <li>Map current flows: who gets emailed, who gets a call, which portal links exist.</li>
                <li>Pick one immediate use case: due-date reminders or missed PTP follow-ups. Keep it narrow.</li>
                <li>Set compliance guardrails with legal input (time windows, opt-out handling).</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Days 31–60: Pilot and Measure
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-slate-300">
                <li>Run a controlled pilot: send SMS + portal nudges for a subset, and run a voice-AI pilot for the most promising accounts.</li>
                <li>Measure right-party contact, PTP rate, and same-call payment rate. Keep groups comparable so results are meaningful.</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Days 61–90: Scale and Refine
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-slate-300">
                <li>Expand the campaign on channels that work. Start routing complex calls to human agents with a warm handoff.</li>
                <li>Use the pilot data to tune call timing, retry rules, and message phrasing.</li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              This phased approach keeps cost and compliance risk low while producing measurable ROI early.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              The Metrics That Prove Your Digital and AI Pilot Is Working
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              Focus on a short list:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-3 text-xl text-slate-300">
              <li>Right-party contact rate</li>
              <li>PTP capture rate and PTP reliability</li>
              <li>Conversion to payment within X days of contact</li>
              <li>Average handle time for human agents and automated calls</li>
              <li>Cost per contact and cost per dollar collected</li>
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              If your pilot improves PTP capture and lowers cost per contact, scale it. Those two are the clearest levers for near-term impact.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Compliance and Risk: How to Think About Automation Safely
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Compliance is the gating factor for any automation rollout. The important notes are:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-3 text-xl text-slate-300">
              <li><strong className="text-white">Follow the rules first.</strong> Work with counsel to interpret FDCPA, TCPA, Reg F, and any state requirements for electronic communications. Do not treat compliance as an afterthought.</li>
              <li><strong className="text-white">Automate guardrails.</strong> Use systems that enforce time-of-day dialing, frequency caps, script locking, and DNC syncs. Automation is actually an advantage here because it reduces human error.</li>
              <li><strong className="text-white">Keep audit trails.</strong> Every interaction should be recorded, transcribed, and stored with timestamps and script versioning. That makes responses to disputes and audits far easier.</li>
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              Yes, compliance slows things down. But done correctly it is an enabler. Automated enforcement reduces legal risk while making your outreach more reliable.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Choosing the Right Vendor and Integrations for Your Agency
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              You do not need to rebuild your stack. When talking to vendors, prioritize these questions:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-3 text-xl text-slate-300">
              <li>Can you integrate with our CRM or dialer via API or webhook and push outcomes back automatically?</li>
              <li>Do you enforce script locking, DNC, and time-window dialing?</li>
              <li>How quickly can we run a pilot and what is the expected minimum setup time?</li>
              <li>How are call transcripts, recordings, and logs exposed for audits?</li>
              <li>What metrics will you track and share during the pilot?</li>
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Look for partners that make pilots low friction. If you have a tech team, ask about sandbox environments and API docs. If not, choose vendors who will help run the pilot.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              For example, at DROS we designed the platform specifically so small agencies do not need a big internal IT team to try this. We integrate with common CRMs and dialers via API or webhooks, push outcomes back automatically, and run pilots on a clean subset of accounts so you can see results before committing. Our team typically handles most of the setup and tuning, so your collectors can stay focused on talking to customers instead of learning another complicated tool.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Common Pitfalls Small Agencies Face When Going Digital-First
            </h2>

            <ul className="list-disc pl-8 mb-12 space-y-3 text-xl text-slate-300">
              <li><strong className="text-white">Trying to do everything at once.</strong> Pick one use case.</li>
              <li><strong className="text-white">Skipping compliance counsel.</strong> That's a fast route to trouble.</li>
              <li><strong className="text-white">Not measuring properly.</strong> If you can't compare before/after, you will never prove value.</li>
              <li><strong className="text-white">Assuming AI fixes bad data.</strong> Garbage in, garbage out. Clean account data first.</li>
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              Fix those things and your pilot will be informative and low risk.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Short Case Study Signals
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Industry deployments and vendor reports consistently show these outcomes when voice automation and digital channels are used thoughtfully: faster PTP capture, lower cost per contact, and improved availability for agents to handle complex cases. That translates into higher recovery yield per collector and lower churn among staff.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              We see similar patterns with early DROS deployments at 5–50 collector shops: starting with a narrow use case like due-date reminders or missed PTP follow-ups, agencies are able to free up collector time, reduce manual dialing, and move more simple payments to self-service flows within the first 60–90 days.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Final Checklist: A Low-Risk Pilot Brief You Can Use Today
            </h2>

            <ol className="list-decimal pl-8 mb-12 space-y-3 text-xl text-slate-300">
              <li>Pick one use case: due-date reminders or PTP follow-ups.</li>
              <li>Define success metrics and a 30-60-90 measurement cadence.</li>
              <li>Confirm compliance guardrails with your counsel.</li>
              <li>Prepare a clean subset of accounts and a control group.</li>
              <li>Run a small pilot, measure, learn, and iterate.</li>
            </ol>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              If you follow this, you will quickly see whether automation and AI help your operations. In many cases, the results arrive faster than people expect.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Why This Shift Matters for Small Agencies in 2026
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              The industry is shifting and the gap between digital-enabled firms and manual shops is widening. That does not mean small agencies can't compete. It means they must be selective, practical, and measurement-driven. Focus on customer flows that reduce friction and prove value in weeks, not months. Build compliance into the project from day one. Start small, learn fast, scale what works.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              Tools like DROS exist to make that experimentation less painful: we focus on small agencies, run hands-on pilots, and plug into the stack you already have so you can test digital-first and AI-assisted workflows without a massive rebuild. Whether you work with us or another vendor, the important thing is to <strong className="text-white">start small, measure honestly, and keep moving</strong>.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800">
            <Link
              to="/blogs"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors inline-flex items-center gap-2"
            >
              ← Back to Blogs
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
