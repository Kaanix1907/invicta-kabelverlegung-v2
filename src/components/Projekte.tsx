'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { PROJEKTE } from '@/lib/data';

export default function Projekte() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const [active, setActive] = useState(0);

  return (
    <section id="projekte" style={{ background: 'var(--dark-2)', padding: '6rem 0' }}>
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
            Referenzen
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
            Abgeschlossene Projekte
          </h2>
          <p style={{ color: 'var(--gray-lt)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            Qualität, die man sieht — ein Auszug aus unseren Projekten in Duisburg und NRW.
          </p>
        </motion.div>

        {/* Featured project (large) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '1.5rem',
              marginBottom: '1.5rem',
            }}
            className="projekte-layout"
          >
            {/* Main image */}
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '380px',
                border: '1px solid var(--border-2)',
                boxShadow: 'var(--shadow-card)',
                cursor: 'pointer',
              }}
            >
              <Image
                src={PROJEKTE[active].image}
                alt={PROJEKTE[active].title}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.5s var(--ease)' }}
                sizes="(max-width: 768px) 100vw, 70vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,7,9,0.85) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(27,106,255,0.2)',
                    border: '1px solid rgba(27,106,255,0.4)',
                    borderRadius: '4px',
                    padding: '3px 10px',
                    fontSize: '0.75rem',
                    color: 'var(--current)',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-mono), monospace',
                    letterSpacing: '0.06em',
                  }}
                >
                  {PROJEKTE[active].tag}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--off-white)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.25rem',
                  }}
                >
                  {PROJEKTE[active].title}
                </h3>
                <p style={{ color: 'var(--gray-lt)', fontSize: '0.85rem', fontFamily: 'var(--font-mono), monospace' }}>
                  {PROJEKTE[active].year}
                </p>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                width: '120px',
              }}
              className="thumb-strip"
            >
              {PROJEKTE.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '68px',
                    border: i === active ? '2px solid var(--electric)' : '1px solid var(--border-2)',
                    boxShadow: i === active ? 'var(--shadow-blue)' : 'none',
                    cursor: 'pointer',
                    background: 'none',
                    padding: 0,
                    flex: '0 0 auto',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    opacity: i === active ? 1 : 0.6,
                  }}
                  aria-label={p.title}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Dot navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            {PROJEKTE.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === active ? 'var(--electric)' : 'var(--mid)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.3s, background 0.3s',
                  boxShadow: i === active ? '0 0 8px rgba(27,106,255,0.5)' : 'none',
                }}
                aria-label={`Projekt ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .thumb-strip { display: none !important; }
          .projekte-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
