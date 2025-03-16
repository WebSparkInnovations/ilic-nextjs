import OurStoryArticles from '@/app/our-story/components/OurStoryArticles';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'How did we end up here? Find out the story behind I Love Ice Cream!'
};

function OurStoryPage() {
  return (
    <div className="w-full bg-slate-700 px-10 pb-40 pt-52">
      <MaxWidthWrapper className="flex flex-col items-stretch justify-stretch gap-y-10">
        <OurStoryArticles />
      </MaxWidthWrapper>
    </div>
  );
}

export default OurStoryPage;
