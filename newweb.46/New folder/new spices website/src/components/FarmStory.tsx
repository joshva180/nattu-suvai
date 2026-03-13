import React from 'react';
import { motion } from 'framer-motion';
export function FarmStory() {
  const steps = [
  {
    title: 'Sourced from Villages',
    description:
    'We partner directly with farming communities across South India, ensuring fair trade practices and supporting local agriculture.',
    gradient: 'from-green-600 to-emerald-800',
    icon: '🌾'
  },
  {
    title: 'Fresh Harvest',
    description:
    'Spices are harvested at peak season for maximum flavor and aroma. We never compromise on the timing of our harvest.',
    gradient: 'from-amber-500 to-orange-600',
    icon: '☀️'
  },
  {
    title: 'Natural Processing',
    description:
    'Traditional sun-drying and hand-sorting methods preserve quality, essential oils, and the natural color of the spices.',
    gradient: 'from-yellow-600 to-amber-800',
    icon: '🤲'
  },
  {
    title: 'Delivered to You',
    description:
    'Carefully packaged in food-grade materials and shipped fresh to your doorstep or warehouse globally.',
    gradient: 'from-brand-green to-slate-800',
    icon: '📦'
  }];

  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
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
            
            From Farm to Customer
          </motion.h2>
          <motion.p
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
            transition={{
              delay: 0.2
            }}
            className="text-brand-brown/70 max-w-2xl mx-auto text-lg">
            
            Discover the journey of our spices, handled with care at every step
            to bring you the authentic taste of India.
          </motion.p>
        </div>

        <div className="space-y-24 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-green/10 -translate-x-1/2" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Image Side */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? -50 : 50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-100px'
                  }}
                  transition={{
                    duration: 0.7
                  }}
                  className="w-full md:w-1/2">
                  
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-90 group-hover:scale-105 transition-transform duration-700`} />
                    
                    <div className="absolute inset-0 flex items-center justify-center text-8xl drop-shadow-2xl">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? 50 : -50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-100px'
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2
                  }}
                  className={`w-full md:w-1/2 relative ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  
                  {/* Timeline Dot */}
                  <div
                    className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-cream border-4 border-brand-green items-center justify-center font-bold text-brand-green z-10 ${isEven ? '-left-[3.5rem]' : '-right-[3.5rem]'}`}>
                    
                    {index + 1}
                  </div>

                  <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2 block">
                    Step 0{index + 1}
                  </span>
                  <h3 className="font-heading text-3xl font-bold text-brand-green mb-4">
                    {step.title}
                  </h3>
                  <p className="text-brand-brown/80 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}