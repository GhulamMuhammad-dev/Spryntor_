'use client';
import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0E0E10] border-t border-[#3F8CFF]/20 text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <Image
            src="/logo.svg" // replace with your logo path
            alt="Spryntor Logo"
            width={140}
            height={40}
            priority
          />
          <p className="mt-4 text-sm leading-relaxed">
            Helping SaaS founders launch MVPs, improve UI, and integrate AI for a better user experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/services" className="hover:text-[#3F8CFF] transition">Services</a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#3F8CFF] transition">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#3F8CFF] transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="/services/mvp-launch" className="hover:text-[#3F8CFF] transition">MVP Launch</a>
            </li>
            <li>
              <a href="/services/frontend" className="hover:text-[#3F8CFF] transition">Frontend Development</a>
            </li>
            <li>
              <a href="/services/ui-animations" className="hover:text-[#3F8CFF] transition">UI Animations</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3F8CFF] transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3F8CFF] transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3F8CFF] transition">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3F8CFF]/20 py-6 text-center text-sm">
        © {new Date().getFullYear()} Spryntor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
