'use client';

import { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import VideoShowcase from '@/components/VideoShowcase';
import Services from '@/components/Services';
import ValueProposition from '@/components/ValueProposition';
import AppShowcase from '@/components/AppShowcase';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import { trackScrollDepth } from '@/lib/analytics';

export default function Home() {
  const scrollDepthTracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = Math.round((scrolled / documentHeight) * 100);

      // Track milestones: 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100];

      milestones.forEach((milestone) => {
        if (scrollPercentage >= milestone && !scrollDepthTracked.current.has(milestone)) {
          scrollDepthTracked.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    // Debounce scroll events
    let scrollTimeout: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedScroll);

    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <VideoShowcase />
      <Services />
      <ValueProposition />
      <AppShowcase />
      <Portfolio />
      <Footer />
    </main>
  );
}
