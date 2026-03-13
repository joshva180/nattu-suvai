import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { blogPosts } from '../data/mockData';
export function BlogPage() {
  return (
    <PageTransition>
      <main className="pt-28 pb-24 bg-brand-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="font-heading text-4xl md:text-6xl font-bold text-brand-green mb-6">
              
              Spice Journal
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
              className="text-xl text-brand-brown/70 max-w-2xl mx-auto">
              
              Insights, recipes, and stories from the world of premium Indian
              spices.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) =>
            <motion.article
              key={post.id}
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-green/5 flex flex-col group">
              
                <div
                className={`aspect-video bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-green uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <span className="text-sm text-brand-brown/50 mb-3">
                    {post.date}
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-brand-green mb-4 group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-brand-brown/70 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                  to={`#`}
                  className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-green transition-colors mt-auto">
                  
                    Read Article <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </main>
    </PageTransition>);

}