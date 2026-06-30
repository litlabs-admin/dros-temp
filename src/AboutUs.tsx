import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X, Linkedin, Youtube } from 'lucide-react';

export default function AboutUs() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
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
              <Link to="/about" className="text-white font-semibold transition-colors">About</Link>
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
              <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 px-4 py-2 rounded-lg font-medium transition-all text-sm">Login</a>
              <a href="https://dros.ai/book-meeting" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-lg font-semibold transition-all hover:scale-105">Book a demo</a>
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
              <Link to="/about" className="block text-white font-semibold transition-colors">About</Link>
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
                    <Link to="/blogs" className="block text-slate-400 hover:text-white transition-colors py-1">Blogs</Link>
                    <Link to="/events" className="block text-slate-400 hover:text-white transition-colors py-1">Events</Link>
                    <Link to="/resources/videos" className="block text-slate-400 hover:text-white transition-colors py-1">Videos</Link>
                    <a href="https://app.dros.ai/api-docs" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-white transition-colors py-1">API Docs</a>
                    <Link to="/release-notes" className="block text-slate-400 hover:text-white transition-colors py-1">Release Notes</Link>
                    <Link to="/contact" className="block text-slate-400 hover:text-white transition-colors py-1">Contact Us</Link>
                  </div>
                )}
              </div>
              <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 px-6 py-2.5 rounded-lg font-medium transition-colors">Login</a>
              <a href="https://dros.ai/book-meeting" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-lg font-semibold transition-colors">Book a demo</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-2 mb-10 text-sm font-semibold text-cyan-400 tracking-wide uppercase">
            About DROS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Built for how collections
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              actually works now
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            DROS.ai is an AI-native operating layer built for modern collections, helping teams manage engagement, context, prioritization, and execution without adding more fragmentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://dros.ai/book-meeting" target="_blank" rel="noopener noreferrer" className="group bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2">
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="border border-slate-700 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-slate-900">
              Explore Product
            </a>
          </div>
        </div>
      </section>

      {/* Why We Built DROS */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Why We Built DROS</h2>
          <div className="space-y-6">
            <p className="text-2xl text-slate-300 leading-relaxed">
              Collections changed faster than the systems around it. Teams now manage more channels, more accounts, more pressure, and more operational decisions than older collections systems were ever built for. Yet the core tools have not evolved to match.
            </p>
            <p className="text-2xl text-slate-300 leading-relaxed">
              DROS was built to close that gap without replacing your core systems. It sits on top of what you already use: your CRM, dialers, payment platforms, and compliance tools, and connects them into one operating layer where context flows freely and decisions become intentional.
            </p>
          </div>
        </div>
      </section>

      {/* What Led to DROS - Timeline */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Led to DROS</h2>
            <p className="text-2xl text-slate-400">The evolution from problem to solution</p>
          </div>

          <div className="relative">
            {/* Center spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/80 via-cyan-500/40 to-transparent transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16">
              {[
                {
                  step: 'Step 01',
                  title: 'Voice revealed the first layer',
                  body: <>While building <a href="https://vodex.ai" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 underline underline-offset-2">Vodex.ai</a> for collections, voice AI began solving real communication problems inside collections. Teams were reaching more people, closing more calls, and handling more accounts at scale.</>,
                  side: 'left'
                },
                {
                  step: 'Step 02',
                  title: 'Operations exposed the bigger gap',
                  body: 'Teams were still switching systems, losing context, and making decisions without enough continuity. Voice solved one part of execution, but the workflow around it remained broken.',
                  side: 'right'
                },
                {
                  step: 'Step 03',
                  title: 'DROS became the operating layer',
                  body: 'A system built to connect engagement, workflow, prioritization, and execution. Not just communication. Not just automation. A complete operating layer for modern collections.',
                  side: 'left'
                }
              ].map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                  {item.side === 'left' ? (
                    <>
                      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all">
                        <div className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-3">{item.step}</div>
                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-slate-300 leading-relaxed text-xl">{item.body}</p>
                      </div>
                      <div className="flex justify-center md:justify-start">
                        <div className="relative flex items-center justify-center w-16 h-16">
                          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                          <div className="relative w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-lg shadow-cyan-500/50"></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center md:justify-end">
                        <div className="relative flex items-center justify-center w-16 h-16">
                          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                          <div className="relative w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-lg shadow-cyan-500/50"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all">
                        <div className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-3">{item.step}</div>
                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-slate-300 leading-relaxed text-xl">{item.body}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Changes When DROS Is in Place */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Changes When DROS Is in Place</h2>
            <p className="text-2xl text-slate-400">Four shifts that define a different operating standard</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: 'Context stays connected',
                body: 'History, intent, and timing carry forward across every interaction: from voice to SMS, from SMS to email, across every agent and every touchpoint.'
              },
              {
                number: '02',
                title: 'Channels work together',
                body: 'Voice, SMS, email, and digital outreach function as one coordinated flow instead of disconnected, isolated actions.'
              },
              {
                number: '03',
                title: 'Prioritization becomes smarter',
                body: 'Know who to focus on, when to act, and which channel is most likely to create a real response, driven by signals, not guesswork.'
              },
              {
                number: '04',
                title: 'Compliance sits inside execution',
                body: 'Guardrails, timing, and controls guide the workflow in real time. No separate compliance layer. No checking after the fact.'
              }
            ].map((card) => (
              <div key={card.number} className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 p-10 md:p-12 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/60 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
                <div className="text-7xl font-bold text-slate-800 mb-8 leading-none">{card.number}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 text-white">{card.title}</h3>
                <p className="text-slate-300 leading-relaxed text-xl md:text-2xl">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">What We Believe</h2>
          <div className="space-y-4">
            {[
              'Context should not disappear between channels',
              'Intelligence should sit inside execution',
              'Compliance should guide action in real time'
            ].map((belief, index) => (
              <div key={index} className="group flex items-start gap-6 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-cyan-500/40 transition-all">
                <div className="w-1 h-full min-h-[1.5rem] bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What DROS Is Built To Do */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">What DROS Is Built To Do</h2>
          <p className="text-2xl text-slate-300 leading-relaxed">
            DROS helps collection agencies, debt buyers, lenders, and in-house receivables teams connect voice, SMS, email, workflows, and account decisions into one operating layer. It bridges the gap between communication and operations so your entire team works from the same playbook, with the same context, the same priorities, and the same compliance guardrails.
          </p>
        </div>
      </section>

      {/* Built From Real Collections Work */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Built From Real Collections Work</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 md:p-12">
            <p className="text-2xl text-slate-300 leading-relaxed mb-6">
              DROS emerged from what became clear while building Vodex.ai for collections. As voice AI began handling real conversations across agencies and recovery teams, the same operational gaps kept surfacing behind the calls: fragmented systems, disconnected follow-up, repeated context loss, and too many decisions happening without enough visibility.
            </p>
            <p className="text-2xl text-slate-300 leading-relaxed mb-6">
              Voice solved one part of execution, but the broader workflow around it still remained broken. That is what led to DROS: a system built not just for communication, but for how collections work actually moves, keeping context flowing, keeping decisions visible, and keeping compliance baked into every action.
            </p>
            <p className="text-2xl text-slate-300 leading-relaxed">
              Every feature in DROS comes from a real problem we saw in the field. Nothing is theoretical. Everything exists because collections teams needed it.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                <img src="/Untitled_design_(15).png" alt="Anshul Shrivastava" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Anshul Shrivastava</h3>
              <p className="text-cyan-400 font-semibold text-lg mb-4">Co-founder & CEO</p>
              <a
                href="https://www.linkedin.com/in/anshul-shrivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-base font-medium">Connect on LinkedIn</span>
              </a>
              <p className="text-slate-300 leading-relaxed text-xl">
                Anshul has worked closely with collections operations through the evolution of AI-led engagement systems, helping shape products built around both communication and operational workflow challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Operate */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center hover:border-cyan-500/40 transition-all">
              <p className="text-slate-500 text-base uppercase tracking-widest mb-3">US Offices</p>
              <h3 className="text-3xl font-bold mb-3">United States</h3>
              <p className="text-cyan-400 font-semibold text-lg">1592 Union St #473</p>
              <p className="text-cyan-400 font-semibold text-lg">San Francisco, CA 94123</p>
              <p className="text-slate-400 mt-2">Delaware</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center hover:border-cyan-500/40 transition-all">
              <p className="text-slate-500 text-base uppercase tracking-widest mb-3">Dev Center</p>
              <h3 className="text-3xl font-bold mb-3">India</h3>
              <p className="text-cyan-400 font-semibold text-lg">Bengaluru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 bg-gradient-to-br from-cyan-950/30 to-blue-950/30 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The next standard in collections is
            <br />
            <span className="text-cyan-400">better execution</span>
          </h2>
          <p className="text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Context flowing freely. Decisions visible. Compliance automatic. Teams working from one source of truth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://dros.ai/book-meeting" target="_blank" rel="noopener noreferrer" className="group bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2">
              Talk to Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-slate-900">
              Explore the Platform
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/untitled_logo_1_basic-file.png" alt="DROS Logo" className="w-8 h-8" />
                <span className="text-xl font-bold">DROS</span>
              </div>
              <p className="text-slate-400 text-base">The operating system for modern debt collection agencies.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Product</h4>
              <ul className="space-y-2 text-slate-400 text-base">
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="/#security" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-slate-400 text-base">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-base">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                <p className="text-slate-400 text-base">&copy; 2026 DROS. All rights reserved.</p>
                <div className="flex items-center gap-2 text-slate-500 text-base">
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
