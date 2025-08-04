'use client';

import { FaCode, FaRobot, FaFigma, FaBolt } from 'react-icons/fa6';

const services = [
  {
    title: 'Frontend Development',
    description:
      'We build fast, accessible, and scalable UIs using Next.js, TypeScript, Tailwind CSS, and shadcn/ui — optimized for SaaS products.',
    icon: <FaCode className="w-6 h-6 text-blue-500" />,
  },
  {
    title: 'AI Integration',
    description:
      'We embed AI features into your product — from smart suggestions to custom GPT-like tools — powered by OpenAI, Vercel AI SDK, or your own models.',
    icon: <FaRobot className="w-6 h-6 text-purple-500" />,
  },
  {
    title: 'Design to Code',
    description:
      'Turn Figma designs into high-performance code with pixel-perfect implementation, responsive layouts, and production-ready structure.',
    icon: <FaFigma className="w-6 h-6 text-pink-500" />,
  },
  {
    title: 'Rapid MVP Launch',
    description:
      'From idea to MVP in weeks, not months. We deliver full frontend systems with plug-and-play APIs to help SaaS founders test and launch faster.',
    icon: <FaBolt className="w-6 h-6 text-yellow-400" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background Blur like Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-black to-purple-600/30 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What We Offer
        </h2>
        <p className="text-base md:text-lg text-gray-400 mb-12">
          Practical, high-impact services designed to speed up your product development and sharpen your edge.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111] border border-blue-800 rounded-xl p-6 text-left hover:shadow-lg transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
