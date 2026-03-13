import React from 'react';
import { Link } from 'react-router-dom';
import {
  LeafIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brand-green text-brand-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <LeafIcon className="w-8 h-8 text-brand-gold" />
              <span className="font-heading text-2xl font-bold text-brand-cream tracking-tight">
                Ellakai{' '}
                <span className="text-brand-gold font-normal italic">
                  Spices
                </span>
              </span>
            </Link>
            <p className="text-brand-cream/80 text-sm leading-relaxed">
              Premium quality Indian spices sourced directly from farmers.
              Supplying wholesale and retail customers globally with unmatched
              freshness and aroma.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-brand-gold">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/wholesale"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  Wholesale Supply
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  Spice Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-brand-gold">
              Our Spices
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/products"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  Premium Cardamom
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  Black Pepper
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  Whole Cloves
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  Cumin & Fennel
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-brand-cream/80 hover:text-brand-gold transition-colors text-sm">
                  
                  Export Quality Packs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6 text-brand-gold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-brand-cream/80 text-sm">
                  123 Spice Market Road,
                  <br />
                  Willingdon Island, Kochi,
                  <br />
                  Kerala 682003, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-brand-cream/80 text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-brand-cream/80 text-sm">
                  wholesale@ellakaispices.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-cream/60 text-sm">
            &copy; {new Date().getFullYear()} Ellakai Spices. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-brand-cream/60 text-sm">
            <span>Designed with</span>
            <span className="text-brand-orange">♥</span>
            <span>for spice lovers</span>
          </div>
        </div>
      </div>
    </footer>);

}