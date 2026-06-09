import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const projectImages = [
  '/project.png',
  '/project1.png',
  '/project2.png',
  '/project3.png',
  '/project4.png',
  '/project5.jpg',
  '/project6.jpg',
  '/project8.png',
  '/project9.png',

  '/project10.jpeg',
  '/project11.jpeg',
  '/project12.jpeg',
  '/project13.jpeg',
  // '/project14.jpeg',
  // '/project15.jpeg',
  // '/project16.jpeg',
  '/project17.jpeg',
  '/project18.jpeg',
  '/project19.jpeg',
  '/project20.jpeg',
  '/project21.jpeg',
  '/project22.jpeg',
  // '/project23.jpeg',
  '/project24.jpeg',
  '/project25.jpeg',
  // '/project26.jpeg',

  '/project27.jpg',
  '/project28.jpg',
  '/project29.jpg',
  '/project30.png',
  '/project31.png',
  // '/project32.png',
  // '/project33.png',
  '/project34.png',
  '/project35.png',
  '/project36.png',
  '/project37.png',
  '/project38.png',
  '/project39.jpg',
  '/project40.jpg',
  '/project41.png',
  '/project42.jpg',
  '/project43.jpg',
  '/project44.png',
  '/project45.png',
  '/project46.png',
  '/project47.jpg',
  '/project48.jpg',
  '/project49.jpg',
  '/project50.jpg',
];

const ProjectSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="md:flex justify-between items-end mb-10">
          <h2 className="text-5xl lora-700">Projects</h2>

          <div className="flex justify-end mt-3 md:mt-0 gap-3">
            <button className="prev-btn p-1 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all">
              <ChevronLeft size={20} />
            </button>

            <button className="next-btn p-1 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={27}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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
              <div
                onClick={() => setSelectedImage(src)}
                className="relative h-[500px] overflow-hidden rounded-[10px] group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium border border-white px-5 py-2 rounded-full backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected Project"
              className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSlider;