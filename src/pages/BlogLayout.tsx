import { useState, useEffect, ReactNode, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { trackCta } from '../lib/analytics';
import Navbar from './Navbar';
import RelatedArticles from './RelatedArticles';

export interface TocSection {
  id: string;
  label: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

interface BlogLayoutProps {
  title: ReactNode;
  subtitle?: ReactNode;
  readTime: string;
  tags?: string[];
  children: ReactNode;
  cta?: ReactNode;
  /** When provided, renders a sticky sidebar TOC on desktop and a collapsible TOC on mobile. */
  tocSections?: TocSection[];
  /** Canonical URL path for this post, e.g. "/blogs/my-post-slug" */
  canonicalPath?: string;
  /** ISO 8601 publish date, e.g. "2025-10-01" */
  datePublished?: string;
  /** Primary category/tag for schema, e.g. "Collections Strategy" */
  category?: string;
  /** When provided, injects FAQPage JSON-LD schema in addition to article schema */
  faq?: FaqItem[];
}

/* ─── TOC helpers ─── */

function useTocActiveId(sections: TocSection[]) {
  const [activeId, setActiveId] = useState('');
  useEffect(() => {
    const headings = sections
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -55% 0px', threshold: 0 },
    );
    headings.forEach(h => observer.observe(h));
    return () => observer.disconnect();
  }, [sections]);
  return activeId;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
}

function TocList({ sections, activeId, onSelect }: { sections: TocSection[]; activeId: string; onSelect: (id: string) => void }) {
  return (
    <ul className="space-y-0.5">
      {sections.map(({ id, label }) => {
        const active = activeId === id;
        return (
          <li key={id}>
            <button
              onClick={() => onSelect(id)}
              className={`w-full text-left text-sm leading-snug px-3 py-1.5 rounded-lg transition-all duration-150 ${
                active
                  ? 'text-cyan-600 font-semibold bg-cyan-50 border-l-2 border-cyan-500 pl-[10px]'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function DesktopTOC({ sections }: { sections: TocSection[] }) {
  const activeId = useTocActiveId(sections);
  return (
    <aside className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <p className="text-xs font-medium text-slate-600 uppercase tracking-wider mb-3 px-1">Contents</p>
          <TocList sections={sections} activeId={activeId} onSelect={scrollToSection} />
        </div>
      </div>
    </aside>
  );
}

function MobileTOC({ sections }: { sections: TocSection[] }) {
  const [open, setOpen] = useState(false);
  const handleSelect = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };
  return (
    <div className="xl:hidden border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm mb-8">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
      >
        <span>Contents</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-3 pb-3 border-t border-slate-100 pt-2">
          <TocList sections={sections} activeId="" onSelect={handleSelect} />
        </div>
      )}
    </div>
  );
}

/* ─── Main layout ─── */

export default function BlogLayout({ title, subtitle, readTime, tags, children, cta, tocSections, canonicalPath, datePublished, category, faq }: BlogLayoutProps) {
  const hasToc = tocSections && tocSections.length > 0;

  const siteUrl = 'https://dros.ai';
  const postUrl = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl;

  const allKeywords = [
    ...(category ? [category] : []),
    ...(tags ?? []),
  ].filter((v, i, arr) => arr.indexOf(v) === i);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': typeof title === 'string' ? title : undefined,
    'url': postUrl,
    'datePublished': datePublished,
    'author': { '@id': siteUrl },
    'publisher': { '@id': siteUrl },
    ...(category ? { 'articleSection': category } : {}),
    ...(datePublished ? { 'dateModified': datePublished } : {}),
    ...(allKeywords.length > 0 ? { 'keywords': allKeywords.join(', ') } : {}),
  };

  const categorySlug = category
    ? category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    : null;
  const categoryUrl = categorySlug ? `${siteUrl}/blogs?category=${encodeURIComponent(category!)}` : null;

  const breadcrumbItems: { '@type': string; position: number; name: string; item: string }[] = [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': siteUrl },
    { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${siteUrl}/blogs` },
  ];
  if (category && categoryUrl) {
    breadcrumbItems.push({ '@type': 'ListItem', 'position': 3, 'name': category, 'item': categoryUrl });
  }
  if (canonicalPath) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      'position': breadcrumbItems.length + 1,
      'name': typeof title === 'string' ? title : 'Article',
      'item': postUrl,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems,
  };

  const faqSchema = faq && faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faq.map(({ q, a }) => ({
      '@type': 'Question',
      'name': q,
      'acceptedAnswer': { '@type': 'Answer', 'text': a },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        {canonicalPath && <link rel="canonical" href={postUrl} />}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>
      <Navbar />

      {/* Dark Hero */}
      <div className="relative bg-slate-950 text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-950 to-blue-950/30" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm mb-8 flex-wrap">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <span className="text-slate-600 select-none">/</span>
            <Link to="/blogs" className="text-slate-400 hover:text-white transition-colors">Blogs</Link>
            {category && (
              <>
                <span className="text-slate-600 select-none">/</span>
                <Link
                  to={`/blogs?category=${encodeURIComponent(category)}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  {category}
                </Link>
              </>
            )}
          </nav>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map(tag => (
                <Link
                  key={tag}
                  to={`/blogs?category=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-wide hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-slate-300 font-light mb-6 leading-relaxed">{subtitle}</p>
          )}
          <p className="text-sm text-slate-500">{readTime} read</p>
        </div>
      </div>

      {/* White Reading Body */}
      <article className="bg-white" style={{ fontFamily: "'Lexend', sans-serif" }}>
        {hasToc ? (
          /* Two-column layout with TOC */
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-14 py-14">
            {/* Mobile TOC: full-width, above article, non-sticky */}
            <MobileTOC sections={tocSections} />
            {/* Desktop: sidebar + article */}
            <div className="flex gap-14 items-start">
              <DesktopTOC sections={tocSections} />
              <div className="min-w-0 flex-1">
                {children}
                {cta && <div className="mt-16">{cta}</div>}
                <div className="mt-14 pt-8 border-t border-slate-200">
                  <Link to="/blogs" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 transition-colors font-medium">
                    ← Back to all blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Single-column layout (no TOC) */
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-14">
            {children}
            {cta && <div className="mt-16">{cta}</div>}
            <div className="mt-14 pt-8 border-t border-slate-200">
              <Link to="/blogs" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 transition-colors font-medium">
                ← Back to all blogs
              </Link>
            </div>
          </div>
        )}
      </article>

      {tags && tags.length > 0 && canonicalPath && (
        <RelatedArticles tags={tags} currentRoute={canonicalPath} />
      )}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/untitled_logo_1_basic-file.png" alt="DROS Logo" className="w-8 h-8" />
                <span className="text-xl font-bold">DROS</span>
              </div>
              <p className="text-slate-400 text-sm">The operating system for modern debt collection agencies.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="/#security" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
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

/* ─── Shared dark-card sub-components used across blog posts ─── */

export function DarkCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-slate-900 border border-slate-700 rounded-2xl p-5 sm:p-7 my-8 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function StepCard({ step, title, children }: { step: string | number; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 sm:gap-5 bg-slate-900 border border-slate-700 rounded-2xl p-5 sm:p-6 my-4 shadow-sm">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold flex-shrink-0 text-sm">
        {step}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-cyan-300 mb-1">{title}</p>
        <div className="text-slate-300 leading-relaxed text-sm">{children}</div>
      </div>
    </div>
  );
}

export function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-4 border-cyan-500 pl-5 sm:pl-6 py-3 my-10 bg-slate-900 rounded-r-2xl pr-5 sm:pr-6 shadow-sm">
      <p className="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed">{children}</p>
    </blockquote>
  );
}

export function CalloutPill({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 my-10 text-center shadow-sm">
      {children}
    </div>
  );
}

export function BlogCTA({ heading, body, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-10 shadow-lg">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{heading}</h3>
      <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{body}</p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCta(primaryLabel)}
          className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 flex items-center justify-center gap-2" style={{ background: '#03D2FC', color: '#010C20' }}
        >
          {primaryLabel}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href={secondaryHref}
          rel="noopener noreferrer"
          className="border border-slate-600 hover:border-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base transition-all hover:bg-slate-800 text-center"
        >
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
}

/* ─── Body text helpers (white section) ─── */

export function P({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-slate-700 leading-relaxed text-base sm:text-lg mb-6 ${className}`}>{children}</p>;
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mt-14 mb-5 leading-snug scroll-mt-28 break-words"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-lg sm:text-xl font-bold text-cyan-700 mt-10 mb-4">{children}</h3>;
}

export function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3 my-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-base sm:text-lg leading-relaxed">
          <span className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0 mt-2.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-3 sm:p-4 my-8 sm:my-10 shadow-lg overflow-hidden">
      <img src={src} alt={alt} className="w-full rounded-xl block" />
    </div>
  );
}

export function BlogFAQ({ items }: { items: { q: string; a: ReactNode }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = useCallback((i: number) => setOpenIdx(prev => (prev === i ? null : i)), []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-6">
      {items.map(({ q, a }, i) => (
        <div
          key={i}
          className="rounded-2xl p-5 sm:p-7 bg-white cursor-pointer select-none transition-shadow hover:shadow-md"
          style={{ border: '1px solid rgba(10,18,37,0.09)', boxShadow: '0 2px 14px rgba(10,18,37,0.04)' }}
          onClick={() => toggle(i)}
        >
          <div className="flex justify-between items-start gap-3 sm:gap-4">
            <span className="text-sm sm:text-base font-semibold leading-snug" style={{ color: '#0A1225' }}>{q}</span>
            <div
              className="flex-shrink-0 mt-0.5 transition-transform duration-200"
              style={{ transform: openIdx === i ? 'rotate(180deg)' : 'none' }}
            >
              <ChevronDown className="w-5 h-5" style={{ color: 'rgba(10,18,37,0.3)' }} />
            </div>
          </div>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: openIdx === i ? '600px' : '0', paddingTop: openIdx === i ? '12px' : '0' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
