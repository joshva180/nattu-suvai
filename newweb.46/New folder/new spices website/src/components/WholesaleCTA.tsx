import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export function WholesaleCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-green" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />

      {/* Decorative borders */}
      <div className="absolute top-4 left-4 right-4 bottom-4 border border-brand-gold/20 rounded-3xl pointer-events-none" />
      <div className="absolute top-8 left-8 right-8 bottom-8 border border-brand-gold/10 rounded-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <motion.div
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
            duration: 0.7
          }}>
          
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-brand-cream mb-6">
            Looking for Bulk Spices?
          </h2>
          <p className="text-xl text-brand-cream/80 mb-12 max-w-2xl mx-auto">
            We supply premium spices to restaurants, supermarkets, and exporters
            across India at highly competitive wholesale rates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-brand-gold mb-2">
                500+
              </div>
              <div className="text-brand-cream/80 text-sm uppercase tracking-wider">
                Wholesale Clients
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-brand-gold mb-2">50+</div>
              <div className="text-brand-cream/80 text-sm uppercase tracking-wider">
                Spice Varieties
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl font-bold text-brand-gold mb-2">15+</div>
              <div className="text-brand-cream/80 text-sm uppercase tracking-wider">
                Years Experience
              </div>
            </div>
          </div>

          <Link
            to="/wholesale"
            className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-brand-orange/20 hover:-translate-y-1">
            
            Request Wholesale Price
          </Link>
        </motion.div>
      </div>
    </section>);

}