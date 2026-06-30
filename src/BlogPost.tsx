import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function BlogPost() {
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

            {/* Desktop Navigation */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Why Debt Collection Needs <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Fewer Systems</span>, Not More
            </h1>
            <p className="text-2xl text-slate-300 font-light mb-8">
              The Case for Context Orchestration
            </p>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <span>8 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Today's debt collector works with too many systems.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              In a typical agency, a collector uses five to six different tools every day: CRM, dialer, payment system, SMS or email platform, compliance tools, and reporting dashboards. Each system solves one problem, but together they create a bigger one.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              This leads to integration fatigue, operational complexity, and loss of context.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              In modern debt collection, <strong className="text-white">less is more</strong>.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              The Mindset Shift: From More Tools to More Simplicity
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              For years, the industry has added tools to solve problems. The result is a fragmented tech stack where information is spread across systems.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Collectors are forced to switch screens constantly. Managers struggle to maintain visibility. Customers experience disconnected and repetitive interactions.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              The mindset needs to change.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Instead of asking, <em className="text-slate-400">"Which new tool do we need?"</em><br />
              Agencies must ask, <em className="text-slate-400">"How do we simplify?"</em>
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              Simplicity is no longer a nice-to-have. It is a <strong className="text-white">competitive advantage</strong>.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Omnichannel Requires Unified Context
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Debt collection today is omnichannel. Agencies engage consumers through calls, SMS, email, and other digital channels.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              But omnichannel communication without shared context is risky.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              If a payment is made in one system, a message is sent in another, and a call happens later, the collector often does not see the full story in one place. Missing even one message means missing critical context.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              This leads to poor customer experience, repeated outreach, and higher compliance risk.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              All Context in One Place - For Humans and AI
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Whether the work is done by a human collector or an AI agent, the requirement is the same: all context must be available in one place.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-4">
              This includes:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-3 text-xl text-slate-300">
              <li>Conversation history across all channels</li>
              <li>Payment status and promises to pay</li>
              <li>Disputes and special handling notes</li>
              <li>Consumer preferences</li>
              <li>Compliance-related rules and restrictions</li>
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-4">
              When context is unified:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-3 text-xl text-slate-300">
              <li>Human collectors work faster and with confidence</li>
              <li>AI agents behave responsibly and consistently</li>
              <li>Customers experience calmer, more relevant conversations</li>
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              Good outcomes come from good context.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              The Role of a Context Orchestrator
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              This is where a <strong className="text-white">context orchestration layer</strong> becomes essential.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              A context orchestrator sits above existing systems and connects them together. It does not replace your CRM, payment system, or communication tools. Instead, it brings their data together in real time and presents a single, unified view.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              With modern approaches like MCP servers, context can be passed from one tool to another in a simple and flexible way, without building complex, brittle API integrations for every use case.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              This makes integration faster, lighter, and easier to maintain.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              How dros.ai Fits Into This Future
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              dros.ai is built with this philosophy at its core.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-4">
              It is not just another collections tool. It acts as a context orchestration platform that integrates with:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-3 text-xl text-slate-300">
              <li>Your preferred CRM</li>
              <li>Payment systems</li>
              <li>Text messaging and email platforms</li>
              <li>AI calling and voice agents</li>
              <li>Propensity modeling and analytics</li>
            </ul>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              All relevant context is brought into one place and made usable for both human collectors and AI agents.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-4">
              The result is:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-3 text-xl text-slate-300">
              <li>Less operational overhead</li>
              <li>Fewer systems for collectors to manage</li>
              <li>Better use of AI without losing control</li>
              <li>A significantly improved customer experience</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              The Future Is Simple, Context-Driven Collection
            </h2>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              The future of debt collection is not about building bigger tech stacks. It is about building smarter, simpler systems.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              Agencies that win will adopt a mindset of simplicity, where context flows freely, humans and AI work from the same source of truth, and customers are treated with consistency and respect.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-8">
              In this future, <strong className="text-white">context is the system</strong>.
            </p>

            <p className="text-xl leading-relaxed text-slate-300 mb-12">
              And less truly is more.
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
