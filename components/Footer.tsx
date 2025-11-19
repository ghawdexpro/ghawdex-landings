'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <Image
                src="/logo/Ghawdex engineering logo.svg"
                alt="Ghawdex Engineering"
                width={180}
                height={60}
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed">
              Professional solar energy solutions delivered in 14 days.
              We combine cutting-edge technology with expert installation to power your future.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/ghawdex.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-2 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors duration-300 tap-target"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ghawdex_engineering/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-2 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors duration-300 tap-target"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://solar-scan-ge-production-d63a.up.railway.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Analysis Tool
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@ghawdex.pro" className="text-gray-400 hover:text-white transition-colors duration-300">
                    info@ghawdex.pro
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+35679055156" className="text-gray-400 hover:text-white transition-colors duration-300">
                    +356 7905 5156
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://wa.me/35679055156" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    WhatsApp Chat
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  Xewkija Industrial Zone, Malta
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} Ghawdex. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
