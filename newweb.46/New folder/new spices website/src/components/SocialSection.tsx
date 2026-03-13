import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon } from 'lucide-react';
export function SocialSection() {
  const posts = [
  {
    gradient: 'from-green-600 to-emerald-800'
  },
  {
    gradient: 'from-amber-500 to-orange-700'
  },
  {
    gradient: 'from-slate-700 to-gray-900'
  },
  {
    gradient: 'from-yellow-500 to-amber-600'
  },
  {
    gradient: 'from-red-700 to-rose-900'
  },
  {
    gradient: 'from-lime-600 to-green-800'
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
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
            className="flex items-center justify-center gap-3 mb-4">
            
            <InstagramIcon className="w-8 h-8 text-brand-orange" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green">
              Follow Our Spice Journey
            </h2>
          </motion.div>
          <a href="#" className="text-brand-orange font-medium hover:underline">
            @ellakaiSpices
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) =>
          <motion.a
            key={index}
            href="#"
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="group relative aspect-square rounded-2xl overflow-hidden block">
            
              <div
              className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-80`} />
            
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </section>);

}