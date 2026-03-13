import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2Icon,
  TruckIcon,
  BadgePercentIcon,
  CheckCircleIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
export function WholesalePage() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success'>(
    'idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };
  return (
    <PageTransition>
      <main className="pt-28 pb-24 bg-brand-cream min-h-screen">
        {/* Hero Section */}
        <div className="bg-brand-green text-white py-20 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="font-heading text-4xl md:text-6xl font-bold mb-6 text-brand-cream">
              
              Wholesale Spice Supply
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
              className="text-xl text-brand-cream/80 max-w-2xl mx-auto">
              
              Partner with Ellakai Spices for premium quality, consistent
              supply, and competitive B2B pricing.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-green mb-8">
                Why Partner With Us?
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                    <BadgePercentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green text-xl mb-2">
                      Competitive B2B Pricing
                    </h3>
                    <p className="text-brand-brown/70">
                      Direct sourcing from farmers allows us to offer unmatched
                      wholesale rates without compromising on quality.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                    <CheckCircleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green text-xl mb-2">
                      Consistent Quality
                    </h3>
                    <p className="text-brand-brown/70">
                      Standardized grading and rigorous quality control ensure
                      you get the exact same premium quality in every batch.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                    <TruckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green text-xl mb-2">
                      Reliable Supply Chain
                    </h3>
                    <p className="text-brand-brown/70">
                      Robust logistics network ensuring timely delivery across
                      India and international markets.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                    <Building2Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green text-xl mb-2">
                      Custom Packaging
                    </h3>
                    <p className="text-brand-brown/70">
                      Bulk packaging options available from 5kg to 50kg bags,
                      tailored to your storage requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-brand-green/10 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-brand-green mb-4">
                  Minimum Order Quantity
                </h3>
                <p className="text-brand-brown/80 mb-4">
                  Our wholesale pricing starts at a minimum order quantity (MOQ)
                  of <strong className="text-brand-orange">50 kg</strong> per
                  spice variety.
                </p>
                <p className="text-sm text-brand-brown/60">
                  For smaller bulk orders (5kg - 49kg), please check the tiered
                  pricing available directly on our product pages.
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-green/5">
                <h2 className="font-heading text-3xl font-bold text-brand-green mb-2">
                  Request a Quote
                </h2>
                <p className="text-brand-brown/60 mb-8">
                  Fill out the form below and our B2B team will contact you
                  within 24 hours.
                </p>

                {formStatus === 'success' ?
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  className="text-center py-12">
                  
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircleIcon className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-brand-green mb-2">
                      Quote Request Sent!
                    </h3>
                    <p className="text-brand-brown/70 mb-8">
                      Thank you for your interest. Our wholesale team will
                      review your requirements and get back to you shortly.
                    </p>
                    <button
                    onClick={() => setFormStatus('idle')}
                    className="text-brand-orange font-medium hover:underline">
                    
                      Submit another request
                    </button>
                  </motion.div> :

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                          Full Name *
                        </label>
                        <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" />
                      
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                          Business Name *
                        </label>
                        <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" />
                      
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                          Email Address *
                        </label>
                        <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" />
                      
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                          Phone Number *
                        </label>
                        <input
                        required
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" />
                      
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                        Spices Required *
                      </label>
                      <input
                      required
                      type="text"
                      placeholder="e.g. Cardamom, Black Pepper"
                      className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" />
                    
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                        Estimated Quantity (kg) *
                      </label>
                      <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all bg-white">
                      
                        <option value="">Select quantity</option>
                        <option value="50-100">50 - 100 kg</option>
                        <option value="100-500">100 - 500 kg</option>
                        <option value="500-1000">500 - 1000 kg</option>
                        <option value="1000+">1000+ kg</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                        Additional Message
                      </label>
                      <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all resize-none">
                    </textarea>
                    </div>

                    <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70">
                    
                      {formStatus === 'submitting' ?
                    'Sending Request...' :
                    'Request Quote'}
                    </button>
                  </form>
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>);

}