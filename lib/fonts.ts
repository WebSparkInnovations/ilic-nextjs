import { Caveat, Dosis, Exo_2, Inter, Pacifico, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const exoFont = Exo_2({
  subsets: ['latin'],
  weight: ['400']
});

export const caveatFont = Caveat({
  subsets: ['latin'],
  weight: ['700']
});

export const robotoFont = Roboto({
  weight: ['400'],
  subsets: ['latin']
});

export const pacificoFont = Pacifico({
  subsets: ['latin'],
  weight: ['400']
});

export const dosisFont = Dosis({
  subsets: ['latin'],
  weight: ['500']
});

export const interFont = Inter({ subsets: ['latin'] });

export const necoRegularFont = localFont({ src: '../public/fonts/Neco-Regular.ttf' });

export const pallyRegularFont = localFont({ src: '../public/fonts/Pally-Regular.ttf' });
