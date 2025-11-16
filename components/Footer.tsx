'use client';

import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/logo/Ghawdex engineering logo.svg"
                alt="Ghawdex Engineering"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Professional solar energy solutions delivered in 14 days.
              We combine cutting-edge technology with expert installation to power your future.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-sky-600 rounded-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-sky-600 rounded-lg transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-sky-600 rounded-lg transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Analysis Tool
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@ghawdex.pro" className="text-gray-400 hover:text-white transition-colors duration-300">
                    info@ghawdex.pro
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+356XXXXXXXX" className="text-gray-400 hover:text-white transition-colors duration-300">
                    +356 XXXX XXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  Malta
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ghawdex. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
