export const route = '/contact';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Contact DROS | Get in Touch</title>
        <meta name="description" content="Have questions about DROS? Contact our team to learn more about AI-native collections workflows, product fit, and next steps." />
        <meta property="og:title" content="Contact DROS | Get in Touch" />
        <meta property="og:description" content="Have questions about DROS? Contact our team to learn more about AI-native collections workflows, product fit, and next steps." />
        <meta property="og:image" content="https://dros.ai/dros-logo-horizontal.svg" />
        <meta property="og:url" content="https://dros.ai/contact" />
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

        <div className="relative max-w-4xl mx-auto px-6">
          <header className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Get in <span style={{ background: 'linear-gradient(135deg, #DD39F9, #03D2FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have questions about DROS? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </header>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div
              className="relative rounded-xl p-8 transition-all"
              style={{
                background: '#F3F8FC',
                border: '1px solid rgba(10,26,47,0.12)',
                boxShadow: '0 8px 40px 0 rgba(10,26,47,0.11), 0 3px 12px 0 rgba(10,26,47,0.07), inset 0 1px 0 0 rgba(255,255,255,0.65)',
              }}
            >
              <div className="absolute top-0 left-8 right-8 h-px rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.18), transparent)' }} />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(6,182,212,0.10)' }}>
                  <Mail className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Email Us</h3>
              </div>
              <p className="text-slate-500 mb-4">
                Send us an email and we'll respond within 24 hours.
              </p>
              <a
                href="mailto:contact@dros.ai"
                className="text-cyan-600 hover:text-cyan-500 font-semibold transition-colors"
              >
                contact@dros.ai
              </a>
            </div>

            <div
              className="relative rounded-xl p-8 transition-all"
              style={{
                background: '#F3F8FC',
                border: '1px solid rgba(10,26,47,0.12)',
                boxShadow: '0 8px 40px 0 rgba(10,26,47,0.11), 0 3px 12px 0 rgba(10,26,47,0.07), inset 0 1px 0 0 rgba(255,255,255,0.65)',
              }}
            >
              <div className="absolute top-0 left-8 right-8 h-px rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.18), transparent)' }} />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(6,182,212,0.10)' }}>
                  <Phone className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Call Us</h3>
              </div>
              <p className="text-slate-500 mb-4">
                Speak directly with our team during business hours.
              </p>
              <a
                href="tel:+13026272108"
                className="text-cyan-600 hover:text-cyan-500 font-semibold transition-colors"
              >
                +1 (302) 627-2108
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div
              className="relative rounded-xl p-8 transition-all"
              style={{
                background: '#F3F8FC',
                border: '1px solid rgba(10,26,47,0.12)',
                boxShadow: '0 8px 40px 0 rgba(10,26,47,0.11), 0 3px 12px 0 rgba(10,26,47,0.07), inset 0 1px 0 0 rgba(255,255,255,0.65)',
              }}
            >
              <div className="absolute top-0 left-8 right-8 h-px rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.18), transparent)' }} />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(6,182,212,0.10)' }}>
                  <Clock className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Business Hours</h3>
              </div>
              <div className="space-y-2">
                <p className="text-slate-700">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="text-slate-400 text-sm">We typically respond within 1 business day</p>
              </div>
            </div>

            <div
              className="relative rounded-xl p-8 transition-all"
              style={{
                background: '#F3F8FC',
                border: '1px solid rgba(10,26,47,0.12)',
                boxShadow: '0 8px 40px 0 rgba(10,26,47,0.11), 0 3px 12px 0 rgba(10,26,47,0.07), inset 0 1px 0 0 rgba(255,255,255,0.65)',
              }}
            >
              <div className="absolute top-0 left-8 right-8 h-px rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.18), transparent)' }} />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(6,182,212,0.10)' }}>
                  <MapPin className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Location</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-cyan-600 font-medium text-sm uppercase tracking-wide mb-1">US Offices</p>
                  <p className="text-slate-700">1592 Union St #473</p>
                  <p className="text-slate-700">San Francisco, CA 94123</p>
                </div>
                <div>
                  <p className="text-slate-700">Delaware</p>
                </div>
                <div>
                  <p className="text-cyan-600 font-medium text-sm uppercase tracking-wide mb-1">Dev Center</p>
                  <p className="text-slate-700">Bengaluru, India</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-3">
                Serving agencies nationwide
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30 text-center">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Ready to See DROS in Action?</h2>
            <p className="text-xl leading-relaxed text-slate-600 mb-6">
              Schedule a personalized demo to see how DROS can transform your debt collection operations.
            </p>
            <a
              href="https://dros.ai/book-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105" style={{ background: '#03D2FC', color: '#010C20' }}
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
