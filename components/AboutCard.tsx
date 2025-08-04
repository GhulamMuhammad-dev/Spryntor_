'use client';

import Image from 'next/image';

export default function AboutCard() {
  return (
    <div className="relative max-w-xl w-full rounded-2xl bg-gradient-to-b from-black to-[#0c0c0c] border border-blue-500 p-8 text-center shadow-xl mx-auto">
      {/* Profile Avatar */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <Image
            src="/images/profile.jpg" // ⬅️ Replace this with your actual image path
            alt="Profile Avatar"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
        About Spryntor
      </h2>

      {/* Subheading / Description */}
      <p className="text-sm md:text-base text-gray-300">
        Spryntor is a frontend and AI services studio focused on helping
        B2B SaaS startups build and launch beautiful, scalable user
        experiences faster. With a deep understanding of design systems,
        developer handoff, and modern UI tech stacks, we bring your
        product vision to life with precision and speed.
      </p>
    </div>
  );
}
