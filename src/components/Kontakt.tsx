'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { KONTAKT } from '@/lib/data';

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16v.92z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function Kontakt() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const cards = [
    { icon: <EmailIcon />, label: 'E-Mail', value: KONTAKT.email, href: `mailto:${KONTAKT.email}` },
    { icon: <PhoneIcon />, label: 'Telefon', value: KONTAKT.phone, href: KONTAKT.phoneHref },
  ];

  return (
    <section id="kontakt" style={{ background: 'var(--dark-2)', padding: '6rem 0' }}>
      <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
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
            Sprechen wir
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
            {KONTAKT.headline}
          </h2>
          <p style={{ color: 'var(--gray-lt)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            {KONTAKT.subtext}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'var(--dark-4)',
                border: '1px solid var(--border-3)',
                borderRadius: '12px',
                padding: '1.25rem 1.75rem',
                textDecoration: 'none',
                minWidth: '280px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
                transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(27,106,255,0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card), 0 0 32px rgba(27,106,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-2)';
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(27,106,255,0.12)',
                  border: '1px solid rgba(27,106,255,0.25)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--electric)',
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '0.72rem',
                    color: 'var(--gray)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '3px',
                  }}
                >
                  {card.label}
                </span>
                <span
                  style={{
                    display: 'block',
                    color: 'var(--off-white)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {card.value}
                </span>
              </div>
              <span style={{ color: 'var(--electric)', flexShrink: 0 }}>
                <ArrowIcon />
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
