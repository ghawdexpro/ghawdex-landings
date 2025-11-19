'use client';

import { motion } from 'framer-motion';
import { useState, useRef, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  href,
  variant = 'primary',
  target,
  rel
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (variant === 'primary') {
    return (
      <motion.a
        ref={buttonRef}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="group relative inline-flex items-center gap-3 px-8 py-5 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold text-lg shadow-2xl shadow-red-500/25 transform-gpu"
      >
        {/* Animated gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500"
          initial={{ x: "100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          animate={{ x: ['-200%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  // Secondary variant
  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="group relative inline-flex items-center gap-3 px-8 py-5 overflow-hidden rounded-full bg-white text-gray-900 font-semibold text-lg border-2 border-gray-200 hover:border-red-500 shadow-md transition-colors duration-300 transform-gpu"
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-50 to-amber-50"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
