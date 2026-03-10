import React from 'react';

export default function LoadingState() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 120px)',
      padding: '2rem'
    }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2.5rem',
        width: '100%',
        maxWidth: '1400px',
        padding: '0 2rem'
      }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              width: '100%',
              aspectRatio: '1',
              backgroundColor: '#e8e8e6',
              borderRadius: '8px',
              marginBottom: '1rem',
              animation: 'pulse 2s infinite'
            }} />
            <div style={{
              height: '1rem',
              backgroundColor: '#e8e8e6',
              borderRadius: '4px',
              marginBottom: '0.5rem',
              animation: 'pulse 2s infinite',
              animationDelay: '0.1s'
            }} />
            <div style={{
              height: '0.875rem',
              backgroundColor: '#e8e8e6',
              borderRadius: '4px',
              width: '60%',
              animation: 'pulse 2s infinite',
              animationDelay: '0.2s'
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}