export const route = '/webinars';
import { ArrowRight, Calendar, Clock, Monitor } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackCta } from '../lib/analytics';
import Navbar from './Navbar';
import Footer from './Footer';

const gradStyle = {
  background: 'linear-gradient(135deg, #DD39F9, #03D2FC)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};

const PAST_WEBINARS = [
  {
    title: 'The Collections AI Workshop: Improve RPC, PTP and Recovery Without Adding Headcount',
    presenter: 'Anshul Shrivastava',
    presenterTitle: 'CEO, Vodex.ai',
    date: 'Thursday, June 4, 2026',
    time: '12 PM EST / 11 AM CST / 9 AM PST',
    duration: '2 Hours',
    detailsHref: '/collections-ai-workshop',
    badge: 'Workshop Webinar',
  },
];

function WebinarCard({ w, past = false }: { w: typeof PAST_WEBINARS[0]; past?: boolean }) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-md flex flex-col"
      style={{ background: '#fff', border: '1px solid #E2E5F0' }}
    >
      <div className="px-5 pt-5 pb-6" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 60%, #4338CA 100%)' }}>
        <div className="mb-3">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{ background: 'rgba(221,57,249,0.18)', color: '#DD39F9', border: '1px solid rgba(221,57,249,0.35)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#DD39F9' }} />
            {w.badge}
          </span>
        </div>
        <h3 className="text-base font-bold text-white leading-snug">{w.title}</h3>
      </div>

      <div className="px-5 pt-5 pb-5 flex flex-col flex-1">
        <div className="space-y-2.5 mb-4">
          <div className="flex items-center gap-2.5 text-xs text-slate-700">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#03D2FC' }} />
            <span><span className="font-semibold text-slate-900">Date:</span> {w.date}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-700">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#03D2FC' }} />
            <span><span className="font-semibold text-slate-900">Time:</span> {w.time}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-700">
            <Monitor className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#03D2FC' }} />
            <span><span className="font-semibold text-slate-900">Duration:</span> {w.duration}</span>
          </div>
        </div>

        <div className="border-t border-slate-100 my-4" />

        <div className="flex items-center gap-3 mb-5 flex-1">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #DD39F9, #03D2FC)' }}
          >
            {w.presenter.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{w.presenter}</p>
            <p className="text-xs text-slate-500">{w.presenterTitle}</p>
          </div>
        </div>

        <Link
          to={w.detailsHref}
          onClick={() => trackCta('webinars_view_details')}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
          style={past
            ? { background: '#F0F2F8', color: '#1E1B4B', border: '1px solid #E2E5F0' }
            : { background: 'linear-gradient(90deg, #DD39F9, #03D2FC)', color: '#fff' }
          }
        >
          View Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Webinars | DROS</title>
        <meta name="description" content="Live sessions on AI technology, collections strategy, and what's actually working in the field." />
        <link rel="canonical" href="https://dros.ai/webinars" />
        <meta property="og:title" content="Webinars | DROS" />
        <meta property="og:description" content="Live sessions on AI technology, collections strategy, and what's actually working in the field." />
        <meta property="og:url" content="https://dros.ai/webinars" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5 text-cyan-400">Live Webinar Series</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DROS{' '}
            <span style={gradStyle}>Webinars</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-0 max-w-3xl mx-auto leading-relaxed">
            Live sessions on AI technology, collections strategy, and what's actually working in the field.
          </p>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 px-6 lg:px-8" style={{ background: '#F0F2F8' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Upcoming Webinars</h2>
          <p className="text-slate-500 text-base mb-10">No upcoming webinars scheduled. Check back soon.</p>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16 px-6 lg:px-8" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Past Webinars</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAST_WEBINARS.map((w) => (
              <WebinarCard key={w.title} w={w} past />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
