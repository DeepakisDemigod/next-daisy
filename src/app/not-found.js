'use client';

import Link from 'next/link';
import { Headset, House } from 'phosphor-react';

export default function error() {
  return (
    <div className='min-h-full px-4 py-4  sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
      <div className='mx-auto max-w-max'>
        <div className='mt-5'>
          <div className='flex mt-6'>
            <p className='mt-4 text-4xl font-extrabold text-blue-200 sm:text-5xl'>
              Oops
            </p>
            <div className='ml-6'>
              <div className='pl-6 border-l border-gray-500'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-100  sm:text-4xl'>
                  Something went wrong!
                </h2>
                <p className='mt-1 text-md text-gray-700 '>
                  Please select a topic from the tag cloud above or go back home
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <Link href='/'>
          <button className='btn'>
            <House size={21} />
            <span>Home</span>
          </button>
        </Link>
        <Link href='mailto:deepakthapa'>
          <button className='btn'>
            <Headset size={21} />
            <span>Support</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
