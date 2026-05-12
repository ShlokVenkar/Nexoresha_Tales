"use client";

import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ScrollSections() {
  return (
    <div className="relative z-10 w-full">
      {/* 1. HERO INTRO (0-20%) */}
      <section className="h-[100vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
          }}
        >
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cream tracking-tight mb-6 drop-shadow-2xl">
            Your Love Story,<br />Captured <span className="text-gold italic font-garamond">Forever</span>
          </h1>
          <p className="font-inter text-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-4">
            Luxury wedding films and photography crafted with emotion, elegance, and cinematic storytelling.
          </p>
          <p className="font-garamond italic text-gold text-xl md:text-2xl opacity-90">
            Every glance, every tear, every vow — preserved like timeless cinema.
          </p>
        </motion.div>
      </section>

      {/* 2. THE ART OF STORYTELLING (20-40%) */}
      <section className="h-[100vh] flex flex-col items-start justify-center px-8 md:px-24 lg:px-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUpVariant}
          className="max-w-xl"
        >
          <h2 className="font-playfair text-4xl md:text-6xl text-cream mb-6">
            Every Frame Holds <span className="text-gold">Emotion</span>
          </h2>
          <div className="space-y-4 font-inter text-text-secondary text-lg font-light leading-relaxed">
            <p>We don’t just record weddings.</p>
            <p>We craft cinematic memories that let you relive every feeling for generations.</p>
          </div>
        </motion.div>
      </section>

      {/* 3. CINEMATIC EXPERIENCE (40-65%) */}
      <section className="h-[120vh] flex flex-col items-end justify-center px-8 md:px-24 lg:px-40 text-right">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUpVariant}
          className="max-w-xl"
        >
          <h2 className="font-playfair text-4xl md:text-6xl text-cream mb-6">
            Crafted Like <span className="text-gold italic font-garamond">Cinema</span>
          </h2>
          <p className="font-inter text-text-secondary text-lg font-light leading-relaxed mb-6">
            From intimate candid moments to grand celebrations, every sequence is directed with cinematic precision.
          </p>
          <ul className="font-garamond italic text-2xl text-cream space-y-2 opacity-80">
            <li>Luxury visuals.</li>
            <li>Authentic emotions.</li>
            <li>Timeless storytelling.</li>
          </ul>
        </motion.div>
      </section>

      {/* 4. PHOTOGRAPHY & FILMS (65-85%) */}
      <section className="h-[100vh] flex flex-col items-start justify-center px-8 md:px-24 lg:px-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUpVariant}
          className="max-w-xl"
        >
          <h2 className="font-playfair text-4xl md:text-6xl text-cream mb-6">
            Moments That <span className="text-gold">Never Fade</span>
          </h2>
          <ul className="font-inter text-text-secondary text-lg font-light leading-relaxed space-y-3 border-l border-gold/30 pl-6">
            <li>Editorial photography.</li>
            <li>Cinematic wedding films.</li>
            <li>Luxury albums designed to become family heirlooms.</li>
          </ul>
        </motion.div>
      </section>

      {/* 5. FINAL CTA (85-100%) */}
      <section className="h-[100vh] flex flex-col items-center justify-center text-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
          }}
          className="relative z-10"
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-cream mb-4">
            Let’s Tell Your Story <span className="text-gold italic font-garamond">Beautifully</span>
          </h2>
          <p className="font-inter text-text-secondary text-lg md:text-xl font-light mb-12">
            Because memories deserve more than ordinary coverage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 bg-gold text-maroon font-inter tracking-[0.2em] text-sm uppercase hover:bg-cream transition-colors duration-300 w-full sm:w-auto">
              Book Your Wedding
            </button>
            <button className="px-8 py-4 border border-gold text-cream font-inter tracking-[0.2em] text-sm uppercase hover:bg-gold/10 transition-colors duration-300 w-full sm:w-auto">
              Watch Our Films
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
