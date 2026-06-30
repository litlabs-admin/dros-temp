import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export interface AnnouncementConfig {
  badge?: string;
  message: string;
  cta: string;
  href: string;
  isExternal?: boolean;
}

const CURRENT_ANNOUNCEMENT: AnnouncementConfig = {
  badge: 'NEW',
  message: 'Customer Story: How Greystone & Associates Streamlined Daily Collections with DROS',
  cta: 'Watch now',
  href: '/resources/videos#customer-stories',
  isExternal: false,
};

interface AnnouncementBannerProps {
  config?: AnnouncementConfig;
}

export default function AnnouncementBanner({ config = CURRENT_ANNOUNCEMENT }: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const inner = (
    <div className="group relative w-full py-4 px-4 sm:px-8 flex items-center justify-center gap-4 overflow-hidden cursor-pointer transition-all duration-200">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-900/60 to-slate-950 border-b border-blue-700/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex flex-wrap items-center justify-center gap-x-3 gap-y-1 min-w-0 pr-10">
        {config.badge && (
          <span className="flex-shrink-0 text-xs font-bold tracking-widest px-2.5 py-1 rounded border border-cyan-400/50 bg-cyan-500/15 text-cyan-300 uppercase">
            {config.badge}
          </span>
        )}
        <span className="text-base font-medium text-white/90 group-hover:text-white transition-colors text-center sm:text-left">
          {config.message}
        </span>
        <span className="flex-shrink-0 flex items-center gap-1.5 text-base font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
          {config.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </div>

      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDismissed(true); }}
        className="relative z-10 absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 flex-shrink-0"
        aria-label="Dismiss announcement"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );

  if (config.isExternal) {
    return (
      <a href={config.href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {inner}
      </a>
    );
  }

  return (
    <Link to={config.href} className="block w-full">
      {inner}
    </Link>
  );
}
