import Hero from '@/components/Hero';
import VideoShowcase from '@/components/VideoShowcase';
import ValueProposition from '@/components/ValueProposition';
import AppShowcase from '@/components/AppShowcase';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VideoShowcase />
      <ValueProposition />
      <AppShowcase />
      <Portfolio />
      <Footer />
    </main>
  );
}
