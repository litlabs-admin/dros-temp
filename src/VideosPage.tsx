import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X, Play } from 'lucide-react';

const PAGE_SIZE = 6;

type VideoCategory = 'tutorial' | 'customer-story' | 'conversation';

interface Video {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  tags: string[];
  addedAt: string;
}

type FilterTab = 'all' | VideoCategory;

const CATEGORY_LABELS: Record<VideoCategory, string> = {
  tutorial: 'Product Tutorial',
  'customer-story': 'Customer Story',
  conversation: 'Conversation',
};

const CATEGORY_COLORS: Record<VideoCategory, string> = {
  tutorial: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
  'customer-story': 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
  conversation: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
};

const videos: Video[] = [
  {
    id: 'URv0f7bH5Ic',
    title: 'How Greystone & Associates Streamlined Daily Collections with DROS',
    description: 'See how Greystone & Associates transformed their daily collections workflow using DROS, cutting manual effort, improving recovery rates, and scaling operations with AI-powered automation.',
    category: 'customer-story',
    tags: ['Customer Story', 'Collections', 'Automation'],
    addedAt: '2026-04-16',
  },
  {
    id: 'vrX1bM7XHb8',
    title: 'Getting Started with DROS | Account Creation and Setup',
    description: 'Learn how to create your DROS account and get started with the platform',
    category: 'tutorial',
    tags: ['Product Demo', 'Automation', 'Collections'],
    addedAt: '2025-03-01',
  },
  {
    id: 'OLFiRuaVGRk',
    title: 'DROS Platform Overview',
    description: 'A comprehensive overview of the DROS platform features and capabilities',
    category: 'tutorial',
    tags: ['Product Demo', 'AI Voice Agent', 'Debt Recovery'],
    addedAt: '2025-02-15',
  },
  {
    id: 'RTzOMKGl-fE',
    title: 'Advanced Features Tutorial',
    description: 'Explore advanced features and workflows in DROS',
    category: 'tutorial',
    tags: ['Automation', 'Compliance', 'Collections'],
    addedAt: '2025-01-20',
  },
  {
    id: '15c13oHQTeI',
    title: 'AI Context Orchestration for Collections | Anshul Shrivastava, Vodex.ai | Ep. 280',
    description: 'Anshul Shrivastava from Vodex.ai joins Receivables Info to discuss how AI context orchestration is transforming the collections industry, enabling smarter, more personalized outreach at scale.',
    category: 'conversation',
    tags: ['Receivables Info', 'AI Orchestration', 'Collections'],
    addedAt: '2025-04-10',
  },
];

const TABS: { id: FilterTab; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'tutorial', label: 'Product Tutorials' },
  { id: 'customer-story', label: 'Customer Stories' },
  { id: 'conversation', label: 'Conversations' },
];

const HIGHLIGHT_VIDEO_ID = 'URv0f7bH5Ic';

function VideosPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [page, setPage] = useState(1);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const location = useLocation();
  const tabsRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#customer-stories') {
      setActiveTab('customer-story');
      setPage(1);
      setHighlightedId(HIGHLIGHT_VIDEO_ID);
      setTimeout(() => {
        if (tabsRef.current) {
          tabsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
          if (highlightRef.current) {
            highlightRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 400);
        setTimeout(() => setHighlightedId(null), 2800);
      }, 100);
    }
  }, [location.hash]);

  const sorted = [...videos].sort((a, b) => b.addedAt.localeCompare(a.addedAt));
  const filtered = activeTab === 'all' ? sorted : sorted.filter(v => v.category === activeTab);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleTabChange(tab: FilterTab) {
    setActiveTab(tab);
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/untitled_logo_1_basic-file.png" alt="DROS Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold">DROS</span>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 text-cyan-400 text-sm font-medium mb-6">
            <Play className="w-3.5 h-3.5 fill-current" />
            Video Library
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Resources</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Tutorials, customer stories, and conversations to help you get the most out of DROS.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Category Tabs */}
          <div id="customer-stories" ref={tabsRef} className="mb-12 flex flex-wrap gap-3 justify-center scroll-mt-32">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium text-base transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                }`}
              >
                {tab.label}
                <span className={`ml-2 text-sm font-normal ${
                  activeTab === tab.id ? 'opacity-70' : 'text-slate-500'
                }`}>
                  ({tab.id === 'all' ? videos.length : videos.filter(v => v.category === tab.id).length})
                </span>
              </button>
            ))}
          </div>

          {/* Video Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-slate-500">
              <Play className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No videos in this category yet.</p>
              <p className="text-sm mt-1">Check back soon.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map(video => (
                  <div
                    key={video.id}
                    ref={video.id === HIGHLIGHT_VIDEO_ID && highlightedId === video.id ? highlightRef : null}
                    className={`bg-slate-900 border rounded-xl overflow-hidden transition-all duration-300 group flex flex-col ${
                      highlightedId === video.id
                        ? 'border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-500/20 scale-[1.01]'
                        : 'border-slate-800 hover:border-cyan-500/40'
                    }`}
                  >
                    <div className="relative aspect-video bg-slate-950">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-3">
                        <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[video.category]}`}>
                          {CATEGORY_LABELS[video.category]}
                        </span>
                      </div>
                      <h3 className="text-base font-bold mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                        {video.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 flex-1">
                        {video.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {video.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                          page === p
                            ? 'bg-cyan-500 text-slate-950'
                            : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-slate-400 mb-8">
              Book a meeting to see how DROS can transform your collections workflow
            </p>
            <a
              href="https://dros.ai/book-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              Book a Meeting
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
              <p className="text-slate-400 text-sm">The operating system for modern debt collection agencies.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">DROS Platform</Link></li>
                <li><a href="https://vodex.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vodex Voice AI</a></li>
                <li><a href="https://dros.ai/book-meeting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Demo</a></li>
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
            <p>&copy; 2024 DROS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default VideosPage;
