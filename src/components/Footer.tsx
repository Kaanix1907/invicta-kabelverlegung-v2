'use client';

import { COMPANY } from '@/lib/data';

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
  </svg>
);

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#projekte', label: 'Projekte' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-playfair), serif',
                fontWeight: 800,
                fontSize: '1.4rem',
                color: 'var(--off-white)',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              INVICTA<span style={{ color: 'var(--electric)' }}>.</span>
            </a>
            <p style={{ color: 'var(--gray)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '260px' }}>
              Professionelle Kabelverlegung und Industrieinstallationen aus Duisburg — für NRW und ganz Deutschland.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.72rem',
                color: 'var(--electric)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      color: 'var(--gray-lt)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--off-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-lt)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.72rem',
                color: 'var(--electric)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Kontakt
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`mailto:${COMPANY.email}`}
                style={{ color: 'var(--gray-lt)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--off-white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-lt)')}
              >
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.phoneHref}
                style={{ color: 'var(--gray-lt)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--off-white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-lt)')}
              >
                {COMPANY.phone}
              </a>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: 'var(--gray)',
                  fontSize: '0.85rem',
                }}
              >
                <PinIcon />
                {COMPANY.city}, {COMPANY.region}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'var(--gray)', fontSize: '0.82rem' }}>
            &copy; 2026 {COMPANY.name}, {COMPANY.city}. Alle Rechte vorbehalten.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Impressum', 'Datenschutz'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  color: 'var(--gray)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gray-lt)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
