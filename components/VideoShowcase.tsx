'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const videos = [
  '/projects/installation-showcase.mp4',
  '/projects/installation-video-2.mp4',
  '/projects/installation-video-3.mp4',
];

export default function VideoShowcase() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  }, [currentVideoIndex]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] overflow-hidden">
      {/* Animated background elements - Enhanced for dark */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-amber-300 rounded-full text-sm font-semibold mb-6 border border-red-500/50">
            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
            <span>Project Showcase</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            See Our Work in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-yellow-400">
              Action
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Watch our expert installers transform homes with clean, efficient solar energy
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Video */}
          <video
            ref={videoRef}
            key={currentVideoIndex}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            playsInline
            aria-label="Ghawdex solar installation showcase video"
            className="w-full h-auto block bg-black"
            style={{ aspectRatio: '16 / 9' }}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional gradient overlay on edges for sophistication */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />

          {/* Video indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {videos.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentVideoIndex ? 'w-8 bg-amber-500' : 'w-2 bg-gray-500'
                }`}
                animate={{
                  opacity: index === currentVideoIndex ? 1 : 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
