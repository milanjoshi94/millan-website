import React from 'react';

import { useAccess } from '../context/AccessContext';

const Pricing = () => {
  const plans = [1, 2, 3]; 
  const { hasAccess } = useAccess();
  const handleAction = () => {
    if (hasAccess) {
      window.location.href = "/course-content";
    } else {
      window.open("https://pages.razorpay.com/pl_R1BekQZBIbHDAG/view", "_blank");
    }
  };
  return (
    <section className="pt-24 relative overflow-hidden px-4 lg:px-0">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block bg-[#F5F5F5] text-black px-16 py-2 rounded-full mb-3 lora-700 text-sm md:text-base">
          Ready to level up?
        </div>
        
        <h2 className="text-4xl md:text-5xl lora-700 text-white mb-12 ">
          From Concept to Construction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          {plans.map((_, index) => (
            <div key={index} className={`bg-[#F5F5F5] rounded-[10px] overflow-hidden shadow-2xl flex flex-col ${index === 1 ? "md:col-span-3" : "md:col-span-2"}`}>
              <div className="px-8 py-3 pb-2 text-left border-b">
                <p className="text-xl lora-700 text-black mb-1">Quarterly Plan</p>
                <p className="text-sm lora-400">Try it out</p>
              </div>
              <div className="px-8 py-3 text-left grow">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-black">₹ 5,999</span>
                </div>
                <p className="lora-400 text-sm pt-2">(₹2,000 per month)</p>
              </div>
              <div className="pt-8 pb-4 px-8">
                <button onClick={handleAction} className="w-full bg-[#FFCB1F] hover:bg-[#e6b61c] text-black font-bold py-2 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
                   {hasAccess ? "Go to Course" : "Start with 3 Months"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;