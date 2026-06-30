import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  /** Target number to count up to. */
  to: number;
  /** Optional text before the number (e.g. "$"). */
  prefix?: string;
  /** Optional text after the number (e.g. "%", "M+"). */
  suffix?: string;
  /** Decimal places to render. */
  decimals?: number;
  /** Duration in ms. Lateral uses ~2s. */
  duration?: number;
  className?: string;
}

/**
 * Counts up from 0 to `to` with an easeOut curve once scrolled into view.
 * Mirrors Lateral's metric counters (2s, easeOut). Honors reduced-motion by
 * snapping straight to the final value.
 */
export default function Counter({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2000,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(to);
      return;
    }
    let frame = 0;
    let start: number | null = null;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      if (start === null) start = now;
      const p = Math.min((now - start) / duration, 1);
      setValue(to * easeOut(p));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
