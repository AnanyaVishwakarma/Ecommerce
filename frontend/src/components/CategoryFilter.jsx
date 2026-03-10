import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '2.5rem 2rem',
      borderBottom: '1px solid #e8e8e6'
    }}>
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem 0',
              fontSize: '0.95rem',
              fontWeight: selectedCategory === cat.id ? 600 : 400,
              color: selectedCategory === cat.id ? '#1a1a18' : '#a8a8a6',
              cursor: 'pointer',
              transition: 'color 0.2s',
              whiteSpace: 'nowrap',
              borderBottom: selectedCategory === cat.id ? '1px solid #1a1a18' : 'transparent',
              paddingBottom: '0.75rem'
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== cat.id) {
                e.target.style.color = '#7a7a78';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== cat.id) {
                e.target.style.color = '#a8a8a6';
              }
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}