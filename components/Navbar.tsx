'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
   <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a0a0a]/60 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
    {/* Logo */}
      <Image
                    src="/images/logoIconLightbase.svg" 
                    alt="Spryntor Avatar"
                    width={40}
                    height={40}
                    
                  />
    {/* <Link href="/" className="text-white font-bold text-xl">Spryntor</Link> */}

    {/* Desktop Nav */}
    <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
      <li><Link href="/">Home</Link></li>
      <li><Link href="#about">About</Link></li>
      <li><Link href="#services">Services</Link></li>
      <li><Link href="#work">Work</Link></li>
    </ul>

    {/* Contact Button */}
    <div className="hidden md:block">
      <Button className="bg-primary-color hover:bg-blue-700 text-white px-4"> <Link href='#contact'>Contact</Link></Button>
    </div>

    {/* Mobile Toggle */}
    <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle Menu">
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-[#0a0a0a]/60 backdrop-blur-md px-4 pb-4">
      <ul className="flex flex-col gap-4 text-white font-medium mt-4 ">
        <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
        <li><Link href="#services" onClick={toggleMenu}>Services</Link></li>
        <li><Link href="#work" onClick={toggleMenu}>Work</Link></li>
        <li>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2" onClick={toggleMenu}>
            Contact
          </Button>
        </li>
      </ul>
    </div>
  )}
</nav>

  );
}
