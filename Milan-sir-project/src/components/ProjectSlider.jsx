import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const projectImages = [
  "/project.png",
"/project1.png",
"/project2.png",
"/project4.png",
 "/project3.png",
  "/project9.png",
   "/project8.png",
 "/project5.jpg",
 "/project6.jpg",
];

const ProjectSlider = () => {
  return (
    <section className=" py-20 px-6 text-white ">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex justify-between items-end mb-10">
          <h2 className="text-5xl lora-700 ">Projects</h2>

          <div className="flex justify-end mt-3 md:mt-0 gap-3">
            <button className="prev-btn p-1 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="next-btn p-1 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={27}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="rounded-xl"
        >
          {projectImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-120 overflow-hidden rounded-[10px] group">
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSlider;