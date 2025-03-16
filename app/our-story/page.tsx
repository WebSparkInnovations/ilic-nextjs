import OurStoryArticles from '@/components/Articles/OurStoryArticles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Story Page Of Ice Cream Workshop'
};

function OurStoryPage() {
  return <OurStoryArticles />;
}

export default OurStoryPage;
