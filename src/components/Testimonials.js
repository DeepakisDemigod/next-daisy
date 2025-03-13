'use client';

export default function Testimonials() {
  return (
    <div className='p-2 m-2 w-full max-w-7xl  rounded-lg shadow-md'>
      <div className='px-3'>
        <p className='text-blue-600 text-md mb-3'>Reviews</p>
        <h2 className='text-3xl font-bold mb-8'>Our Happy Clients</h2>
        <p className='text-md text-gray-500 mb-4'>
          Here's what they have to say about Astro-Chart report.
        </p>
      </div>
      <div className=' text-center max-w-xl mx-auto mt-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-14 fill-gray-300 inline'
          viewBox='0 0 475.082 475.081'
        >
          <path
            d='M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z'
            data-original='#000000'
          />
        </svg>

        <div className='mt-8'>
          <p className='text-base'>
            Exceptional Service: Prompt Delivery and Enjoyable Dining
            Experience.
          </p>

          <div className='flex flex-wrap items-center justify-center mt-4'>
            <img
              src='https://readymadeui.com/profile_2.webp'
              className='w-10 h-10 rounded-full'
            />
            <div className='ml-4 text-left'>
              <p className='text-sm font-bold'>John Doe</p>
              <p className='text-xs text-gray-500'>johndoe23@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
