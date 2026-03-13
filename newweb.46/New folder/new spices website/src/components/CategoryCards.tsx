import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export function CategoryCards() {
  const categories = [
  {
    title: 'Whole Spices',
    description:
    'Pure, unground spices for authentic flavor and long shelf life.',
    gradient: 'from-amber-700 to-orange-900',
    link: '/products?category=whole'
  },
  {
    title: 'Ground Spices',
    description: 'Freshly ground powders for convenience and instant aroma.',
    gradient: 'from-yellow-600 to-amber-800',
    link: '/products?category=ground'
  },
  {
    title: 'Premium Export Spices',
    description: 'Export-grade quality meeting international standards.',
    gradient: 'from-brand-green to-emerald-900',
    link: '/products?category=premium'
  },
  {
    title: 'Bulk Wholesale Packs',
    description:
    'Cost-effective bulk packaging for restaurants and businesses.',
    gradient: 'from-slate-700 to-brand-brown',
    link: '/wholesale'
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, index) =>
          <motion.div
            key={index}
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
            
              <Link
              to={cat.link}
              className="group relative block h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
              
                <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
              
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <motion.div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading text-3xl font-bold text-white mb-3">
                      {cat.title}
                    </h3>
                    <p className="text-white/80 text-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {cat.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-brand-gold font-semibold uppercase tracking-wider text-sm">
                      Explore Category
                      <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}