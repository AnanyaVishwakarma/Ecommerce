import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import LoadingState from './components/LoadingState';
import EmptyState from './components/EmptyState';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'clothing', label: 'Clothing' },
    { id: 'home', label: 'Home' },
    { id: 'beauty', label: 'Beauty' },
  ];

  const products = [
    { id: 1, name: 'Minimalist Watch', price: 149, category: 'electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop' },
    { id: 2, name: 'Cotton T-Shirt', price: 29, category: 'clothing', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop' },
    { id: 3, name: 'Ceramic Vase', price: 85, category: 'home', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop' },
    { id: 4, name: 'Skincare Set', price: 64, category: 'beauty', image: 'https://images.unsplash.com/photo-1596401643114-07e8eb3f8f5e?w=500&h=500&fit=crop' },
    { id: 5, name: 'Wireless Earbuds', price: 129, category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop' },
    { id: 6, name: 'Linen Pants', price: 78, category: 'clothing', image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop' },
    { id: 7, name: 'Wood Shelf', price: 120, category: 'home', image: 'https://images.unsplash.com/photo-1594139831558-6ba0f8a3af20?w=500&h=500&fit=crop' },
    { id: 8, name: 'Face Cream', price: 42, category: 'beauty', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };

  const handleSimulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleShowEmpty = () => {
    setShowEmpty(!showEmpty);
  };

  return (
    <div style={{
      backgroundColor: '#fafaf8',
      minHeight: '100vh',
      fontFamily: "'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <Navbar
        cartItems={cartItems}
        onCartClick={handleShowEmpty}
        onSearchClick={handleSimulateLoading}
      />

      {showEmpty ? (
        <EmptyState onClose={handleShowEmpty} />
      ) : loading ? (
        <LoadingState />
      ) : (
        <>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </>
      )}
    </div>
  );
}