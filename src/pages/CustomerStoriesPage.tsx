export const route = '/customer-stories';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import { trackCta } from '../lib/analytics';
import Navbar from './Navbar';

interface CustomerStory {
  title: string;
  description: string;
  segment: string;
  region: string;
  slug: string;
}

const stories: CustomerStory[] = [
  {
    title: 'How a Utah-Based Consumer Finance Company Replaced Manual Outbound With a Self-Running AI Operation with DROS',
    description: 'A story about automating 15,000 daily outbound calls across loan prequalification, 1st party collections, and payment reminders - without adding headcount.',
    segment: '1st Party Collections',
    region: 'Utah, United States',
    slug: '/customer-stories/utah-consumer-finance',
  },
  {
    title: 'How Greystone & Associates Simplified Daily Collections and Reduced Operational Friction with DROS',
    description: 'A customer story on faster account onboarding, real-time visibility, and simpler day-to-day collections workflows.',
    segment: 'Third-Party Collections',
    region: 'United States',
    slug: '/customer-stories/greystone-associates',
  },
];

export default function CustomerStoriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Customer Stories | DROS in Collections Operations</title>
        <meta name="description" content="See how collection teams use DROS to simplify operations, improve visibility, and modernize recovery workflows." />
        <meta property="og:title" content="Customer Stories | DROS in Collections Operations" />
        <meta property="og:description" content="See how collection teams use DROS to simplify operations, improve visibility, and modernize recovery workflows." />
        <meta property="og:image" content="https://dros.ai/dros-logo-horizontal.svg" />
        <meta property="og:url" content="https://dros.ai/customer-stories" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://dros.ai/dros-logo-horizontal.svg" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <header className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Customer <span style={{ background: 'linear-gradient(135deg, #DD39F9, #03D2FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Stories</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              See how collection teams are using DROS to simplify operations, improve visibility, and modernize recovery workflows.
            </p>
          </header>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-white py-14 text-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <Link
                key={story.slug}
                to={story.slug}
                className="group relative rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300"
                style={{
                  background: '#F3F8FC',
                  border: '1px solid rgba(10,26,47,0.10)',
                  boxShadow: '0 8px 40px 0 rgba(10,26,47,0.11), 0 3px 12px 0 rgba(10,26,47,0.07), inset 0 1px 0 0 rgba(255,255,255,0.65)',
                }}
              >
                {/* Faint corner cyan gradient accent */}
                <div className="absolute top-0 left-8 right-8 h-px rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.18), transparent)' }} />

                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-5 text-slate-900 group-hover:text-cyan-600 transition-colors leading-snug">
                    {story.title}
                  </h2>
                  <p className="text-slate-500 text-base leading-relaxed mb-8">
                    {story.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(10,26,47,0.08)' }}>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5 text-sm text-slate-400">
                      <Building2 className="w-3.5 h-3.5 text-cyan-500" />
                      {story.segment}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-sm text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                      {story.region}
                    </span>
                  </div>
                  <span className="text-cyan-600 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all shrink-0 ml-4">
                    Read story
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
