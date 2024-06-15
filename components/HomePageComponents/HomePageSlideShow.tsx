'use client';

import { images } from '@/lib/home-slide-images';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import BannerSlideShow from './BannerSlideShow';
import { buttonVariants } from '../ui/button';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const myFont = localFont({ src: '../../public/fonts/Neco-Regular.ttf' });

function HomePageSlideShow() {
  const { scrollY } = useScroll();
  const videoPosition = useTransform(scrollY, [0, 1000], [0, 1000]);
  const videoScale = useTransform(scrollY, [0, 1000], [1, 3]);
  const componentOpacity = useTransform(
    scrollY,
    [0, 200, 400, 600],
    [1, 0.85, 0.85, 0.3]
  );
  return (
    <motion.div
      className="relative select-none overflow-hidden transition-opacity ease-linear duration-75 min-h-max"
      style={{ opacity: componentOpacity }}
    >
      <div className="absolute w-full z-50 bottom-4 2xl:bottom-10 flex flex-col justify-center items-center gap-y-5">
        <TextGenerateEffect
          words="“I Love Ice Cream” with every delightful sip and scoop!"
          className="text-center"
          textClassName={cn(
            myFont.className,
            'text-white sm:!text-5xl xl:!text-6xl 2xl:text-8xl drop-shadow-red-border  !py-1 !pr-3'
          )}
        />
        <Link
          href="/best-sellers"
          className={cn(
            buttonVariants({
              variant: 'link',
            }),
            'text-black !text-lg sm:!text-3xl lg:!text-4xl drop-shadow-yellow-border hover:drop-shadow-white-border hover:opacity-90 hover:scale-105 transition-all ',
            myFont.className
          )}
        >
          Discover More!
        </Link>
      </div>
      <BannerSlideShow
        images={images}
        style={{ y: videoPosition, scale: videoScale }}
      />
    </motion.div>
  );
}

export default HomePageSlideShow;
