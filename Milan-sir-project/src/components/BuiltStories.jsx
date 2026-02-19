// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Mousewheel, FreeMode } from 'swiper/modules';
// import { Play, X } from 'lucide-react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';

// const BuiltStories = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const videos = [
//     { id: 1, url: "/video.mp4" },
//     { id: 2,url: "/videof.mp4"},
//     { id: 3, url: "/videfo.mp4"},
//     { id: 4, url: "/video.mp4"},
//   ];

//   return (
//     <section className=" py-10 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-5xl lora-700 text-white mb-8 text-center ">
//           Built Stories
//         </h2>

//        <Swiper
//   modules={[Autoplay, Mousewheel, FreeMode]}
//   spaceBetween={25}
//   slidesPerView={1.2}
//   loop={true}
//   speed={5000} // Adjust this for speed (higher = slower)
//   freeMode={true}
//   autoplay={{
//     delay: 0,
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true, // Optional: pauses when user hovers
//   }}
//   breakpoints={{
//     640: { slidesPerView: 2.5 },
//     1024: { slidesPerView: 4 },
//   }}
//   // This CSS class is vital for the linear movement
//   className="linear-swiper cursor-grab active:cursor-grabbing"
// >
//           {videos.map((video) => (
//             <SwiperSlide key={video.id}>
//               <div 
//                 onClick={() => setSelectedVideo(video)}
//                 className="relative h-120 overflow-hidden rounded-[10px] border border-white/20 bg-zinc-900 group cursor-pointer"
//               >
//                 <video 
//                   src={video.url}
//                   className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
//                   muted
//                   loop
//                   playsInline
//                   autoPlay
//                 />
                
//                 <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
//                   <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center backdrop-blur-md transform group-hover:scale-110 transition-all duration-300">
//                     <Play className="text-white ml-1" strokeWidth={1} size={28} />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {selectedVideo && (
//         <div 
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
//           onClick={() => setSelectedVideo(null)} 
//         >
//           <button 
//             className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]"
//           >
//             <X size={32} />
//           </button>
          
//           <div 
//             className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/10"
//             onClick={(e) => e.stopPropagation()} 
//           >
//             <video 
//               src={selectedVideo.url}
//               className="w-full h-full object-cover"
//               controls
//               autoPlay
//               playsInline
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default BuiltStories;

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const BuiltStories = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, url: "/video.mp4" },
    { id: 2, url: "/video.mp4" },
    { id: 3, url: "/video.mp4" },
    { id: 4, url: "/video.mp4" },
    { id: 5, url: "/video.mp4" },
    { id: 6, url: "/video.mp4" },
  ];

  return (
    <section className="py-16 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-5xl lora-700 text-white mb-4 italic">
              Built Stories
            </h2>
            <p className="text-zinc-400">Experience our process through motion</p>
          </div>

          <div className="flex gap-4">
            <button className="story-prev p-1 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all cursor-pointer disabled:opacity-30">
              <ChevronLeft size={24} />
            </button>
            <button className="story-next p-1 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all cursor-pointer disabled:opacity-30">
              <ChevronRight size={24} />
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
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                onClick={() => setSelectedVideo(video)}
                className="relative h-[500px] rounded-[20px] overflow-hidden border border-white/10 bg-zinc-900 group cursor-pointer transition-all duration-500"
              >
                {/* Video Layer */}
                <video
                  src={video.url}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  muted
                  loop
                  playsInline
                  autoPlay
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                  <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-md transform group-hover:scale-110 group-hover:border-white transition-all duration-300">
                    <Play className="text-white ml-1" strokeWidth={1} size={28} fill="white" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedVideo(null)}
        >
          <button className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[110]">
            <X size={32} />
          </button>

          <div
            className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo.url}
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default BuiltStories;