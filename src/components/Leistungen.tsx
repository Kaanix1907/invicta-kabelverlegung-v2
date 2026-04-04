'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { LEISTUNGEN } from '@/lib/data';

const icons: Record<string, React.ReactNode> = {
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  industry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M2 20V8l5-3v4l5-4v4l5-3v14H2z"/>
      <rect x="7" y="14" width="3" height="6"/>
      <rect x="13" y="14" width="3" height="6"/>
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
};

function LeistungCard({ item, index }: { item: (typeof LEISTUNGEN)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'relative',
        background: 'var(--dark-4)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '14px',
        padding: '2rem',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.5), 0 16px 40px rgba(0,0,0,0.35)',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(27,106,255,0.45)';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.5), 0 16px 40px rgba(0,0,0,0.35), 0 0 40px rgba(27,106,255,0.12)';
        el.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(255,255,255,0.1)';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.5), 0 16px 40px rgba(0,0,0,0.35)';
        el.style.transform = '';
      }}
    >
      {/* Rotating border overlay */}
      <div
        className="leistung-card-border"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-1px',
          borderRadius: '12px',
          opacity: 0.4,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              background: 'rgba(27,106,255,0.18)',
              border: '1px solid rgba(27,106,255,0.4)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#5B9DFF',
              boxShadow: '0 0 16px rgba(27,106,255,0.2)',
            }}
          >
            {icons[item.icon]}
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '0.75rem',
              color: 'var(--gray)',
              letterSpacing: '0.08em',
            }}
          >
            {item.num}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: '1.3rem',
            fontWeight: 700,
            color: 'var(--off-white)',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          {item.title}
        </h3>
        <p style={{ color: 'var(--gray-lt)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Leistungen() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section
      id="leistungen"
      style={{ background: 'var(--dark-2)', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '0.78rem',
              color: 'var(--electric)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            Was wir tun
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--off-white)',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            Unsere Leistungen
          </h2>
          <p style={{ color: 'var(--gray-lt)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            Alles aus einer Hand — von der ersten Planung bis zur dokumentierten Abnahme.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {LEISTUNGEN.map((item, i) => (
            <LeistungCard key={item.num} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
