import Navbar from '@/components/Navbar/Navbar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import { HomePopUpContextProvider } from '@/context/homepopupcontext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'I Love Ice Cream!',
  description: 'i love ice cream page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={
          (cn('relative h-full font-sans antialiased'), inter.className)
        }
      >
        <HomePopUpContextProvider>
          <main className="relative flex flex-col min-h-screen bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            <Footer />
          </main>
        </HomePopUpContextProvider>
      </body>
    </html>
  );
}
