'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/35679055156"
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA58] text-white rounded-full shadow-lg transition-all duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
}
