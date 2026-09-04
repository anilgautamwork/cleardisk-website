'use client';
import { useEffect } from 'react';

/** Progressive enhancement: content is readable before JS and without animation. */
export function PageMotion() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches || !('IntersectionObserver' in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (reduce.matches) continue;
          animations.push(
            entry.target.animate(
              [
                { opacity: 0.6, transform: 'translateY(18px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              { duration: 560, easing: 'cubic-bezier(.2,.7,.2,1)' },
            ),
          );
        }
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        '[data-reveal], .feature-card, .price-card, .guide-card',
      )
      .forEach((el) => observer.observe(el));
    const stop = () => {
      if (reduce.matches) animations.forEach((a) => a.cancel());
    };
    reduce.addEventListener('change', stop);
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      reduce.removeEventListener('change', stop);
    };
  }, []);
  return null;
}
