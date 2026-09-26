import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import { PlanProvider } from '@/components/PlanContext';
import ToastContainer from '@/components/ToastContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FitLog — Workout Library',
  description: 'Train with intent. Log every set.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0b0c10] text-white min-h-screen flex flex-col justify-between antialiased`}>
        <PlanProvider>
          <div>
            <Navbar />
            <main>{children}</main>
          </div>
          <Footer />
          <ToastContainer />
        </PlanProvider>
      </body>
    </html>
  );
}