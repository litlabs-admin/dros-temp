export const route = '/resources/videos';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';

const PAGE_SIZE = 6;

type VideoCategory = 'tutorial' | 'customer-story' | 'conversation' | 'feature' | 'demo';

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
  feature: 'Feature',
  demo: 'Demo',
};

const CATEGORY_COLORS: Record<VideoCategory, string> = {
  tutorial: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
  'customer-story': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  conversation: 'bg-blue-50 text-blue-700 border border-blue-200',
  feature: 'bg-amber-50 text-amber-700 border border-amber-200',
  demo: 'bg-violet-50 text-violet-700 border border-violet-200',
};

const videos: Video[] = [
  {
    id: 'koTG9QUzC7g',
    title: 'Automate 24/7 Debt Collection: Build an AI Inbound Agent with DROS',
    description: 'Anshul, founder and CEO of Vodex, demonstrates how to build a highly contextual AI inbound agent designed specifically for debt collection - so you never miss a critical collection opportunity after office hours.',
    category: 'demo',
    tags: ['AI Inbound Agent', 'Demo', '24/7 Collections'],
    addedAt: '2026-06-29',
  },
  {
    id: 'NhYhzuXgG7s',
    title: 'How to Create an AI Voice Agent for Debt Collection in Minutes',
    description: 'Anshul, CEO of Vodex.ai, demonstrates how easy it is to build and deploy a voice AI agent specifically designed for collection agencies and teams.',
    category: 'demo',
    tags: ['AI Voice Agent', 'Demo', 'Collections'],
    addedAt: '2026-06-29',
  },
  {
    id: 'bmh8myQHhGo',
    title: 'Why Debt Collection Teams Need Better Workflow Orchestration',
    description: 'Explore why workflow orchestration is the missing layer in most debt collection operations - and how DROS brings it all together.',
    category: 'feature',
    tags: ['Collections', 'Workflow', 'Orchestration'],
    addedAt: '2026-06-03',
  },
  {
    id: 'mNe-zfIOx1A',
    title: 'AI Agents with Context - DROS Feature Overview',
    description: 'See how DROS AI agents understand each account\'s full history before making contact - right tone, right channel, right time.',
    category: 'feature',
    tags: ['AI Agents', 'Context', 'Collections'],
    addedAt: '2026-05-21',
  },
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
  { id: 'demo', label: 'Demos' },
  { id: 'feature', label: 'Features' },
  { id: 'tutorial', label: 'Product Tutorials' },
  { id: 'customer-story', label: 'Customer Stories' },
  { id: 'conversation', label: 'Conversations' },
];

const HIGHLIGHT_VIDEO_ID = 'URv0f7bH5Ic';

function VideosPage() {
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
      <Helmet>
        <title>Video Resources | DROS Collections Insights</title>
        <meta name="description" content="Tutorials, customer stories, and conversations to help you get the most out of DROS." />
      </Helmet>
      <Navbar />

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
            Video <span style={{ background: 'linear-gradient(135deg, #DD39F9, #03D2FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Resources</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Tutorials, customer stories, and conversations to help you get the most out of DROS.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Category Tabs */}
          <div id="customer-stories" ref={tabsRef} className="mb-12 flex flex-wrap gap-3 justify-center scroll-mt-32">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-white text-slate-600 border border-[#DAEAF5] hover:bg-[#EAF4FB] hover:text-slate-800'
                }`}
                style={
                  activeTab === tab.id
                    ? { boxShadow: '0 4px 16px 0 rgba(6,182,212,0.25), 0 1px 4px 0 rgba(6,182,212,0.15)' }
                    : { boxShadow: '0 2px 10px 0 rgba(10,26,47,0.09), 0 1px 3px 0 rgba(10,26,47,0.06)' }
                }
              >
                {tab.label}
                <span className={`ml-2 text-sm font-normal ${
                  activeTab === tab.id ? 'opacity-60' : 'text-slate-400'
                }`}>
                  ({tab.id === 'all' ? videos.length : videos.filter(v => v.category === tab.id).length})
                </span>
              </button>
            ))}
          </div>

          {/* Video Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-slate-400">
              <Play className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No videos in this category yet.</p>
              <p className="text-sm mt-1">Check back soon.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map(video => (
                  <div
                    key={video.id}
                    ref={video.id === HIGHLIGHT_VIDEO_ID && highlightedId === video.id ? highlightRef : null}
                    className="rounded-xl overflow-hidden transition-all duration-300 group flex flex-col"
                    style={
                      highlightedId === video.id
                        ? {
                            background: '#F3F8FC',
                            border: '1.5px solid rgba(6,182,212,0.5)',
                            boxShadow: '0 0 0 3px rgba(6,182,212,0.15), 0 8px 40px 0 rgba(10,26,47,0.11), 0 3px 12px 0 rgba(10,26,47,0.07), inset 0 1px 0 0 rgba(255,255,255,0.65)',
                            transform: 'scale(1.01)',
                          }
                        : {
                            background: '#F3F8FC',
                            border: '1px solid rgba(10,26,47,0.10)',
                            boxShadow: '0 8px 40px 0 rgba(10,26,47,0.11), 0 3px 12px 0 rgba(10,26,47,0.07), inset 0 1px 0 0 rgba(255,255,255,0.65)',
                          }
                    }
                  >
                    <div className="relative aspect-video" style={{ borderBottom: '1px solid rgba(10,26,47,0.07)', background: '#0f172a' }}>
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
                      <h3 className="text-base font-bold mb-2 text-slate-900 group-hover:text-cyan-600 transition-colors leading-snug">
                        {video.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-4 flex-1">
                        {video.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {video.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-white text-slate-500 border border-[#DAEAF5]"
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
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-[#DAEAF5] text-slate-600 hover:text-slate-900 hover:bg-[#EAF4FB] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    style={{ boxShadow: '0 2px 8px 0 rgba(10,26,47,0.07)' }}
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
                            : 'bg-white border border-[#DAEAF5] text-slate-500 hover:text-slate-900 hover:bg-[#EAF4FB]'
                        }`}
                        style={
                          page === p
                            ? { boxShadow: '0 4px 16px 0 rgba(6,182,212,0.25)' }
                            : { boxShadow: '0 2px 8px 0 rgba(10,26,47,0.07)' }
                        }
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-[#DAEAF5] text-slate-600 hover:text-slate-900 hover:bg-[#EAF4FB] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    style={{ boxShadow: '0 2px 8px 0 rgba(10,26,47,0.07)' }}
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105" style={{ background: '#03D2FC', color: '#010C20' }}
            >
              Book a Meeting
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default VideosPage;
