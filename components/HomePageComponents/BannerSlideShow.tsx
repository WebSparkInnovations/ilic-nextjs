'use client';

import { cn } from '@/lib/utils';
import { MotionValue, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { buttonVariants } from '../ui/button';

function BannerSlideShow({
  images,
  style,
}: {
  images: { src: string; alt: string }[];
  style: { y: MotionValue<number>; scale: MotionValue<number> };
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      style={style}
      className="relative w-full max-h-[600px] h-[500px] sm:max-h-[1200px] sm:min-h-[700px] overflow-hidden lg:min-h-[850px]"
    >
      <div
        className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-t from-black to-transparent z-50"
        aria-hidden
      />
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          className={cn(
            'object-cover object-center scale-125 -translate-x-4 opacity-0 transition-all duration-500 ease-in-out rotate-6 user-drag-none',
            index === currentImageIndex
              ? 'z-10 opacity-100 scale-100 translate-x-0 rotate-0'
              : ''
          )}
          alt={image.alt}
          fill
          quality={100}
        />
      ))}
      <Link
        className={buttonVariants({
          variant: 'custom',
          size: 'custom',
          className:
            '!absolute !bottom-0 !right-1 sm:!right-5 z-50 !rounded-t-sm !rounded-b-none !transition-all animate-bounce hover:animate-none active:animate-ping',
        })}
        href="/contact-us"
      >
        Contact us
      </Link>
    </motion.div>
  );
}

export default BannerSlideShow;
