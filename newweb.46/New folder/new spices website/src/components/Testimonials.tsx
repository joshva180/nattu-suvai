import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, QuoteIcon } from 'lucide-react';
export function Testimonials() {
  const reviews = [
  {
    quote:
    "The cardamom quality is exceptional. Best wholesale supplier we've worked with in years.",
    name: 'Rajesh Kumar',
    title: 'Restaurant Owner',
    rating: 5
  },
  {
    quote:
    'Consistent quality and fair pricing. Ellakai is our go-to spice supplier for all outlets.',
    name: 'Priya Sharma',
    title: 'Supermarket Chain Buyer',
    rating: 5
  },
  {
    quote:
    'Fresh, aromatic spices delivered on time. Highly recommend for bulk export orders.',
    name: 'Mohammed Ali',
    title: 'Export Business',
    rating: 5
  },
  {
    quote:
    "The best black pepper I've sourced in 20 years of cooking. Truly premium grade.",
    name: 'Chef Ananya Rao',
    title: 'Fine Dining Chef',
    rating: 5
  }];

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-green/5 rounded-b-[100px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="font-heading text-3xl md:text-5xl font-bold text-brand-green mb-4">
            
            What Our Customers Say
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) =>
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
            }}
            whileHover={{
              y: -10,
              rotate: index % 2 === 0 ? 1 : -1
            }}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-green/5 relative">
            
              <QuoteIcon className="absolute top-6 right-6 w-10 h-10 text-brand-green/10" />

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) =>
              <StarIcon
                key={i}
                className="w-5 h-5 fill-brand-gold text-brand-gold" />

              )}
              </div>

              <p className="text-brand-brown/80 mb-8 italic leading-relaxed relative z-10">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green to-brand-green/80 flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-green">
                    {review.name}
                  </h4>
                  <p className="text-xs text-brand-brown/60 uppercase tracking-wider">
                    {review.title}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}