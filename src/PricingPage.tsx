import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronDown, Menu, X, Youtube, Linkedin } from 'lucide-react';

export default function PricingPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

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
              <Link to="/pricing" className="text-white font-semibold transition-colors">
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
                      <Link to="/blogs" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                        Blogs
                      </Link>
                      <Link to="/events" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                        Events
                      </Link>
                      <Link to="/resources/videos" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                        Videos
                      </Link>
                      <a href="https://app.dros.ai/api-docs" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                        API Docs
                      </a>
                      <Link to="/release-notes" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                        Release Notes
                      </Link>
                      <Link to="/contact" className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
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
              <Link to="/pricing" className="block text-white font-semibold transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <Link to="/about" className="block text-slate-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
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

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, Transparent <span className="text-cyan-400">Pricing</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Choose the plan that fits your agency. Scale as you grow.
            </p>
            <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
              <p className="text-lg font-semibold text-cyan-400">
                Most agencies recover their DROS investment within the first 14 days
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                style={{ backgroundColor: isAnnual ? '#06b6d4' : '#334155' }}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-semibold transition-colors ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
                Annual
                <span className="ml-2 text-sm text-cyan-400">Save 20%</span>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="text-slate-400 text-sm mb-4">Perfect for getting started</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-slate-400 mb-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '100 accounts',
                  '50 AI calling minutes',
                  '2 workspaces',
                  'Upto 3 team members',
                  'Standard access to platform'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://app.dros.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg font-semibold transition-all bg-slate-800 hover:bg-slate-700 text-white text-center"
              >
                Start Free Trial
              </a>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 to-slate-800/40 rounded-2xl p-8 border border-cyan-700/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-slate-950 px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-slate-400 text-sm mb-4">For growing agencies</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">${isAnnual ? '192' : '20'}</span>
                  <span className="text-slate-400 mb-1">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-cyan-400 mt-2">$16/month billed annually</p>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '500 accounts',
                  '100 AI calling minutes',
                  '5 workspaces',
                  'Workflow automation',
                  'Multi-channel engagement'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://app.dros.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg font-semibold transition-all bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-center"
              >
                Start Free Trial
              </a>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-slate-400 text-sm mb-4">For established agencies</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">${isAnnual ? '1,910' : '199'}</span>
                  <span className="text-slate-400 mb-1">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-cyan-400 mt-2">$159/month billed annually</p>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '5,000 accounts',
                  '1,000 AI calling minutes',
                  '25 workspaces',
                  'Priority support',
                  'All compliance tools'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://app.dros.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg font-semibold transition-all bg-slate-800 hover:bg-slate-700 text-white text-center"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-slate-700/60 hover:border-cyan-500/40 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <p className="text-slate-400 text-sm mb-4">For high-volume operations</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">${isAnnual ? '4,790' : '499'}</span>
                  <span className="text-slate-400 mb-1">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-cyan-400 mt-2">$399/month billed annually</p>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '20,000 accounts',
                  '4,000 AI calling minutes',
                  'Unlimited workspaces',
                  'Advanced analytics',
                  'Dedicated account manager',
                  '24/7 phone support',
                  'Custom integrations',
                  'API access'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://app.dros.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg font-semibold transition-all bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-center"
              >
                Start Free Trial
              </a>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 to-slate-800/40 rounded-2xl p-8 border border-cyan-700/50 relative hover:border-cyan-500/70 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-slate-950 px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                New Plan
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Business Plus</h3>
                <p className="text-slate-400 text-sm mb-4">For scaling enterprises</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">${isAnnual ? '19,190' : '1,999'}</span>
                  <span className="text-slate-400 mb-1">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-cyan-400 mt-2">$1,599/month billed annually</p>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited accounts',
                  '20,000 AI calling minutes',
                  'Unlimited workspaces',
                  'Advanced analytics',
                  'Dedicated account manager',
                  '24/7 phone support',
                  'Custom integrations',
                  'API access'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://app.dros.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg font-semibold transition-all bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-center"
              >
                Start Free Trial
              </a>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-slate-400 text-sm mb-4">For organizations with unique needs</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">Custom Pricing</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited accounts',
                  'Unlimited AI calling minutes',
                  'Unlimited workspaces',
                  'Dedicated account manager',
                  '24/7 phone support',
                  'Custom integrations',
                  'White-label options',
                  'SLA guarantee'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://dros.ai/book-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-lg font-semibold transition-all bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/untitled_logo_1_basic-file.png" alt="DROS Logo" className="w-8 h-8" />
                <span className="text-xl font-bold">DROS</span>
              </div>
              <p className="text-slate-400 text-sm">
                The operating system for modern debt collection agencies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="/#security" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <p className="text-slate-400 text-sm">&copy; 2026 DROS. All rights reserved.</p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <span>Built by the team behind</span>
                  <img src="/base_logo_transparent_background.png" alt="Vodex" className="h-12 opacity-60" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.youtube.com/@drosdotai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/dros" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
