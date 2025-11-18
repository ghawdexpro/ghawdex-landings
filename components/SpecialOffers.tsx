'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Camera,
  Sprout,
  Clock,
  AlertTriangle,
  Building2,
  Wrench,
  CheckCircle2,
  TrendingDown,
  Award,
  Hammer
} from 'lucide-react';

const offers = [
  {
    id: 'energy-independence',
    badge: 'PREMIUM BUNDLE',
    badgeColor: 'from-purple-500 to-pink-600',
    title: 'Energy Independence Bundle',
    tagline: 'Solar + Security + Legal Growing',
    description: 'Complete home energy solution with professional CCTV security and a fully legal 720W LED indoor growing system (up to 4 plants).',
    pricePrefix: 'Starting from',
    price: '€12,999',
    savings: 'Save €3,500 vs separate purchases',
    features: [
      {
        icon: Zap,
        text: 'Complete solar panel system (customized to your energy needs)',
        highlight: true
      },
      {
        icon: Camera,
        text: 'Professional 4-8 camera CCTV security system with night vision',
        highlight: true
      },
      {
        icon: Sprout,
        text: '720W full-spectrum LED grow setup (compliant with Malta law - up to 4 plants)',
        highlight: true
      },
      {
        icon: Clock,
        text: 'Complete installation in 14 days or less',
        highlight: false
      },
      {
        icon: Shield,
        text: '10-year warranty on all equipment + 25-year panel guarantee',
        highlight: false
      }
    ],
    cta: 'Get Premium Bundle Quote',
    urgent: 'Only 3 bundles available this month',
    gradient: 'from-purple-600 via-pink-600 to-rose-600',
    benefits: [
      'Reduce electricity bills to near-zero',
      'Professional security monitoring',
      'Legal home cultivation system',
      'Increase property value by 15-20%'
    ]
  },
  {
    id: 'grant-rescue',
    badge: 'COMPETITIVE TAKEOVER',
    badgeColor: 'from-red-500 to-orange-600',
    title: 'Government Grant Rescue Program',
    tagline: 'Stuck waiting? We\'ll finish in 14 days.',
    description: 'Already approved for a government solar grant but your installer can\'t deliver? We\'ll take over, complete your installation in 14 days, and handle all the paperwork hassle.',
    pricePrefix: 'Competitive pricing',
    price: 'Beat Any Quote',
    savings: 'We handle ALL grant paperwork',
    features: [
      {
        icon: AlertTriangle,
        text: 'Immediate takeover from failed/delayed solar companies',
        highlight: true
      },
      {
        icon: Clock,
        text: 'Guaranteed 14-day installation (or €500 discount)',
        highlight: true
      },
      {
        icon: CheckCircle2,
        text: 'We handle ALL government grant documentation and approvals',
        highlight: true
      },
      {
        icon: TrendingDown,
        text: 'Price match + 5% discount on competitor quotes',
        highlight: false
      },
      {
        icon: Award,
        text: 'Premium equipment (same or better than original quote)',
        highlight: false
      }
    ],
    cta: 'Switch to Ghawdex Now',
    urgent: 'Stop wasting time. Average wait time with competitors: 6+ months',
    gradient: 'from-red-600 via-orange-600 to-amber-600',
    benefits: [
      'No more waiting - start saving NOW',
      'Keep your government grant (we transfer everything)',
      'Professional installation, zero delays',
      'Aggressive pricing to win your business'
    ]
  },
  {
    id: 'heritage-solution',
    badge: 'ENGINEERING EXCELLENCE',
    badgeColor: 'from-blue-500 to-cyan-600',
    title: 'Heritage Building Solar Solution',
    tagline: 'Custom wall-mounted structures for old buildings',
    description: 'Does your historic Maltese building have a weak or unsuitable roof? We design and install custom solar structures attached to walls - proven engineering with beautiful results.',
    pricePrefix: 'Custom pricing from',
    price: '€8,999',
    savings: 'Free structural engineering assessment (€500 value)',
    features: [
      {
        icon: Building2,
        text: 'Custom-engineered wall-mounted solar structures',
        highlight: true
      },
      {
        icon: Hammer,
        text: 'Structural assessment + architectural approval assistance',
        highlight: true
      },
      {
        icon: Wrench,
        text: 'Zero roof penetration - perfect for weak or historic roofs',
        highlight: false
      },
      {
        icon: Shield,
        text: 'Wind-rated structures (Malta coastal conditions approved)',
        highlight: false
      },
      {
        icon: CheckCircle2,
        text: 'Proven track record - see our portfolio of completed projects',
        highlight: false
      }
    ],
    cta: 'Request Engineering Assessment',
    urgent: 'Free drone survey for qualifying buildings this month',
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    benefits: [
      'Solar energy even for "impossible" buildings',
      'Structural engineering expertise included',
      'Beautiful, discrete installations',
      'Preserve heritage while going green'
    ]
  }
];

export default function SpecialOffers() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            LIMITED TIME OFFERS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Exclusive Solar Bundles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three specialized offers designed for Malta's unique needs. Premium bundles, competitive takeovers, and engineering solutions for challenging buildings.
          </p>
        </motion.div>

        {/* Offers grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-transparent hover:scale-[1.02]">
                {/* Gradient header */}
                <div className={`relative bg-gradient-to-r ${offer.gradient} p-8 text-white`}>
                  {/* Badge */}
                  <div className={`inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4`}>
                    {offer.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-white/90 text-sm font-medium mb-6">
                    {offer.tagline}
                  </p>

                  {/* Price */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <div className="text-sm text-white/80 mb-1">{offer.pricePrefix}</div>
                    <div className="text-4xl font-bold mb-2">{offer.price}</div>
                    <div className="text-sm text-white/90 font-semibold">{offer.savings}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {offer.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 ${feature.highlight ? 'bg-green-50 -mx-2 px-2 py-2 rounded-lg' : ''}`}
                      >
                        <feature.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.highlight ? 'text-green-600' : 'text-gray-400'}`} />
                        <span className={`text-sm ${feature.highlight ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-3">Key Benefits</div>
                    <ul className="space-y-2">
                      {offer.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className={`w-full bg-gradient-to-r ${offer.gradient} text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] mb-4`}>
                    {offer.cta}
                  </button>

                  {/* Urgency */}
                  <div className="flex items-center gap-2 text-sm text-orange-600 font-semibold justify-center">
                    <Clock className="w-4 h-4" />
                    <span>{offer.urgent}</span>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${offer.gradient} opacity-10 blur-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Which Offer Is Right for You?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation with our solar experts. We'll analyze your building, energy needs, and budget to recommend the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/35679048894"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Camera className="w-5 h-5" />
              WhatsApp Consultation
            </a>
            <a
              href="tel:+35679048894"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Clock className="w-5 h-5" />
              Call +356 7904 8894
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Available 7 days a week • Free quotes • No obligation • 14-day installation guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
