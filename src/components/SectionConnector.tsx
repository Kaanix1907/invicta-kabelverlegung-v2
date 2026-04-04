export default function SectionConnector() {
  return (
    <div aria-hidden="true" style={{ background: 'var(--dark-1)', padding: '0 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0', height: '32px' }}>
          <div className="sc-node" />
          <svg style={{ flex: 1, height: '2px' }} preserveAspectRatio="none">
            <path d="M0 1 H1000" className="sc-line" />
          </svg>
          <div className="sc-node" />
        </div>
      </div>
    </div>
  );
}
