'use client';

import { motion } from 'framer-motion';
import { Clock, Shield, Sparkles, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '14-Day Installation',
    description: 'From initial consultation to final activation—your solar system up and running in just two weeks.',
    color: 'from-sky-500 to-blue-600'
  },
  {
    icon: Sparkles,
    title: 'Real-Time Analysis',
    description: 'Our advanced app analyzes your building using Google Earth and Solar API for precise planning.',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'Professional Excellence',
    description: 'Certified installers, premium equipment, and comprehensive warranties. Your investment is protected.',
    color: 'from-emerald-500 to-green-600'
  },
  {
    icon: TrendingUp,
    title: 'Maximize Savings',
    description: 'Optimized system design ensures maximum energy production and fastest return on investment.',
    color: 'from-purple-500 to-indigo-600'
  }
];

export default function ValueProposition() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Ghawdex?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with professional expertise to deliver solar solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl shadow-xl"
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-sky-100">Installations Completed</div>
          </div>
          <div className="text-center border-x-0 sm:border-x border-sky-400">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">14</div>
            <div className="text-sky-100">Days Average Install</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-sky-100">Customer Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
