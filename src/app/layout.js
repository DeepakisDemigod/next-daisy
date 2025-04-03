"use client" 

import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header.js';
import './globals.css';
import { Gabarito } from 'next/font/google';
import Footer from '../components/Footer.js';


const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-gabarito'
});


export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html
        lang='en'
        className={gabarito.variable}
      >
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
