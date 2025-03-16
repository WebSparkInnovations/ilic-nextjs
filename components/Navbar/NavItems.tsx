import { pallyRegularFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { CustomLink } from './CustomLink';
import OrderNowButton from './OrderNowButton';

function NavItems() {
  return (
    <div className={cn('hidden items-center lg:flex', pallyRegularFont.className)}>
      <div className="flex flex-1 space-x-12 whitespace-nowrap">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/our-story">Our Story</CustomLink>
      </div>
      <Link
        href="/"
        className="relative h-36 w-36 flex-1 transition-transform hover:scale-110 md:h-40 md:w-40"
      >
        <Image
          className="object-contain object-center drop-shadow-border"
          fill
          src="/images/ice-cream.webp"
          alt="ice cream logo"
        />
      </Link>
      <div className="mt-auto flex flex-1 flex-col items-center gap-y-1">
        <div className="flex w-full justify-evenly space-x-20 whitespace-nowrap">
          <CustomLink href="/best-sellers">Best Sellers</CustomLink>
          <CustomLink
            href="/ice-creams.pdf"
            blank
          >
            Menu
          </CustomLink>
        </div>
        <OrderNowButton />
      </div>
    </div>
  );
}

export default NavItems;
