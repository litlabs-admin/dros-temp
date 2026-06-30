import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blogRegistry from './blogRegistry';

interface RelatedArticlesProps {
  tags: string[];
  currentRoute: string;
}

export default function RelatedArticles({ tags, currentRoute }: RelatedArticlesProps) {
  const scored = blogRegistry
    .filter(entry => entry.slug !== currentRoute)
    .map(entry => {
      const matchCount = entry.tags.filter(t => tags.includes(t)).length;
      return { ...entry, matchCount };
    })
    .filter(entry => entry.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 3);

  if (scored.length === 0) return null;

  return (
    <section className="bg-white border-t border-[#DAEAF5] py-16 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-[#0A1A2F] mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scored.map(article => (
            <Link
              key={article.slug}
              to={article.slug}
              className="group flex flex-col rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: '#F3F8FC',
                boxShadow: '0 8px 40px 0 rgba(10,26,47,0.11), 0 3px 12px 0 rgba(10,26,47,0.07), inset 0 1px 0 0 rgba(255,255,255,0.65)',
                border: '1px solid rgba(10,26,47,0.10)',
              }}
            >
              {article.badge && (
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full tracking-wide uppercase border ${
                    article.badge === 'Featured' ? 'bg-cyan-50 text-cyan-600 border-cyan-200' :
                    article.badge === 'New' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                    'bg-blue-50 text-blue-600 border-blue-200'
                  }`}>
                    {article.badge}
                  </span>
                </div>
              )}
              <h3 className="text-base font-bold text-[#0A1A2F] group-hover:text-cyan-700 transition-colors leading-snug mb-3 flex-1">
                {article.title}
              </h3>
              <p className="text-[#4F647A] text-sm leading-relaxed mb-5 line-clamp-3">
                {article.summary}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#DAEAF5]">
                <span className="text-xs text-[#7A95AB]">{article.readTime} read</span>
                <span className="text-cyan-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
