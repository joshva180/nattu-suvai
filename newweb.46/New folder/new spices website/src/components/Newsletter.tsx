import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon } from 'lucide-react';
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('submitted');
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
      }, 3000);
    }
  };
  return (
    <section className="py-20 bg-[#EFEBE4]">
      <div className="max-w-4xl mx-auto px-4 text-center">
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
          }}>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-green mb-4">
            Get Spice Market Updates
          </h2>
          <p className="text-brand-brown/70 mb-8 text-lg">
            Subscribe for wholesale pricing updates, seasonal harvest offers,
            and expert spice tips.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-full border border-brand-green/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-transparent transition-all" />
              
              <button
                type="submit"
                disabled={status === 'submitted'}
                className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                
                {status === 'submitted' ?
                'Subscribed!' :

                <>
                    Subscribe <SendIcon className="w-4 h-4" />
                  </>
                }
              </button>
            </div>
            <p className="text-xs text-brand-brown/50 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </motion.div>
      </div>
    </section>);

}