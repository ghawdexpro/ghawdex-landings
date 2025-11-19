'use client';

import { motion } from 'framer-motion';
import { Building2, Home, Factory, Award } from 'lucide-react';
import Image from 'next/image';

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

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>Our Work</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From residential homes to large industrial facilities—see the quality installations
            we've delivered across Malta.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                  {project.category}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/10 transition-all duration-300"></div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Capacity</div>
                    <div className="font-semibold text-gray-900">{project.capacity}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Panels</div>
                    <div className="font-semibold text-gray-900">{project.panels}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Time</div>
                    <div className="font-semibold text-emerald-600">{project.completion}</div>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to see your property transformed with solar energy?
          </p>
          <a
            href="https://solar-scan-ge-production-d63a.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
