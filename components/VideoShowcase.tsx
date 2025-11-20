'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { trackVideoPlay, trackVideoComplete } from '@/lib/analytics';

const videos = [
  '/projects/video-1.mp4',
  '/projects/video-2.mp4',
  '/projects/video-3.mp4',
];

export default function VideoShowcase() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Helper function to get friendly video name for tracking
  const getVideoName = (index: number) => {
    return `Installation Video ${index + 1}`;
  };

  const handleVideoPlay = (index: number) => {
    trackVideoPlay(getVideoName(index));
  };

  const handleVideoEnd = (index: number) => {
    trackVideoComplete(getVideoName(index));
    // Loop the video
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  };

  useEffect(() => {
    // Auto-play all videos on mount
    videoRefs.current.forEach((videoElement, index) => {
      if (videoElement) {
        videoElement.play().catch(() => {
          // Autoplay might be blocked, that's okay
        });
      }
    });
  }, []);

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

        {/* Video Grid - Custom layout for portrait + landscape */}
        <div className="flex flex-col gap-6">
          {/* Top Row: Two portrait videos side by side (desktop only) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Video 1 - Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
            >
              <video
                ref={(el) => { videoRefs.current[0] = el; }}
                autoPlay
                muted
                loop
                playsInline
                onPlay={() => handleVideoPlay(0)}
                onEnded={() => handleVideoEnd(0)}
                aria-label="Ghawdex solar installation showcase video 1"
                className="w-full h-auto block"
                style={{ aspectRatio: '9 / 16' }}
              >
                <source src={videos[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
            </motion.div>

            {/* Video 2 - Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
            >
              <video
                ref={(el) => { videoRefs.current[1] = el; }}
                autoPlay
                muted
                loop
                playsInline
                onPlay={() => handleVideoPlay(1)}
                onEnded={() => handleVideoEnd(1)}
                aria-label="Ghawdex solar installation showcase video 2"
                className="w-full h-auto block"
                style={{ aspectRatio: '9 / 16' }}
              >
                <source src={videos[1]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
            </motion.div>
          </div>

          {/* Bottom Row: One landscape video full-width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
          >
            <video
              ref={(el) => { videoRefs.current[2] = el; }}
              autoPlay
              muted
              loop
              playsInline
              onPlay={() => handleVideoPlay(2)}
              onEnded={() => handleVideoEnd(2)}
              aria-label="Ghawdex solar installation showcase video 3"
              className="w-full h-auto block"
              style={{ aspectRatio: '16 / 9' }}
            >
              <source src={videos[2]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
