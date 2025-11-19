'use client';

import { motion } from 'framer-motion';
import { Clock, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const easing = [0.16, 1, 0.3, 1] as const; // easeOutExpo

export default function ValueProposition() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Why Choose Ghawdex?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology meets professional expertise
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">

          {/* HERO CARD: 9-Day Installation - Large featured card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
            className="lg:col-span-7 lg:row-span-2 group"
          >
            <div className="relative h-full min-h-[400px] p-10 overflow-hidden rounded-3xl glass-card hover:shadow-glow transition-all duration-500 transform-gpu hover:scale-[1.02]">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating gradient orb */}
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-red-500 to-amber-600 rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 mb-6 shadow-xl w-fit">
                  <Clock className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">
                      9 Days
                    </span>
                    <br />
                    Installation
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    From initial consultation to final activation—your solar system up and running in record time. Industry-leading speed without compromising quality.
                  </p>
                </div>

                {/* Stats mini-badges */}
                <div className="flex gap-4 mt-8">
                  <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40">
                    <span className="text-sm font-semibold text-gray-700">⚡ Fast-Track Process</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40">
                    <span className="text-sm font-semibold text-gray-700">✓ Full Turnkey</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real-Time Analysis - Medium card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: easing }}
            className="lg:col-span-5 group"
          >
            <div className="relative h-full min-h-[180px] p-8 overflow-hidden rounded-3xl glass-card hover:shadow-glow transition-all duration-500 transform-gpu hover:scale-[1.02]">
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full opacity-20 blur-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 mb-4 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Real-Time Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced app analyzes your building using Google Earth and Solar API for precise planning.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Professional Excellence - Medium card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            className="lg:col-span-5 group"
          >
            <div className="relative h-full min-h-[180px] p-8 overflow-hidden rounded-3xl glass-card hover:shadow-glow transition-all duration-500 transform-gpu hover:scale-[1.02]">
              <motion.div
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-red-400 to-orange-600 rounded-full opacity-20 blur-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 mb-4 shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Professional Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Certified installers, premium equipment, and comprehensive warranties. Your investment is protected.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Section - Full width glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: easing }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Gradient background with animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 bg-[length:200%_auto] animate-gradient-x"></div>

          {/* Glass overlay */}
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-10 sm:p-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">

              <div className="text-center group">
                <AnimatedCounter
                  target={500}
                  suffix="+"
                  duration={2500}
                  className="text-6xl sm:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-lg text-sky-100 font-medium">Installations Completed</div>
              </div>

              <div className="text-center border-x-0 sm:border-x border-white/30 group">
                <AnimatedCounter
                  target={9}
                  duration={1500}
                  className="text-6xl sm:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-lg text-sky-100 font-medium">Days Average Install</div>
              </div>

              <div className="text-center group">
                <AnimatedCounter
                  target={98}
                  suffix="%"
                  duration={2000}
                  className="text-6xl sm:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-lg text-sky-100 font-medium">Customer Satisfaction</div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
