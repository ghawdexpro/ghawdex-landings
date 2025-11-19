'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, Zap, Calendar, ArrowRight, Check, Sparkles } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import MagneticButton from '@/components/MagneticButton';

const easing = [0.16, 1, 0.3, 1] as const;

// Mock data - replace with real API data
const savingsData = [
  { month: 'Jan', withoutSolar: 420, withSolar: 45 },
  { month: 'Feb', withoutSolar: 420, withSolar: 45 },
  { month: 'Mar', withoutSolar: 420, withSolar: 45 },
  { month: 'Apr', withoutSolar: 420, withSolar: 45 },
  { month: 'May', withoutSolar: 420, withSolar: 45 },
  { month: 'Jun', withoutSolar: 420, withSolar: 45 },
  { month: 'Jul', withoutSolar: 420, withSolar: 45 },
  { month: 'Aug', withoutSolar: 420, withSolar: 45 },
  { month: 'Sep', withoutSolar: 420, withSolar: 45 },
  { month: 'Oct', withoutSolar: 420, withSolar: 45 },
  { month: 'Nov', withoutSolar: 420, withSolar: 45 },
  { month: 'Dec', withoutSolar: 420, withSolar: 45 },
];

const yearlyComparison = [
  { year: 'Year 1', cost: 5040, label: '€5,040' },
  { year: 'Year 5', cost: 5040, label: '€5,040' },
  { year: 'Year 10', cost: 5040, label: '€5,040' },
  { year: 'Year 15', cost: 5040, label: '€5,040' },
  { year: 'Year 20', cost: 5040, label: '€5,040' },
];

const paybackTimeline = [
  { year: 0, value: -12000, label: 'Investment' },
  { year: 1, value: -7500 },
  { year: 2, value: -3000 },
  { year: 3, value: 1500 },
  { year: 4, value: 6000, label: 'Break Even!' },
  { year: 5, value: 10500 },
  { year: 10, value: 35000 },
  { year: 15, value: 59500 },
  { year: 20, value: 84000, label: '€84k Saved!' },
];

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Impact Section - MASSIVE SAVINGS NUMBER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1f1f1f] via-[#1a1a1a] to-[#1a1a1a] pt-32 pb-20">
        {/* Animated background orbs */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-red-500/20 to-amber-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing }}
            className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-md bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <Check className="w-4 h-4" />
            <span>Analysis Complete</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            You Could Save
          </motion.h1>

          {/* MASSIVE savings number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: easing }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 blur-3xl opacity-30"></div>
            <div className="relative glass-card p-8 sm:p-12 glow-red-strong">
              <AnimatedCounter
                target={87450}
                prefix="€"
                duration={2500}
                className="text-7xl sm:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500"
              />
              <p className="text-xl sm:text-2xl text-gray-400 mt-4">over 20 years</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl text-gray-300 mb-4"
          >
            That's <span className="text-amber-400 font-bold">€365/month</span> in your pocket
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Imagine what you could do with an extra €4,380 every year
          </motion.p>
        </div>
      </section>

      {/* ROI Cards Grid */}
      <section className="relative py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { label: 'Monthly Savings', value: 365, suffix: '/mo', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
              { label: 'Yearly Savings', value: 4380, suffix: '/yr', icon: Calendar, color: 'from-amber-500 to-yellow-500' },
              { label: 'Payback Period', value: 3.2, suffix: ' years', icon: Zap, color: 'from-red-500 to-orange-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: easing }}
                whileHover={{ scale: 1.02 }}
                className="group relative glass-card p-8 hover:shadow-glow transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg glow-amber`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.label}</h3>
                <AnimatedCounter
                  target={stat.value}
                  prefix="€"
                  suffix={stat.suffix}
                  duration={2000}
                  className="text-4xl sm:text-5xl font-bold text-white"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Breakdown Chart */}
      <section className="relative py-16 bg-gradient-to-b from-[#1a1a1a] to-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Your Monthly Savings Breakdown
            </h2>
            <p className="text-xl text-gray-400">
              See how much you'll save every single month
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
            className="glass-card p-8 glow-red"
          >
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={savingsData}>
                <defs>
                  <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #333', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Area
                  type="monotone"
                  dataKey="withoutSolar"
                  stackId="1"
                  stroke="#ef4444"
                  fill="none"
                  strokeWidth={3}
                  name="Without Solar"
                />
                <Area
                  type="monotone"
                  dataKey="withSolar"
                  stackId="2"
                  stroke="#10b981"
                  fill="url(#savingsGradient)"
                  strokeWidth={3}
                  name="With Solar"
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="mt-6 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-gray-400">Without Solar: €420/mo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-gray-400">With Solar: €45/mo</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 font-semibold">Savings: €375/mo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payback Timeline */}
      <section className="relative py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Your Investment Timeline
            </h2>
            <p className="text-xl text-gray-400">
              Break even in <span className="text-green-400 font-bold">Year 4</span> - then it's pure profit
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
            className="glass-card p-8 glow-amber"
          >
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={paybackTimeline}>
                <defs>
                  <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="lossGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #333', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  fill="url(#profitGradient)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm mb-2">After 20 years:</p>
              <p className="text-3xl font-bold text-green-400">€84,000 in total savings!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Details (Mini Section) */}
      <section className="relative py-12 bg-gradient-to-b from-[#1f1f1f] to-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Roof Area', value: '85 m²' },
              { label: 'Solar Capacity', value: '8.5 kW' },
              { label: 'Panels Needed', value: '18 panels' },
              { label: 'Sun Hours/Year', value: '2,850 hrs' },
            ].map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-4 text-center"
              >
                <p className="text-gray-500 text-xs mb-1">{detail.label}</p>
                <p className="text-white font-bold text-lg">{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="relative py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-md bg-red-500/10 border border-red-500/30 text-red-400 rounded-full text-sm font-semibold mb-8">
              <TrendingUp className="w-4 h-4" />
              <span>Electricity prices rising 8% per year</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Lock In These Savings Today
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              Join 500+ Malta homeowners already saving an average of €365/month
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MagneticButton
                href="#contact"
                variant="primary"
              >
                <span>Get Your Custom Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href="tel:+35679055156"
                variant="secondary"
              >
                Schedule Free Consultation
              </MagneticButton>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              ✓ No obligation • ✓ Free site assessment • ✓ Custom installation plan
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
