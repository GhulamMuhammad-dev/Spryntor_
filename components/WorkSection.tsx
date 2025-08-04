'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'SaaS Dashboard UI',
    description: 'Clean and accessible dashboard UI with custom theme using shadcn/ui.',
    image: '/images/studioWebHero.png',
    link: '#',
    colSpan: 'md:col-span-2',
  },
  {
    title: 'AI Prompt Builder',
    description: 'Frontend for GPT-based AI prompt workflows.',
    image: '/images/studioWebHero.png',
    link: '#',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Figma to Code App',
    description: 'Drag and drop UI builder that turns Figma to Tailwind + JSX.',
    image: '/images/studioWebHero.png',
    link: '#',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Marketing Website',
    description: 'Blazing-fast website built with Next.js 15 and App Router.',
    image: '/images/studioWebHero.png',
    link: '#',
    colSpan: 'md:col-span-2',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-black to-blue-600/30 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
        <p className="text-base md:text-lg text-gray-400 mb-12">
          Real projects we&apos;ve shipped for startups, creators, and SaaS founders.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.link}
              className={`group relative rounded-xl overflow-hidden border border-gray-800 bg-[#0a0a0a] hover:scale-[1.015] transition-all duration-300 ease-in-out ${project.colSpan}`}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center opacity-60 group-hover:opacity-40 transition-opacity"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
