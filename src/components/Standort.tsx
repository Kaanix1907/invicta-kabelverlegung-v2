'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { STANDORT, COMPANY } from '@/lib/data';

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
  </svg>
);

export default function Standort() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      style={{ background: 'var(--dark-3)', padding: '6rem 0' }}
    >
      <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
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
              Unser Standort
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--off-white)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              {STANDORT.headline[0]}
              <br />
              {STANDORT.headline[1]}
            </h2>
            <p style={{ color: 'var(--gray-lt)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '440px' }}>
              {STANDORT.text}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {STANDORT.cities.map((city) => (
                <span
                  key={city}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(27,106,255,0.08)',
                    border: '1px solid rgba(27,106,255,0.2)',
                    borderRadius: '6px',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.82rem',
                    color: 'var(--off-white)',
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: 'var(--electric)' }}><PinIcon /></span>
                  {city}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Card above image */}
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                left: '16px',
                zIndex: 2,
                background: 'var(--dark-4)',
                border: '1px solid var(--border-2)',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: 'var(--shadow-float)',
              }}
            >
              <span style={{ color: 'var(--electric)', fontSize: '1.1rem' }}>
                <PinIcon />
              </span>
              <div>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--off-white)', fontWeight: 600 }}>
                  {COMPANY.name}
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--gray-lt)' }}>
                  {COMPANY.city}, {COMPANY.region}
                </span>
              </div>
            </div>

            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border-2)',
                boxShadow: 'var(--shadow-card)',
                position: 'relative',
                height: '320px',
              }}
            >
              <Image
                src={STANDORT.imageUrl}
                alt={STANDORT.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6,7,9,0.7) 0%, transparent 60%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  background: 'rgba(6,7,9,0.7)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '6px',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.8rem',
                  color: 'var(--off-white)',
                  fontWeight: 500,
                  border: '1px solid var(--border-2)',
                }}
              >
                Duisburg &amp; Umgebung
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
