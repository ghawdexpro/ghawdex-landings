'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import MagneticButton from './MagneticButton';

// Smooth easing for premium feel
const easing = [0.16, 1, 0.3, 1] as const; // easeOutExpo

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Enhanced gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh - 7 layers for depth */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.3) 0px, transparent 50%),
              radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.2) 0px, transparent 50%),
              radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.2) 0px, transparent 50%),
              radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.2) 0px, transparent 50%),
              radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 0.3) 0px, transparent 50%),
              radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 0.2) 0px, transparent 50%),
              radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 0.2) 0px, transparent 50%)
            `
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grain texture overlay for premium feel */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-8"
          >
            <Image
              src="/logo/Ghawdex engineering logo.svg"
              alt="Ghawdex Engineering"
              width={200}
              height={80}
              priority
              className="h-16 sm:h-20 w-auto"
            />
          </motion.div>

          {/* Main headline - MASSIVE typography with shimmer */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: easing }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-[0.95]"
          >
            <span className="inline-block text-gray-900">
              Solar Installation in{' '}
            </span>
            <span className="inline-block relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-[length:200%_auto] animate-gradient-x">
                9 Days
              </span>
              {/* Shimmer effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Professional solar energy solutions with cutting-edge technology.
            From real-time building analysis to complete installation—fast, reliable, and expertly done.
          </motion.p>

          {/* CTA Buttons - Magnetic with smooth animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easing }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <MagneticButton
              href="https://solar-scan-ge-production-d63a.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              <span>Get Your Free Analysis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              href="#portfolio"
              variant="secondary"
            >
              View Our Work
            </MagneticButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>100% Installation Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Real-Time Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Professional Team</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
