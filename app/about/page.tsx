import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, Zap, Leaf, Cpu, Building2, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ghawdex Solar - 30+ Years of Energy Excellence",
  description: "Learn about Ghawdex's 30+ years of expertise in energy infrastructure, 2000+ solar projects, and cutting-edge AI-driven solutions.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-6">About Ghawdex</h1>
          <p className="text-xl text-sky-100 leading-relaxed">
            Three decades of energy innovation. Thousands of projects delivered. One mission: powering a sustainable future.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ghawdex brings <strong>30+ years of proven expertise</strong> in technical energy infrastructure to every project we undertake. What started as engineering excellence in offshore energy systems has evolved into a comprehensive renewable energy powerhouse.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're not just solar installers—we're energy innovators who combine decades of field experience with cutting-edge AI technology to deliver solutions that work, last, and perform beyond expectations.
          </p>
        </div>

        {/* Our Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Energy Infrastructure */}
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 border border-sky-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-sky-600 rounded-xl">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">30+ Years</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Technical energy infrastructure experience, including complex offshore systems where precision and reliability are non-negotiable.
            </p>
          </div>

          {/* Solar & Storage */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-600 rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">2000+ Projects</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Solar and energy storage installations completed across residential, commercial, and industrial sectors.
            </p>
          </div>

          {/* AI Technology */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-600 rounded-xl">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">7+ Years AI</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              AI-driven tech stacks for real-time analysis, predictive maintenance, and optimized energy production.
            </p>
          </div>

          {/* Agriculture Tech */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-600 rounded-xl">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">AgTech Innovation</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              High-tech agricultural projects featuring advanced hydroponics and aeroponics powered by renewable energy.
            </p>
          </div>

        </div>

        {/* What Makes Us Different */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-sky-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Battle-Tested Expertise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our offshore energy background means we've engineered solutions in the harshest environments. Your rooftop installation? We've got this.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Precision</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our proprietary solar analysis tool uses Google Earth and advanced algorithms to design your system before we even visit your property. No guesswork. Just data.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-700 leading-relaxed">
                  2000+ satisfied customers. 98% satisfaction rate. Average installation in just 9 days. These aren't promises—they're our standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
          <p className="text-lg text-sky-100 leading-relaxed mb-6">
            When you choose Ghawdex, you're not just getting a solar installation. You're partnering with a team that has:
          </p>
          <ul className="space-y-3 text-sky-100">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Engineered energy systems that withstand extreme conditions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Delivered thousands of projects on time and on budget</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Invested in AI and technology to serve you better</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span>Built a reputation on honesty, quality, and results</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Go Solar?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Experience the difference that 30 years of expertise makes. Get your free solar analysis today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://solar-scan-ge-production-d63a.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Analysis
            </a>
            <a
              href="https://wa.me/35679055156"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full border-2 border-gray-200 hover:border-sky-600 transition-all duration-300"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
