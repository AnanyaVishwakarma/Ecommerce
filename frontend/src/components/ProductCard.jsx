import React, { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.04)'
      }}
    >
      {/* Image Container */}
      <div style={{
        width: '100%',
        aspectRatio: '1',
        overflow: 'hidden',
        borderRadius: '8px',
        backgroundColor: '#f5f5f3',
        marginBottom: '1rem',
        position: 'relative'
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop';
          }}
        />
      </div>

      {/* Product Info */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{
          fontSize: '0.95rem',
          fontWeight: 500,
          color: '#1a1a18',
          margin: '0 0 0.5rem 0',
          lineHeight: 1.4
        }}>
          {product.name}
        </h3>
        <p style={{
          fontSize: '0.9rem',
          color: '#7a7a78',
          margin: '0 0 1rem 0',
          flex: 1
        }}>
          ${product.price}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: isHovered ? '#1a1a18' : '#f5f5f3',
            color: isHovered ? 'white' : '#1a1a18',
            border: '1px solid #e8e8e6',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            letterSpacing: '0.3px'
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}