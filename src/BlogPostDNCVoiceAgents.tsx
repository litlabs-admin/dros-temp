import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does an AI debt collection agent handle \u201cdon\u2019t call me again\u201d?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A well-configured AI agent is trained to recognize phrases like \u201cdon\u2019t call me again\u201d, \u201cstop calling\u201d, or \u201ctake me off your list\u201d as a Do Not Call request, confirm it with the consumer, and trigger an event that adds the number to your internal DNC list and blocks future calls in your campaigns."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI collectors comply with FDCPA, TCPA, and Regulation F?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, when they run inside a platform that enforces call-frequency rules, call-hour windows, consent tracking, and dispute workflows. The model alone cannot guarantee compliance, but an operating layer like DROS can hard-code these constraints into every AI and human campaign."
      }
    },
    {
      "@type": "Question",
      "name": "How does DROS update the Do Not Call list when a customer opts out during an AI call?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When the AI detects a DNC request, it sends a structured event to DROS, which immediately flags the number as Do Not Call, logs a timestamped note on the account, and prevents future campaigns from dialing that number, regardless of channel or agent."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a consumer disputes a debt with the AI agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AI agent acknowledges the dispute, collects minimal clarification, and sends a dispute event so DROS can pause collection on that account and route it to a dispute or compliance queue for human review."
      }
    },
    {
      "@type": "Question",
      "name": "Can the AI transfer a call to a human collector if the conversation gets complex or emotional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Escalation rules in the agent context can require the AI to offer a warm transfer to a human collector or supervisor when it detects legal threats, repeated disputes, or high emotional distress, and the transcript and tags are passed along with the call."
      }
    },
    {
      "@type": "Question",
      "name": "How does DROS enforce call-hour and call-frequency rules for AI campaigns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DROS lets you define allowed call hours, local timezone behavior, and call-frequency policies at the campaign level. AI agents can only make outbound calls inside those parameters, helping you stay within Regulation F\u2019s 7-in-7 limits and avoid calling at inconvenient times."
      }
    },
    {
      "@type": "Question",
      "name": "Does using AI increase compliance risk for collection agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI increases risk only if it runs as a loose, standalone tool. When it is integrated into a system that centralizes DNC, consent, disputes, call-hours, and audit logs, it often reduces risk by enforcing your policies the same way on every single call."
      }
    }
  ]
};

export default function BlogPostDNCVoiceAgents() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema-dnc';
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('faq-schema-dnc');
      if (existing) existing.remove();
    };
  }, []);

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
              <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold rounded-full">Compliance &amp; Operations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              How AI Voice Agents Handle &ldquo;Don&rsquo;t Call Me Again&rdquo;:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                DNC, Disputes, and Compliance in 2026
              </span>
            </h1>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <span>12 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              If you are considering AI voice for collections you are probably not asking &ldquo;Can it sound human?&rdquo; anymore. You are asking: What happens when a consumer says &ldquo;don&rsquo;t call me again,&rdquo; disputes the debt, or starts talking about lawyers?
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Under FDCPA, TCPA, and Regulation F you cannot afford to get those edge cases wrong. A single missed &ldquo;do not call&rdquo; request or a disputed account that keeps getting dialed can turn a promising AI project into a compliance incident.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              In this article we will walk through how a well&#8209;designed AI agent should handle opt&#8209;outs and disputes, what actually needs to happen in your systems (DNC list, call&#8209;hour controls, notes, escalation), how DROS wires those rules in, and how you can configure the AI&rsquo;s context so it reliably follows them.
            </p>

            {/* Section 1 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              1. The Regulations Behind &ldquo;Don&rsquo;t Call Me Again&rdquo;
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              Let&rsquo;s translate the alphabet soup into a few practical rules for day&#8209;to&#8209;day operations:
            </p>

            <div className="space-y-4 mb-12">
              {[
                {
                  label: 'FDCPA & disputes',
                  text: 'If a consumer disputes a debt in writing within 30 days of receiving the validation notice you must stop collection on that debt until you mail verification. Many agencies extend similar caution to verbal disputes and route them for human review as a risk&#8209;management choice.'
                },
                {
                  label: 'Regulation F & call frequency',
                  text: 'The CFPB\'s Reg F adds a "7&#8209;in&#8209;7" presumption: more than 7 calls in 7 days about a particular debt, or any call within 7 days after a live conversation about that debt, is presumed a violation.'
                },
                {
                  label: 'TCPA & consent / DNC',
                  text: 'Consumers can revoke consent to automated calls or texts at any time and in any reasonable way ("stop calling me", "take me off your list"). You must maintain an internal DNC list and honor revocations promptly across outbound systems.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <span className="text-cyan-400 font-bold text-sm min-w-[160px] pt-0.5">{item.label}</span>
                  <span className="text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              ))}
            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-8 my-10">
              <p className="text-lg text-slate-300 leading-relaxed">
                AI doesn&rsquo;t change these rules. It just adds new failure modes if your stack can&rsquo;t capture what was said and turn it into enforceable flags and workflows in real time.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              2. How AI Agents Actually Follow Instructions (The Context Window)
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              Every AI voice agent sits inside a context window: the system and behavior instructions you pass in before each call. This is where you hard&#8209;code your compliance expectations and escalation rules.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              A solid context for collections will include things like:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'What to treat as a DNC / consent revocation intent ("don\'t call me again", "take me off your list", "remove my number", "stop contacting me").',
                'What to treat as a dispute intent ("I don\'t owe this", "this isn\'t my account", "I already paid this").',
                'How to acknowledge and close the call when those intents appear.',
                'When to escalate to a human (e.g. legal threats, harassment complaints, language the model isn\'t trained for).',
                'What structured events to emit back to the platform (e.g. ADD_TO_DNC, MARK_DISPUTED, TRANSFER_TO_AGENT).'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xl text-slate-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-3"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              In DROS you can think of it as a chain:
            </p>

            <div className="flex flex-col items-center gap-3 my-10">
              {[
                'Compliance policy',
                'DROS rules & workflows',
                'AI context instructions'
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-3 w-full max-w-sm">
                  <div className="bg-slate-900 border border-cyan-500/40 rounded-xl px-8 py-4 text-cyan-400 font-semibold text-center w-full">
                    {step}
                  </div>
                  {i < 2 && <ArrowRight className="w-5 h-5 text-slate-500 rotate-90" />}
                </div>
              ))}
            </div>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              For example your DROS campaign might specify: &ldquo;If a DNC intent is detected, immediately flag the phone number as DNC on this account, write a note with exact wording and timestamp, end the call politely, and prevent this number from being scheduled in any future campaign.&rdquo; Those instructions are mirrored in the agent&rsquo;s context so the model knows what to listen for and what event to fire, and DROS enforces the rule consistently, not just &ldquo;inside the model&rsquo;s head.&rdquo;
            </p>

            {/* Section 3 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              3. Do Not Call: From &ldquo;Don&rsquo;t Call Me&rdquo; to a Real DNC Flag
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              From the consumer&rsquo;s viewpoint this should be simple: they say &ldquo;Don&rsquo;t call me again,&rdquo; and the calls actually stop.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              Under the hood a compliant AI + DROS flow looks like this:
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  step: '1',
                  label: 'Intent detection',
                  text: 'The AI model is trained to classify DNC phrases as a consent revocation intent, not just "unhappy customer."'
                },
                {
                  step: '2',
                  label: 'Verbal confirmation',
                  text: 'The agent responds: "I understand. I\'ll mark this number as Do Not Call, and you won\'t receive further automated calls about this account."'
                },
                {
                  step: '3',
                  label: 'Event to DROS',
                  text: 'The agent sends an ADD_TO_DNC event with the account ID, phone number, and snippet of transcript.'
                },
                {
                  step: '4',
                  label: 'DROS updates the record',
                  text: 'Adds the phone number to the internal DNC list, writes a timestamped note on the account, and immediately marks that number as ineligible for any future outbound campaigns.'
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-1">{item.label}</p>
                    <p className="text-slate-300 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-700 my-10">
              <img
                src="/IMG_1.png"
                alt="Do Not Call notification in DROS"
                className="w-full"
              />
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-700 my-10">
              <img
                src="/IMG_3.png"
                alt="Add to DNC List modal in DROS"
                className="w-full"
              />
            </div>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              This is how you turn TCPA&rsquo;s &ldquo;honor reasonable revocation&rdquo; language into a concrete, auditable system behavior.
            </p>

            {/* Section 4 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              4. Handling Disputes Gently and Knowing When to Transfer
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              Disputes are where you most want a calm, consistent first response and quick escalation to a human when needed.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              A good dispute flow looks like this:
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  step: '1',
                  label: 'Detect dispute language',
                  text: 'The model treats phrases like "I don\'t owe this", "this isn\'t my debt", "I already paid", "I want to dispute this" as a Dispute intent.'
                },
                {
                  step: '2',
                  label: 'Acknowledge and de-escalate',
                  text: '"I\'m sorry for the confusion. I\'ll mark this account as disputed so our team can review it."'
                },
                {
                  step: '3',
                  label: 'Collect minimal context',
                  text: 'One or two clarifying questions: "Is your concern that the amount is wrong, or that this isn\'t your account?" or "Do you believe this debt was already paid?"'
                },
                {
                  step: '4',
                  label: 'Emit a MARK_DISPUTED event',
                  text: 'The AI sets a Disputed flag on the account via DROS, which pauses normal collection flows while your team verifies the debt, in line with FDCPA requirements.'
                },
                {
                  step: '5',
                  label: 'Escalate when appropriate',
                  text: 'If there is shouting, legal threats, or anything outside the defined guardrails, the agent offers a live transfer: "I\'m going to connect you to a specialist on our team who can review this with you."'
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-1">{item.label}</p>
                    <p className="text-slate-300 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-8 my-10">
              <p className="text-lg text-slate-300 leading-relaxed">
                In DROS that transfer can target a specific queue (e.g. &ldquo;Disputes&rdquo; or &ldquo;Consumer Complaints&rdquo;), and the transcript and tags land directly in the agent&rsquo;s workspace so they are not starting from zero.
              </p>
            </div>

            {/* Section 5 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              5. Call Hours, Timezones, and Reg F Call Frequency
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              Another question you are already seeing in sales calls: &ldquo;How do we know the AI won&rsquo;t call people at 6 a.m. or violate the 7&#8209;in&#8209;7 rule?&rdquo;
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              Reg F and FDCPA expect agencies to:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Avoid calling at times they know (or should know) are inconvenient, typically before 8 a.m. or after 9 p.m. in the consumer\'s local time.',
                'Stay within Reg F\'s call&#8209;frequency presumptions (no more than 7 attempts in 7 days per debt, and no calls within 7 days after a live conversation).'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xl text-slate-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-3"></span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              In DROS you model this at the campaign level, not just inside the agent&rsquo;s prompt.
            </p>

            <div className="rounded-xl overflow-hidden border border-slate-700 my-10">
              <img
                src="/IMG_4.png"
                alt="Configure Campaign Settings with call hours and timezone in DROS"
                className="w-full"
              />
            </div>

            <div className="space-y-3 mb-10">
              {[
                'You define allowed call hours (for example 09:00 to 17:00).',
                'You can choose "use each account\'s local timezone" so a 9 a.m. Eastern campaign doesn\'t accidentally hit West Coast consumers at 6 a.m.',
                'AI agents and human&#8209;driven campaigns share the same call&#8209;hour and timezone rules. No one can schedule outside the window.',
                'Behind the scenes DROS can also track per&#8209;debt call attempts and "days since last successful conversation" to help you respect Reg F\'s 7&#8209;in&#8209;7 framework and avoid over&#8209;contact.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-lg text-slate-300">
                  <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>

            {/* Section 6 */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              6. Why AI + DROS Is a Compliance Guardrail, Not a Risk
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-6">
              AI agents don&rsquo;t replace your compliance program, they execute it more consistently. When you design things this way:
            </p>

            <div className="space-y-4 mb-12">
              {[
                {
                  trigger: '"Don\'t call me again" becomes:',
                  items: [
                    'a clear DNC intent in the AI context',
                    'a DNC flag and note in DROS',
                    'a hard block on all future calls from any campaign'
                  ]
                },
                {
                  trigger: '"I don\'t owe this" becomes:',
                  items: [
                    'a Dispute intent',
                    'a paused workflow and dispute queue in DROS',
                    'a human follow&#8209;up aligned with FDCPA/Reg F expectations'
                  ]
                },
                {
                  trigger: '"What if the AI calls at the wrong time?" becomes:',
                  items: [
                    'call&#8209;hour and timezone rules defined once in DROS',
                    'enforced automatically for every AI and human call',
                    'with a single audit trail to show regulators or clients why and when a call occurred'
                  ]
                }
              ].map((block, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <p className="text-cyan-400 font-semibold mb-3">{block.trigger}</p>
                  <ul className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-300">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 mt-2.5"></span>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold text-white mt-16 mb-8">
              FAQ
            </h2>

            <div className="space-y-4 mb-16">
              {[
                {
                  q: 'How does an AI debt collection agent handle "don\'t call me again"?',
                  a: 'A well&#8209;configured AI agent is trained to recognize phrases like "don\'t call me again", "stop calling", or "take me off your list" as a Do Not Call (DNC) request, confirm it verbally, and trigger an event that adds the number to your internal DNC list and blocks future calls in your campaigns.'
                },
                {
                  q: 'Can AI collectors comply with FDCPA, TCPA, and Regulation F?',
                  a: 'Yes, if they run inside a platform that enforces call&#8209;frequency rules, call&#8209;hour windows, consent tracking, and dispute workflows. The model alone cannot guarantee compliance, but an operating layer like DROS can hard&#8209;code these constraints into every AI and human campaign.'
                },
                {
                  q: 'How does DROS update the Do Not Call list when a customer opts out during an AI call?',
                  a: 'When the AI detects a DNC request it sends a structured event to DROS, which immediately flags the number as Do Not Call, logs a timestamped note on the account, and prevents any future campaigns from dialing that number, regardless of channel or agent.'
                },
                {
                  q: 'What happens if a consumer disputes a debt with the AI agent?',
                  a: 'The agent acknowledges the dispute, collects minimal clarification, and sends a MARK_DISPUTED event so DROS can pause collection on that account and route it to a dispute or compliance queue in line with FDCPA expectations about disputed debts.'
                },
                {
                  q: 'Can the AI transfer a call to a human collector if the conversation gets complex or emotional?',
                  a: 'Yes. Your context window can define clear escalation rules, such as legal threats, repeated disputes, or high emotional distress, where the agent offers a warm transfer to a human collector or supervisor and passes along the transcript and tags.'
                },
                {
                  q: 'How does DROS enforce call&#8209;hour and call&#8209;frequency rules for AI campaigns?',
                  a: 'DROS lets you set allowed call hours, local timezone behavior, and call&#8209;frequency policies at the campaign level. AI agents can only make outbound calls inside those parameters, which helps you stay within Reg F\'s 7&#8209;in&#8209;7 limits and avoid calling at inconvenient times.'
                },
                {
                  q: 'Does using AI increase compliance risk for collection agencies?',
                  a: 'AI increases risk only if it runs as a loose, standalone tool. When it is integrated into a system that centralizes DNC, consent, disputes, call&#8209;hours, and audit logs, it often reduces risk by enforcing your policies the same way on every single call.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">{item.q}</h3>
                  <p className="text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.a }} />
                </div>
              ))}
            </div>

          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-10 border border-cyan-500/30 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to See DROS in Action?</h2>
            <p className="text-lg leading-relaxed text-slate-300 mb-6">
              Schedule a personalized demo to see how DROS handles DNC, disputes, and compliance guardrails in real time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://dros.ai/book-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/blogs"
                className="border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-slate-900"
              >
                Back to Blog
              </Link>
            </div>
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
