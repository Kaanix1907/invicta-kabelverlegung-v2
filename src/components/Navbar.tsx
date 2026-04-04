'use client';

import { useState, useEffect } from 'react';
import { COMPANY } from '@/lib/data';

const links = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#projekte', label: 'Projekte' },
  { href: '#ueber-uns', label: 'Über uns' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'rgba(6,7,9,0.92)'
    : 'transparent';
  const navBorder = scrolled
    ? '1px solid rgba(255,255,255,0.06)'
    : '1px solid transparent';
  const navShadow = scrolled
    ? '0 2px 24px rgba(0,0,0,0.5)'
    : 'none';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: navBg,
          borderBottom: navBorder,
          boxShadow: navShadow,
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: 'var(--off-white)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            INVICTA
            <span style={{ color: 'var(--electric)', marginLeft: '2px' }}>.</span>
          </a>

          {/* Desktop links */}
          <ul
            style={{
              display: 'flex',
              gap: '2.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
            className="hidden-mobile"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    color: 'var(--gray-lt)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--off-white)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--gray-lt)')
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                style={{
                  background: 'var(--electric)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  padding: '0.5rem 1.25rem',
                  borderRadius: '6px',
                  boxShadow: '0 0 0 1px rgba(27,106,255,0.4), 0 4px 16px rgba(27,106,255,0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 0 0 1px rgba(27,106,255,0.6), 0 8px 24px rgba(27,106,255,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 0 0 1px rgba(27,106,255,0.4), 0 4px 16px rgba(27,106,255,0.3)';
                }}
              >
                Kontakt
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            aria-label="Menü öffnen"
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
            }}
            className="show-mobile"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: 'var(--off-white)',
                  borderRadius: '1px',
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform:
                    open && i === 0
                      ? 'rotate(45deg) translate(5px, 5px)'
                      : open && i === 2
                      ? 'rotate(-45deg) translate(5px, -5px)'
                      : '',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              background: 'rgba(6,7,9,0.97)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '1.5rem 2rem',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{ color: 'var(--off-white)', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'inline-block',
                    background: 'var(--electric)',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '6px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                  }}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
