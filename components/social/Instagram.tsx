import { url } from '@/lib/social';
import { cn } from '@/lib/utils';
import { InstagramResponse } from '@/types/instagram';
import { Caveat } from 'next/font/google';
import { Suspense } from 'react';
import { PiInstagramLogoDuotone } from 'react-icons/pi';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import InstagramGrid from './InstagramGrid';

const getInstagramPosts = async () => {
  try {
    const data = await fetch(url);
    const feed = await data.json();
    return feed.data as InstagramResponse;
  } catch {
    console.warn("Couldn't fetch Instagram Posts");
  }
};

const font = Caveat({
  subsets: ['latin'],
  weight: ['700'],
});

async function Instagram() {
  const posts = (await getInstagramPosts()) || undefined;
  console.log({ posts });
  return (
    <div className="space-y-10 pt-10 pb-32 bg-ellipse from-custom-red-100 to-custom-red-400 h-full relative">
      <h2
        className={cn(
          'p-5 select-none flex items-center justify-center gap-x-5 '
        )}
      >
        <TextGenerateEffect
          words="Share More Ice Cream On Instagram!"
          textClassName={cn(
            '!text-white text-5xl drop-shadow-black-md',
            font.className
          )}
        />
        <PiInstagramLogoDuotone
          size={60}
          className="hover:scale-110 transition-all"
          color="white"
        />
      </h2>

      <MaxWidthWrapper>
        {posts && (
          <Suspense
            fallback={
              <p className="text-center text-4xl mt-10 animate-pulse">
                Loding Posts . . .
              </p>
            }
          >
            <InstagramGrid posts={posts} />
          </Suspense>
        )}
        {!posts && (
          <h2 className="text-3xl capitalize text-white text-center">
            Sorry Instagram Server is currently not available.
          </h2>
        )}
      </MaxWidthWrapper>
    </div>
  );
}

export default Instagram;
