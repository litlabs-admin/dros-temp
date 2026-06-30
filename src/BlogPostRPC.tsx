import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function BlogPostRPC() {
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

      <article className="relative pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <Link to="/blogs" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            ← Back to Blogs
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              What Thousands of Debt Collection Calls Taught Us About Right Party Contact
            </h1>
            <p className="text-xl text-slate-400">
              Real learnings from the field on why RPC is stuck at 26% and how to fix it
            </p>
            <div className="mt-6 text-sm text-slate-500">
              15 min read
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed text-lg">
              If you run or manage a collections team, you already know this truth: you only get paid when you actually talk to the right person.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Yet across the industry, average Right Party Contact (RPC) rates stubbornly hover around 26%, and nearly a quarter of contact centers sit below 20%. That means 3 out of 4 outbound calls never reach the person who can actually resolve the debt.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Over the past couple of years, we have worked closely with U.S. collection agencies while building and tuning DROS (our all‑in‑one collections operating system) and Vodex (our voice AI stack). In the process, we have analyzed and learned from thousands of calls, digital conversations, and workflows.
            </p>

            <p className="text-slate-300 leading-relaxed">
              This article is our attempt to share those learnings: what is really breaking RPC today, what actually moved the needle in the field, and how you can apply the same ideas, even if you never use our products.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Why Right Party Contact Is Stuck Around 26%</h2>

            <p className="text-slate-300 leading-relaxed">
              Most leaders we talk to feel RPC is "just how it is now" consumers don't pick up, carriers mark you as spam, and regulations keep tightening. The data partly supports that story: recent benchmark work shows an industry average RPC of about 26%, with 23% of contact centers below 20%.
            </p>

            <p className="text-slate-300 leading-relaxed">
              But when we dug into call recordings and campaign data, we kept seeing something else: low RPC was rarely the result of a single big problem. It was the compound effect of five smaller issues that stacked on top of each other.
            </p>

            <p className="text-slate-300 leading-relaxed">
              We started thinking of RPC not as a dialer setting, but as the visible symptom of the entire outreach system: data quality, channel mix, timing, caller ID reputation, and how easy it is to respond.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">How We Learned: A Quick Note on Our Data</h2>

            <p className="text-slate-300 leading-relaxed">
              Before getting into stories, it is important to clarify what our perspective is and is not.
            </p>

            <p className="text-slate-300 leading-relaxed">
              We are not a giant network provider with trillions of calls. We sit much closer to the ground: small and mid‑sized agencies in the U.S., typically 5–50 collectors, working on everything from early‑stage consumer debt to older, harder portfolios.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Across these teams, we:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Onboarded them into DROS, which centralizes dialer, CRM, notes, and digital channels into one workspace.</li>
              <li>Deployed Vodex voice AI in selective campaigns where it made sense.</li>
              <li>Captured and analyzed thousands of calls, SMS and email touches, and campaign outcomes.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              We then overlaid that with broader industry research on RPC and omnichannel performance. Studies consistently show that digital channels like SMS have far higher engagement than traditional email, with text campaigns delivering around 45% higher response rates than email and open rates near 98%, often within minutes.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">The 5 Hidden RPC Killers We Kept Seeing</h2>

            <p className="text-slate-300 leading-relaxed">
              When we mapped failed contact attempts across clients, five patterns showed up again and again.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">1. Dirty or Outdated Data</h3>

            <p className="text-slate-300 leading-relaxed">
              Every RPC problem starts or ends with the data layer.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Industry write‑ups are blunt about it: incorrect, incomplete, or outdated phone numbers are one of the main reasons RPC stays low. In our work, we saw:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Duplicate accounts with different numbers and no clear "source of truth".</li>
              <li>Old landline numbers being dialed for mobile‑first consumers.</li>
              <li>Accounts never re‑enriched after the original placement.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              Whenever we ran even a basic skip‑trace refresh across large segments, we almost always found that 10–25% of numbers were either disconnected or obviously wrong and had been sitting in live dialing queues for months.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">2. Voice‑Only, Single‑Channel Thinking</h3>

            <p className="text-slate-300 leading-relaxed">
              The traditional playbook is still "call first, call again, then call some more". The problem is that modern consumers do not behave like the old playbook assumes.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Research and provider data now show that SMS and email outreach significantly outperform single‑channel voice for engagement and payment conversion:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Text messaging yields about 45% higher response rates than email in collections contexts.</li>
              <li>SMS messages achieve open rates near 98%, often within minutes.</li>
              <li>Omnichannel programs (mixing SMS, email, and voice) have seen payment arrangements rise by up to 40% and cost‑to‑collect cut by around 50% when executed well.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              When we looked at voice‑only campaigns inside DROS, the pattern was clear: agents were burning dials into numbers that had never engaged on any channel.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">3. Wrong Time‑of‑Day and Day‑of‑Week Patterns</h3>

            <p className="text-slate-300 leading-relaxed">
              Several RPC studies highlight timing as a core driver: contacting consumers at inconvenient hours tanks contact and answer rates. Our call‑level data confirmed this.
            </p>

            <p className="text-slate-300 leading-relaxed">
              We repeatedly saw:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Heavy call volumes mid‑morning on weekdays, right when many consumers are at work or commuting.</li>
              <li>Minimal experimentation with evenings or weekends, even for segments where this made sense.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              Once we segmented answer rates by time of day, it was obvious that the same list could produce 2–3× more right‑party contacts purely based on timing, without any script or dialer change.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">4. Caller ID Reputation and "Spam Likely" Labels</h3>

            <p className="text-slate-300 leading-relaxed">
              Another quiet RPC killer lives inside carrier and call‑protection algorithms.
            </p>

            <p className="text-slate-300 leading-relaxed">
              As call volumes increase and number rotation is mismanaged, more agency numbers get flagged as "Spam" or "Scam Likely". While there is less public data quantifying this effect for collections specifically, providers and BPOs consistently report that cleaning up caller ID reputation and using local, registered numbers improves answer and RPC rates noticeably.
            </p>

            <p className="text-slate-300 leading-relaxed">
              In DROS, whenever we onboarded an agency already battling spam labels, we saw much lower answer rates even on good, recent data until we addressed caller ID hygiene.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">5. High Friction Once You Do Reach the Right Party</h3>

            <p className="text-slate-300 leading-relaxed">
              RPC is usually defined as "did we reach the right person?" But in practice, agencies also kill future RPC by what happens after that first contact.
            </p>

            <p className="text-slate-300 leading-relaxed">
              When the first successful contact experience is:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Scripted in a way that feels threatening or confusing.</li>
              <li>Offers no easy digital way to pay or schedule.</li>
              <li>Requires the consumer to call back a generic number and sit on hold.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              Then many debtors simply stop answering next time. Studies on omnichannel collections show that offering easy self‑service payment options and using tone‑appropriate, helpful messages significantly increases engagement and payment rates.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Mini Story #1: The Ohio Agency Stuck at 21% RPC</h2>

            <p className="text-slate-300 leading-relaxed">
              One mid‑sized agency in Ohio came to us frustrated. They had around 25 collectors, a mixed portfolio of medical and utility debt, and an RPC rate stuck around 21% on their outbound campaigns.
            </p>

            <p className="text-slate-300 leading-relaxed">
              They assumed their problem was "we just need to dial more." When we looked at the data together inside DROS, a different picture emerged:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Roughly 18% of numbers on one large campaign were either disconnected or clearly wrong (e.g., business IVRs, fax lines).</li>
              <li>First call attempts were heavily concentrated between 9 AM and 11 AM local time, even for working‑age segments.</li>
              <li>They were using voice‑only outreach, with no SMS or email touches unless a debtor specifically requested it.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              We proposed a three‑step experiment over 60 days:
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
              <h4 className="text-xl font-bold mb-4 text-cyan-400">Data clean‑up first.</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                We helped them push 8,000 accounts through a modern skip‑tracing provider and update numbers in DROS. Disconnected and obviously wrong numbers were moved out of active dialing queues.
              </p>

              <h4 className="text-xl font-bold mb-4 text-cyan-400">Introduce SMS and email as the first touch</h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                For eligible accounts, they started with a simple, compliant SMS:
              </p>
              <p className="text-slate-300 italic bg-slate-950 p-4 rounded border border-slate-700">
                "Hi [First Name], this is [Agency Name] regarding an important account. You can view details and payment options securely here: [Link]. Reply STOP to opt out."
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                Email carried the same message and portal link for those with valid addresses. Voice calls followed only for non‑responders.
              </p>

              <h4 className="text-xl font-bold mb-4 mt-6 text-cyan-400">Test better call windows by segment</h4>
              <ul className="text-slate-300 space-y-2">
                <li>For employed, working‑age segments: more calls were moved to 5–8 PM local time and limited lunchtime calling.</li>
                <li>For older segments and certain utilities: focus on late morning and early afternoon.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">What Changed</h3>

            <p className="text-slate-300 leading-relaxed">
              Within 6 weeks, their numbers looked very different:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>RPC improved from 21% to 34% across the test campaigns, a relative lift of more than 60%.</li>
              <li>Roughly 28% of payments on those campaigns came directly through the SMS/email portal, with no live call involved.</li>
              <li>Collectors reported fewer "why are you calling me?" reactions, because many debtors had at least seen a prior digital touch with clear context.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              None of this required complex AI models yet. It was data hygiene, channel mix, and timing.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">What the Broader Data Says About SMS, Email, and Omnichannel</h2>

            <p className="text-slate-300 leading-relaxed">
              Our Ohio example matches what broader studies and providers have been reporting for years:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Text message outreach delivers about 45% higher response rates than email for collections, and reaches people on a channel they check constantly.</li>
              <li>SMS open rates often sit near 98%, with most messages read within minutes, far outperforming email and unanswered phone calls.</li>
              <li>Collections organizations using digital/omnichannel strategies (SMS + email + app + limited, well‑timed voice) see payment arrangements increase by up to 40% and cost‑to‑collect fall by around 50% when combined with virtual agents and self‑service options.</li>
              <li>One large digital‑first provider reported over 280% higher engagement for omnichannel vs voice‑only outreach.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              The conclusion we drew and then started building for is simple:
            </p>

            <p className="text-slate-300 leading-relaxed font-semibold text-lg bg-slate-900/50 border-l-4 border-cyan-500 p-6 my-8">
              RPC is no longer just a dialer KPI. It is a whole‑system outcome driven by data quality, channel mix, timing, reputation, and friction.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Mini Story #2: The California Team That Thought They Had a "Script Problem"</h2>

            <p className="text-slate-300 leading-relaxed">
              A smaller agency in California, focused mainly on retail and BNPL portfolios, came to us convinced their agents "weren't good on the phone." Their RPC was hovering around 24–25%, and they had recently rotated through several script variations with little effect.
            </p>

            <p className="text-slate-300 leading-relaxed">
              We ingested their recent campaigns into DROS and listened to a sample of calls. The scripts were not amazing, but they were not catastrophic either.
            </p>

            <p className="text-slate-300 leading-relaxed">
              What we noticed instead:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Many of their successful RPCs happened on second or third attempts, often after there had been some prior digital touch (like an email reminder from the original creditor).</li>
              <li>They had no consistent strategy for combining channels the decision to send an SMS or email was left entirely to individual agents.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">The Experiment: Minimal Omnichannel, Max Measurement</h3>

            <p className="text-slate-300 leading-relaxed">
              We worked with them to set up a very lightweight, rules‑based journey inside DROS:
            </p>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-8">
              <h4 className="text-xl font-bold mb-4 text-cyan-400">Day 0 – Digital First</h4>
              <p className="text-slate-300 leading-relaxed mb-6">
                If an account was 15–60 days past placement, the first touch would be an email and/or SMS with a portal link. No calls on day 0 unless the consumer initiated.
              </p>

              <h4 className="text-xl font-bold mb-4 text-cyan-400">Day 2–3 – Targeted Calls Only</h4>
              <p className="text-slate-300 leading-relaxed mb-2">Agents prioritized:</p>
              <ul className="text-slate-300 space-y-2 mb-4">
                <li>Accounts that opened the email but did not pay.</li>
                <li>Accounts that clicked the link in SMS but did not complete payment.</li>
                <li>Cold numbers with no digital engagement were deprioritized.</li>
              </ul>

              <h4 className="text-xl font-bold mb-4 text-cyan-400">Day 7+ – Voice AI + Human Handoff</h4>
              <ul className="text-slate-300 space-y-2">
                <li>For low‑balance accounts, they used Vodex to place reminder calls with a short message and DTMF options.</li>
                <li>If the consumer wanted to talk to a human, the call was transferred to an agent.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">The Outcome</h3>

            <p className="text-slate-300 leading-relaxed">
              Over the next 8 weeks:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>RPC on targeted call lists (those with some prior digital engagement) stabilized in the 38–41% range.</li>
              <li>Overall campaign‑level RPC moved from ~25% to ~33%, despite fewer total dials.</li>
              <li>A surprising proportion of accounts, especially younger, digital‑native consumers resolved their debt entirely through SMS/email + self‑service portal, never needing a live call.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              The script was improved, yes, but the bigger lift came from only calling when there was a higher probability someone would pick up and engage.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Our RPC Improvement Framework (That You Can Use Without DROS)</h2>

            <p className="text-slate-300 leading-relaxed">
              Based on these and other projects, we ended up standardizing a simple, five‑part RPC improvement framework. It lives inside DROS as workflows and dashboards, but you can apply the logic manually with your current stack.
            </p>

            <div className="space-y-8 my-12">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">1. Clean and Enrich Your Data Quarterly</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>Push your portfolios through modern skip‑tracing and enrichment tools (for example: Tracers, BatchSkipTracing, Accurate Append, Thomson Reuters CLEAR).</li>
                  <li>Remove or reclassify disconnected and obviously wrong numbers rather than letting them sit in active campaigns.</li>
                  <li>Normalize phone types (mobile vs landline) so your strategy can differ by channel.</li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4">
                  Even basic enrichment runs can dramatically reduce wasted dials and give you a better shot at increasing RPC.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">2. Design a Simple Omnichannel Journey</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  You do not need a fancy orchestrator to start. For each segment, define:
                </p>
                <ul className="text-slate-300 space-y-2">
                  <li><strong>Day 0:</strong> Send an email and/or SMS explaining who you are and offering a secure way to view the account and pay.</li>
                  <li><strong>Day 2–3:</strong> Call only accounts that opened an email but did not pay, clicked an SMS link but did not complete.</li>
                  <li><strong>Day 7+:</strong> Use IVR or voice AI for low‑balance reminders; route high‑balance or disputed cases directly to humans.</li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4">
                  This aligns your calls with warm, higher‑intent subsets rather than cold lists.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">3. Test and Lock In Better Call Windows</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>Split your lists by persona (employed, self‑employed, retired, student, etc.).</li>
                  <li>For each, test at least two time windows for a couple of weeks (e.g., 10–12 vs 17–19 local time).</li>
                  <li>Track RPC by window and lock in the better one.</li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4">
                  It sounds obvious, but very few teams actually run this as a structured experiment, even though timing is one of the clearest RPC levers.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">4. Protect and Improve Caller ID Reputation</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>Register your numbers properly and keep caller name (CNAM) clean where supported.</li>
                  <li>Avoid blasting very high volumes from a single number.</li>
                  <li>Periodically check how your numbers appear on popular call‑block and ID apps.</li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4">
                  While public research here is thinner, both BPOs and technology providers report meaningful gains when caller ID hygiene is taken seriously.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">5. Reduce Friction Once You Reach the Right Party</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Remember: RPC is not the end of the story, how you handle that first right‑party conversation determines if you will ever get a second one.
                </p>
                <ul className="text-slate-300 space-y-2">
                  <li>Build clear, empathetic scripts with plain‑language explanations and options, not threats.</li>
                  <li>Offer self‑service links over SMS/email during or after the call so they can resolve later without embarrassment.</li>
                  <li>Send a short, friendly recap message after a call that includes agreed next steps.</li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4">
                  This is where we have seen the biggest qualitative shift in consumer tone and future answer behavior.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">How These Learnings Shaped DROS (and Vodex)</h2>

            <p className="text-slate-300 leading-relaxed">
              We did not start with a fixed product blueprint; we iterated DROS and Vodex in response to exactly the problems you have just read about.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">What We Baked Into DROS</h3>

            <p className="text-slate-300 leading-relaxed">
              DROS is designed to act as the operating system for a collections team, with RPC improvement built in:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li><strong>Unified workspace:</strong> collectors see calls, SMS, email, and account context on a single screen, instead of juggling 4–6 tools.</li>
              <li><strong>List logic and scoring:</strong> campaigns can be built around "warm" engagement signals (opens, clicks, partial payments) instead of flat CSVs.</li>
              <li><strong>Timing controls:</strong> call windows and local‑time rules can be enforced per segment.</li>
              <li><strong>Digital pathways:</strong> every campaign can embed self‑service payment flows, not just "call us back" instructions.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              In other words, DROS tries to raise RPC as a system outcome rather than leaving it as just one more dialer metric.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-cyan-400">Where Vodex Fits</h3>

            <p className="text-slate-300 leading-relaxed">
              Vodex sits on top of that operating system as the voice AI and automation layer:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>For low‑balance or long‑tail accounts, Vodex can handle high‑volume, low‑complexity outreach.</li>
              <li>It can place calls, leave compliant, human‑sounding messages, and follow up with SMS or email.</li>
              <li>When a debtor wants to talk to a human, or the situation is complex, the call routes to a collector inside DROS with the full context on screen.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              When we combine both, the RPC story changes:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Fewer cold calls.</li>
              <li>More conversations at the right time, on the right channel.</li>
              <li>And when humans do get on the phone, they are doing higher‑value work.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Where to Go From Here</h2>

            <p className="text-slate-300 leading-relaxed">
              If your RPC is stuck in the low‑ to mid‑20s, the good news is that you probably do not need a miracle. You need:
            </p>

            <ul className="text-slate-300 space-y-2 my-6">
              <li>Cleaner data.</li>
              <li>A smarter channel mix.</li>
              <li>Better timing.</li>
              <li>Less friction once you make contact.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed">
              We have seen agencies move from ~20–22% RPC into the low‑30s and even low‑40s over just a couple of months not by burning out their teams, but by changing how they decide who to contact, when, and on which channel.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Whether you use DROS and Vodex or stick with your existing stack, the core lessons from the calls we have listened to stay the same.
            </p>

            <p className="text-slate-300 leading-relaxed font-semibold text-2xl bg-slate-900/50 border-l-4 border-cyan-500 p-8 my-12 text-center">
              RPC is not a mystery. It is a design problem.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800">
            <Link to="/blogs" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
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
