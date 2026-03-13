import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-green">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-green/90 to-transparent" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-brand-gold/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}>
            
            <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-sm font-semibold tracking-wider uppercase mb-6">
              Export Quality Indian Spices
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-brand-cream leading-tight mb-6">
              Premium Quality Spices <br />
              <span className="text-brand-gold italic font-normal">
                Direct From Farmers
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-cream/80 mb-10 max-w-2xl leading-relaxed">
              Wholesale Cardamom & Natural Spices — Sourced from India's finest
              farms. Elevate your culinary creations with our aromatic,
              hand-picked selection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/products"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full text-center font-medium transition-all shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-1">
                
                Explore Products
              </Link>
              <Link
                to="/wholesale"
                className="bg-transparent border-2 border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-green px-8 py-4 rounded-full text-center font-medium transition-all">
                
                Get Wholesale Price
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-brand-cream/20">
              {[
              '100% Natural',
              'Farm Direct',
              'Premium Grade',
              'Fast Delivery'].
              map((badge, index) =>
              <motion.div
                key={badge}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1
                }}
                className="flex items-center gap-2 text-brand-cream/90">
                
                  <CheckCircle2Icon className="w-5 h-5 text-brand-gold" />
                  <span className="text-sm font-medium">{badge}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}