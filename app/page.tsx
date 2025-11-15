import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import AppShowcase from '@/components/AppShowcase';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <AppShowcase />
      <Portfolio />
      <Footer />
    </main>
  );
}
