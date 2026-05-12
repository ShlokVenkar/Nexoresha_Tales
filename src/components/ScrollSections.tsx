"use client";

import CameraExplosion from './CameraExplosion';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageVariant = {
  hidden: { opacity: 0, scale: 1.05, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

export default function ScrollSections() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(46);
  
  // Track scroll specifically for the Hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Use the modern motion event listener for frames
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Start from frame 46, end at 240 (mapping the remaining 194 frames)
    const startFrame = 46;
    const endFrame = 240;
    const frameCount = endFrame - startFrame;
    
    // We use latest / 0.95 to ensure frames finish strictly before the section unpins
    const progress = Math.min(1, latest / 0.95);
    const nextFrame = Math.min(endFrame, Math.max(startFrame, Math.round(progress * frameCount) + startFrame));
    
    setFrameIndex(nextFrame);
  });

  return (
    <div className="relative z-10 w-full">
      {/* 1. HERO INTRO - FULL SCREEN CAMERA BACKGROUND */}
      <section 
        ref={heroRef} 
        className="relative h-[300vh] bg-[rgba(117,1,14,1)]"
      >
        {/* The Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Background: Massive Camera Explosion */}
          <div className="absolute inset-0 z-10 w-full h-full">
            <CameraExplosion frameIndex={frameIndex} />
          </div>

          {/* Foreground: Text Content Overlay */}
          <div className="relative z-20 w-full h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
                }}
                className="flex flex-col items-center text-center max-w-2xl mx-auto z-20"
              >
                <h1 
                  className="font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cream tracking-tight mb-6 leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                  style={{ WebkitTextStroke: '0.5px rgba(0,0,0,0.3)' }}
                >
                  Your Love Story,<br />Captured <span className="text-gold italic font-garamond">Forever</span>
                </h1>
                <p 
                  className="font-inter text-cream opacity-95 text-base md:text-lg font-light leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-lg"
                  style={{ WebkitTextStroke: '0.2px rgba(0,0,0,0.2)' }}
                >
                  Luxury wedding films and photography crafted with emotion, elegance, and cinematic storytelling.
                </p>
                <p 
                  className="font-garamond italic text-gold text-xl md:text-2xl mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  style={{ WebkitTextStroke: '0.3px rgba(0,0,0,0.2)' }}
                >
                  Every glance, every tear, every vow.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                  <button className="px-10 py-5 bg-gold text-maroon font-inter tracking-[0.2em] text-xs uppercase hover:bg-cream transition-colors duration-300 shadow-2xl w-full sm:w-auto">
                    Book Your Wedding
                  </button>
                  <button className="px-10 py-5 border border-gold text-cream font-inter tracking-[0.2em] text-xs uppercase hover:bg-gold/10 transition-colors duration-300 w-full sm:w-auto shadow-2xl backdrop-blur-sm">
                    Watch Our Films
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ART OF STORYTELLING (20-40%) */}
      <section className="min-h-[100vh] flex flex-col lg:flex-row items-center justify-between px-8 md:px-24 lg:px-40 py-20 gap-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 to-transparent pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUpVariant}
          className="w-full lg:w-1/2 max-w-xl bg-black/40 p-8 md:p-12 backdrop-blur-xl border-l-2 border-gold/40 shadow-2xl relative z-10"
        >
          <h2 className="font-playfair text-4xl md:text-6xl text-cream mb-6 drop-shadow-lg leading-tight">
            Every Frame Holds <br /><span className="text-gold italic font-garamond">Emotion</span>
          </h2>
          <div className="space-y-4 font-inter text-cream opacity-80 text-lg font-light leading-relaxed">
            <p>We don’t just record weddings.</p>
            <p>We craft cinematic memories that let you relive every feeling for generations. Our approach is entirely editorial, blending raw emotion with high-fashion aesthetics.</p>
          </div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariant}
          className="w-full lg:w-1/2 relative block mt-12 lg:mt-0 h-[50vh] md:h-[70vh] z-10"
        >
          {/* Creative Layout: Overlapping images with gold borders */}
          <div className="absolute top-0 right-10 w-[60%] h-[70%] z-10">
            <div className="w-full h-full border border-gold/50 p-2 bg-black/20 backdrop-blur-sm transform rotate-2">
              <img 
                src="https://images.pexels.com/photos/256737/pexels-photo-256737.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Wedding Rings"
                className="w-full h-full object-cover sepia-[0.2] brightness-90"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-[55%] h-[60%] z-20">
            <div className="w-full h-full border border-gold/50 p-2 bg-black/20 backdrop-blur-sm transform -rotate-3">
              <img 
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Couple Holding Hands"
                className="w-full h-full object-cover sepia-[0.1] brightness-90"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. CINEMATIC EXPERIENCE (40-65%) */}
      <section className="min-h-[120vh] flex flex-col items-center justify-center px-8 md:px-24 lg:px-40 py-20 gap-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUpVariant}
          className="w-full max-w-3xl text-center bg-black/40 p-8 md:p-12 backdrop-blur-xl border border-white/10 shadow-2xl relative z-10"
        >
          <h2 className="font-playfair text-4xl md:text-6xl text-cream mb-6 drop-shadow-lg">
            Crafted Like <span className="text-gold italic font-garamond">Cinema</span>
          </h2>
          <p className="font-inter text-cream opacity-80 text-lg font-light leading-relaxed mb-6">
            From intimate candid moments to grand celebrations, every sequence is directed with cinematic precision.
          </p>
          <ul className="flex flex-col md:flex-row justify-center gap-6 font-garamond italic text-2xl text-cream opacity-90">
            <li>Luxury visuals</li>
            <li className="hidden md:block">•</li>
            <li>Authentic emotions</li>
            <li className="hidden md:block">•</li>
            <li>Timeless storytelling</li>
          </ul>
        </motion.div>

        {/* Cinematic Ultra-Wide Image Crop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariant}
          className="w-full max-w-5xl relative block z-10"
        >
          <div className="w-full aspect-[21/9] overflow-hidden border border-gold/30 rounded-sm relative group cursor-pointer">
            <img 
              src="https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Wedding Dress"
              className="w-full h-full object-cover sepia-[0.1] transform group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-maroon/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-[14px] border-t-transparent border-b-transparent border-l-gold ml-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. PHOTOGRAPHY & FILMS (65-85%) */}
      <section className="min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-24 lg:px-40 py-20 gap-16 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-maroon/30 via-transparent to-black pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariant}
          className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0 relative z-10"
        >
          {/* Aesthetic Arched Image Layout */}
          <div className="relative w-3/4 aspect-[2/3]">
            {/* Gold Accent Background Arch */}
            <div className="absolute inset-0 -top-4 -left-4 border border-gold/40 rounded-t-[999px] rounded-b-sm" />
            {/* Actual Image Arch */}
            <div className="absolute inset-0 overflow-hidden rounded-t-[999px] rounded-b-sm z-10 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Couple Kissing"
                className="w-full h-full object-cover sepia-[0.1] brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUpVariant}
          className="w-full lg:w-1/2 max-w-xl bg-black/40 p-8 md:p-12 backdrop-blur-xl border-r-2 border-gold/40 text-right shadow-2xl relative z-10"
        >
          <h2 className="font-playfair text-4xl md:text-6xl text-cream mb-6 drop-shadow-lg">
            Moments That <br /><span className="text-gold italic font-garamond">Never Fade</span>
          </h2>
          <ul className="font-inter text-cream opacity-80 text-lg font-light leading-relaxed space-y-4">
            <li className="flex justify-end items-center gap-3">
              Editorial photography <span className="w-12 h-[1px] bg-gold/50" />
            </li>
            <li className="flex justify-end items-center gap-3">
              Cinematic wedding films <span className="w-12 h-[1px] bg-gold/50" />
            </li>
            <li className="flex justify-end items-center gap-3">
              Luxury heirlooms <span className="w-12 h-[1px] bg-gold/50" />
            </li>
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
            hidden: { opacity: 0, scale: 0.95, y: 30 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } }
          }}
          className="relative z-10 bg-black/50 p-12 md:p-20 backdrop-blur-2xl border border-gold/20 shadow-2xl"
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-cream mb-4 drop-shadow-lg">
            Let’s Tell Your Story <br /><span className="text-gold italic font-garamond">Beautifully</span>
          </h2>
          <p className="font-inter text-cream opacity-80 text-lg md:text-xl font-light mb-12 drop-shadow-md">
            Because memories deserve more than ordinary coverage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-gold text-maroon font-inter tracking-[0.2em] text-sm uppercase hover:bg-cream transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Book Your Wedding
            </button>
            <button className="px-10 py-5 border border-gold text-cream font-inter tracking-[0.2em] text-sm uppercase hover:bg-gold/10 transition-colors duration-300 backdrop-blur-sm">
              Watch Our Films
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
