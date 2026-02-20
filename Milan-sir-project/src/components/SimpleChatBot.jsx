import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, X, CheckCircle2 } from 'lucide-react';

const SimpleChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    
    // Replace with your Web3Forms Access Key
      formData.append("access_key", "aad71b87-b40d-4aa7-8c71-f5436b9c3186");
    formData.append("subject", "Query");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        
        // --- THIS CLEARS THE INPUTS ---
        e.target.reset(); 

        // Automatically close after 3 seconds
        setTimeout(() => {
          setIsOpen(false);
          // Small delay before resetting status so the transition is smooth
          setTimeout(() => setStatus('idle'), 500);
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error", error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full transition-all duration-500 shadow-2xl flex items-center justify-center cursor-pointer
          ${isOpen ? 'bg-zinc-900 rotate-90 scale-90' : 'bg-black text-white hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]'}
        `}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} />}
      </button>

      <div className={`
        absolute bottom-20 right-0 w-80 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isOpen 
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
          : 'opacity-0 translate-y-10 scale-90 pointer-events-none'}
      `}>
        <div className="bg-white p-4 flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-black font-bold text-sm">Drop a Message</span>
        </div>

        <div className="p-5 min-h-[300px] flex flex-col justify-center">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center space-y-3 animate-in fade-in zoom-in duration-500">
              <CheckCircle2 size={48} className="text-green-500" />
              <p className="text-white font-medium">Message sent!</p>
              <p className="text-zinc-500 text-xs">Inputs cleared. Closing soon...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  className="w-full bg-zinc-900/50 border border-white/5 p-3 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="How can we help you today?"
                  className="w-full bg-zinc-900/50 border border-white/5 p-3 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all resize-none placeholder:text-zinc-700"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? "Sending..." : <>Send Message <Send size={14} /></>}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-[10px] text-center mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleChatBot;