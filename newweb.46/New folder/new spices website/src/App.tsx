import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { WholesalePage } from './pages/WholesalePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
export function App() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-cream">
        <Header cartCount={cartCount} />

        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route
                path="/product/:id"
                element={<ProductDetailPage addToCart={addToCart} />} />
              
              <Route path="/wholesale" element={<WholesalePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch all route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </Router>);

}