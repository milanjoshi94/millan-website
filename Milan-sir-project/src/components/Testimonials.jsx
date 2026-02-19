import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialData = [
  { name: "Seema", text: "Discover what our satisfied customers have to say about their experience with our services" },
  { name: "Rahul", text: "The attention to detail and professional service exceeded my expectations. Highly recommended!" },
  { name: "Ananya", text: "A seamless experience from start to finish. The team is incredibly supportive and skilled." },
  { name: "Vikram", text: "Innovative solutions and a great eye for design. They truly transformed our vision into reality." },
  { name: "Priya", text: "Fast, reliable, and high-quality work. I couldn't be happier with the final results." },
  { name: "Amit", text: "Outstanding support and brilliant execution. They really understood our brand needs." }
];

const Testimonials = () => {
  const extendedData = [...testimonialData, ...testimonialData];

  return (
    <section className="bg-black px-4 py-16 bg-[url('/testimonial.png')] bg-center bg-no-repeat bg-cover overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl lora-700 text-white mb-4 italic">Client Testimonials</h2>
          <p className="text-base text-white">Hear from their experience</p>
        </div>

        <div className='relative'>
      <Swiper
  modules={[Navigation, Autoplay, Pagination]}
  spaceBetween={24}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  navigation={{ prevEl: '.test-prev', nextEl: '.test-next' }}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 }, // Shows 4 cards
  }}
  className="testimonial-swiper"
>
  {extendedData.map((item, index) => (
    <SwiperSlide key={index} className="py-10">
      {/* Notice we no longer use 'isActive'. 
          The 'moving-border-card' class handles the base look, 
          and our CSS handles the scaling for cards 2 and 3.
      */}
      <div className="moving-border-card h-full transition-all duration-500 rounded-2xl">
        <div className="relative z-10 p-6 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/20 overflow-hidden shrink-0">
              <img
                src={`https://i.pravatar.cc/150?u=${item.name}`}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">{item.name}</h4>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed italic text-xs md:text-sm flex-grow">
            "{item.text}"
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

          <button className="test-prev absolute md:-left-16 top-1/2 -translate-y-1/2 z-20 p-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all hidden xl:flex">
            <ChevronLeft size={24} />
          </button>
          <button className="test-next absolute md:-right-16 top-1/2 -translate-y-1/2 z-20 p-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all hidden xl:flex">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;