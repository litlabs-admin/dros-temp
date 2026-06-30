export const route = '/events';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';

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
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Events | Meet DROS at Collections Conferences</title>
        <meta name="description" content="Meet us at industry conferences and discover how DROS is transforming debt collection." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-blue-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-6">
          <header className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span style={{ background: 'linear-gradient(135deg, #DD39F9, #03D2FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Events</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Meet us at industry conferences and discover how DROS is transforming debt collection
            </p>
          </header>
        </div>
      </section>

      {/* Events content */}
      <section className="bg-white py-16 text-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
              Upcoming <span className="text-cyan-500">Events</span>
            </h2>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <article
                  key={event.slug}
                  className="relative rounded-xl p-8 transition-all"
                  style={{
                    background: '#F3F8FC',
                    border: '1px solid rgba(10,26,47,0.10)',
                    boxShadow: '0 8px 40px 0 rgba(10,26,47,0.10), 0 3px 12px 0 rgba(10,26,47,0.06), inset 0 1px 0 0 rgba(255,255,255,0.65)',
                  }}
                >
                  <div className="absolute top-0 left-10 right-10 h-px rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.20), transparent)' }} />
                  <Link to={event.slug} className="group">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-3xl font-bold mb-3 text-slate-900 group-hover:text-cyan-600 transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-6 mb-4">
                          <div className="flex items-center gap-2 text-slate-500">
                            <MapPin className="w-5 h-5 text-cyan-500" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500">
                            <Calendar className="w-5 h-5 text-cyan-500" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                        <p className="text-lg text-slate-500 leading-relaxed mb-4">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <span className="text-cyan-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
              Past <span className="text-slate-400">Events</span>
            </h2>
            <div className="space-y-8">
              {pastEvents.map((event) => (
                <article
                  key={event.slug}
                  className="relative rounded-xl p-8 transition-all opacity-80 hover:opacity-100"
                  style={{
                    background: '#F3F8FC',
                    border: '1px solid rgba(10,26,47,0.10)',
                    boxShadow: '0 8px 40px 0 rgba(10,26,47,0.08), 0 3px 12px 0 rgba(10,26,47,0.05), inset 0 1px 0 0 rgba(255,255,255,0.65)',
                  }}
                >
                  <div className="absolute top-0 left-10 right-10 h-px rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.12), transparent)' }} />
                  <Link to={event.slug} className="group">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-3xl font-bold mb-3 text-slate-600 group-hover:text-slate-800 transition-colors">
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
                      <span className="text-cyan-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
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

      <Footer />
    </div>
  );
}
