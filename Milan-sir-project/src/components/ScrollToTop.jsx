import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-100 ">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          p-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-white cursor-pointer
          transition-all duration-300 hover:bg-[#E0C9A1] hover:text-black hover:scale-110 shadow-[0_0_20px_5px_rgba(236,212,170,0.6)]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
      >
        <ChevronUp size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default ScrollToTop;