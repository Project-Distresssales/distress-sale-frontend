import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import SubNavbar from './components/Navbar/SubNavbar';
import Footer from './components/Footer/Footer';
import AppProvider from '@/providers/AppProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Distress Sale',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navbar />
          <SubNavbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
