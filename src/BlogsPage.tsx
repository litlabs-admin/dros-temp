import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ArrowLeft, Menu, X, ExternalLink } from 'lucide-react';

type Category = 'All' | 'Collections Strategy' | 'Context & Omnichannel' | 'Compliance & Operations' | 'Technology & Integrations' | 'Field Insights';

interface BlogPost {
  title: string;
  category: Category;
  categories?: Category[];
  summary: string;
  slug?: string;
  externalUrl?: string;
  readTime: string;
  badge?: 'Featured' | 'External' | 'New';
  externalSource?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'What Thousands of Debt Collection Calls Taught Us About Right Party Contact',
    category: 'Field Insights',
    summary: 'Real learnings from the field on why RPC is stuck at 26% and how to fix it',
    slug: '/blogs/right-party-contact-rpc-learnings-from-the-field',
    readTime: '15 min read',
    badge: 'Featured'
  },
  {
    title: 'How AI Voice Agents Handle "Don\'t Call Me Again": DNC, Disputes, and Compliance in 2026',
    category: 'Compliance & Operations',
    summary: 'What actually happens in your systems when a consumer says "don\'t call me again," disputes the debt, or starts talking about lawyers — and how DROS wires those rules into every AI call.',
    slug: '/blogs/ai-voice-agents-dnc-disputes-compliance-2026',
    readTime: '12 min read',
    badge: 'New'
  },
  {
    title: 'Why Collections Integrations Break Down With Legacy Systems - and What to Fix First',
    category: 'Technology & Integrations',
    summary: 'Why collections integrations break with legacy systems, how tool sprawl hurts RPC and compliance, and what to fix in your stack before adding AI agents.',
    slug: '/blogs/collections-integrations-legacy-systems',
    readTime: '14 min read'
  },
  {
    title: 'How to Integrate AI Agents Into Collections Without Blowing Up Compliance',
    category: 'Collections Strategy',
    categories: ['Collections Strategy', 'Compliance & Operations', 'Technology & Integrations'],
    summary: 'A practical guide for agencies with 5–200 collectors on deploying AI agents safely, covering workflow design, compliance guardrails, and how to measure success without increasing regulatory exposure.',
    slug: '/blogs/integrate-ai-agents-collections-compliance',
    readTime: '18 min read'
  },
  {
    title: 'Context-Aware AI Operating Models for Collections',
    category: 'Context & Omnichannel',
    summary: 'How modern collections platforms can orchestrate human and AI agents with shared context',
    externalUrl: 'https://receivablesinfo.com/2026/03/19/context-aware-ai-operating-models-collections/',
    readTime: '10 min read',
    badge: 'External',
    externalSource: 'Receivables Info'
  },
  {
    title: 'Why Debt Collection Needs Fewer Systems, Not More',
    category: 'Context & Omnichannel',
    summary: 'The case for context orchestration across fragmented collection workflows',
    slug: '/blogs/why-context-not-more-tools-is-the-future-of-debt-collection',
    readTime: '8 min read'
  },
  {
    title: 'Digital-First Collections for Small Agencies: What\'s Actually Changing in 2026',
    category: 'Collections Strategy',
    summary: 'A practical guide to adopting AI and automation for small agencies using low-risk compliant pilots',
    slug: '/blogs/digital-first-collections-small-agencies-2026',
    readTime: '12 min read'
  }
];

const categories: Category[] = [
  'All',
  'Collections Strategy',
  'Context & Omnichannel',
  'Compliance & Operations',
  'Technology & Integrations',
  'Field Insights'
];

const POSTS_PER_PAGE = 4;

export default function BlogsPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post =>
        post.category === selectedCategory ||
        (post.categories && post.categories.includes(selectedCategory))
      );

  const featuredPost = blogPosts.find(post => post.badge === 'Featured');
  const shouldShowFeatured = featuredPost && filteredPosts.includes(featuredPost);
  const allRegularPosts = filteredPosts.filter(post => post !== featuredPost);
  const totalPages = Math.ceil(allRegularPosts.length / POSTS_PER_PAGE);
  const regularPosts = allRegularPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <header className="mb-14 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              DROS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Blog</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Insights on modern debt collection, AI, and context orchestration
            </p>
          </header>

          {/* Category Tabs */}
          <div className="mb-14 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-lg font-medium text-base transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {shouldShowFeatured && (
            <article className="mb-10 border border-cyan-900/60 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-10 md:p-14 hover:border-cyan-500/70 transition-all hover:shadow-xl hover:shadow-cyan-500/15 ring-1 ring-inset ring-white/5 shadow-md shadow-black/30">
              {featuredPost.badge && (
                <div className="mb-5">
                  <span className="inline-block px-4 py-1.5 bg-cyan-500 text-slate-950 text-sm font-semibold rounded-lg">
                    {featuredPost.badge}
                  </span>
                </div>
              )}
              {featuredPost.externalUrl ? (
                <a
                  href={featuredPost.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-5 group-hover:text-cyan-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <div className="flex items-center gap-3 mb-6 text-base">
                    <span className="text-cyan-400 font-medium">{featuredPost.category}</span>
                    {featuredPost.externalSource && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">Published on {featuredPost.externalSource}</span>
                      </>
                    )}
                  </div>
                  <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                    {featuredPost.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-base text-slate-500">
                      {featuredPost.readTime}
                    </span>
                    <span className="text-cyan-400 font-medium text-lg flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read article
                      <ExternalLink className="w-5 h-5" />
                    </span>
                  </div>
                </a>
              ) : (
                <Link to={featuredPost.slug!} className="group block">
                  <h2 className="text-3xl md:text-5xl font-bold mb-5 group-hover:text-cyan-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <div className="flex items-center gap-3 mb-6 text-base">
                    <span className="text-cyan-400 font-medium">{featuredPost.category}</span>
                  </div>
                  <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                    {featuredPost.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-base text-slate-500">
                      {featuredPost.readTime}
                    </span>
                    <span className="text-cyan-400 font-medium text-lg flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read more
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              )}
            </article>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.slug || post.externalUrl || index}
                className="relative border border-cyan-900/60 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 hover:border-cyan-500/70 transition-all hover:shadow-xl hover:shadow-cyan-500/15 flex flex-col ring-1 ring-inset ring-white/5"
              >
                {post.badge && (
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1.5 text-sm font-semibold rounded-lg ${
                      post.badge === 'Featured' ? 'bg-cyan-500 text-slate-950' :
                      post.badge === 'External' ? 'bg-blue-500 text-white' :
                      'bg-green-500 text-slate-950'
                    }`}>
                      {post.badge}
                    </span>
                  </div>
                )}
                {post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col flex-1"
                  >
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-base">
                      <span className="text-cyan-400 font-medium">{post.category}</span>
                      {post.externalSource && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-500 text-sm">Published on {post.externalSource}</span>
                        </>
                      )}
                    </div>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed flex-1">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-slate-800">
                      <span className="text-sm text-slate-500">
                        {post.readTime}
                      </span>
                      <span className="text-cyan-400 text-base font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read article
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                ) : (
                  <Link to={post.slug!} className="group flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="mb-4 text-base">
                      <span className="text-cyan-400 font-medium">{post.category}</span>
                    </div>
                    <p className="text-slate-300 text-lg mb-6 leading-relaxed flex-1">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-slate-800">
                      <span className="text-sm text-slate-500">
                        {post.readTime}
                      </span>
                      <span className="text-cyan-400 text-base font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                )}
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-6">
              <button
                onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 font-medium text-base transition-all hover:border-cyan-500/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-700 disabled:hover:text-slate-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-10 h-10 rounded-lg font-medium text-base transition-all ${
                      page === currentPage
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-900 border border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 font-medium text-base transition-all hover:border-cyan-500/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-700 disabled:hover:text-slate-300"
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
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
