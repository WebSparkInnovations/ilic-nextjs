'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { NavigationItems } from './NavigationItems';

const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

function MobileNavItems() {
  const sheetCloseRef = useRef<HTMLButtonElement>(null);

  function closeModalHandler() {
    sheetCloseRef.current?.click();
  }

  return (
    <div className="flex lg:hidden h-max items-end px-5 z-50">
      <div className="flex-1" aria-hidden />
      <Link
        href="/"
        className="hover:scale-110 transition-transform relative h-32 w-32 mx-auto"
      >
        <Image
          className="object-contain object-center drop-shadow-border"
          fill
          src="/ice-cream.png"
          alt="ice cream logo"
        />
      </Link>
      <Sheet>
        <div className="flex-1">
          <SheetTrigger asChild>
            <IoMenuOutline
              className="hover:scale-105 transition-transform text-white drop-shadow-border ml-auto cursor-pointer"
              size="50"
            />
          </SheetTrigger>
        </div>
        <SheetContent
          side="top"
          className="!flex !flex-col items-center sm:gap-y-5 !bg-emerald-600/90 !border-none"
        >
          <SheetHeader>
            <SheetTitle
              className={cn(
                '!text-5xl text-center text-white font-bold',
                font.className
              )}
            >
              Welcome To I Love Ice Cream
            </SheetTitle>
          </SheetHeader>
          <NavigationItems onClick={closeModalHandler} />
          <SheetClose ref={sheetCloseRef} hidden />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavItems;
