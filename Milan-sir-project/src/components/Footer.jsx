import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <footer className="py-6 px-6 shadow-[inset_0px_4px_4px_0px_#FFFFFF40] text-base lora-700 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

        <div>
          <img className='max-w-24 top-5' src='/logo.png' />
        </div>

        <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#E0C9A1] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-white">
          <Phone className="w-6 h-6 " fill="currentColor" />
          <span className="">
            Contact- +91-9782317020
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;