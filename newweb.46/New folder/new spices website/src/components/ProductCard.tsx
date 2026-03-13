import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../data/mockData';
interface ProductCardProps {
  product: Product;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8
      }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-brand-green/5 flex flex-col h-full group">
      
      <Link
        to={`/product/${product.id}`}
        className="block relative aspect-square overflow-hidden">
        
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-7xl drop-shadow-lg"
            whileHover={{
              scale: 1.1,
              rotate: 5
            }}
            transition={{
              type: 'spring',
              stiffness: 300
            }}>
            
            {product.icon}
          </motion.span>
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-green uppercase tracking-wider">
          {product.category.split(' ')[0]}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-heading text-xl font-bold text-brand-green group-hover:text-brand-orange transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>

        <p className="text-sm text-brand-brown/70 mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-green/10">
          <div className="flex flex-col">
            <span className="text-xs text-brand-brown/60 uppercase tracking-wider font-semibold">
              Price
            </span>
            <span className="text-lg font-bold text-brand-orange">
              ₹{product.price}
              <span className="text-sm font-normal text-brand-brown/60">
                /kg
              </span>
            </span>
          </div>
          <Link
            to={`/product/${product.id}`}
            className="bg-brand-green/5 hover:bg-brand-green text-brand-green hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            
            View
          </Link>
        </div>
      </div>
    </motion.div>);

}