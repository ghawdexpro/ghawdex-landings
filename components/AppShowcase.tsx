'use client';

import { motion } from 'framer-motion';
import { Satellite, Zap, MapPin, BarChart3 } from 'lucide-react';

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
    <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-6">
              <Satellite className="w-4 h-4" />
              <span>Powered by Advanced Technology</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              See Your Solar Potential in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Real-Time
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our proprietary app analyzes your building using Google Earth satellite data and Google Solar API
              to provide instant, accurate solar installation estimates—before we even visit your property.
            </p>

            {/* App features list */}
            <div className="space-y-4 mb-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 p-2 bg-sky-100 rounded-lg">
                    <feature.icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Try Our Analysis Tool
            </button>
          </motion.div>

          {/* Right side - Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Mockup container with glowing effect */}
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 p-8 shadow-2xl overflow-hidden">

              {/* Animated glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-400/50 to-blue-600/50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* App interface mockup */}
              <div className="relative z-10 h-full bg-white rounded-lg p-6 shadow-xl">
                {/* Mockup header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                      <Satellite className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Solar Analysis</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                {/* Mockup content - Satellite view placeholder */}
                <div className="mb-4 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg aspect-video flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-12 h-12 text-sky-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 font-medium">Building Analysis View</p>
                  </div>

                  {/* Animated scan lines */}
                  <motion.div
                    className="absolute inset-0 border-2 border-sky-500/50"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Stats display */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-sky-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Solar Potential</div>
                    <div className="text-lg font-bold text-sky-600">98%</div>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Est. Savings</div>
                    <div className="text-lg font-bold text-emerald-600">€450/mo</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-sky-200 rounded-full blur-2xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
