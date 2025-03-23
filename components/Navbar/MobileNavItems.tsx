'use client';

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { caveatFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import logo from '@/public/images/ice-cream.webp';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { NavigationItems } from './NavigationItems';
function MobileNavItems() {
  const sheetCloseRef = useRef<HTMLButtonElement>(null);

  function closeModalHandler() {
    sheetCloseRef.current?.click();
  }

  return (
    <div className="z-50 flex h-32 items-center px-10 lg:hidden">
      <div className="flex-1" />
      <Link
        href="/"
        className="relative mx-auto h-full w-32 transition-transform hover:scale-110"
      >
        <Image
          className="object-contain object-center drop-shadow-border"
          fill
          src={logo}
          alt="I Love Ice Cream Logo"
        />
      </Link>
      <Sheet>
        <div className="flex-1">
          <SheetTrigger asChild>
            <IoMenuOutline
              className="ml-auto cursor-pointer text-white drop-shadow-border transition-transform hover:scale-105"
              size="50"
            />
          </SheetTrigger>
        </div>
        <SheetContent
          side="top"
          className="!flex !flex-col items-center !border-none !bg-gray-100/90 sm:gap-y-5"
        >
          <SheetHeader>
            <SheetTitle className={cn('text-center !text-5xl font-bold text-white', caveatFont.className)}>
              Welcome To I Love Ice Cream
            </SheetTitle>
          </SheetHeader>
          <NavigationItems onClick={closeModalHandler} />
          <SheetClose
            ref={sheetCloseRef}
            hidden
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavItems;
