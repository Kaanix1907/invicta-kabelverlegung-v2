'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HERO } from '@/lib/data';

// Canvas electron animation
function useElectronCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawnParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        life: 0,
        maxLife: 120 + Math.random() * 180,
      });
    };

    for (let i = 0; i < 40; i++) spawnParticle();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.3) spawnParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife;
        const alpha = progress < 0.1
          ? progress / 0.1
          : progress > 0.9
          ? (1 - progress) / 0.1
          : 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(27, 106, 255, ${alpha * 0.6})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i - 1; j >= 0; j--) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            const lineAlpha = (1 - dist / 80) * alpha * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(27, 106, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef]);
}

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.3, ease: EASE },
  },
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useElectronCanvas(canvasRef);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        background: 'var(--dark-1)',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Radial overlays */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(27,106,255,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,207,255,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Grain */}
      <div className="hero-grain" />

      {/* Main content */}
      <div
        style={{
          flex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '100px',
          paddingBottom: '120px',
          gap: '4rem',
          position: 'relative',
          zIndex: 1,
        }}
        className="hero-inner-layout"
      >
        {/* Left: Text */}
        <div style={{ flex: '1 1 0', minWidth: 0 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--electric)',
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--electric)" aria-hidden="true">
              <path d="M6 0C2.686 0 0 2.686 0 6s2.686 6 6 6 6-2.686 6-6S9.314 0 6 0zm0 10.5A4.5 4.5 0 1 1 6 1.5a4.5 4.5 0 0 1 0 9z"/>
            </svg>
            {HERO.location}
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--off-white)',
              margin: '0 0 1.5rem',
            }}
          >
            {HERO.headline.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>
                {i === 1 ? (
                  <>
                    Aber wir bauen
                  </>
                ) : i === 2 ? (
                  <span style={{ color: 'var(--electric)' }}>{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            style={{
              color: 'var(--gray-lt)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: '0 0 2.5rem',
            }}
          >
            {HERO.subtext}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.55}
            variants={fadeUp}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="#kontakt"
              style={{
                background: 'var(--electric)',
                color: '#fff',
                textDecoration: 'none',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: 'var(--shadow-blue)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-block',
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
              {HERO.ctaPrimary}
            </a>
            <a
              href="#leistungen"
              style={{
                border: '1px solid var(--border-3)',
                color: 'var(--off-white)',
                textDecoration: 'none',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '0.95rem',
                background: 'rgba(255,255,255,0.03)',
                transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-3)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.transform = '';
              }}
            >
              {HERO.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Right: Cable cross-section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
          style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}
          className="hero-visual-side"
        >
          <div
            style={{
              position: 'relative',
              width: '220px',
              height: '220px',
              background: 'rgba(17,19,24,0.8)',
              border: '1px solid var(--border-2)',
              borderRadius: '50%',
              boxShadow: 'var(--shadow-float)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '200px', height: '200px' }}
            >
              <defs>
                <filter id="glow-conductor">
                  <feGaussianBlur stdDeviation="3" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-core">
                  <feGaussianBlur stdDeviation="6" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <radialGradient id="conductorGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60A8FF" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#1B6AFF" stopOpacity="0.1"/>
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="94" className="cc-jacket"/>
              <circle cx="100" cy="100" r="80" className="cc-armor"/>
              <circle cx="100" cy="100" r="66" className="cc-screen"/>
              <circle cx="100" cy="100" r="50" className="cc-insulation"/>
              <circle cx="100" cy="100" r="34" className="cc-semi"/>
              <circle cx="100" cy="100" r="22" fill="url(#conductorGrad)"/>
              <circle cx="100" cy="100" r="22" className="cc-conductor" filter="url(#glow-conductor)"/>
              <circle cx="100" cy="100" r="8" className="cc-core" fill="#1B6AFF" filter="url(#glow-core)"/>
            </svg>

            {/* Label */}
            <div
              style={{
                position: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--dark-3)',
                border: '1px solid var(--border-2)',
                borderRadius: '4px',
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.72rem',
                color: 'var(--gray-lt)',
                letterSpacing: '0.08em',
              }}
            >
              <span
                className="live-blink"
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--live)',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              NYY-J · Querschnitt
            </div>
          </div>

          {/* Specs table */}
          <div
            style={{
              marginTop: '1.5rem',
              background: 'rgba(17,19,24,0.7)',
              border: '1px solid var(--border-2)',
              borderRadius: '8px',
              overflow: 'hidden',
              width: '220px',
            }}
          >
            {HERO.cableSpecs.map((spec, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.6rem 1rem',
                  borderBottom: i < HERO.cableSpecs.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '0.72rem',
                    color: 'var(--gray)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {spec.key}
                </span>
                {spec.isLive ? (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '0.72rem',
                      color: 'var(--live)',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                    }}
                  >
                    <span
                      className="live-blink"
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--live)',
                        display: 'inline-block',
                      }}
                    />
                    {spec.val}
                  </span>
                ) : (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '0.72rem',
                      color: 'var(--off-white)',
                      fontWeight: 500,
                    }}
                  >
                    {spec.val}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom stat bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid var(--border)',
          background: 'rgba(6,7,9,0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            height: '64px',
          }}
          className="stat-bar-layout"
        >
          {HERO.stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <strong
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--electric)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.value}
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--gray)', letterSpacing: '0.04em' }}>
                  {s.label}
                </span>
              </div>
              {i < HERO.stats.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    height: '32px',
                    background: 'var(--border-2)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-visual-side { display: none !important; }
          .hero-inner-layout { padding-top: 120px !important; padding-bottom: 140px !important; }
        }
        @media (max-width: 600px) {
          .stat-bar-layout { gap: 0; }
        }
      `}</style>
    </section>
  );
}
