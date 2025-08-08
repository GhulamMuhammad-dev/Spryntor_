'use client';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Frontend Development',
    description: [
      'Next.js, React, Tailwind CSS',
      'Mobile-first, fully responsive',
      'Pixel-perfect from Figma, Sketch, or XD',
    ],
  },
  {
    title: 'UI Animation & Microinteractions',
    description: [
      'On-scroll animations, hover effects, and smooth transitions',
      'GSAP and Framer Motion expertise',
      'Subtle animations that improve engagement',
    ],
  },
  {
    title: 'Performance Optimization',
    description: [
      'Lighthouse score improvements',
      'Image optimization, lazy loading, and caching strategies',
      'Code splitting and bundle size reduction',
    ],
  },
  {
    title: 'API & Backend Integration',
    description: [
      'REST & GraphQL',
      'Secure data handling',
      'Real-time updates with WebSockets',
    ],
  },
  {
    title: 'Collaboration with UX/UI Teams',
    description: [
      'Smooth handoff from design to development',
      'Iterative builds with transparent communication',
      'Feedback-friendly workflow',
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-[#0E0E10] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#3F8CFF] mb-4 font-['UI_Creative_Studio_Bold']">
            Services
          </h1>
          <p className="text-lg text-[#F4F4F5] max-w-3xl mx-auto">
            From MVP launches to refining complex product dashboards, Spryntor delivers
            frontend that’s fast, interactive, and future-proof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1A1A1D] border border-[#3F8CFF] rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(63,140,255,0.4)] transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#3F8CFF] mb-4">{service.title}</h3>
              <ul className="space-y-2 text-[#D1D1D4]">
                {service.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3F8CFF] mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
