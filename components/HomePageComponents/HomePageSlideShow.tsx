'use client';

import { necoRegularFont } from '@/lib/fonts';
import { images } from '@/lib/home-slide-images';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import BannerSlideShow from './BannerSlideShow';

function HomePageSlideShow() {
  const { scrollY } = useScroll();
  const videoPosition = useTransform(scrollY, [0, 1000], [0, 1000]);
  const videoScale = useTransform(scrollY, [0, 1000], [1, 3]);
  const componentOpacity = useTransform(scrollY, [0, 200, 400, 600], [1, 0.85, 0.85, 0.3]);

  return (
    <motion.div
      className="relative min-h-max select-none overflow-hidden transition-opacity duration-75 ease-linear"
      style={{ opacity: componentOpacity }}
    >
      <div className="absolute bottom-4 z-50 flex w-full flex-col items-center justify-center gap-y-5 2xl:bottom-10">
        <TextGenerateEffect
          words="“I Love Ice Cream” with every delightful sip and scoop!"
          className="text-center"
          textClassName={cn(necoRegularFont.className, '!py-1 !pr-3 text-white drop-shadow-red-border')}
        />
        <Link
          href="/best-sellers"
          className={cn(
            buttonVariants({
              variant: 'link'
            }),
            '!text-lg text-black drop-shadow-yellow-border transition-all hover:scale-105 hover:opacity-90 hover:drop-shadow-white-border sm:!text-3xl lg:!text-4xl',
            necoRegularFont.className
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
