'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Wrench } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import MagneticButton from './MagneticButton';

const easing = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    id: 1,
    title: 'Solar Panel Installation',
    description: 'Premium photovoltaic systems with 14-day guaranteed installation',
    image: '/services ghawdex/solar panel installation.JPG',
    category: 'Energy',
  },
  {
    id: 2,
    title: 'Energy Storage Solutions',
    description: 'Advanced battery systems for maximum energy independence',
    image: '/services ghawdex/storage.JPG',
    category: 'Storage',
  },
  {
    id: 3,
    title: 'Solar Pergolas',
    description: 'Stylish outdoor structures with integrated solar panels for shade and power',
    image: '/services ghawdex/pergolas.JPG',
    category: 'Outdoor',
  },
  {
    id: 4,
    title: 'Custom Roof Frames',
    description: 'Structural support systems for roofs unable to bear solar panel weight',
    image: '/services ghawdex/custom structure.JPG',
    category: 'Construction',
  },
  {
    id: 5,
    title: 'Liquid Membrane',
    description: 'Professional waterproofing solutions for complete roof protection',
    image: '/services ghawdex/roof_membrane.JPG',
    category: 'Construction',
  },
  {
    id: 6,
    title: 'Electrical Services',
    description: 'Complete electrical installations and smart home integration',
    image: '/services ghawdex/electrical works.JPG',
    category: 'Electrical',
  },
  {
    id: 7,
    title: 'EMS - Energy Management Systems',
    description: 'Smart monitoring and optimization for maximum energy efficiency',
    image: '/services ghawdex/EMS - energy management.jpg',
    category: 'Smart Tech',
  },
  {
    id: 8,
    title: 'Indoor Farming Systems',
    description: 'Solar-powered sustainable agriculture and climate control',
    image: '/services ghawdex/indoor farming.jpg',
    category: 'Innovation',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: easing }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-3xl glass-card hover:shadow-glow transition-all duration-500 transform-gpu">
        {/* Service Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Category badge */}
          <div className="absolute top-4 right-4 px-4 py-2 backdrop-blur-md bg-black/30 border border-white/20 rounded-full text-xs font-semibold text-white shadow-lg">
            {service.category}
          </div>

          {/* Animated gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-amber-500/20 to-yellow-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Floating shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            animate={{ x: isHovered ? ['-200%', '200%'] : '-200%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {/* Service info */}
        <div className="relative p-6 backdrop-blur-sm bg-black/40 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Animated bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="relative section-padding overflow-hidden bg-[#1a1a1a]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f1f] via-[#1a1a1a] to-[#1a1a1a]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easing }}
            className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-md bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-8 shadow-lg glow-amber"
          >
            <Wrench className="w-4 h-4" />
            <span>What We Do</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive energy and construction solutions<br className="hidden sm:block" />
            for homes and businesses across Malta
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 perspective-1000">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: easing }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-400 mb-8">
            Ready to transform your property with our expert services?
          </p>
          <MagneticButton
            href="https://wa.me/35679055156"
            variant="primary"
          >
            Get Free Consultation
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
