import HomePageSlideShow from '@/components/HomePageComponents/HomePageSlideShow';
import HomePopUp from '@/components/HomePageComponents/HomePopUp';
import Instagram from '@/components/social/Instagram';

export default function Home() {
  return (
    <>
      <HomePopUp />
      <HomePageSlideShow />
      <Instagram />
    </>
  );
}
