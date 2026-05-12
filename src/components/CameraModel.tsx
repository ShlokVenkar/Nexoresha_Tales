"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

export default function CameraModel() {
  const group = useRef<THREE.Group>(null);
  const { scrollYProgress } = useScroll();

  // Animation values based on scroll (reduced distances so they don't fly off screen)
  const explodeZ = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.75, 1], [0, 0, 2.5, 2.5, 0]);
  const explodeY = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.75, 1], [0, 0, 1.5, 1.5, 0]);
  
  // Lens facing right is -Math.PI / 2. Adding 0.2 angles it slightly towards the user.
  // We rotate it to face the other side (Math.PI / 2) by the end of the scroll.
  const groupRotationY = useTransform(scrollYProgress, [0, 1], [-Math.PI / 2 + 0.2, Math.PI / 2 - 0.2]);
  const groupRotationX = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.05]);
  const groupScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.0, 0.5, 1.0]);

  // Exploding Parts Translations
  const lensForwardZ = useTransform(explodeZ, v => v * 1.5);
  const lensInnerForwardZ = useTransform(explodeZ, v => v * 2.0);
  const batteryBackZ = useTransform(explodeZ, v => v * -1.2);
  const handleUpY = useTransform(explodeY, v => v * 1.0);
  const baseplateDownY = useTransform(explodeY, v => v * -1.0);
  const railsForwardZ = useTransform(explodeZ, v => v * 0.8);

  useFrame(() => {
    if (group.current) {
      // Gentle floating animation
      group.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <motion.group 
      ref={group}
      rotation-y={groupRotationY}
      rotation-x={groupRotationX}
      position={[0.5, 0, 0]} // Shifted slightly right to center the visual mass
      scale={groupScale}
    >
      {/* 1. MAIN BODY (RED style cubic body) */}
      <motion.group>
        {/* Core Block */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.8, 2.8, 2.8]} />
          <meshStandardMaterial color="#111" roughness={0.8} metalness={0.7} />
        </mesh>
        
        {/* Side Panel (Carbon Fiber/Textured look) */}
        <mesh position={[1.41, 0, 0]}>
          <planeGeometry args={[2.0, 1.8]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.9} metalness={0.5} />
        </mesh>
        
        {/* Logo / RED Plate */}
        <mesh position={[1.42, 0.2, 0]}>
          <boxGeometry args={[0.05, 0.8, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.8} />
        </mesh>
        <mesh position={[1.45, 0.2, 0]}>
          <planeGeometry args={[1.0, 0.4]} />
          <meshStandardMaterial color="#8B0015" emissive="#5E000E" emissiveIntensity={0.2} roughness={0.2} metalness={0.9} />
        </mesh>

        {/* Record Button (Red Dot) */}
        <mesh position={[1.42, -0.4, 0.6]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
          <meshStandardMaterial color="#ff0000" roughness={0.3} emissive="#ff0000" emissiveIntensity={0.5} />
        </mesh>
      </motion.group>

      {/* 2. TOP HANDLE & CHEESE PLATE */}
      <motion.group position-y={handleUpY}>
        {/* Top Plate */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[2.6, 0.2, 2.6]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.6} metalness={0.8} />
        </mesh>
        
        {/* Handle Riser */}
        <mesh position={[0, 1.9, -0.5]}>
          <boxGeometry args={[0.6, 0.8, 0.8]} />
          <meshStandardMaterial color="#111" roughness={0.7} metalness={0.8} />
        </mesh>
        
        {/* Handle Grip */}
        <mesh position={[0, 2.4, 0.2]}>
          <boxGeometry args={[0.7, 0.4, 3.5]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.9} metalness={0.2} />
        </mesh>

        {/* Handle Gold Accents */}
        <mesh position={[0, 2.4, 1.9]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.5, 16]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={0.9} />
        </mesh>
      </motion.group>

      {/* 3. BATTERY PACK (Back) */}
      <motion.group position-z={batteryBackZ}>
        {/* Mount Plate */}
        <mesh position={[0, 0, -1.5]}>
          <boxGeometry args={[2.4, 2.6, 0.2]} />
          <meshStandardMaterial color="#222" roughness={0.6} metalness={0.8} />
        </mesh>
        {/* V-Mount Battery */}
        <mesh position={[0, 0, -2.1]}>
          <boxGeometry args={[2.2, 2.8, 1.0]} />
          <meshStandardMaterial color="#111" roughness={0.8} metalness={0.4} />
        </mesh>
        {/* Battery Indicator (Gold/Yellow) */}
        <mesh position={[-0.8, 0.8, -2.61]}>
          <planeGeometry args={[0.1, 0.4]} />
          <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.8} />
        </mesh>
      </motion.group>

      {/* 4. BASEPLATE & 15MM RAILS (Bottom) */}
      <motion.group position-y={baseplateDownY}>
        {/* Baseplate */}
        <mesh position={[0, -1.6, 0]}>
          <boxGeometry args={[2.6, 0.4, 3.5]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.7} metalness={0.8} />
        </mesh>

        {/* Gold Adjustment Knobs */}
        <mesh position={[1.4, -1.6, 0.5]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.9} />
        </mesh>
        <mesh position={[1.4, -1.6, -0.5]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.9} />
        </mesh>

        {/* 15mm Rails */}
        <motion.group position-z={railsForwardZ}>
          <mesh position={[-0.8, -2.0, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 6.0, 32]} />
            <meshStandardMaterial color="#050505" roughness={0.4} metalness={0.9} />
          </mesh>
          <mesh position={[0.8, -2.0, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 6.0, 32]} />
            <meshStandardMaterial color="#050505" roughness={0.4} metalness={0.9} />
          </mesh>
        </motion.group>
      </motion.group>

      {/* 5. CINEMA LENS (Front) */}
      <motion.group position-z={lensForwardZ}>
        {/* Lens Mount Base */}
        <mesh position={[0, 0, 1.6]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.3, 1.4, 0.4, 64]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.6} metalness={0.8} />
        </mesh>
        {/* Gold Mount Ring */}
        <mesh position={[0, 0, 1.85]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.3, 0.05, 16, 64]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={1.0} />
        </mesh>
        
        {/* Main Lens Barrel (DZOFILM style) */}
        <mesh position={[0, 0, 2.7]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.5, 1.3, 1.8, 64]} />
          <meshStandardMaterial color="#0f0f0f" roughness={0.7} metalness={0.5} />
        </mesh>
        
        {/* Focus Gear Rings */}
        <mesh position={[0, 0, 2.5]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.45, 1.45, 0.3, 64]} />
          <meshStandardMaterial color="#111" roughness={0.9} metalness={0.2} wireframe={true} />
        </mesh>
        <mesh position={[0, 0, 3.2]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.52, 1.52, 0.2, 64]} />
          <meshStandardMaterial color="#111" roughness={0.9} metalness={0.2} wireframe={true} />
        </mesh>

        {/* Front Gold Rim */}
        <mesh position={[0, 0, 3.6]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.04, 16, 64]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.9} />
        </mesh>

        {/* Front Glass Element (Explodes further out) */}
        <motion.group position-z={lensInnerForwardZ}>
          <mesh position={[0, 0, 3.5]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[1.4, 1.4, 0.2, 32]} />
            <meshPhysicalMaterial 
              roughness={0.05}
              transmission={1}
              ior={1.5}
              thickness={0.5}
              color="#ffeedd"
              transparent
              opacity={0.9}
            />
          </mesh>
          {/* Inner Floating Glass */}
          <mesh position={[0, 0, 3.2]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[1.2, 1.2, 0.1, 32]} />
            <meshPhysicalMaterial 
              roughness={0.1}
              transmission={0.8}
              ior={1.4}
              color="#e6d5c3"
              transparent
              opacity={0.8}
            />
          </mesh>
        </motion.group>
      </motion.group>

      <Environment preset="studio" />
    </motion.group>
  );
}
