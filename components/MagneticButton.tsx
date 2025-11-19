'use client';

import { motion } from 'framer-motion';
import { useState, useRef, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  href,
  variant = 'primary',
  target,
  rel,
  onClick
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
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="group relative inline-flex items-center gap-3 px-8 py-5 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold text-lg shadow-2xl shadow-red-500/25 hover:shadow-[0_0_40px_rgba(206,17,38,0.4)] transition-shadow duration-300 transform-gpu"
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

  // Secondary variant - Dark theme
  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="group relative inline-flex items-center gap-3 px-8 py-5 overflow-hidden rounded-full bg-white/5 backdrop-blur-sm text-white font-semibold text-lg border-2 border-white/10 hover:border-amber-500/50 shadow-md hover:shadow-[0_0_24px_rgba(251,191,36,0.25)] transition-all duration-300 transform-gpu"
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-amber-500/10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
