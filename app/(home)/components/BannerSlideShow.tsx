'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MotionValue, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function BannerSlideShow({
  images,
  style
}: {
  images: { src: StaticImageData; alt: string }[];
  style: { y: MotionValue<number>; scale: MotionValue<number> };
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      style={style}
      className="relative h-[500px] max-h-[600px] w-full overflow-hidden"
    >
      <div
        className="absolute inset-x-0 bottom-0 z-50 h-2 bg-gradient-to-t from-black to-transparent"
        aria-hidden
      />
      {images.map((image, index) => (
        <Image
          key={image.alt}
          src={image.src}
          className={cn(
            'user-drag-none -translate-x-4 rotate-6 scale-125 object-cover object-center opacity-0 transition-all duration-500 ease-in-out',
            index === currentImageIndex ? 'z-10 translate-x-0 rotate-0 scale-100 opacity-100' : ''
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
            '!absolute !bottom-0 !right-1 z-50 animate-bounce !rounded-b-none !rounded-t-sm !transition-all hover:animate-none active:animate-ping sm:!right-5'
        })}
        href="/contact-us"
      >
        Contact Us
      </Link>
    </motion.div>
  );
}

export default BannerSlideShow;
