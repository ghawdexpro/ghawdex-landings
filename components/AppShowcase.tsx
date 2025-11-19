'use client';

import { motion } from 'framer-motion';
import { Satellite, Zap, MapPin, BarChart3, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const easing = [0.16, 1, 0.3, 1] as const; // easeOutExpo

const appFeatures = [
  {
    icon: Satellite,
    title: 'Google Earth Integration',
    description: 'Satellite imagery analysis for precise roof measurements'
  },
  {
    icon: Zap,
    title: 'Solar API Powered',
    description: 'Real-time solar potential calculations'
  },
  {
    icon: MapPin,
    title: 'Location Analysis',
    description: 'Climate and sun exposure optimization'
  },
  {
    icon: BarChart3,
    title: 'ROI Projections',
    description: 'Detailed savings and payback timeline'
  }
];

export default function AppShowcase() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-purple-50"></div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-sky-400/30 to-blue-600/30 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing }}
              className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-md bg-sky-500/10 border border-sky-500/20 text-sky-700 rounded-full text-sm font-semibold mb-8 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Satellite className="w-4 h-4" />
              </motion.div>
              <span>Powered by Advanced Technology</span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              See Your Solar Potential in{' '}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-[length:200%_auto] animate-gradient-x">
                Real-Time
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
              Advanced analysis using Google Earth and Solar API—instant, accurate estimates before we visit.
            </p>

            {/* App features list with glassmorphism */}
            <div className="space-y-4 mb-10">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: easing }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group flex items-start gap-4 p-5 glass-card hover:shadow-glow transition-all duration-300 transform-gpu"
                >
                  <motion.div
                    className="flex-shrink-0 p-3 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: easing }}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <MagneticButton
              href="https://solar-scan-ge-production-d63a.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              <span>Try Our Analysis Tool</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </motion.div>

          {/* Right side - Enhanced Visual mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
            className="relative"
          >
            {/* Floating device mockup with glassmorphism */}
            <motion.div
              className="relative aspect-[4/3] rounded-3xl glass-card shadow-glow overflow-hidden transform-gpu"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Gradient background with animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-blue-600 to-purple-600 bg-[length:200%_200%] animate-gradient-x"></div>

              {/* Animated light rays */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* App interface mockup with glassmorphism */}
              <div className="relative z-10 h-full m-6 backdrop-blur-xl bg-white/90 rounded-2xl p-6 shadow-2xl border border-white/40">
                {/* Mockup header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-200/60">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Satellite className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="font-bold text-gray-900">Solar Analysis</span>
                  </div>
                  <div className="flex gap-2">
                    <motion.div
                      className="w-3 h-3 bg-emerald-500 rounded-full"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                {/* Mockup content - Satellite view */}
                <div className="mb-4 bg-gradient-to-br from-blue-100 via-sky-100 to-green-100 rounded-xl aspect-video flex items-center justify-center overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

                  {/* Pulsing location marker */}
                  <motion.div
                    className="relative z-10"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="w-14 h-14 text-sky-600 mx-auto mb-2 drop-shadow-lg" />
                    <p className="text-sm text-gray-700 font-semibold">Building Analysis</p>
                  </motion.div>

                  {/* Animated scan lines */}
                  <motion.div
                    className="absolute inset-0 border-2 border-sky-500/40 rounded-xl"
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-500/30 rounded-xl"
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </div>

                {/* Stats display with glassmorphism */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    className="p-4 backdrop-blur-sm bg-sky-500/10 border border-sky-500/20 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-xs text-gray-600 mb-1 font-medium">Solar Potential</div>
                    <div className="text-2xl font-bold text-sky-600">98%</div>
                  </motion.div>
                  <motion.div
                    className="p-4 backdrop-blur-sm bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-xs text-gray-600 mb-1 font-medium">Est. Savings</div>
                    <div className="text-2xl font-bold text-emerald-600">€450/mo</div>
                  </motion.div>
                </div>
              </div>

              {/* Floating gradient orbs */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-2xl opacity-60"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-sky-500 rounded-full blur-3xl opacity-40"
              animate={{ scale: [1, 1.2, 1], x: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30"
              animate={{ scale: [1, 1.3, 1], y: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
