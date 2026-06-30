import { useEffect } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';

/**
 * Mounts Lenis once for app-wide smooth scrolling, matching Lateral's feel
 * (gentle easing, ~1.1 lerp). Skipped when the user prefers reduced motion or
 * on coarse-pointer (touch) devices, where native scrolling is better. The
 * instance is exposed on window.__lenis so route-change scroll resets can use
 * lenis.scrollTo instead of fighting the smooth target.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduced || coarse) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
