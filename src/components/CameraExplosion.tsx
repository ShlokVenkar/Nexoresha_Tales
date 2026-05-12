"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface CameraExplosionProps {
  frameIndex: number;
}

export default function CameraExplosion({ frameIndex }: CameraExplosionProps) {
  // Preload frames for performance
  useEffect(() => {
    for (let i = 1; i <= 240; i++) {
      const img = new Image();
      img.src = `/frames/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
    }
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="w-full h-full"
      >
        <div className="relative w-full h-full">
          {/* Dark overlay to make text more readable */}
          <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
          
          <img
            src={`/frames/ezgif-frame-${frameIndex.toString().padStart(3, '0')}.jpg`}
            alt="Camera Explosion Sequence"
            className="w-full h-full object-contain md:object-cover scale-[0.9] md:scale-100 select-none pointer-events-none transition-transform duration-300"
          />
        </div>
      </motion.div>
    </div>
  );
}
