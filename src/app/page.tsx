import BackgroundVideo from '@/components/BackgroundVideo';
import CameraScene from '@/components/CameraScene';
import Navbar from '@/components/Navbar';
import ScrollSections from '@/components/ScrollSections';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      {/* Background Cinematic Video */}
      <BackgroundVideo />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* 3D Scroll-driven Camera Explosion Scene */}
      <CameraScene />

      {/* HTML Overlay Content Sections mapped to scroll */}
      <ScrollSections />
    </main>
  );
}
