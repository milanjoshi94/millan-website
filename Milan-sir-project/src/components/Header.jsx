import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 w-full bg-zinc-300/80 backdrop-blur-md py-4 px-4 lg:px-0 border-b border-black/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between lg:justify-center lg:gap-16">
        
        {/* Mobile Logo or Contact (Visible only on small screens) */}
        <div className="lg:hidden flex items-center gap-2 text-black">
          <Phone size={18} strokeWidth={1.5} fill="currentColor" />
          <span className="lora-600 text-lg">+91-9782317020</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-16">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-black lora-600 text-xl hover:text-zinc-600 transition-colors duration-300">
            Home
          </Link>
          <a href="#about" className="text-black lora-600 text-xl hover:text-zinc-600 transition-colors duration-300">
            About us
          </a>
          <a href="#projects" className="text-black lora-600 text-xl hover:text-zinc-600 transition-colors duration-300">
            Projects
          </a>
          
          <div className="flex items-center gap-2 text-black ml-4">
            <Phone size={20} strokeWidth={1.5} fill="currentColor" />
            <span className="lora-600 text-xl">
              Contact - +91-9782317020
            </span>
          </div>
        </div>

        <button 
          className="lg:hidden text-black p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`
        lg:hidden fixed left-0 top-18 w-full bg-zinc-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="flex flex-col p-6 gap-6 border-t border-black/5">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-black lora-600 text-lg">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-black lora-600 text-lg">About us</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-black lora-600 text-lg">Projects</a>
          <div className="pt-4 border-t border-black/10 flex items-center gap-3 text-black">
            <Phone size={18} strokeWidth={1.5} fill="currentColor" />
            <span className="lora-600">+91-9782317020</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;