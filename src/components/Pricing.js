'use client';

export default function Pricing() {
  return (
    <div>
      <div className='p-4 w-full max-w-7xl'>
        <p className='text-blue-600 text-md text-center mb-8'>Pricing</p>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Choose Your Plan
        </h2>
        <div className='flex overflow-x-scroll gap-2'>
          <div className='flex gap-2 lg:flex-col'>
            <div className='border-2 border-blue-600 rounded-lg shadow-md p-6 flex flex-col flex-1'>
              <h3 className='text-xl font-semibold mb-4'>Basic</h3>
              <p className='text-gray-600 mb-4'>
                Overview of your general matters
              </p>
              <p className='text-4xl font-bold mb-6'>
                ₹50
                <span className='text-xl font-normal text-gray-600'>
                  /report
                </span>
              </p>

              <ul className=' mb-6 flex-grow'>
                <li className='flex items-center mb-2'>
                  <svg
                    className='w-5 h-5 text-green-500 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    ></path>
                  </svg>
                  Time for Pending Work
                </li>
              </ul>

              <button className='bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300'>
                Choose Plan
              </button>
            </div>

            <div className=' rounded-lg shadow-md p-6 flex flex-col flex-1 border-2 border-blue-600'>
              <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold mb-4'>Plus </h3>
                <h3 className='text-sm mb-4 rounded-full bg-blue-600 text-white px-0.5 py-0.5'>
                  🔥 Popular
                </h3>
              </div>
              <p className='text-gray-600 mb-4'>
                analysis of 10 Charts of your horoscope
              </p>
              <p className='text-4xl font-bold mb-6'>
                ₹100
                <span className='text-xl font-normal text-gray-600'>
                  /report
                </span>
              </p>
              <ul className='mb-6 flex-grow'>
                <li className='flex items-center mb-2'>
                  <svg
                    className='w-5 h-5 text-green-500 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    ></path>
                  </svg>
                  Time Watch
                </li>
              </ul>
              <button className='bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300'>
                Choose Plan
              </button>
            </div>
          </div>

          <div className='border-2 border-blue-600 rounded-lg shadow-md p-6 flex flex-col flex-1'>
            <h3 className='text-xl font-semibold mb-4'>All In</h3>
            <p className='text-gray-600 mb-4'>
              complete analysis of your all 20 charts
            </p>
            <p className='text-4xl font-bold mb-6'>
              ₹200
              <span className='text-xl font-normal text-gray-600'>/report</span>
            </p>
            <ul className='mb-6 flex-grow'>
              <li className='flex items-center mb-2'>
                <svg
                  className='w-5 h-5 text-green-500 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'
                  ></path>
                </svg>
                Time Travellor
              </li>
            </ul>
            <button className='bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300'>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
