'use client';

import { motion } from 'framer-motion';
import { Check, X, TrendingUp, Zap } from 'lucide-react';

export default function PricingComparison() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Energy Independence Bundle
          </h2>
          <p className="text-xl text-gray-600">
            Save €3,500 when you bundle solar + security + growing system
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[900px]">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gray-50 rounded-t-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Individual Purchase</h3>
                <p className="text-sm text-gray-600">Buying each component separately</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  BEST VALUE ⚡
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Energy Independence Bundle</h3>
                <p className="text-sm text-white/90">All three systems together</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-t-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Your Savings</h3>
                <p className="text-sm text-gray-600">Money saved with bundle</p>
              </div>
            </div>

            {/* Pricing Rows */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Solar System Row */}
              <div className="grid grid-cols-3 gap-6 p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Complete Solar Panel System</div>
                  <div className="text-sm text-gray-600 mb-3">4-8kW system with installation</div>
                  <div className="text-3xl font-bold text-gray-900">€9,500</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 flex items-center justify-center">
                  <div className="text-center">
                    <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Included</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-400">—</div>
                    <div className="text-xs text-gray-500">Base system</div>
                  </div>
                </div>
              </div>

              {/* CCTV System Row */}
              <div className="grid grid-cols-3 gap-6 p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Professional CCTV Security</div>
                  <div className="text-sm text-gray-600 mb-3">4-8 cameras with installation</div>
                  <div className="text-3xl font-bold text-gray-900">€3,999</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 flex items-center justify-center">
                  <div className="text-center">
                    <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Included</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+€1,500</div>
                    <div className="text-xs text-gray-500">Bundle discount</div>
                  </div>
                </div>
              </div>

              {/* Growing System Row */}
              <div className="grid grid-cols-3 gap-6 p-6 hover:bg-gray-50 transition-colors">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">720W LED Growing System</div>
                  <div className="text-sm text-gray-600 mb-3">Complete setup with accessories</div>
                  <div className="text-3xl font-bold text-gray-900">€3,000</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 flex items-center justify-center">
                  <div className="text-center">
                    <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Included</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+€2,000</div>
                    <div className="text-xs text-gray-500">Bundle discount</div>
                  </div>
                </div>
              </div>

              {/* Total Row */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-200">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Total if Purchased Separately</div>
                  <div className="text-4xl font-bold text-gray-900">€16,499</div>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-sm text-white/90 mb-2">Bundle Price</div>
                    <div className="text-5xl font-bold text-white">€12,999</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">You Save</div>
                    <div className="text-5xl font-bold text-green-600">€3,500</div>
                    <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                      <TrendingUp className="w-4 h-4" />
                      21% OFF
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Single Installation</h4>
                <p className="text-sm text-gray-600">All three systems installed together in 14 days - no multiple contractor hassles</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Single Warranty</h4>
                <p className="text-sm text-gray-600">One comprehensive 10-year warranty covering all equipment and installation</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Optimized Design</h4>
                <p className="text-sm text-gray-600">Solar system sized to power CCTV and growing setup - maximum efficiency</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <a
                href="https://wa.me/35679048894?text=I%20want%20the%20Energy%20Independence%20Bundle%20-%20save%20€3,500"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-6 h-6" />
                Save €3,500 - Get Bundle Quote
                <Zap className="w-6 h-6" />
              </a>
              <p className="text-sm text-gray-500 mt-4">Limited availability - only 3 bundles available this month</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
