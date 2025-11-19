import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sun, Battery, Hammer, Zap, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Ghawdex Solar - Technical Energy Solutions",
  description: "Professional solar installation, energy storage, roof works, electrical systems, and AI-driven analysis tools. 30+ years of expertise.",
};

export default function Services() {
  const services = [
    {
      icon: Sun,
      title: "Solar Installation",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-white",
      borderColor: "border-amber-100",
      features: [
        "Residential & commercial PV systems",
        "9-day average installation timeline",
        "AI-powered site analysis & design",
        "2000+ projects successfully delivered",
        "25-30 year performance warranties"
      ]
    },
    {
      icon: Battery,
      title: "Energy Storage Solutions",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-white",
      borderColor: "border-emerald-100",
      features: [
        "Lithium-ion battery backup systems",
        "Grid-tied, hybrid & off-grid configurations",
        "Load management & peak shaving",
        "Scalable capacity expansion",
        "10-15 year warranty coverage"
      ]
    },
    {
      icon: Hammer,
      title: "Roof Works",
      color: "from-sky-500 to-blue-600",
      bgColor: "from-sky-50 to-white",
      borderColor: "border-sky-100",
      features: [
        "Structural load assessments",
        "Roof reinforcement & repair",
        "Waterproofing integration",
        "30+ years roofing expertise",
        "All roof types: tile, concrete, flat"
      ]
    },
    {
      icon: Zap,
      title: "Electrical Installations",
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-white",
      borderColor: "border-purple-100",
      features: [
        "Complete electrical infrastructure",
        "Grid connection & metering (Enemalta)",
        "Safety compliance & certification",
        "Offshore-grade reliability standards",
        "Future-proof system design"
      ]
    },
    {
      icon: Cpu,
      title: "AI Tools & Analysis",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-white",
      borderColor: "border-pink-100",
      features: [
        "Real-time solar potential mapping",
        "Google Earth & Solar API integration",
        "ROI projections & energy modeling",
        "7+ years AI-driven technology",
        "Instant remote analysis capabilities"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-sky-100 leading-relaxed max-w-3xl">
            Technical energy solutions backed by 30+ years of infrastructure expertise. From offshore systems to residential solar—precision engineering at every scale.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 border ${service.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-lg mt-0.5">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <div className="mt-20 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Ghawdex Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">30+</div>
              <div className="text-gray-900 font-semibold mb-2">Years Experience</div>
              <div className="text-gray-600 text-sm">
                Technical energy infrastructure including complex offshore systems
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">2000+</div>
              <div className="text-gray-900 font-semibold mb-2">Projects Delivered</div>
              <div className="text-gray-600 text-sm">
                Solar and storage installations across Malta and Gozo
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">9 Days</div>
              <div className="text-gray-900 font-semibold mb-2">Average Installation</div>
              <div className="text-gray-600 text-sm">
                From consultation to grid connection—faster than industry standard
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Get a free solar analysis using our AI-powered tool. See your property's potential in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.ghawdex.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-sky-600 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Free Solar Analysis
            </a>
            <a
              href="https://wa.me/35679055156"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-full border-2 border-sky-400 transition-all duration-300"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>

        {/* Technical Capabilities */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">System Design & Engineering</h3>
              <ul className="space-y-2 text-sm">
                <li>• Load analysis & consumption profiling</li>
                <li>• Shading analysis & optimization</li>
                <li>• String configuration & inverter sizing</li>
                <li>• Structural load calculations</li>
                <li>• Grid interconnection design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Compliance & Certification</h3>
              <ul className="space-y-2 text-sm">
                <li>• Malta building permit applications</li>
                <li>• Enemalta grid connection approvals</li>
                <li>• IEC/EN safety standards compliance</li>
                <li>• CE marking & product certification</li>
                <li>• Electrical safety inspections</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Installation Expertise</h3>
              <ul className="space-y-2 text-sm">
                <li>• Tile, concrete & flat roof mounting</li>
                <li>• Underground cable installation</li>
                <li>• AC/DC electrical integration</li>
                <li>• Waterproofing & sealing</li>
                <li>• Grounding & lightning protection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Post-Installation Support</h3>
              <ul className="space-y-2 text-sm">
                <li>• Remote monitoring & diagnostics</li>
                <li>• Performance optimization</li>
                <li>• Maintenance scheduling</li>
                <li>• Warranty claim processing</li>
                <li>• System expansion consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
