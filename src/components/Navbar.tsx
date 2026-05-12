"use client";

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [background, setBackground] = useState('rgba(0, 0, 0, 0)');
  const [backdropBlur, setBackdropBlur] = useState('blur(0px)');

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Hide navbar on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Add glassmorphism background after scroll
    if (latest > 50) {
      setBackground('rgba(43, 15, 20, 0.4)'); // Maroon with opacity
      setBackdropBlur('blur(16px)');
    } else {
      setBackground('rgba(0, 0, 0, 0)');
      setBackdropBlur('blur(0px)');
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 transition-colors duration-500 border-b border-gold/10"
      style={{ backgroundColor: background, backdropFilter: backdropBlur, WebkitBackdropFilter: backdropBlur }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-playfair font-semibold text-gold tracking-wider">
          Nexoresha Tales
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-inter tracking-[0.2em] text-cream uppercase">
          <a href="#" className="hover:text-gold transition-colors">Home</a>
          <a href="#" className="hover:text-gold transition-colors">Films</a>
          <a href="#" className="hover:text-gold transition-colors">Photography</a>
          <a href="#" className="hover:text-gold transition-colors">Stories</a>
          <a href="#" className="hover:text-gold transition-colors">About</a>
        </div>

        {/* CTA */}
        <button className="hidden md:block px-6 py-2.5 border border-gold text-cream text-sm font-inter tracking-widest uppercase hover:bg-gold/10 hover:text-gold transition-all duration-300">
          Book Your Story
        </button>

        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <div className="space-y-1.5 cursor-pointer">
            <span className="block w-6 h-[1px] bg-cream"></span>
            <span className="block w-6 h-[1px] bg-cream"></span>
            <span className="block w-4 h-[1px] bg-cream ml-auto"></span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
