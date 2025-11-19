'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Building2, Home, Factory, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import MagneticButton from './MagneticButton';

const easing = [0.16, 1, 0.3, 1] as const; // easeOutExpo

// Real project data from GPS-tagged photos
const projects = [
  {
    id: 1,
    title: 'Solar Installation - Rabat',
    category: 'Residential',
    icon: Home,
    image: '/projects/r-rabat-1.jpg',
    capacity: '8 kW',
    panels: '10 panels',
    completion: '5 days'
  },
  {
    id: 2,
    title: 'Solar Installation - Għarb',
    category: 'Residential',
    icon: Home,
    image: '/projects/gharb-1.jpg',
    capacity: '7 kW',
    panels: '8 panels',
    completion: '8 days'
  },
  {
    id: 3,
    title: 'Solar Installation - Xewkija',
    category: 'Residential',
    icon: Home,
    image: '/projects/x-xewkja-1.jpg',
    capacity: '5 kW',
    panels: '7 panels',
    completion: '11 days'
  },
  {
    id: 4,
    title: 'Solar Installation - Fontana',
    category: 'Residential',
    icon: Home,
    image: '/projects/fontana-4.jpg',
    capacity: '5 kW',
    panels: '6 panels',
    completion: '4 days'
  },
  {
    id: 5,
    title: 'Solar Installation - Ta\' Kerċem',
    category: 'Residential',
    icon: Home,
    image: '/projects/ta-kercem-2.jpg',
    capacity: '7 kW',
    panels: '8 panels',
    completion: '8 days'
  },
  {
    id: 6,
    title: 'Solar Installation - Xagħra',
    category: 'Residential',
    icon: Home,
    image: '/projects/x-xaghra-1.jpg',
    capacity: '8 kW',
    panels: '10 panels',
    completion: '14 days'
  }
];

// Project card with tilt effect
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
        {/* Project Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Category badge with glassmorphism */}
          <div className="absolute top-4 right-4 px-4 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full text-xs font-semibold text-white shadow-lg">
            {project.category}
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

        {/* Project info with glassmorphism */}
        <div className="relative p-4 sm:p-6 backdrop-blur-sm bg-white/60 border-t border-white/40">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors">
            {project.title}
          </h3>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
            <div className="text-center p-2 sm:p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40">
              <div className="text-gray-500 text-[10px] sm:text-xs mb-1 font-medium">Capacity</div>
              <div className="font-bold text-gray-900 text-xs sm:text-sm">{project.capacity}</div>
            </div>
            <div className="text-center p-2 sm:p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40">
              <div className="text-gray-500 text-[10px] sm:text-xs mb-1 font-medium">Panels</div>
              <div className="font-bold text-gray-900 text-xs sm:text-sm">{project.panels}</div>
            </div>
            <div className="text-center p-2 sm:p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/40">
              <div className="text-amber-700 text-[10px] sm:text-xs mb-1 font-medium">Time</div>
              <div className="font-bold text-amber-600 text-xs sm:text-sm">{project.completion}</div>
            </div>
          </div>
        </div>

        {/* Animated bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative section-padding overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/20 to-white"></div>

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
            className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-md bg-amber-500/10 border border-amber-500/20 text-amber-700 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <Award className="w-4 h-4" />
            <span>Our Work</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
            Proven Track Record
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Quality installations delivered across Malta—<br className="hidden sm:block" />
            from residential homes to industrial facilities
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: easing }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
            Ready to see your property transformed with solar energy?
          </p>
          <MagneticButton
            href="https://solar-scan-ge-production-d63a.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
