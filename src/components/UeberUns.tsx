'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { UEBER_UNS } from '@/lib/data';

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
    <polyline points="4 10 8 14 16 6"/>
  </svg>
);

const CertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
    <circle cx="12" cy="8" r="6"/>
    <path d="M9 22l3-3 3 3V14.5a6 6 0 0 1-6 0V22z"/>
  </svg>
);

export default function UeberUns() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ueber-uns" style={{ background: 'var(--dark-3)', padding: '6rem 0' }}>
      <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border-2)',
                boxShadow: 'var(--shadow-card)',
                position: 'relative',
                height: '420px',
              }}
            >
              <Image
                src={UEBER_UNS.imageUrl}
                alt={UEBER_UNS.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,7,9,0.4) 0%, transparent 60%)' }} />
            </div>

            {/* Badge */}
            <div
              className="badge-float"
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-12px',
                background: 'var(--electric)',
                borderRadius: '10px',
                padding: '0.875rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: 'var(--shadow-blue)',
                color: '#fff',
              }}
            >
              <CertIcon />
              <div>
                <strong style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                  DIN VDE
                </strong>
                <span style={{ fontSize: '0.72rem', opacity: 0.85 }}>Zertifiziert</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
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
              Wer wir sind
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
              {UEBER_UNS.headline[0]}
              <br />
              {UEBER_UNS.headline[1]}
            </h2>

            {UEBER_UNS.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  color: 'var(--gray-lt)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                {p}
              </p>
            ))}

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '1.5rem 0 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {UEBER_UNS.points.map((point) => (
                <li
                  key={point}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--off-white)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(27,106,255,0.15)',
                      border: '1px solid rgba(27,106,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--electric)',
                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              style={{
                display: 'inline-block',
                background: 'var(--electric)',
                color: '#fff',
                textDecoration: 'none',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: 'var(--shadow-blue)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(27,106,255,0.6), 0 8px 32px rgba(27,106,255,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = 'var(--shadow-blue)';
              }}
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
