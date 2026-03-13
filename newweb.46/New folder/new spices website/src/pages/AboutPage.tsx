import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
export function AboutPage() {
  return (
    <PageTransition>
      <main className="pt-28 pb-24 bg-brand-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="font-heading text-5xl md:text-6xl font-bold text-brand-green mb-6">
              
              Our Story
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.1
              }}
              className="text-xl text-brand-brown/70 max-w-3xl mx-auto leading-relaxed">
              
              Rooted in tradition, driven by quality. We are on a mission to
              bring the authentic flavors of Indian spices to the world.
            </motion.p>
          </div>

          {/* Content Sections */}
          <div className="space-y-24">
            {/* Section 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-emerald-900 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                  🌱
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}>
                
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green mb-6">
                  Who We Are
                </h2>
                <p className="text-brand-brown/80 text-lg leading-relaxed mb-6">
                  Ellakai Spices began with a simple vision: to bridge the gap
                  between hardworking spice farmers in India and culinary
                  enthusiasts worldwide. Based in Kochi, the historic spice
                  capital of the world, we have deep roots in the spice trade.
                </p>
                <p className="text-brand-brown/80 text-lg leading-relaxed">
                  We are not just traders; we are curators of flavor. Our team
                  travels across Kerala, Karnataka, and Rajasthan to handpick
                  the finest harvests, ensuring that every pod, seed, and grain
                  meets our exacting standards.
                </p>
              </motion.div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl md:order-2">
                
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-amber-700 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                  🤝
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                className="md:order-1">
                
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green mb-6">
                  Farmer Partnerships
                </h2>
                <p className="text-brand-brown/80 text-lg leading-relaxed mb-6">
                  Our relationship with our farmers goes beyond mere
                  transactions. We believe in fair trade and sustainable
                  agriculture. By cutting out middlemen, we ensure that farmers
                  receive a premium price for their premium produce.
                </p>
                <p className="text-brand-brown/80 text-lg leading-relaxed">
                  We work closely with farming cooperatives to promote organic
                  farming practices, ensuring the land remains fertile for
                  generations to come while producing spices that are pure,
                  potent, and chemical-free.
                </p>
              </motion.div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold to-yellow-600 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                  ✨
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}>
                
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green mb-6">
                  Quality Standards
                </h2>
                <p className="text-brand-brown/80 text-lg leading-relaxed mb-6">
                  Quality is the cornerstone of Ellakai Spices. From the moment
                  the spices are harvested to the time they are sealed in our
                  food-grade packaging, they undergo rigorous quality checks.
                </p>
                <p className="text-brand-brown/80 text-lg leading-relaxed">
                  We utilize modern sortex cleaning technology combined with
                  traditional hand-sorting to ensure zero impurities. Our
                  vacuum-sealed packaging locks in the volatile essential oils,
                  guaranteeing that the aroma hits you the moment you open a
                  pack.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>);

}