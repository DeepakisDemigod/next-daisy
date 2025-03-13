'use client';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { Headset, List, Question, Star, Tag } from 'phosphor-react';

export default function Header() {
  return (
    <div>
      <nav>
        <div className='drawer'>
          <input
            id='my-drawer'
            type='checkbox'
            className='drawer-toggle'
          />
          <div className='drawer-content'>
            {/* Page content here */}
            <div className='navbar  shadow-lg'>
              <div className='navbar-start flex justify-between items-center'>
                <label
                  htmlFor='my-drawer'
                  className='btn drawer-button lg:hidden'
                  aria-label='Open sidebar'
                >
                  <List size={25} />
                </label>
                <Link
                  href='/'
                  className='btn btn-ghost text-xl'
                >
                  Next Daisy Starter
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Drawer */}
          <div className='z-20 drawer-side text-2xl'>
            <label
              htmlFor='my-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
              {/* Sidebar content here */}
              <li>
                <Link
                  href='#pricing'
                  className='flex items-center space-x-2'
                >
                  <Tag size={20} />
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link
                  href='#faqs'
                  className='flex items-center space-x-2'
                >
                  <Question size={20} />
                  <span>FAQs</span>
                </Link>
              </li>
              <li>
                <Link
                  href='#reviews'
                  className='flex items-center space-x-2'
                >
                  <Star size={20} />
                  <span>Reviews</span>
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:deepakthapa'
                  className='flex items-center space-x-2'
                >
                  <Headset size={20} />
                  <span>Support</span>
                </Link>
              </li>
              <li>
                <div className='flex items-center space-x-2'>
                  <ThemeSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
