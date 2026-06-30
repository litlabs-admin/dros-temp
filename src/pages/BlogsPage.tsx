export const route = '/blogs';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from './Footer';
import { ArrowRight, ArrowLeft, X, ExternalLink, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';

type Category = 'All' | 'Collections Strategy & Performance' | 'Context & Omnichannel' | 'Compliance & Operations' | 'Technology & Integrations' | 'Field Insights';

interface BlogPost {
  title: string;
  category: Category;
  categories?: Category[];
  tags?: string[];
  summary: string;
  slug?: string;
  externalUrl?: string;
  readTime: string;
  badge?: 'Featured' | 'External' | 'New';
  externalSource?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Choosing an AI Collections Operating Layer: What to Look For (and Why It Matters More Than Any Bot)',
    category: 'Technology & Integrations',
    tags: ['Technology & Integrations', 'Collections Strategy & Performance', 'Compliance & Operations'],
    summary: 'Learn how to evaluate an AI collections operating layer that orchestrates voice bots, agents, channels, and compliance rules across your entire portfolio.',
    slug: '/blogs/ai-collections-operating-layer',
    readTime: '14 min read',
    badge: 'New',
  },
  {
    title: 'Human-in-the-Loop Debt Collection: When AI Should Hand Off to Agents',
    category: 'Collections Strategy & Performance',
    tags: ['Collections Strategy & Performance', 'AI Voice Agents', 'Compliance & Operations'],
    summary: 'Learn when AI agents should escalate to human collectors, how to design clean handoffs, and how DROS keeps AI and human workflows coordinated in debt collection.',
    slug: '/blogs/human-in-the-loop-collections',
    readTime: '14 min read',
    badge: 'New',
  },
  {
    title: 'How to Deploy AI Agents Across the Debt Collection Lifecycle',
    category: 'Collections Strategy & Performance',
    tags: ['Collections Strategy & Performance', 'AI Voice Agents', 'Compliance & Operations', 'First-Party', 'Third-Party'],
    summary: 'A practical playbook for deploying AI agents across voice, SMS, and self-service channels while staying compliant with Reg F, FDCPA, and client mandates.',
    slug: '/blogs/ai-agents-debt-collection-deployment',
    readTime: '18 min read',
    badge: 'Featured',
  },
  {
    title: 'What Thousands of Debt Collection Calls Taught Us About Right Party Contact',
    category: 'Field Insights',
    tags: ['Field Insights', 'Right Party Contact', 'Collections Strategy & Performance'],
    summary: 'Real learnings from the field on why RPC is stuck at 26% and how to fix it',
    slug: '/blogs/right-party-contact-rpc-learnings-from-the-field',
    readTime: '15 min read',
  },
  {
    title: 'Omnichannel AI in Debt Collection: Orchestrating Voice, SMS, Email, and Self-Service',
    category: 'Context & Omnichannel',
    categories: ['Context & Omnichannel', 'Collections Strategy & Performance', 'Compliance & Operations'],
    tags: ['Context & Omnichannel', 'Collections Strategy & Performance', 'AI Voice Agents', 'Compliance & Operations'],
    summary: 'How to design and orchestrate omnichannel AI in debt collection across voice, SMS, email, and self-service portals - with compliance and DROS built in.',
    slug: '/blogs/omnichannel-ai-debt-collection',
    readTime: '14 min read',
  },
  {
    title: 'How AI Voice Agents Handle Debt Disputes Without Creating Compliance Risk',
    category: 'Compliance & Operations',
    tags: ['Compliance & Operations', 'AI Voice Agents', 'FDCPA', 'Disputes'],
    summary: 'Learn how AI voice agents should handle debt disputes, when to escalate to a human, and how DROS supports compliant dispute workflows end to end.',
    slug: '/blogs/ai-voice-agents-debt-disputes-compliance',
    readTime: '12 min read',
  },
  {
    title: 'How AI Voice Agents Handle "Don\'t Call Me Again": DNC, Disputes, and Compliance in 2026',
    category: 'Compliance & Operations',
    tags: ['Compliance & Operations', 'AI Voice Agents', 'DNC', 'Technology & Integrations'],
    summary: 'What actually happens in your systems when a consumer says "don\'t call me again," disputes the debt, or starts talking about lawyers  - and how DROS wires those rules into every AI call.',
    slug: '/blogs/ai-voice-agents-dnc-disputes-compliance-2026',
    readTime: '12 min read',
  },
  {
    title: 'How Reg F Call Limits and Call Hours Work in AI Debt Collection',
    category: 'Compliance & Operations',
    tags: ['Compliance & Operations', 'Reg F', 'AI Voice Agents', 'FDCPA'],
    summary: 'Understand FDCPA call-hour rules, Reg F\'s 7-in-7 limit, and how AI collections software can apply them consistently with built-in settings.',
    slug: '/blog/reg-f-call-limits-ai-debt-collection',
    readTime: '10 min read',
  },
  {
    title: 'Why Collections Integrations Break Down With Legacy Systems - and What to Fix First',
    category: 'Technology & Integrations',
    tags: ['Technology & Integrations', 'Legacy Systems', 'Collections Strategy & Performance'],
    summary: 'Why collections integrations break with legacy systems, how tool sprawl hurts RPC and compliance, and what to fix in your stack before adding AI agents.',
    slug: '/blogs/collections-integrations-legacy-systems',
    readTime: '14 min read'
  },
  {
    title: 'How to Integrate AI Agents Into Collections Without Blowing Up Compliance',
    category: 'Collections Strategy & Performance',
    categories: ['Collections Strategy & Performance', 'Compliance & Operations', 'Technology & Integrations'],
    tags: ['Collections Strategy & Performance', 'Compliance & Operations', 'Technology & Integrations', 'AI Agents'],
    summary: 'A practical guide for agencies with 5–200 collectors on deploying AI agents safely, covering workflow design, compliance guardrails, and how to measure success without increasing regulatory exposure.',
    slug: '/blogs/integrate-ai-agents-collections-compliance',
    readTime: '18 min read'
  },
  {
    title: 'Context-Aware AI Operating Models for Collections',
    category: 'Context & Omnichannel',
    tags: ['Context & Omnichannel', 'AI Agents', 'Collections Strategy & Performance'],
    summary: 'How modern collections platforms can orchestrate human and AI agents with shared context',
    externalUrl: 'https://receivablesinfo.com/2026/03/19/context-aware-ai-operating-models-collections/',
    readTime: '10 min read',
    badge: 'External',
    externalSource: 'Receivables Info'
  },
  {
    title: 'Why Debt Collection Needs Fewer Systems, Not More',
    category: 'Context & Omnichannel',
    tags: ['Context & Omnichannel', 'Collections Strategy & Performance', 'Technology & Integrations'],
    summary: 'The case for context orchestration across fragmented collection workflows',
    slug: '/blogs/why-context-not-more-tools-is-the-future-of-debt-collection',
    readTime: '8 min read'
  },
  {
    title: 'Digital-First Collections for Small Agencies: What\'s Actually Changing in 2026',
    category: 'Collections Strategy & Performance',
    tags: ['Collections Strategy & Performance', 'Digital-First', 'AI Agents', 'Field Insights'],
    summary: 'A practical guide to adopting AI and automation for small agencies using low-risk compliant pilots',
    slug: '/blogs/digital-first-collections-small-agencies-2026',
    readTime: '12 min read'
  }
];

const categories: Category[] = [
  'All',
  'Collections Strategy & Performance',
  'Context & Omnichannel',
  'Compliance & Operations',
  'Technology & Integrations',
  'Field Insights'
];

const POSTS_PER_PAGE = 4;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const param = searchParams.get('category');
    if (!param) { setSelectedCategory('All'); return; }
    const match = categories.find(c => c.toLowerCase() === param.toLowerCase());
    setSelectedCategory((match as Category) ?? 'All');
    setCurrentPage(1);
  }, [searchParams]);

  const matchesSearch = (post: BlogPost, query: string) => {
    const q = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.summary.toLowerCase().includes(q) ||
      (post.tags ?? []).some(t => t.toLowerCase().includes(q)) ||
      post.category.toLowerCase().includes(q)
    );
  };

  const suggestions = searchQuery.trim().length > 1
    ? blogPosts.filter(p => matchesSearch(p, searchQuery.trim())).slice(0, 6)
    : [];

  const categoryFilteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post =>
        post.category === selectedCategory ||
        (post.categories && post.categories.includes(selectedCategory))
      );

  const filteredPosts = isSearchActive && searchQuery.trim()
    ? blogPosts.filter(p => matchesSearch(p, searchQuery.trim()))
    : categoryFilteredPosts;

  const featuredPost = blogPosts.find(post => post.badge === 'Featured');
  const shouldShowFeatured = !isSearchActive && featuredPost && filteredPosts.includes(featuredPost);
  const allRegularPosts = isSearchActive
    ? filteredPosts
    : filteredPosts.filter(post => post !== featuredPost);
  const totalPages = Math.ceil(allRegularPosts.length / POSTS_PER_PAGE);
  const regularPosts = allRegularPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setIsSearchActive(false);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchActive(true);
    setSelectedCategory('All');
    setCurrentPage(1);
    setShowSuggestions(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
    if (!e.target.value.trim()) {
      setIsSearchActive(false);
    }
  };

  const handleSearchClear = () => {
    setSearchQuery('');
    setIsSearchActive(false);
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>DROS Blog | AI, Collections, and Context Orchestration</title>
        <meta name="description" content="Insights on modern debt collection, AI voice agents, compliance, and context orchestration for collections teams." />
        <meta property="og:title" content="DROS Blog | AI, Collections, and Context Orchestration" />
        <meta property="og:description" content="Insights on modern debt collection, AI voice agents, compliance, and context orchestration for collections teams." />
        <meta property="og:image" content="https://dros.ai/dros-logo-horizontal.svg" />
        <meta property="og:url" content="https://dros.ai/blogs" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://dros.ai/dros-logo-horizontal.svg" />
      </Helmet>
      <Navbar />

      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <header className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
              DROS <span style={{ background: 'linear-gradient(135deg, #DD39F9, #03D2FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Blog</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Insights on modern debt collection, AI, and context orchestration
            </p>

            {/* Search Bar - hero placement */}
            <div className="max-w-2xl mx-auto relative">
              <form onSubmit={handleSearchSubmit} autoComplete="off">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 group">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-cyan-500 transition-colors pointer-events-none z-10" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                      placeholder="Search articles..."
                      className="w-full pl-12 pr-10 py-4 sm:rounded-l-2xl sm:rounded-r-none rounded-2xl bg-white text-slate-800 placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      style={{ boxShadow: '0 8px 40px 0 rgba(0,0,0,0.35), 0 2px 10px 0 rgba(0,0,0,0.2)' }}
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={handleSearchClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors z-10"
                        aria-label="Clear search"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm sm:rounded-r-2xl sm:rounded-l-none rounded-2xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div
                  className="absolute z-20 left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-100 overflow-hidden text-left"
                  style={{ boxShadow: '0 20px 60px 0 rgba(0,0,0,0.3), 0 8px 20px 0 rgba(0,0,0,0.15)' }}
                >
                  {suggestions.map((post, i) => {
                    const inner = (
                      <div className="flex items-start gap-3 px-5 py-3.5 hover:bg-[#EAF4FB] transition-colors cursor-pointer group border-b border-slate-100 last:border-0">
                        <Search className="w-4 h-4 text-slate-400 mt-0.5 shrink-0 group-hover:text-cyan-500 transition-colors" />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-800 leading-snug truncate">{post.title}</p>
                          <p className="text-xs text-cyan-600 mt-0.5">{post.category}</p>
                        </div>
                      </div>
                    );
                    return post.slug ? (
                      <Link key={i} to={post.slug}>{inner}</Link>
                    ) : (
                      <a key={i} href={post.externalUrl!} target="_blank" rel="noopener noreferrer">{inner}</a>
                    );
                  })}
                  <button
                    onMouseDown={handleSearchSubmit as unknown as React.MouseEventHandler}
                    className="w-full px-5 py-3.5 text-sm text-cyan-600 font-semibold hover:bg-[#EAF4FB] transition-colors border-t border-slate-100 text-left flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    See all results for "{searchQuery}"
                  </button>
                </div>
              )}
            </div>
          </header>
        </div>
      </section>

      {/* Content area - light background */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">

          {/* Active search indicator */}
          {isSearchActive && (
            <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 justify-center">
              <span>Showing results for</span>
              <span className="font-semibold text-slate-700">"{searchQuery}"</span>
              <button onClick={handleSearchClear} className="ml-1 text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
                Clear
              </button>
            </div>
          )}

          {/* Category Tabs */}
          <div className={`mb-14 flex flex-wrap gap-3 justify-center transition-opacity duration-200 ${isSearchActive ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-white text-slate-600 border border-[#DAEAF5] hover:bg-[#EAF4FB] hover:text-slate-800'
                }`}
                style={
                  selectedCategory === category
                    ? { boxShadow: '0 4px 16px 0 rgba(6,182,212,0.25), 0 1px 4px 0 rgba(6,182,212,0.15)' }
                    : { boxShadow: '0 2px 10px 0 rgba(10,26,47,0.09), 0 1px 3px 0 rgba(10,26,47,0.06)' }
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* No results */}
          {isSearchActive && allRegularPosts.length === 0 && (
            <div className="py-20 text-center">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-xl font-semibold text-slate-600 mb-2">No results found</p>
              <p className="text-slate-400 mb-6">Try a different keyword or browse by category below.</p>
              <button onClick={handleSearchClear} className="px-6 py-3 font-semibold rounded-lg transition-colors" style={{ background: '#03D2FC', color: '#010C20' }}>
                Clear search
              </button>
            </div>
          )}

          {/* Featured Article */}
          {shouldShowFeatured && (
            <article
              className="mb-10 rounded-2xl transition-all duration-300"
              style={{
                background: '#F3F8FC',
                boxShadow: '0 12px 48px 0 rgba(10,26,47,0.13), 0 4px 16px 0 rgba(10,26,47,0.08), inset 0 1px 0 0 rgba(255,255,255,0.65)',
                border: '1px solid rgba(10,26,47,0.10)',
              }}
            >
              <div className="p-7 md:p-14">
              {featuredPost.badge && (
                <div className="mb-5">
                  <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-600 border border-cyan-200 text-xs font-semibold rounded-full tracking-wide uppercase">
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
                  <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#0A1A2F] group-hover:text-cyan-700 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <div className="flex items-center gap-3 mb-6 text-base">
                    <Link
                      to={`/blogs?category=${encodeURIComponent(featuredPost.category)}`}
                      onClick={e => e.stopPropagation()}
                      className="text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
                    >
                      {featuredPost.category}
                    </Link>
                    {featuredPost.externalSource && (
                      <>
                        <span className="text-[#BADEFA]">·</span>
                        <span className="text-[#7A95AB] text-sm">Published on {featuredPost.externalSource}</span>
                      </>
                    )}
                  </div>
                  <p className="text-xl md:text-2xl text-[#4F647A] mb-8 leading-relaxed">
                    {featuredPost.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#7A95AB]">
                      {featuredPost.readTime}
                    </span>
                    <span className="text-cyan-600 font-semibold text-base flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read article
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ) : (
                <Link to={featuredPost.slug!} className="group block">
                  <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#0A1A2F] group-hover:text-cyan-700 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <div className="flex items-center gap-3 mb-6 text-base">
                    <Link
                      to={`/blogs?category=${encodeURIComponent(featuredPost.category)}`}
                      onClick={e => e.stopPropagation()}
                      className="text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
                    >
                      {featuredPost.category}
                    </Link>
                  </div>
                  <p className="text-xl md:text-2xl text-[#4F647A] mb-8 leading-relaxed">
                    {featuredPost.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#7A95AB]">
                      {featuredPost.readTime}
                    </span>
                    <span className="text-cyan-600 font-semibold text-base flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )}
              </div>
            </article>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.slug || post.externalUrl || index}
                className="relative rounded-2xl flex flex-col transition-all duration-200"
                style={{
                  background: '#F3F8FC',
                  boxShadow: '0 8px 40px 0 rgba(10,26,47,0.11), 0 3px 12px 0 rgba(10,26,47,0.07), inset 0 1px 0 0 rgba(255,255,255,0.65)',
                  border: '1px solid rgba(10,26,47,0.10)',
                }}
              >
                <div className="p-8 md:p-10 flex flex-col flex-1">
                {post.badge && (
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full tracking-wide uppercase border ${
                      post.badge === 'Featured' ? 'bg-cyan-50 text-cyan-600 border-cyan-200' :
                      post.badge === 'External' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                      'bg-emerald-50 text-emerald-600 border-emerald-200'
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
                    <h3 className="text-2xl font-bold mb-4 text-[#0A1A2F] group-hover:text-cyan-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-base">
                      <Link
                        to={`/blogs?category=${encodeURIComponent(post.category)}`}
                        onClick={e => e.stopPropagation()}
                        className="text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
                      >
                        {post.category}
                      </Link>
                      {post.externalSource && (
                        <>
                          <span className="text-[#BADEFA]">·</span>
                          <span className="text-[#7A95AB] text-sm">Published on {post.externalSource}</span>
                        </>
                      )}
                    </div>
                    <p className="text-[#4F647A] text-base leading-relaxed flex-1 mb-6">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-[#DAEAF5]">
                      <span className="text-sm text-[#7A95AB]">
                        {post.readTime}
                      </span>
                      <span className="text-cyan-600 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Read article
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>
                ) : (
                  <Link to={post.slug!} className="group flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-[#0A1A2F] group-hover:text-cyan-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="mb-4 text-base">
                      <Link
                        to={`/blogs?category=${encodeURIComponent(post.category)}`}
                        onClick={e => e.stopPropagation()}
                        className="text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
                      >
                        {post.category}
                      </Link>
                    </div>
                    <p className="text-[#4F647A] text-base leading-relaxed flex-1 mb-6">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-[#DAEAF5]">
                      <span className="text-sm text-[#7A95AB]">
                        {post.readTime}
                      </span>
                      <span className="text-cyan-600 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Read more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                )}
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DAEAF5] bg-white text-slate-600 font-medium text-sm transition-all hover:bg-[#EAF4FB] hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-9 h-9 rounded-lg font-medium text-sm transition-all ${
                      page === currentPage
                        ? 'bg-cyan-500 text-slate-950 shadow-sm'
                        : 'bg-white border border-[#DAEAF5] text-slate-500 hover:bg-[#EAF4FB] hover:text-slate-800'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DAEAF5] bg-white text-slate-600 font-medium text-sm transition-all hover:bg-[#EAF4FB] hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
