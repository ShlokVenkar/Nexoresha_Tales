"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1A0003] text-cream pt-20 pb-10 overflow-hidden border-t border-gold/20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-maroon/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <h2 className="font-playfair text-3xl text-gold tracking-tight">
              Nexoresha <span className="italic font-garamond text-cream">Tales</span>
            </h2>
            <p className="font-inter text-sm opacity-70 leading-relaxed max-w-xs">
              Crafting timeless cinematic wedding films and luxury photography for couples who value emotion, elegance, and storytelling.
            </p>
            <div className="flex items-center gap-4 text-gold">
              <a href="#" className="hover:text-cream transition-colors duration-300 font-inter text-xs uppercase tracking-widest">
                Instagram
              </a>
              <a href="#" className="hover:text-cream transition-colors duration-300 font-inter text-xs uppercase tracking-widest">
                Youtube
              </a>
              <a href="#" className="hover:text-cream transition-colors duration-300 font-inter text-xs uppercase tracking-widest">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-inter text-xs uppercase tracking-[0.2em] text-gold font-bold">Navigation</h3>
            <ul className="space-y-4 font-inter text-sm opacity-80">
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Our Films</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">The Experience</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Investment</a></li>
              <li><a href="#" className="hover:text-gold transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-inter text-xs uppercase tracking-[0.2em] text-gold font-bold">Contact</h3>
            <ul className="space-y-4 font-inter text-sm opacity-80">
              <li className="flex items-center gap-3">
                <span className="text-gold text-[10px] uppercase font-bold">Tel:</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold text-[10px] uppercase font-bold">Mail:</span>
                <span>hello@nexoresha.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold text-[10px] uppercase font-bold">City:</span>
                <span>Mumbai | Dubai | London</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-inter text-xs uppercase tracking-[0.2em] text-gold font-bold">Newsletter</h3>
            <p className="font-inter text-sm opacity-70 leading-relaxed">
              Subscribe to receive wedding planning tips and cinematic inspiration.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-maroon/30 border border-gold/30 py-3 px-4 text-sm font-inter text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors rounded-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gold hover:text-cream transition-colors font-inter text-xs uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] opacity-40">
            &copy; {currentYear} Nexoresha Tales. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 font-inter text-[10px] uppercase tracking-[0.3em] opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
