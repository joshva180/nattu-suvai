import React from 'react';
import { motion } from 'framer-motion';
import {
  LeafIcon,
  AwardIcon,
  TagIcon,
  PackageIcon,
  TruckIcon } from
'lucide-react';
export function WhyChooseUs() {
  const features = [
  {
    icon: <LeafIcon className="w-8 h-8" />,
    title: 'Farm Direct Sourcing',
    description:
    'Sourced directly from farmers in Kerala, Karnataka & Rajasthan'
  },
  {
    icon: <AwardIcon className="w-8 h-8" />,
    title: 'Premium Quality',
    description: 'Rigorous quality checks at every stage of processing'
  },
  {
    icon: <TagIcon className="w-8 h-8" />,
    title: 'Best Wholesale Pricing',
    description: 'Competitive bulk pricing for businesses and restaurants'
  },
  {
    icon: <PackageIcon className="w-8 h-8" />,
    title: 'Fresh Packaging',
    description: 'Vacuum-sealed packaging for maximum freshness and aroma'
  },
  {
    icon: <TruckIcon className="w-8 h-8" />,
    title: 'Fast Delivery',
    description: 'Reliable Pan-India and international delivery network'
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
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
            className="font-heading text-3xl md:text-4xl font-bold text-brand-green mb-4">
            
            Why Choose Ellakai Spices
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
            className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) =>
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
            className="flex flex-col items-center text-center group">
            
              <div className="w-20 h-20 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-brand-cream transition-colors duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-brand-green mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-brand-brown/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}