'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/35679055156"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-50 flex items-center justify-center w-16 h-16 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20BA58] text-white rounded-full shadow-lg transition-all duration-300 tap-target"
      style={{
        bottom: 'max(2rem, env(safe-area-inset-bottom, 2rem))',
        right: 'max(2rem, env(safe-area-inset-right, 2rem))'
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-7 sm:h-7" />
    </motion.a>
  );
}
