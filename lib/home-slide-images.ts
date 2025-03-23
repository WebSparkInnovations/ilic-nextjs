import drinks from '@/public/images/drinks.webp';
import iceCreamCups from '@/public/images/ice_cream_cups.webp';
import iceCreamRolls from '@/public/images/icecream_rolls.webp';
import { StaticImageData } from 'next/image';

export const images: { src: StaticImageData; alt: string }[] = [
  {
    src: iceCreamCups,
    alt: 'ice cream cups'
  },
  {
    src: drinks,
    alt: 'milk shakes'
  },
  {
    src: iceCreamRolls,
    alt: 'ice cream rolls'
  }
];
