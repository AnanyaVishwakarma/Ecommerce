import React from 'react';
import { ShoppingCart, X } from 'lucide-react';

export default function EmptyState({ onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '2rem',
      animation: 'fadeIn 0.2s ease'
    }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '3rem',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 20px 25px rgba(0,0,0,0.1)',
        animation: 'slideUp 0.3s ease',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#a8a8a6',
            padding: '0.5rem',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#1a1a18'}
          onMouseLeave={(e) => e.target.style.color = '#a8a8a6'}
        >
          <X size={20} />
        </button>

        <div style={{
          textAlign: 'center'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#f5f5f3',
            borderRadius: '8px',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ShoppingCart size={32} color="#a8a8a6" />
          </div>

          <h2 style={{
            fontSize: '1.375rem',
            fontWeight: 600,
            color: '#1a1a18',
            margin: '0 0 0.75rem 0'
          }}>
            Your cart is empty
          </h2>

          <p style={{
            fontSize: '0.95rem',
            color: '#7a7a78',
            margin: '0 0 2rem 0',
            lineHeight: 1.6
          }}>
            Add some items to get started. Browse our collection above.
          </p>

          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '0.875rem',
              backgroundColor: '#1a1a18',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '0.95rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              letterSpacing: '0.3px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2a2a28'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1a1a18'}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}