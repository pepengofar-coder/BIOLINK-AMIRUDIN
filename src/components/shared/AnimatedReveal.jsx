import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedReveal — Intersection Observer wrapper
 * Fades children in when they scroll into view.
 */
export default function AnimatedReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'left' | 'scale'
  threshold = 0.15,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const directionClass = {
    up: 'reveal-up',
    left: 'reveal-left',
    scale: 'reveal-scale',
  }[direction];

  return (
    <div
      ref={ref}
      className={`animated-reveal ${directionClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
