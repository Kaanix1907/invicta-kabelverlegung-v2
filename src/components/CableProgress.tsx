'use client';

import { useEffect, useRef } from 'react';

export default function CableProgress() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (fillRef.current) {
        fillRef.current.style.height = `${pct}%`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="cable-progress cable-progress-desktop" aria-hidden="true">
        <div className="cp-node" />
        <div className="cp-track">
          <div className="cp-fill" ref={fillRef} />
          <div className="cp-electron" />
        </div>
        <div className="cp-node" />
      </div>
      <style>{`
        @media (max-width: 768px) { .cable-progress-desktop { display: none !important; } }
      `}</style>
    </>
  );
}
