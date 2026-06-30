import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Calendar, MapPin, Menu, X } from 'lucide-react';

interface Event {
  title: string;
  location: string;
  date: string;
  slug: string;
  description: string;
}

const upcomingEvents: Event[] = [
  {
    title: 'ACA Annual Convention 2026',
    location: 'Orlando, FL',
    date: 'Jul 22 - 24, 2026',
    slug: '/events/2026/aca-orlando',
    description: 'Join us at the ACA Annual Convention in Orlando to explore how DROS and Vodex are revolutionizing debt collection with cutting-edge AI technology and compliant voice automation.'
  }
];

const pastEvents: Event[] = [
  {
    title: 'ARMTech Dallas 2026',
    location: 'Dallas, TX',
    date: 'Jan 21 - 23, 2026',
    slug: '/events/2026/armtech-dallas',
    description: 'Join us at ARMTech Dallas to discover how DROS and Vodex are transforming debt collection with AI-powered workflows and voice automation.'
  },
  {
    title: 'RMAI Las Vegas 2026',
    location: 'Las Vegas, NV',
    date: 'Feb 9 - 12, 2026',
    slug: '/events/2026/rmai-las-vegas',
    description: 'Meet the DROS team at RMAI Las Vegas. Learn about our AI-native collections CRM and compliant Voice AI solutions for modern agencies.'
  }
];

export default function EventsListingPage() {
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

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <header className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Events</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Meet us at industry conferences and discover how DROS is transforming debt collection
            </p>
          </header>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Upcoming <span className="text-cyan-400">Events</span>
            </h2>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <article
                  key={event.slug}
                  className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <Link to={event.slug} className="group">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-6 mb-4">
                          <div className="flex items-center gap-2 text-slate-400">
                            <MapPin className="w-5 h-5" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-5 h-5" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                        <p className="text-lg text-slate-400 leading-relaxed mb-4">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <span className="text-cyan-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Past <span className="text-slate-500">Events</span>
            </h2>
            <div className="space-y-8">
              {pastEvents.map((event) => (
                <article
                  key={event.slug}
                  className="border border-slate-800 bg-slate-900/30 backdrop-blur-sm rounded-xl p-8 opacity-75 hover:opacity-100 transition-all"
                >
                  <Link to={event.slug} className="group">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-6 mb-4">
                          <div className="flex items-center gap-2 text-slate-500">
                            <MapPin className="w-5 h-5" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500">
                            <Calendar className="w-5 h-5" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                        <p className="text-lg text-slate-500 leading-relaxed mb-4">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <span className="text-slate-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        View details
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

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
