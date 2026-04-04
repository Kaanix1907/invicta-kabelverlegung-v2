'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ZITAT } from '@/lib/data';

export default function Zitat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section style={{ background: 'var(--black)', padding: '6rem 0' }}>
      <div
        ref={ref}
        style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Quote mark */}
          <div
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: '8rem',
              lineHeight: 0.6,
              color: 'var(--electric)',
              opacity: 0.2,
              marginBottom: '1rem',
              userSelect: 'none',
            }}
          >
            &ldquo;
          </div>

          <blockquote
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
              fontWeight: 400,
              color: 'var(--off-white)',
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
              margin: '0 0 2rem',
              borderLeft: 'none',
              padding: 0,
            }}
          >
            {ZITAT.text}
          </blockquote>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {/* Avatar placeholder */}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(27,106,255,0.15)',
                border: '2px solid rgba(27,106,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-playfair), serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--electric)',
              }}
            >
              T
            </div>
            <div style={{ textAlign: 'left' }}>
              <strong
                style={{
                  display: 'block',
                  color: 'var(--off-white)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                {ZITAT.author}
              </strong>
              <span
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '0.75rem',
                  color: 'var(--gray-lt)',
                  letterSpacing: '0.04em',
                }}
              >
                {ZITAT.role}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
