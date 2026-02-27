import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if current page is Home
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Gallery', path: '/Gallery' },
    { name: 'Services', path: '/Services' },
    { name: 'Contact', path: '/Contact' },
  ];

  // LOGIC: 
  // Agar Home page hai toh scroll hone par white ho, 
  // lekin agar koi aur page hai toh hamesha white background hi rahe.
  const isNavbarWhite = !isHomePage || scrolled;
  const textColor = isNavbarWhite ? 'text-zinc-900' : 'text-white';
  const bgColor = isNavbarWhite ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const paddingY = isNavbarWhite ? 'py-4' : 'py-8';

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 px-8 md:px-16 ${bgColor} ${paddingY}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className={`text-2xl font-serif tracking-tighter transition-colors duration-500 ${textColor}`}>
          ESTATE<span className="text-[#c5a059]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative group ${
                location.pathname === link.path 
                ? 'text-[#c5a059]' 
                : `${textColor} hover:opacity-60`
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#c5a059] transition-all duration-500 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden cursor-pointer z-[110]" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isNavbarWhite || isOpen ? 'bg-zinc-900' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isNavbarWhite || isOpen ? 'bg-zinc-900' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isNavbarWhite || isOpen ? 'bg-zinc-900' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: 'circOut' }}
            className="fixed inset-0 bg-white z-[105] flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif text-zinc-900 hover:text-[#c5a059] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;