"use client";

import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  
  // The video becomes slightly more blurred and darker as you scroll down
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(4px)", "blur(12px)"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.2]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow motion feeling
    }
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 w-full h-full z-[-1] overflow-hidden bg-secondary-dark"
      style={{ filter: blur, opacity }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        // High quality cinematic wedding video from Mixkit
        src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-in-a-forest-41135-large.mp4"
      />
      {/* Overlay for cinematic color grading and vignetting */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-secondary-dark opacity-80" />
      <div className="absolute inset-0 bg-maroon mix-blend-overlay opacity-30" />
    </motion.div>
  );
}
