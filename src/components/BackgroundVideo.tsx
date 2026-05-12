"use client";

import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  
  // The video becomes slightly more blurred and darker as you scroll down
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(4px)", "blur(12px)"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 0.85, 1], [0, 0, 0.3, 0.2]); // Hidden during Hero explosion sequence

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow motion feeling
    }
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 w-full h-full z-[-1] overflow-hidden bg-[#8B0015]" // Solid Maroon base
      style={{ filter: blur }}
    >
      <motion.video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ opacity }}
        // High quality cinematic wedding video from Mixkit
        src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-in-a-forest-41135-large.mp4"
      />
      {/* Heavy Maroon color grading overlay */}
      <div className="absolute inset-0 bg-[#8B0015] mix-blend-multiply opacity-90" />
      <div className="absolute inset-0 bg-[#5E000E] mix-blend-color opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#1A0003] opacity-90" />
      {/* Extra dark overlay to ensure text never hides */}
      <div className="absolute inset-0 bg-black opacity-50" />
    </motion.div>
  );
}
