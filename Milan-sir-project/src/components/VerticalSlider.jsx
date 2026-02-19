import React from 'react';

const column1 = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600607687940-4e5272745b5a",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
];

const column2 = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
];

const column3 = [
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
];

const ScrollingColumn = ({ images, speedClass }) => (
  <div className="h-full overflow-hidden">
    <div className={`scrolling-content gap-4 ${speedClass}`}>
      {[...images, ...images].map((src, i) => (
        <div key={i} className="w-full shrink-0 px-1">
          <img
            src={src}
            alt="Architecture"
            className="w-full rounded-xl object-cover shadow-md hover:scale-[1.02] transition-transform duration-300"
            style={{ height: i % 3 === 0 ? '380px' : i % 3 === 1 ? '216px' : '453px' }}
          />
        </div>
      ))}
    </div>
  </div>
);

const VerticalSlider = () => {

  return (
    <section className='relative  mt-10'>
      <img className='hidden md:block md:absolute md:left-0 max-w-36 -top-5 -z-10' src='/logo.png' />
      <img className='absolute right-0  top-5' src='/section1-vector.png' />
      <h1 className='text-4xl md:text-5xl -top-5 lora-700 text-white text-center '>
        Design <span className='text-[#E0C9A1]'>better</span>. Work <span className='text-[#E0C9A1]'>smarter</span>.<br />
        Build a <span className='text-[#E0C9A1]'>stronger</span> architecture practice.
      </h1>
      <div className='flex justify-center mt-8'>
        <a href='#pricing' className='bg-[#ECD4AA] lora-700 cursor-pointer text-lg md:text-2xl px-5 py-2 rounded-lg hover:bg-[#ECD4AA]/90 transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-102'>Become a member</a>
      </div>
      <div className="flex justify-center items-center  min-h-screen max-w-7xl mx-auto py-8 px-4 lg:px-0 ">
        <div className="relative h-screen w-full overflow-hidden pause-on-hover rounded-sm">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
            <ScrollingColumn images={column1} speedClass="animate-scroll-fast" />
            <div className="hidden md:block h-full">
              <ScrollingColumn images={column2} speedClass="animate-scroll-slow" />
            </div>
            <div className="hidden md:block h-full">
              <ScrollingColumn images={column3} speedClass="animate-scroll-fast" />
            </div>
            <div className="hidden lg:block h-full">
              <ScrollingColumn images={column2} speedClass="animate-scroll-slow" />
            </div>
          </div>
          {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black via-black/40 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black via-black/40 to-transparent z-20" /> */}
        </div>
      </div>
    </section>
  );
};

export default VerticalSlider;

