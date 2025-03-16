'use client';

import { buttonVariants } from '@/components/ui/button';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { necoRegularFont } from '@/lib/fonts';
import { images } from '@/lib/home-slide-images';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import BannerSlideShow from './BannerSlideShow';

function HomePageSlideShow() {
  const { scrollY } = useScroll();
  const videoPosition = useTransform(scrollY, [0, 600], [0, 1000]);
  const videoScale = useTransform(scrollY, [0, 600], [1, 3]);
  const componentOpacity = useTransform(scrollY, [0, 100, 200, 400], [1, 0.85, 0.85, 0.4]);

  return (
    <motion.div
      className="relative select-none overflow-hidden transition-opacity duration-75 ease-linear"
      style={{ opacity: componentOpacity }}
    >
      <div className="absolute bottom-4 z-50 flex w-full flex-col items-center justify-center gap-y-5 2xl:bottom-10">
        <TextGenerateEffect
          words="“I Love Ice Cream” with every delightful sip and scoop!"
          className="text-center"
          textClassName={cn(necoRegularFont.className, 'text-2xl text-white drop-shadow-red-border')}
        />
        <Link
          href="/best-sellers"
          className={cn(
            buttonVariants({
              variant: 'link'
            }),
            'text-xl text-black drop-shadow-yellow-border transition-all hover:scale-105 hover:opacity-90 hover:drop-shadow-white-border',
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
