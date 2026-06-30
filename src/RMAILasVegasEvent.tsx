import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Calendar, MapPin, ArrowRight, Users, CheckCircle2, Linkedin, BookOpen, Mail, Phone, Menu, X } from 'lucide-react';

export default function RMAILasVegasEvent() {
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

        <div className="relative max-w-4xl mx-auto px-6">
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Meet DROS at <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">RMAI Las Vegas</span>
            </h1>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-slate-300 text-lg">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span>Las Vegas, NV</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-lg">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <span>Feb 9 - 12, 2026</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8">
              Photos from the Event
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all">
                <img
                  src="/WhatsApp_Image_2026-02-14_at_15.12.23.jpeg"
                  alt="DROS team at RMAI Las Vegas 2026"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all">
                <img
                  src="/WhatsApp_Image_2026-02-14_at_15.12.36.jpeg"
                  alt="Networking at RMAI conference"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all">
                <img
                  src="/WhatsApp_Image_2026-02-14_at_15.12.39.jpeg"
                  alt="DROS booth at RMAI Las Vegas"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all">
                <img
                  src="/WhatsApp_Image_2026-02-14_at_15.12.40_(1).jpeg"
                  alt="Team collaboration at RMAI"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all mb-12">
              <img
                src="/WhatsApp_Image_2026-02-14_at_15.12.40.jpeg"
                alt="DROS platform showcase at RMAI"
                className="w-full h-auto object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              What We'll Be Showcasing
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">DROS Platform</h3>
                <p className="text-slate-300 mb-4">
                  AI-native collections CRM that centralizes your recovery workflows and provides real-time intelligence for your team.
                </p>
                <ul className="space-y-2">
                  {[
                    'Unified account management',
                    'AI-powered prioritization',
                    'Real-time compliance monitoring',
                    'Performance analytics'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Vodex Voice AI</h3>
                <p className="text-slate-300 mb-4">
                  Compliant Voice AI agents that automate debtor conversations at scale: reminders, PTP capture, disputes, and more.
                </p>
                <ul className="space-y-2">
                  {[
                    'Human-like conversations',
                    'FDCPA/TCPA compliant',
                    'Automated PTP capture',
                    'Seamless CRM integration'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Why Visit Our Booth?
            </h2>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                <Users className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Meet the Team</h3>
                  <p className="text-slate-300">
                    Connect with our founding team and product experts to discuss the future of debt collection technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                <CheckCircle2 className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Live Product Demo</h3>
                  <p className="text-slate-300">
                    Experience DROS and Vodex in action with comprehensive demonstrations of our platform's capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                <ArrowRight className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Custom Integration Discussion</h3>
                  <p className="text-slate-300">
                    Explore how DROS integrates with your existing tech stack and can be customized for your agency's workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Reserve Your Time Slot
              </h2>
              <p className="text-xl text-slate-300 mb-6">
                Conference schedules are packed. Book a meeting with our team ahead of time to guarantee a personalized consultation about your collection operations.
              </p>
              <a
                href="https://dros.ai/book-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Schedule Your Meeting
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/30 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Looking Forward to Connecting
              </h2>
              <p className="text-xl text-slate-300">
                Whether you're a debt buyer, collection agency, or ARM service provider, we're excited to show you how DROS can transform your operations. See you in Las Vegas!
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              About the Founders
            </h2>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">Anshul Shrivastava</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Founders of Vodex.ai and creators of DROS, building compliant Voice AI and collections infrastructure for modern debt collection agencies and debt buyers.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <div className="text-slate-300">
                        <a href="mailto:anshul@vodex.ai" className="text-cyan-400 hover:text-cyan-300 transition-colors">anshul@vodex.ai</a>
                        {' / '}
                        <a href="mailto:anshul@dros.ai" className="text-cyan-400 hover:text-cyan-300 transition-colors">anshul@dros.ai</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <a href="tel:+13026272108" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 (302) 627-2108</a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <a
                        href="https://www.linkedin.com/in/anshul-shrivastava/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6">
              Our Book on Debt Collection
            </h2>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">AI-Powered Debt Collection</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    Explore our comprehensive guide on modern debt collection practices and how AI is transforming the industry. Learn from real-world insights and practical strategies for improving recovery operations.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.amazon.com/dp/B0GDG4RJK7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                    >
                      <BookOpen className="w-5 h-5" />
                      Kindle Version
                    </a>
                    <a
                      href="https://www.amazon.com/dp/B0GDGRZMB1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                    >
                      <BookOpen className="w-5 h-5" />
                      Paperback Version
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800">
            <Link
              to="/events"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors inline-flex items-center gap-2"
            >
              ← Back to Events
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
