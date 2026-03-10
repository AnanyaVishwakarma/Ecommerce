import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Navbar({ cartItems, onCartClick, onSearchClick }) {
  return (
    <nav style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e8e8e6',
      padding: '1.5rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '1.375rem',
          fontWeight: 600,
          letterSpacing: '-0.5px',
          color: '#1a1a18'
        }}>
          STORE
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <button
            onClick={onSearchClick}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              fontSize: '0.85rem',
              color: '#7a7a78',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#1a1a18'}
            onMouseLeave={(e) => e.target.style.color = '#7a7a78'}
          >
            Search
          </button>

          <button
            onClick={onCartClick}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#7a7a78',
              transition: 'color 0.2s',
              position: 'relative'
            }}
            onMouseEnter={(e) => e.target.style.color = '#1a1a18'}
            onMouseLeave={(e) => e.target.style.color = '#7a7a78'}
          >
            <ShoppingCart size={20} />
            {cartItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-6px',
                backgroundColor: '#1a1a18',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600
              }}>
                {cartItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}