import { cn } from '@/lib/utils';
import { Exo_2 } from 'next/font/google';
import Image from 'next/image';

const font = Exo_2({
  subsets: ['latin'],
  weight: ['400'],
});

function Footer() {
  return (
    <footer
      className={cn(
        'flex-1 max-sm:flex-col flex bg-gradient-to-t from-[#111] to-black text-white py-5 max-h-max ',
        font.className
      )}
    >
      <div className="flex-[0.4] grayscale relative h-20 xl:h-28 2xl:h-32 my-auto">
        <Image
          src="/ice-cream.png"
          alt="ice cream logo"
          className="object-contain object-center"
          fill
        />
      </div>
      <section className="footersection">
        <h2 className="footerheader">Location</h2>
        <p className="w-1/2 text-center">3927 E Market St, York, PA 17402</p>
      </section>
      <section className="footersection">
        <h2 className="footerheader">Hours</h2>
        <p>Sun - Thurs: 1:00 PM - 8:00 PM </p>
        <p>Fri & Sat: 1:00 PM - 9:00 PM </p>
      </section>

      <section className="footersection">
        <h2 className="footerheader">Contact Us</h2>
        <p className="hover:underline">(717)-885-0551</p>
        <p>
          <a className="hover:underline" href="mailto:lovebobacream@gmail.com">
            lovebobacream@gmail.com
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
