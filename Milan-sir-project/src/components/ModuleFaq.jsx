import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus, Minus } from 'lucide-react';

const moduleData = [
  {
    id: 1,
    title: "Architecture Growth Mindset: The Foundation of Your Studio",
    content: "Detailed lessons on establishing a growth-oriented business perspective for architects."
  },
  {
    id: 2,
    title: "Expert Designer Blueprint: Building the mindset to create a sustainable Architecture Studio",
    content: "Strategies for long-term sustainability and professional identity in the design industry."
  },
  {
    id: 3,
    title: "Architecture Growth Mindset: Purpose, Clarity & Direction",
    content: "Defining your studio's unique value proposition and setting clear milestones."
  },
  {
    id: 4,
    title: "Structured lessons covering design, planning.",
    content: "Technical workflows and planning phases for high-end residential and commercial projects."
  },
  {
    id: 5,
    title: "Structured lessons covering design, planning.",
    content: "Advanced project management and client communication protocols."
  },
  {
    id: 6,
    title: "Structured lessons covering design, planning.",
    content: "Final execution phases, site supervision, and post-occupancy evaluation."
  }
];

const ModuleFaq = () => {
  const [openId, setOpenId] = useState(null);
const [content, setContent] = useState(null);
  const [error, setError] = useState(false);
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const fetchContent = async () => {
      const token = localStorage.getItem('course_token');
      try {
        const { data } = await axios.get('http://localhost:5000/api/payments/course-content', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setContent(data);
      } catch (err) {
        setError(true);
      }
    };
    fetchContent();
  }, []);

  // if (error) return <div className="text-white p-20">Please buy the course to view this.</div>;
  // if (!content) return <div className="text-white p-20">Loading...</div>;

  return (
    <section className=" py-16 max-w-7xl mx-auto  px-4 lg:px-0 text-white">
      <h3 className='text-4xl md:text-5xl lora-700  text-center pb-5'>Expert Design Blueprint</h3>
      <p className='pb-14 text-center text-xl font-bold sora'>
        Learn real-world architecture and build a successful design studio.
      </p>
      <div className="space-y-4">
        {moduleData.map((item) => (
          <div
            key={item.id}
            className="border-[0.5px] border-[#E0C9A1] rounded-xl overflow-hidden bg-zinc-950 transition-all duration-300 shadow-[0px_4px_4px_0px_#00000040]"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full md:flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-lg md:text-2xl font-bold text-white pr-4 sora pb-4 md:pb-0">
                {item.title}
              </span>

              <div className="flex items-center justify-end gap-4 shrink-0 mt-2 md:mt-0">
                <span className="bg-[#E0C9A1] lora-700 text-black px-4 py-1 rounded-lg text-lg hover:bg-[#ECD4AA]/90 transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-102">
                  Module {item.id}
                </span>
                {openId === item.id ? (
                  <Minus className="text-[#E0C9A1] w-6 h-6" />
                ) : (
                  <Plus className="text-[#E0C9A1] w-6 h-6" />
                )}
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="p-6 pt-0 text-zinc-400 border-t border-white/5 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className='flex justify-center mt-8'>
      <a href='#pricing' className='bg-[#ECD4AA] lora-700 text-lg md:text-2xl px-5 py-2 rounded-lg text-black hover:bg-[#ECD4AA]/90 transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-102'>Become a member</a>
     </div>
    </section>
  );
};

export default ModuleFaq;