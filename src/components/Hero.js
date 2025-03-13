'use client';

import CTA from './CTA';

const Hero = () => {
  return (
    <div>
      <div className='p-6 rounded-lg shadow-md text-center'>
        <h1 className='text-4xl font-bold mb-2'>
          Your
          <span className='mx-1 text-blue-500 underline'>precious time</span>
           matters, save more time with
          <span className='mx-1 text-green-500 underline'>
            next daisy starter
          </span>
        </h1>
        <p className='text-md text-gray-500 mb-4'>
          Complete setup for next15 + tailwindcss + daisyui
        </p>
        <div className='my-4'>
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Hero;
