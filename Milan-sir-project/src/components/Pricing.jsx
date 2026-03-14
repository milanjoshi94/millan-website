import React from 'react';
import { Check } from 'lucide-react';
import { useAccess } from '../context/AccessContext';

const Pricing = () => {
  const { hasAccess } = useAccess();
  const handleAction = () => {
    if (hasAccess) {
      window.location.href = "/course-content";
    } else {
      window.open("https://pages.razorpay.com/pl_SPAEXS13jz7xN9/view", "_blank");
    }
  };

  const features = [
    {
      title: "Forever Access",
      description: "Never Pay again",
    },
    {
      title: "All Features Included",
      description: "Premium features unlocked",
    },
    {
      title: "Priority Support",
      description: "Get help when you need it",
    },
    {
      title: "Future Updates",
      description: "All Updates included forever",
    },
  ];

  return (
    <section className="mt-24 relative py-8 pb-10 px-4 lg:px-10 shadow-[0px_4px_24.1px_0px_#FFFFFFB2] max-w-7xl mx-auto rounded-lg">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block bg-[#F5F5F5] text-black px-16 py-2 rounded-full mb-3 lora-700 text-sm md:text-base">
          Ready to level up?
        </div>

        <h2 className="text-4xl md:text-5xl lora-700 text-white mb-12 ">
          From Concept to Construction
        </h2>

        <div className="lg:flex justify-center gap-8">
          <div className='lg:w-5/7'>
            <div className="bg-[#F5F5F5] rounded-[10px] py-4  shadow-[0px_4px_35.3px_0px_#FFFFFFE5] px-2 text-center">
              <div className='md:flex gap-3'>
                <div className='px-2 md:w-4/7'>
                  <div className="lg:px-8 py-3 pb-2 ">
                    <p className="text-2xl lora-700 text-black mb-1">Unlimited Lifetime Access</p>
                    <p className="text-2xl lora-400">Try it out</p>
                  </div>
                  <div className="lg:px-12 py-3 text-left grow  border-t-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[64px] font-bold madimi-one-700  text-black">₹ 4,999</span>
                    </div>
                    <p className="lora-400 text-base lg:pt-2">(₹2,000 per month)</p>
                  </div>
                  <div className="lg:pt-8 pb-4 lg:px-8">
                    <button onClick={handleAction} className="w-full bg-[#FFCB1F] hover:bg-[#e6b61c] text-[20px] text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                      {hasAccess ? "Go to Course" : "Unlock Lifetime Access"}
                    </button>
                  </div>
                </div>
                <div className='flex items-center md:w-3/7 md:border-l-2 ps-2'>
                  <div className=' mx-auto  '>
                    <div className=' '>
                      <p className="text-xl lora-700 mb-3 text-start">
                        What's Included
                      </p>
                      <div className='space-y-2 '>
                        {features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mt-2">
                              <Check className="w-5 h-5 text-emerald-500 stroke-[3px] me-2" />
                            </div>
                            <div>
                              <p className="text-base text-start lora-700 mb-0">
                                {feature.title}
                              </p>
                              <p className="lora-400 text-left">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className='text-white edu-tas-beginner-700 text-2xl h-full flex items-center justify-center mt-3 lg:mt-0'>
              “You’re about to make one of the best decisions of your life.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;