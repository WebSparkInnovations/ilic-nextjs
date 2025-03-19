import { getInstagramPosts } from '@/api/instagram.api';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { caveatFont, robotoFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import { PiInstagramLogoDuotone } from 'react-icons/pi';
import InstagramGrid from './InstagramGrid';

async function Instagram() {
  const posts = await getInstagramPosts();

  return (
    <div className="relative flex min-h-[500px] flex-col items-center justify-center gap-10 bg-ellipse from-custom-red-100 to-custom-red-400 pb-32 pt-10">
      <h2 className={cn('flex select-none flex-row items-center justify-center gap-x-5 gap-y-6')}>
        <PiInstagramLogoDuotone
          size={60}
          className="shrink-0 transition-all hover:scale-110"
          color="white"
        />
        <TextGenerateEffect
          words="Share More Ice Cream On Instagram!"
          textClassName={cn('text-3xl !text-white drop-shadow-black-md', caveatFont.className)}
        />
      </h2>

      <MaxWidthWrapper>
        {posts && (
          <Suspense fallback={<p className="mt-10 animate-pulse text-center text-4xl">Loding Posts . . .</p>}>
            <InstagramGrid posts={posts} />
          </Suspense>
        )}
        {!posts && (
          <h3 className={cn('text-center text-2xl capitalize text-white', robotoFont.className)}>
            Sorry Instagram Server is currently not available.
          </h3>
        )}
      </MaxWidthWrapper>
    </div>
  );
}

export default Instagram;
