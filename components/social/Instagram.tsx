import { caveatFont } from '@/lib/fonts';
import { url } from '@/lib/social';
import { cn } from '@/lib/utils';
import { InstagramResponse } from '@/types/instagram';
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

async function Instagram() {
  const posts = await getInstagramPosts();
  return (
    <div className="relative h-full space-y-10 bg-ellipse from-custom-red-100 to-custom-red-400 pb-32 pt-10">
      <h2 className={cn('flex select-none items-center justify-center gap-x-5 p-5')}>
        <TextGenerateEffect
          words="Share More Ice Cream On Instagram!"
          textClassName={cn('text-5xl !text-white drop-shadow-black-md', caveatFont.className)}
        />
        <PiInstagramLogoDuotone
          size={60}
          className="transition-all hover:scale-110"
          color="white"
        />
      </h2>

      <MaxWidthWrapper>
        {posts && (
          <Suspense fallback={<p className="mt-10 animate-pulse text-center text-4xl">Loding Posts . . .</p>}>
            <InstagramGrid posts={posts} />
          </Suspense>
        )}
        {!posts && (
          <h2 className="text-center text-3xl capitalize text-white">
            Sorry Instagram Server is currently not available.
          </h2>
        )}
      </MaxWidthWrapper>
    </div>
  );
}

export default Instagram;
