import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  ClockIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
export function ContactPage() {
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
              
              Get in Touch
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
              
              Have a question about our spices or need help with an order? We're
              here to help.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-green/5">
                <h3 className="font-heading text-2xl font-bold text-brand-green mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-1">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1">
                        Head Office
                      </h4>
                      <p className="text-brand-brown/70 text-sm leading-relaxed">
                        123 Spice Market Road,
                        <br />
                        Willingdon Island, Kochi,
                        <br />
                        Kerala 682003, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-1">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1">Phone</h4>
                      <p className="text-brand-brown/70 text-sm">
                        +91 98765 43210
                      </p>
                      <p className="text-brand-brown/70 text-sm">
                        +91 484 2345678
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-1">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1">Email</h4>
                      <p className="text-brand-brown/70 text-sm">
                        hello@ellakaispices.com
                      </p>
                      <p className="text-brand-brown/70 text-sm">
                        wholesale@ellakaispices.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-1">
                      <ClockIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green mb-1">
                        Business Hours
                      </h4>
                      <p className="text-brand-brown/70 text-sm">
                        Mon - Sat: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-brand-brown/70 text-sm">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-brand-green/10">
                  <a
                    href="https://wa.me/1234567890"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white py-3 rounded-xl font-medium transition-colors">
                    
                    <MessageCircleIcon className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-green/5">
                <h2 className="font-heading text-3xl font-bold text-brand-green mb-8">
                  Send us a Message
                </h2>

                {formStatus === 'success' ?
                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  className="text-center py-12">
                  
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircleIcon className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-brand-green mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-brand-brown/70 mb-8">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                    onClick={() => setFormStatus('idle')}
                    className="text-brand-orange font-medium hover:underline">
                    
                      Send another message
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
                          Email Address *
                        </label>
                        <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" />
                      
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                          Phone Number
                        </label>
                        <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" />
                      
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                          Subject *
                        </label>
                        <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all bg-white">
                        
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="order">Order Status</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="support">Customer Support</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-brown/80 mb-2">
                        Message *
                      </label>
                      <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-brand-green/20 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all resize-none">
                    </textarea>
                    </div>

                    <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full md:w-auto px-10 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70">
                    
                      {formStatus === 'submitting' ?
                    'Sending...' :
                    'Send Message'}
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