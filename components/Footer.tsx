"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  SiX,
  SiLinkedin,
  SiGithub,
  SiInstagram,
} from 'react-icons/si';



export default function Footer() {

  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);


  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 border-t border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Brand Info */}
        <div className=''>
          <h2 className="text-2xl font-semibold mb-2">Spryntor</h2>
          <p className="text-gray-400 text-sm">
            Empowering SaaS startups & branding studios with high-performance frontend and AI integrations.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2  md:flex md:flex-col md:items-center">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><Link href="#home" className="hover:text-white">Home</Link></li>
            <li><Link href="#about" className="hover:text-white">About</Link></li>
            <li><Link href="#services" className="hover:text-white">Services</Link></li>
            <li><Link href="#work" className="hover:text-white">Work</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div className="space-y-3  md:flex md:flex-col md:items-end">
          <h3 className="text-lg font-semibold ">Connect</h3>
          <div className=" flex gap-5 bg-white/15 px-6 py-4 rounded-2xl flex-row">
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <SiX className="w-5 h-5 text-white hover:text-blue-700" />
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <SiLinkedin className="w-5 h-5 text-white hover:text-blue-700" />
          </a>
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <SiGithub className="w-5 h-5 text-white hover:text-blue-700" />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <SiInstagram className="w-5 h-5 text-white hover:text-blue-700" />
          </a>
        </div>
          <p className="text-gray-400 text-sm">Email: hello@spryntor.com</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-600 text-sm">
        © {year} Spryntor. All rights reserved.
      </div>
    </footer>
  );
}
