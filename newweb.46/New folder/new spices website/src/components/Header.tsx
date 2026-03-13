import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
  LeafIcon,
  MessageCircleIcon } from
'lucide-react';
interface HeaderProps {
  cartCount: number;
}
export function Header({ cartCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'Wholesale',
    path: '/wholesale'
  },
  {
    name: 'About Us',
    path: '/about'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <LeafIcon className="w-8 h-8 text-brand-green group-hover:text-brand-orange transition-colors" />
            <span className="font-heading text-2xl font-bold text-brand-green tracking-tight">
              Ellakai{' '}
              <span className="text-brand-orange font-normal italic">
                Spices
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-brand-orange ${isActive ? 'text-brand-orange' : 'text-brand-green'}`
              }>
              
                {link.name}
              </NavLink>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              className="text-brand-green hover:text-brand-orange transition-colors"
              aria-label="Search">
              
              <SearchIcon className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative text-brand-green hover:text-brand-orange transition-colors"
              aria-label="Cart">
              
              <ShoppingCartIcon className="w-5 h-5" />
              {cartCount > 0 &&
              <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              }
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-green hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp Order">
              
              <MessageCircleIcon className="w-5 h-5" />
            </a>
            <Link
              to="/wholesale"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md">
              
              Get Wholesale Price
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link to="/cart" className="relative text-brand-green">
              <ShoppingCartIcon className="w-6 h-6" />
              {cartCount > 0 &&
              <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              }
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-brand-green p-1"
              aria-label="Open Menu">
              
              <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-brand-green/40 backdrop-blur-sm z-[60] lg:hidden" />
          
            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-brand-cream z-[70] shadow-2xl flex flex-col lg:hidden">
            
              <div className="p-5 flex items-center justify-between border-b border-brand-green/10">
                <span className="font-heading text-xl font-bold text-brand-green">
                  Menu
                </span>
                <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-green p-1 bg-brand-green/5 rounded-full hover:bg-brand-green/10 transition-colors">
                
                  <XIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-6">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) =>
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                  `text-lg font-medium py-2 border-b border-brand-green/5 ${isActive ? 'text-brand-orange' : 'text-brand-green'}`
                  }>
                  
                      {link.name}
                    </NavLink>
                )}
                </nav>

                <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-brand-green/10">
                  <a
                  href="https://wa.me/1234567890"
                  className="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] py-3 rounded-xl font-medium">
                  
                    <MessageCircleIcon className="w-5 h-5" />
                    Order via WhatsApp
                  </a>
                  <Link
                  to="/wholesale"
                  className="flex items-center justify-center bg-brand-orange text-white py-3 rounded-xl font-medium shadow-md">
                  
                    Get Wholesale Price
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

}