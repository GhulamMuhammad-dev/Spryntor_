'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Flipped Background Image */}
 

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About Spryntor
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg text-gray-400 mb-10">
          We build lightning-fast, production-ready frontend systems with AI assistance for B2B SaaS startups.
        </p>

        {/* About Card */}
        <div className="bg-gradient-to-b from-black to-[#0c0c0c] border border-blue-500 rounded-2xl p-8 shadow-xl max-w-xl mx-auto">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-600">
              <Image
                src="/images/profile.jpg" // Replace with your profile image path
                alt="Spryntor Avatar"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <h3 className="text-2xl font-semibold mb-2">Who We Are</h3>
          <p className="text-sm md:text-base text-gray-300">
            At Spryntor, we specialize in transforming product ideas into fully functional and beautiful user interfaces.
            Whether you&apos;re building a SaaS dashboard, marketing site, or internal tools, we combine frontend development
            with AI automation to help you move faster and smarter  without compromising quality.
          </p>
        </div>
      </div>
    </section>
  );
}
