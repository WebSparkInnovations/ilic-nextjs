import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { interFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'I Love Ice Cream!',
  description: 'i love ice cream page'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth"
    >
      <body className={(cn('relative h-full font-sans antialiased'), interFont.className)}>
        <main className="relative flex min-h-screen flex-col bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]">
          <Navbar />
          <div className="flex-1 flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
