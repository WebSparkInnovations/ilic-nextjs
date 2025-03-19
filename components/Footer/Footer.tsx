import { exoFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer
      className={cn(
        'flex max-h-max flex-1 bg-gradient-to-t from-[#111] to-black py-5 text-white max-sm:flex-col',
        exoFont.className
      )}
    >
      <div className="relative my-auto h-20 flex-[0.4] grayscale xl:h-28 2xl:h-32">
        <Image
          src="/images/ice-cream.webp"
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
          <Link
            className="hover:underline"
            href="mailto:lovebobacream@gmail.com"
          >
            lovebobacream@gmail.com
          </Link>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
