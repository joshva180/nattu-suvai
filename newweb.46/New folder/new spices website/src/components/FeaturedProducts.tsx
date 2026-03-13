import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { products } from '../data/mockData';
import { ArrowRightIcon } from 'lucide-react';
export function FeaturedProducts() {
  // Take first 4 products for featured section
  const featuredProducts = products.slice(0, 4);
  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-green mb-4">
              Our Premium Spices
            </h2>
            <div className="w-24 h-1 bg-brand-gold rounded-full"></div>
            <p className="text-brand-brown/70 mt-6 max-w-2xl text-lg">
              Discover our hand-picked selection of the finest Indian spices,
              renowned for their exceptional aroma, flavor, and color.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-green transition-colors group">
              
              View All Products
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) =>
          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
            
              <ProductCard product={product} />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}