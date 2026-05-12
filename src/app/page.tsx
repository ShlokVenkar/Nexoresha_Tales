import BackgroundVideo from '@/components/BackgroundVideo';
import Navbar from '@/components/Navbar';
import ScrollSections from '@/components/ScrollSections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      {/* Background Cinematic Video */}
      <BackgroundVideo />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* HTML Overlay Content Sections mapped to scroll */}
      <ScrollSections />

      <Footer />
    </main>
  );
}
