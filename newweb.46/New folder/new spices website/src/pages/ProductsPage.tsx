import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/mockData';
export function ProductsPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const categories = [
  'all',
  'Whole Spices',
  'Ground Spices',
  'Premium Export Spices'];

  // Filter and sort logic
  let filteredProducts = products.filter((p) => {
    const matchesCategory =
    category === 'all' ||
    p.category.toLowerCase().includes(category.toLowerCase());
    const matchesSearch =
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name-a-z') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
  return (
    <PageTransition>
      <main className="pt-28 pb-24 bg-brand-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-green mb-4">
              Our Spice Collection
            </h1>
            <p className="text-brand-brown/70 max-w-2xl mx-auto">
              Explore our range of premium, hand-picked spices sourced directly
              from the finest farms in India.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 shrink-0 space-y-8">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search spices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-green/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/50" />
                
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-brown/40" />
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-2xl border border-brand-green/5 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-brand-green mb-4 flex items-center gap-2">
                  <FilterIcon className="w-5 h-5" /> Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((cat) =>
                  <label
                    key={cat}
                    className="flex items-center gap-3 cursor-pointer group">
                    
                      <input
                      type="radio"
                      name="category"
                      checked={category === cat}
                      onChange={() => setCategory(cat)}
                      className="w-4 h-4 text-brand-orange focus:ring-brand-orange border-gray-300" />
                    
                      <span
                      className={`text-sm transition-colors ${category === cat ? 'text-brand-orange font-medium' : 'text-brand-brown/70 group-hover:text-brand-green'}`}>
                      
                        {cat === 'all' ? 'All Spices' : cat}
                      </span>
                    </label>
                  )}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white p-4 rounded-2xl border border-brand-green/5 shadow-sm gap-4">
                <p className="text-sm text-brand-brown/70 font-medium">
                  Showing{' '}
                  <span className="text-brand-green font-bold">
                    {filteredProducts.length}
                  </span>{' '}
                  products
                </p>
                <div className="flex items-center gap-3">
                  <label htmlFor="sort" className="text-sm text-brand-brown/70">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-brand-cream border border-brand-green/20 text-brand-green text-sm rounded-lg focus:ring-brand-green focus:border-brand-green block p-2 outline-none">
                    
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-a-z">Name: A to Z</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ?
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) =>
                <motion.div
                  key={product.id}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05
                  }}>
                  
                      <ProductCard product={product} />
                    </motion.div>
                )}
                </div> :

              <div className="text-center py-20 bg-white rounded-3xl border border-brand-green/5">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="font-heading text-2xl font-bold text-brand-green mb-2">
                    No products found
                  </h3>
                  <p className="text-brand-brown/60">
                    Try adjusting your search or filter criteria.
                  </p>
                  <button
                  onClick={() => {
                    setCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-6 text-brand-orange font-medium hover:underline">
                  
                    Clear all filters
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </main>
    </PageTransition>);

}