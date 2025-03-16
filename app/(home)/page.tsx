import { HomePopUpContextProvider } from '@/context/homepopupcontext';
import dynamic from 'next/dynamic';
import HomePageSlideShow from './components/HomePageSlideShow';
import Instagram from './components/Instagram';

const HomePopUp = dynamic(() => import('./components/HomePopUp'), { ssr: false });

export default function Home() {
  return (
    <HomePopUpContextProvider>
      <HomePopUp />
      <HomePageSlideShow />
      <Instagram />
    </HomePopUpContextProvider>
  );
}
