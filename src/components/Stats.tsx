'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { STATS } from '@/lib/data';

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = (target / duration) * step;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [target, active]);

  return count;
}

function StatItem({ item, index }: { item: (typeof STATS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useCountUp(item.target, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      style={{ textAlign: 'center', position: 'relative' }}
    >
      {/* Pulse ring */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '1px solid rgba(27,106,255,0.3)',
          pointerEvents: 'none',
        }}
        className="stat-pulse-ring"
      />

      <div
        style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 800,
          color: 'var(--electric)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}
      >
        {count}
        <span style={{ fontSize: '0.6em' }}>{item.suffix}</span>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '0.78rem',
          color: 'var(--gray-lt)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {item.label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section style={{ background: 'var(--black)', padding: '5rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '3rem',
            position: 'relative',
          }}
        >
          {STATS.map((item, i) => (
            <StatItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
