'use client';

import { motion } from 'framer-motion';
import {
  Battery,
  Camera,
  Sprout,
  FileCheck,
  Clock,
  Euro,
  Building2,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';

export default function OfferShowcase() {
  return (
    <>
      {/* OFFER 1: Energy Independence Bundle */}
      <section className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-6">
                <Zap className="w-4 h-4" />
                PREMIUM BUNDLE - SAVE €3,500
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Energy Independence Bundle
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The ultimate home energy package combining <strong>solar power, professional security, and legal indoor cultivation</strong>. Everything you need for complete self-sufficiency and privacy.
              </p>

              {/* What's Included */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="p-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg">
                    <Battery className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Complete Solar System</h4>
                    <p className="text-sm text-gray-600">Customized to your energy consumption - typically 4-8kW system with premium panels</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Professional CCTV Security</h4>
                    <p className="text-sm text-gray-600">4-8 HD cameras with night vision, motion detection, mobile app access, 1TB storage</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                    <Sprout className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">720W LED Growing System</h4>
                    <p className="text-sm text-gray-600">Full-spectrum professional setup for up to 4 plants (Malta legal limit) - grow tent, ventilation, nutrients starter kit</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white mb-6">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-sm opacity-90 mb-1">Bundle Price</div>
                    <div className="text-5xl font-bold">€12,999</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90 mb-1">Separate Price</div>
                    <div className="text-2xl font-bold line-through opacity-75">€16,499</div>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Your Savings:</span>
                    <span className="text-2xl font-bold">€3,500</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/35679048894?text=I'm%20interested%20in%20the%20Energy%20Independence%20Bundle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Bundle Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Visual Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 p-8 shadow-2xl">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                      <Battery className="w-8 h-8 text-white mb-2" />
                      <div className="text-white text-sm font-semibold">Solar Panels</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                      <Camera className="w-8 h-8 text-white mb-2" />
                      <div className="text-white text-sm font-semibold">CCTV System</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 col-span-2">
                      <Sprout className="w-8 h-8 text-white mb-2" />
                      <div className="text-white text-sm font-semibold">720W LED Grow System</div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">3-in-1</div>
                      <div className="text-sm">Complete Home Solution</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFER 2: Grant Rescue Program */}
      <section className="section-padding bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Mockup - Left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              {/* Comparison Timeline */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Installation Timeline Comparison</h3>

                {/* Competitors */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">OTHER COMPANIES</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Grant approved: Month 1</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Still waiting: Month 3-6+</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Endless delays...</span>
                    </div>
                  </div>
                  <div className="mt-4 text-3xl font-bold text-red-600">6+ months wait</div>
                </div>

                {/* Ghawdex */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">GHAWDEX SOLAR</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-900">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold">We take over: Day 1</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-900">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold">Installation complete: Day 14</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-900">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold">Start saving immediately</span>
                    </div>
                  </div>
                  <div className="mt-4 text-3xl font-bold text-green-600">14 days guaranteed</div>
                </div>
              </div>
            </motion.div>

            {/* Content - Right side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full text-sm font-bold mb-6">
                <Clock className="w-4 h-4" />
                STOP WAITING - SWITCH NOW
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Government Grant Rescue Program
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Already approved for a government solar grant but <strong className="text-red-600">stuck waiting 6+ months</strong>? We'll take over your project and finish installation in <strong className="text-green-600">14 days guaranteed</strong>.
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border-l-4 border-red-600 shadow-sm">
                  <FileCheck className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">We Handle ALL Paperwork</h4>
                    <p className="text-sm text-gray-600">Complete grant transfer process - you keep your government funding, we just finish the job fast</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border-l-4 border-orange-600 shadow-sm">
                  <Euro className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Competitive Pricing Guarantee</h4>
                    <p className="text-sm text-gray-600">We'll beat your current quote by 5% + match or exceed equipment quality</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border-l-4 border-green-600 shadow-sm">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">14-Day Money-Back Promise</h4>
                    <p className="text-sm text-gray-600">If we don't complete in 14 days, get €500 discount - we've NEVER missed this deadline</p>
                  </div>
                </div>
              </div>

              {/* Urgency Box */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 text-white mb-6">
                <div className="font-bold text-lg mb-2">⚡ Why Wait Any Longer?</div>
                <p className="text-sm mb-4 text-white/90">Average Malta customer is waiting 6+ months. Every month you wait costs you €100-200 in electricity bills. That's €600-1200 wasted!</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-sm opacity-90 mb-1">Start Saving in Just</div>
                  <div className="text-4xl font-bold">14 Days</div>
                </div>
              </div>

              <a
                href="https://wa.me/35679048894?text=I%20want%20to%20switch%20to%20Ghawdex%20-%20Grant%20Rescue%20Program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Switch to Ghawdex Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFER 3: Heritage Building Solution */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-bold mb-6">
                <Building2 className="w-4 h-4" />
                ENGINEERING EXCELLENCE
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Heritage Building Solar Solution
              </h2>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Does your old Maltese building have a <strong>weak or unsuitable roof</strong>? We specialize in <strong className="text-blue-600">custom wall-mounted solar structures</strong> - proven engineering with beautiful results.
              </p>

              {/* Challenge/Solution */}
              <div className="mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mb-4">
                  <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <span>❌</span> Common Problems with Old Buildings
                  </h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Weak roof structure can't support panel weight</li>
                    <li>• Historic buildings with architectural restrictions</li>
                    <li>• Limestone roofs prone to leaks if penetrated</li>
                    <li>• Limited roof space or unsuitable orientation</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl">
                  <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <span>✅</span> Our Custom Structure Solution
                  </h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Wall-mounted steel structures (zero roof penetration)</li>
                    <li>• Structural engineering assessment included</li>
                    <li>• Wind-rated for Malta coastal conditions</li>
                    <li>• Architecturally sympathetic designs</li>
                  </ul>
                </div>
              </div>

              {/* Process */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Free Structural Assessment</h5>
                    <p className="text-sm text-gray-600">Drone survey + structural engineer evaluation (€500 value - FREE)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Custom Design & Approvals</h5>
                    <p className="text-sm text-gray-600">CAD drawings + help with architectural permits if needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Expert Installation</h5>
                    <p className="text-sm text-gray-600">Professional welding + solar installation in 14-21 days</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white mb-6">
                <div className="text-sm opacity-90 mb-2">Custom Solutions From</div>
                <div className="text-5xl font-bold mb-4">€8,999</div>
                <div className="border-t border-white/20 pt-4 text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span>Structural Assessment:</span>
                    <span className="font-bold">FREE (€500 value)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Final price depends on:</span>
                    <span className="text-xs">size, complexity, location</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/35679048894?text=I%20need%20a%20quote%20for%20Heritage%20Building%20Solar%20Solution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request Free Assessment
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Visual Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Before/After Visualization */}
              <div className="space-y-6">
                {/* Before */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="text-sm font-bold text-red-600 mb-3">❌ BEFORE: Impossible?</div>
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <Building2 className="w-24 h-24 text-gray-400" />
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Weak Roof</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Old building with unsuitable roof structure</p>
                </div>

                {/* After */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-green-500">
                  <div className="text-sm font-bold text-green-600 mb-3">✅ AFTER: Custom Solution</div>
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                      <div className="bg-gray-900 rounded opacity-80"></div>
                      <div className="bg-gray-900 rounded opacity-80"></div>
                      <div className="bg-gray-900 rounded opacity-80"></div>
                      <div className="bg-gray-900 rounded opacity-80"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Wall-Mounted</div>
                    <TrendingUp className="w-16 h-16 text-white absolute top-4 right-4" />
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Professional wall-mounted structure - zero roof impact</p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-xs text-gray-600">Custom Structures Built</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
