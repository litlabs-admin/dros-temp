import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Shield,
  Zap,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Lock,
  Activity,
  FileText,
  Youtube,
  Linkedin,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnnouncementBanner from './AnnouncementBanner';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img src="/untitled_logo_1_basic-file.png" alt="DROS Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold">DROS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-white transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-slate-300 hover:text-white transition-colors">
                Benefits
              </button>
              <button onClick={() => scrollToSection('security')} className="text-slate-300 hover:text-white transition-colors">
                Security
              </button>
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
                        to="/customer-stories"
                        className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        Customer Stories
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
              <button onClick={() => scrollToSection('features')} className="block text-slate-300 hover:text-white transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block text-slate-300 hover:text-white transition-colors">
                Benefits
              </button>
              <button onClick={() => scrollToSection('security')} className="block text-slate-300 hover:text-white transition-colors">
                Security
              </button>
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
                    <Link to="/blogs" className="block text-slate-400 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                    <Link to="/customer-stories" className="block text-slate-400 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Customer Stories</Link>
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

      {/* Announcement Banner */}
      <div className="fixed top-20 left-0 right-0 z-40">
        <AnnouncementBanner />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '40px' }}>
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Recover more.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Chase less.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              DROS is the AI agent collection teams wish they had. Reaching every debtor at the right moment, on the right channel, turning ignored outreach into real conversations that drive payments and close balances.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="group bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2">
                Get Started for Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://dros.ai/book-meeting" className="border border-slate-700 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-slate-900">
                Talk to the Founder
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
            {[
              { value: '45%', label: 'Higher Recovery Rate' },
              { value: '80%', label: 'Time Saved' },
              { value: '100%', label: 'Compliance' },
              { value: '60%', label: 'Cost Reduction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Credibility Banner */}
          <div className="mt-20 pt-12 border-t border-slate-800/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-500">
              <span className="text-lg">Built by the team behind</span>
              <a href="https://vodex.ai" target="_blank" rel="noopener noreferrer">
                <img
                  src="/base_logo_transparent_background.png"
                  alt="Vodex"
                  className="h-12 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <p className="mt-8 text-sm font-normal text-slate-400 text-center tracking-wide">
              Trusted by collection agencies, recovery teams, and debt buyers across the U.S.
            </p>
          </div>
        </div>
      </section>

      {/* Membership and Associations Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Membership and <span className="text-cyan-400">Associations</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://www.debtlink.com/united-states/dover/collection-software/dros-ai?from=badge"
              title="Find me on DebtLink"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-12 hover:border-cyan-500/50 transition-all hover:scale-105">
                <img
                  src="https://www.debtlink.com/images/Debtlink-Logo-Favicon-3.png"
                  alt="DebtLink"
                  className="w-auto mx-auto"
                  style={{ border: 'none', height: '124.8px' }}
                />
              </div>
            </a>
            <a href="https://rmaintl.org/" target="_blank" rel="noopener noreferrer">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-12 hover:border-cyan-500/50 transition-all hover:scale-105">
                <img
                  src="/RMAi-Logo-500.png"
                  alt="RMAi - Receivables Management Association International"
                  className="w-auto mx-auto"
                  style={{ height: '124.8px' }}
                />
              </div>
            </a>
            <a href="https://www.acainternational.org/" target="_blank" rel="noopener noreferrer">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-12 hover:border-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center">
                <img
                  src="/aca-international.svg"
                  alt="ACA International"
                  className="mx-auto"
                  style={{ height: '124.8px', width: '124.8px', objectFit: 'contain' }}
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-32 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-cyan-950/5 to-slate-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* Hero Block */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Reach Debtors on <span className="text-cyan-400">Autopilot</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-slate-300">
                Debt collection does not fail because collectors do not work hard.
              </p>
              <p className="text-xl md:text-2xl text-cyan-400 font-semibold">
                It fails because context is scattered across too many systems.
              </p>
            </div>
          </div>

          {/* Scattered Systems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {[
              { label: 'Calls', icon: <Activity className="w-6 h-6" /> },
              { label: 'Payments', icon: <DollarSign className="w-6 h-6" /> },
              { label: 'Messages', icon: <FileText className="w-6 h-6" /> },
              { label: 'Compliance', icon: <Shield className="w-6 h-6" /> },
              { label: 'Propensity Data', icon: <BarChart3 className="w-6 h-6" /> }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-red-900/30 rounded-xl p-6 text-center hover:border-red-700/50 transition-all"
              >
                <div className="text-red-400 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <p className="text-slate-300 font-medium">{item.label}</p>
                <p className="text-xs text-red-400 mt-2">Separate Tool</p>
              </div>
            ))}
          </div>

          {/* Solution Statement */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/30 mb-20 text-center">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              Dros brings all context into one place so humans and AI can work clearly, confidently, and compliantly.
            </p>
          </div>

          {/* What Is Context Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                What Do We Mean by <span className="text-cyan-400">"Context"?</span>
              </h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Context is the complete, up-to-date story of a consumer, available at the exact moment a decision is made.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <Activity className="w-6 h-6" />, text: 'Previous calls and conversations' },
                { icon: <FileText className="w-6 h-6" />, text: 'SMS, email, and digital interactions' },
                { icon: <DollarSign className="w-6 h-6" />, text: 'Payment history and real-time status' },
                { icon: <Clock className="w-6 h-6" />, text: 'Promises to pay, disputes, and hardship flags' },
                { icon: <Users className="w-6 h-6" />, text: 'Preferred channels and timing' },
                { icon: <Shield className="w-6 h-6" />, text: 'Compliance constraints' },
                { icon: <BarChart3 className="w-6 h-6" />, text: 'Propensity and behavioral signals' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Impact Statement */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-950 border border-red-900/30 rounded-2xl p-8 text-center">
                <X className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <p className="text-xl text-slate-300">
                  <span className="text-red-400 font-semibold">Without context</span><br />
                  every interaction is a guess
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-xl text-slate-300">
                  <span className="text-cyan-400 font-semibold">With context</span><br />
                  every interaction is intentional
                </p>
              </div>
            </div>
          </div>

          {/* The Problem Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                The Problem: <span className="text-cyan-400">Too Many Tools, Too Little Clarity</span>
              </h3>
              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-xl text-slate-300">
                  Most agencies use <span className="text-cyan-400 font-bold">5 to 8 systems</span> every day.
                </p>
                <p className="text-lg text-slate-400">
                  Each system works well on its own. Together, they create confusion.
                </p>
              </div>
            </div>

            {/* Three Column Impact Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-cyan-400">Collectors</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    'Switch screens constantly',
                    'Miss critical updates',
                    'Repeat outreach unintentionally',
                    'Work slower under pressure'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-cyan-400">Managers</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    'Lack real visibility',
                    'Cannot easily optimize performance',
                    'Struggle to scale AI safely'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-cyan-400">Customers</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    'Feel unheard',
                    'Receive disconnected messages',
                    'Lose trust quickly'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conclusion Statement */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <p className="text-2xl md:text-3xl text-slate-300 font-semibold mb-4">
                  This is not a people problem.
                </p>
                <p className="text-3xl md:text-4xl text-cyan-400 font-bold">
                  It is a context problem.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/5 to-slate-950"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Before DROS vs <span className="text-cyan-400">After DROS</span>
            </h2>
            <p className="text-xl text-slate-400">
              See how DROS transforms your agency's operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 border border-red-900/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-400">Before DROS</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Manual account sorting every morning',
                  'Collector judgment over data',
                  'Compliance fear and anxiety',
                  'Reactive, firefighting management',
                  'Broken PTP tracking',
                  "No insight into what's working",
                  'Hours wasted on admin tasks',
                  'Missed follow-ups and lost revenue'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">After DROS</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'AI-prioritized accounts every morning',
                  'Data-driven collection strategies',
                  'Real-time compliance monitoring',
                  'Predictive insights and forecasting',
                  'Automated PTP tracking and alerts',
                  'Full visibility into performance',
                  'Automated workflows save hours',
                  'Never miss a follow-up opportunity'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Shift: Less Is More */}
      <section id="features" className="py-32 relative bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                The Shift: <span className="text-cyan-400">Less Is More</span>
              </h2>
              <p className="text-2xl text-slate-300 mb-6 leading-relaxed">
                The future of collections is not adding more tools.
              </p>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                It is simplifying how information flows.
              </p>
              <p className="text-lg text-slate-400 mb-6">
                Dros is built on a mindset of simplicity:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Keep your existing systems',
                  'Remove the friction between them',
                  'Let context flow automatically'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                    <X className="w-8 h-8 text-red-400" />
                  </div>
                  <p className="text-slate-400 font-semibold mb-2">Less</p>
                  <p className="text-sm text-red-400">Switching</p>
                  <p className="text-sm text-red-400">Confusion</p>
                  <p className="text-sm text-red-400">Overhead</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <p className="text-slate-300 font-semibold mb-2">More</p>
                  <p className="text-sm text-cyan-400">Clarity</p>
                  <p className="text-sm text-cyan-400">Control</p>
                  <p className="text-sm text-cyan-400">Better Outcomes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Context Orchestration Layer */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Is a <span className="text-cyan-400">Context Orchestration Layer?</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl p-12">
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  A context orchestration layer sits above your existing stack.
                </p>
                <p className="text-lg text-slate-400 mb-6">
                  It does not replace your CRM, dialer, or payment system.
                  It connects them and keeps them in sync.
                </p>
                <p className="text-lg text-slate-400 mb-8">
                  Using modern MCP servers, Dros passes context from one tool to another without complex, brittle API integrations.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="bg-slate-950 rounded-xl px-4 py-2 border border-slate-700 text-slate-300 text-sm">CRM</div>
                    <div className="bg-slate-950 rounded-xl px-4 py-2 border border-slate-700 text-slate-300 text-sm">Payment Gateways</div>
                    <div className="bg-slate-950 rounded-xl px-4 py-2 border border-slate-700 text-slate-300 text-sm">Propensity Tools</div>
                  </div>
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="bg-slate-950 rounded-xl px-4 py-2 border border-slate-700 text-slate-300 text-sm">Compliance Tools</div>
                    <div className="bg-slate-950 rounded-xl px-4 py-2 border border-slate-700 text-slate-300 text-sm">SMS</div>
                    <div className="bg-slate-950 rounded-xl px-4 py-2 border border-slate-700 text-slate-300 text-sm">Email</div>
                    <div className="bg-slate-950 rounded-xl px-4 py-2 border border-slate-700 text-slate-300 text-sm">Other Channels</div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-cyan-400 rotate-90" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-cyan-500/20 rounded-xl px-8 py-4 border border-cyan-500/50 text-cyan-400 font-bold text-lg">DROS</div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-cyan-400 rotate-90" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl px-8 py-4 border border-cyan-500/50 text-center max-w-md">
                      <p className="text-cyan-400 font-bold">Single Context from multiple sources</p>
                      <p className="text-slate-300 text-sm mt-2">for Human and AI Agents</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">This means:</h3>
                <ul className="space-y-4">
                  {[
                    'Faster integrations',
                    'Lower engineering effort',
                    'Easier maintenance',
                    'Faster time to value'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <p className="text-lg text-cyan-400 font-semibold">
                    Context becomes shared, not siloed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* One Context for Humans and AI */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                One Context for <span className="text-cyan-400">Humans and AI</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Human collectors and AI agents must work from the same source of truth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Human collectors</h3>
                </div>
                <p className="text-lg text-slate-300">
                  See everything in one place
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold">AI agents</h3>
                </div>
                <p className="text-lg text-slate-300">
                  Act with full awareness
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center">
              <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <p className="text-2xl font-bold text-white mb-4">
                Decisions are consistent and explainable
              </p>
              <p className="text-lg text-slate-400 mb-6">
                AI no longer works in isolation. Humans no longer operate blind.
              </p>
              <p className="text-xl text-cyan-400 font-semibold">
                This is how AI becomes safe, effective, and compliant in collections.
              </p>
            </div>
          </div>

          {/* Built for Performance Optimization */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for <span className="text-cyan-400">Performance Optimization</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
                When context is unified:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Users className="w-6 h-6" />, text: 'Right accounts are contacted at the right time' },
                { icon: <Activity className="w-6 h-6" />, text: 'Right channel is used automatically' },
                { icon: <FileText className="w-6 h-6" />, text: 'Right tone is applied consistently' },
                { icon: <BarChart3 className="w-6 h-6" />, text: 'Right actions are prioritized' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all text-center"
                >
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">This directly improves:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: <BarChart3 className="w-8 h-8" />, label: 'Recovery rates' },
                  { icon: <Zap className="w-8 h-8" />, label: 'Agent productivity' },
                  { icon: <Shield className="w-8 h-8" />, label: 'Compliance confidence' },
                  { icon: <Users className="w-8 h-8" />, label: 'Customer experience' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-cyan-400 mb-3 flex justify-center">
                      {item.icon}
                    </div>
                    <p className="text-slate-300 font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                <p className="text-xl text-cyan-400 font-semibold">
                  Optimization becomes continuous, not manual.
                </p>
              </div>
            </div>
          </div>

          {/* Designed for Debt Buyers */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Designed for <span className="text-cyan-400">Debt Buyers and Collection Agencies</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-10">
                <h3 className="text-2xl font-bold mb-8">Dros integrates with:</h3>
                <div className="space-y-4">
                  {[
                    'Your preferred CRM',
                    'Payment systems',
                    'Text and email platforms',
                    'AI calling and voice agents',
                    'Propensity and analytics models'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-slate-900 rounded-xl p-4 border border-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl p-10 mb-6">
                  <p className="text-xl text-slate-300 mb-4 leading-relaxed">
                    All context is presented in one simple interface.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: <X className="w-6 h-6" />, text: 'No retraining teams on 10 tools', color: 'red' },
                    { icon: <X className="w-6 h-6" />, text: 'No ripping out existing systems', color: 'red' },
                    { icon: <X className="w-6 h-6" />, text: 'No long implementation cycles', color: 'red' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`text-${item.color}-400`}>{item.icon}</div>
                      <p className="text-lg text-slate-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Common Questions */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Common Questions We Hear <span className="text-cyan-400">(And Honest Answers)</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: 'Do we need to replace our current systems?',
                  answer: 'No. Dros works with what you already use.'
                },
                {
                  question: 'Will this be complex to integrate?',
                  answer: 'No. MCP-based orchestration avoids heavy custom integrations.'
                },
                {
                  question: 'Is this only for AI-heavy agencies?',
                  answer: 'No. It improves human-only operations immediately and enables AI when you are ready.'
                },
                {
                  question: 'Will my team resist another tool?',
                  answer: 'Collectors prefer fewer screens. Dros reduces their daily friction.'
                },
                {
                  question: 'How do we know this will improve performance?',
                  answer: 'When context is visible, decisions improve naturally. Performance follows clarity.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
                >
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">{item.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Context Is the Foundation */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl p-12 lg:p-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                Context Is Not a Feature. <span className="text-cyan-400">It Is the Foundation.</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 text-center leading-relaxed">
                Debt collection is becoming more regulated, more digital, and more customer-sensitive.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: <X className="w-8 h-8" />, text: 'Speed without context creates risk' },
                  { icon: <X className="w-8 h-8" />, text: 'Automation without context creates harm' },
                  { icon: <X className="w-8 h-8" />, text: 'Scale without context breaks trust' }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-950 border border-red-900/30 rounded-2xl p-6 text-center">
                    <div className="text-red-400 mb-3 flex justify-center">
                      {item.icon}
                    </div>
                    <p className="text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-slate-950 border border-cyan-500/50 rounded-2xl p-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                <p className="text-2xl font-bold text-white mb-4">
                  Dros gives you the context foundation required to grow safely and profitably.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  If you are serious about performance optimization, AI readiness, and long-term scalability, the conversation always starts with context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See DROS <span className="text-cyan-400">In Action</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A glimpse into the platform that's transforming how debt collection agencies operate.
              Every feature is designed to save time, increase recovery, and eliminate stress.
            </p>
          </div>

          <div className="space-y-24">
            {/* Dashboard Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-400">PERFORMANCE DASHBOARD</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Your Agency's Performance at a Glance
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  No more digging through spreadsheets or waiting for reports. See your entire operation in real-time:
                  outstanding balances, scheduled payments, collections, and team performance all on one screen.
                </p>
                <ul className="space-y-4">
                  {[
                    'Track every dollar scheduled and collected',
                    'Monitor daily, monthly, and all-time metrics',
                    'Identify trends before they become problems',
                    'Make data-driven decisions instantly'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all opacity-50"></div>
                  <img
                    src="/iscreen_shoter_2025-12-24_23.12.15.png"
                    alt="DROS Dashboard"
                    className="relative rounded-xl border border-slate-700 shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Account Workflow Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all opacity-50"></div>
                  <img
                    src="/iscreen_shoter_2025-12-24_23.12.34.png"
                    alt="DROS Account Workflow"
                    className="relative rounded-xl border border-slate-700 shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-400">ACCOUNT MANAGEMENT</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Complete Account History in One View
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Everything your collectors need to know about an account in one organized interface.
                  No more switching between systems or asking "what happened with this debtor?"
                </p>
                <ul className="space-y-4">
                  {[
                    'Full debtor contact and personal information',
                    'Complete payment history and current balance',
                    'All notes and activities in chronological order',
                    'Status tracking and priority scoring',
                    'One-click actions for calls, emails, and payments'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Engagement Tools Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-400">MULTI-CHANNEL ENGAGEMENT</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Reach Debtors on Every Channel
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Modern debt collection requires modern communication tools. Connect with debtors wherever they are,
                  all from one unified platform that keeps you compliant.
                </p>
                <ul className="space-y-4">
                  {[
                    'AI-powered calling with automatic dialing',
                    'Agent-led phone conversations with call recording',
                    'SMS campaigns and two-way text messaging',
                    'Email outreach with tracking and templates',
                    'AI chatbot and live chat support',
                    'Customer self-service payment portal'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all opacity-50"></div>
                  <img
                    src="/iscreen_shoter_2025-12-24_23.12.56.png"
                    alt="DROS Engagement Tools"
                    className="relative rounded-xl border border-slate-700 shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* AI Assistant Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all opacity-50"></div>
                  <img
                    src="/iscreen_shoter_2025-12-24_23.13.16.png"
                    alt="DROS AI Assistant"
                    className="relative rounded-xl border border-slate-700 shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-400">AI WORKSPACE ASSISTANT</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ask Anything About Your Business
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Forget digging through reports. Just ask DROS anything about your workspace and get instant answers.
                  It's like having a business analyst available 24/7.
                </p>
                <ul className="space-y-4">
                  {[
                    'Natural language queries about your data',
                    'Instant insights on collections and performance',
                    'Team productivity and account statistics',
                    'Identify trends and uncover opportunities',
                    'Quick answers without running complex reports'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA within showcase */}
          <div className="mt-20 text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h3 className="text-3xl font-bold mb-4">
              Experience the difference yourself
            </h3>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              See how DROS can transform your team's operations. Start your free trial today, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="group bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://dros.ai/book-meeting" className="border border-slate-700 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-slate-900">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Value Section */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-cyan-400">Every Role</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              DROS helps everyone in your agency work better, from collectors to owners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                role: 'Agency Owner',
                benefits: [
                  'Higher recovery rates',
                  'Lower operating costs',
                  'Predictable revenue growth',
                  'Scale without chaos',
                  'Work ON, not IN your business'
                ]
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                role: 'Operations Manager',
                benefits: [
                  'Complete visibility',
                  'Real-time performance tracking',
                  'Instant compliance monitoring',
                  'Data-driven decisions',
                  'No more firefighting'
                ]
              },
              {
                icon: <Users className="w-8 h-8" />,
                role: 'Collection Manager',
                benefits: [
                  'Monitor team performance',
                  'Identify training needs',
                  'Track recovery metrics',
                  'Optimize workflows',
                  'Coach with data, not gut feel'
                ]
              },
              {
                icon: <Activity className="w-8 h-8" />,
                role: 'Collector',
                benefits: [
                  'Clear daily priorities',
                  'Less admin work',
                  'Fewer compliance mistakes',
                  'Hit targets consistently',
                  'Focus on conversations, not paperwork'
                ]
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-cyan-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.role}</h3>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Recover More Debt,
                <br />
                <span className="text-cyan-400">Work Less Hours</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                DROS uses smart automation to handle the busy work, so your collectors
                can focus on conversations that actually lead to payments.
              </p>
              <div className="space-y-4">
                {[
                  'AI tells collectors who to call first',
                  'Automatic payment plan suggestions',
                  'Track every call, email, and SMS in one place',
                  'Predict which accounts will pay',
                  'Real-time compliance alerts'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-12 border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="bg-slate-950 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-slate-400">Recovery Rate</span>
                      <Activity className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-cyan-400">+45.3%</div>
                  </div>
                  <div className="bg-slate-950 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-slate-400">Average Collection Time</span>
                      <Clock className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-cyan-400">-62 Days</div>
                  </div>
                  <div className="bg-slate-950 rounded-xl p-6 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-slate-400">Operating Costs</span>
                      <DollarSign className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-cyan-400">-38%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Agencies <span className="text-cyan-400">Like Yours</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See how collection agencies are transforming their operations with DROS.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "DROS transformed how we work. Our recovery rate jumped 52% in the first quarter. The AI prioritization alone paid for itself in the first month.",
                author: "Michael Chen",
                title: "Owner",
                agency: "18-agent agency, California"
              },
              {
                quote: "We were drowning in spreadsheets and compliance anxiety. DROS gave us real-time visibility and peace of mind. Our team is now 3x more productive.",
                author: "Sarah Williams",
                title: "Operations Director",
                agency: "35-agent agency, Texas"
              },
              {
                quote: "As a small agency, we couldn't afford enterprise software. DROS gave us enterprise features at a price we could handle. Best decision we made.",
                author: "David Martinez",
                title: "Founder, Apex Collections",
                agency: "12-agent agency, Florida"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="w-5 h-5 text-cyan-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-800 pt-6">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                  <p className="text-sm text-cyan-400 mt-1">{testimonial.agency}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Real Results: 25-Agent Agency Case Study
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">+58%</div>
                  <div className="text-slate-300">Recovery Rate Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">-72%</div>
                  <div className="text-slate-300">Admin Time Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$89K</div>
                  <div className="text-slate-300">Added Monthly Revenue</div>
                </div>
              </div>
              <p className="text-slate-400 mt-8">
                Mid-sized agency in Ohio switched from spreadsheets to DROS in January 2024.
                Within 6 months, they added 8 more collectors and doubled their portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Getting Started is <span className="text-cyan-400">Easy</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We know switching systems feels risky. That's why we've made onboarding painless.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                step: '1',
                title: 'Data Import',
                description: "We help you import your accounts, no matter what system you're coming from. CSV, database, or manual - we handle it.",
                timeline: 'Day 1-2'
              },
              {
                step: '2',
                title: 'System Setup',
                description: "We configure DROS for your agency's specific workflows, compliance rules, and team structure.",
                timeline: 'Day 3-4'
              },
              {
                step: '3',
                title: 'Team Training',
                description: 'Live training sessions for your collectors and managers. Everyone learns the system hands-on.',
                timeline: 'Day 5-7'
              },
              {
                step: '4',
                title: 'Go Live',
                description: "Launch with confidence. We're available for support as your team gets comfortable with DROS.",
                timeline: 'Week 2'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-2xl font-bold text-cyan-400 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{item.description}</p>
                  <div className="text-sm text-cyan-400 font-semibold">{item.timeline}</div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-800"></div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Dedicated Onboarding Specialist</h4>
                <p className="text-slate-400 text-sm">Your own expert to guide you every step</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Free Data Migration</h4>
                <p className="text-slate-400 text-sm">We handle the technical heavy lifting</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Ongoing Support</h4>
                <p className="text-slate-400 text-sm">Help is always just a message away</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-6">
              <Lock className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sleep Better with <span className="text-cyan-400">Complete Security</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Stop worrying about compliance violations, data breaches, and audits. DROS keeps you safe automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Compliance Peace of Mind</h3>
              <ul className="space-y-4">
                {[
                  'Every action logged and audit-ready',
                  'Automatic FDCPA and TCPA rule enforcement',
                  'Real-time compliance alerts prevent violations',
                  'No more relying on collector memory',
                  'Reduce mistakes without micromanaging',
                  'Built-in do-not-call and cease & desist tracking'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">
              <Lock className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Bank-Level Security</h3>
              <ul className="space-y-4">
                {[
                  'SOC 2 Type II certified and audited',
                  'AES-256 encryption for all data',
                  'Role-based access controls',
                  'Regular third-party security assessments',
                  'Automatic backups and disaster recovery',
                  '99.9% uptime SLA guarantee'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30 text-center">
            <h3 className="text-2xl font-bold mb-4">Focus on Collections, Not Compliance Anxiety</h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              DROS handles the complex compliance rules automatically, so you can focus on what matters -
              recovering debt and growing your agency with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="text-cyan-400">Debt Collection?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Join hundreds of teams already using DROS to maximize recovery rates and streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.dros.ai" target="_blank" rel="noopener noreferrer" className="group bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2">
              Start Free Trial Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://dros.ai/book-meeting" className="text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book a Personalized Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
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
                  <img
                    src="/base_logo_transparent_background.png"
                    alt="Vodex"
                    className="h-12 opacity-60"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@drosdotai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
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

export default App;
