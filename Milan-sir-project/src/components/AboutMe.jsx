import React from 'react';

const AboutMe = () => {
  return (
    <section className="relative pt-8 lg:pt-19 text-white">
        <img className='absolute left-0 ' src='/about-me-vector.png' />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative px-4 lg:px-0">
        <div className="flex-1 z-10">
          <h2 className="text-[#E0C9A1] text-4xl sora font-extrabold mb-9">
            I'm Milan Joshi
          </h2>
          <p className=" text-lg md:text-xl sora font-extralight leading-7.5">
            I’m a practicing Architect with 8+ years of experience and 80+ completed
            projects across residential, commercial, and interior spaces. Alongside
            my practice, I run a learning outlet for architects and design students,
            bridging the gap between academic knowledge and real-world execution
            through practical, project-based learning.
          </p>
        </div>

        {/* Image Placeholder Box */}
        <div className="w-full md:w-1/3 aspect-square rounded-xl shadow-2xl z-10">
          <img className="inline-block " src='/milan.jpeg'/>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;