'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  SiX,
  SiLinkedin,
  SiGithub,
  SiInstagram,
} from 'react-icons/si';
import { Link2, X } from 'lucide-react';

export default function Card() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative max-w-xl w-full rounded-2xl bg-gradient-to-b from-accent-dark to-accent-dark/30 border border-primary-color p-8 text-center shadow-xl mx-auto">
      
      {/* Card Content */}
      <h1 className="text-2xl md:text-3xl font-bold text-accent-light mb-4">
        Accelerate Your SaaS MVP with <br />
        <span className="text-accent-light ">Frontend and  AI Expertise</span>
      </h1>
      <p className="text-sm md:text-base text-accent-light/30 mb-6">
        We help B2B SaaS startups design and build production-ready user
        interfaces faster, smarter, and powered by practical AI.
      </p>
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        <Button className="bg-primary-color hover:bg-primary-color/40 text-accent-light px-16">
          Hire
        </Button>
        <Button
          variant="outline"
          className="border-accent-light bg-transparent text-accent-light hover:bg-accent-light hover:text-accent-dark px-16 cursor-pointer"
        >
          Email
        </Button>
      </div>

      {/* Social section at the bottom of card */}
      <div className="flex justify-center items-center">
        {/* Desktop View - Icons */}
        <div className="hidden md:flex gap-5 bg-accent-light/15 px-6 py-4 rounded-2xl">
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <SiX className="w-5 h-5 text-accent-light hover:text-primary-color" />
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <SiLinkedin className="w-5 h-5 text-accent-light hover:text-primary-color" />
          </a>
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <SiGithub className="w-5 h-5 text-accent-light hover:text-primary-color" />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <SiInstagram className="w-5 h-5 text-accent-light hover:text-primary-color" />
          </a>
        </div>

        {/* Mobile View - Link Icon */}
        <div className="md:hidden">
          <button onClick={() => setShowPopup(true)} aria-label="Open Social Links">
            <Link2 className="w-6 h-6 text-accent-light hover:text-primary-color transition-colors" />
          </button>
        </div>
      </div>

      {/* Popup inside the card - Mobile only */}
      {showPopup && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 bg-black border-primary-color border rounded-xl p-4 shadow-lg z-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-accent-light">Follow Us</span>
            <button onClick={() => setShowPopup(false)} aria-label="Close Popup">
              <X className="w-6 h-6 text-accent-light hover:text-red-500" />
            </button>
          </div>
          <div className="flex justify-between items-center border-t-2 border-primary-color p-4 ">
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <SiX className="w-6 h-6 hover:text-primary-color text-accent-light" />
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <SiLinkedin className="w-6 h-6 hover:text-primary-color text-accent-light" />
            </a>
            <a href="https://github.com" target="_blank" aria-label="GitHub">
              <SiGithub className="w-6 h-6 hover:text-primary-color text-accent-light" />
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <SiInstagram className="w-6 h-6 hover:text-primary-color text-accent-light" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
