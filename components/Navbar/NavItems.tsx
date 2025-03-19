import { pallyRegularFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { CustomLink } from './CustomLink';
import OrderNowButton from './OrderNowButton';

function NavItems() {
  return (
    <div className="hidden flex-col items-stretch lg:flex">
      <div className={cn('grid h-32 grid-cols-3 items-stretch justify-center', pallyRegularFont.className)}>
        <div className="my-auto flex gap-x-20 whitespace-nowrap">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/our-story">Our Story</CustomLink>
        </div>
        <Link
          href="/"
          className="relative h-full w-full transition-transform hover:scale-110"
        >
          <Image
            className="object-contain object-center drop-shadow-border"
            src="/images/ice-cream.webp"
            alt="ice cream logo"
            fill
          />
        </Link>
        <div className="my-auto flex w-full gap-x-20 whitespace-nowrap">
          <CustomLink href="/best-sellers">Best Sellers</CustomLink>
          <CustomLink
            href="/ice-creams.pdf"
            target="_blank"
          >
            Menu
          </CustomLink>
        </div>
      </div>
      <div className="-mt-6 place-self-end px-8">
        <OrderNowButton />
      </div>
    </div>
  );
}

export default NavItems;
