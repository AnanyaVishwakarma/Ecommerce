import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '3rem 2rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2.5rem'
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}