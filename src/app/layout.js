import Header from '@/components/Header';
import './globals.css';
import { Gabarito } from 'next/font/google';
import Footer from '@/components/Footer';

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-gabarito'
});

export const metadata = {
  title: 'Next Daisy Starter',
  description: 'Quick Frontend Setup for Your Next Project'
};

export default function RootLayout({ children }) {
  return (
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
  );
}
