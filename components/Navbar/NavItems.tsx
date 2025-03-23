import { pallyRegularFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import logo from '@/public/images/ice-cream.webp';
import Image from 'next/image';
import Link from 'next/link';
import { CustomLink } from './CustomLink';
import OrderNowButton from './OrderNowButton';

function NavItems() {
  return (
    <div className="hidden flex-col items-stretch lg:flex">
      <div className={cn('grid h-32 grid-cols-3 items-center justify-center', pallyRegularFont.className)}>
        <div className="flex justify-end gap-x-20 whitespace-nowrap">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/our-story">Our Story</CustomLink>
        </div>
        <Link
          href="/"
          className="relative h-full w-full transition-transform hover:scale-110"
        >
          <Image
            className="object-contain object-center drop-shadow-border"
            src={logo}
            alt="I Love I Cream Logo"
            fill
          />
        </Link>
        <div className="flex w-full justify-start gap-x-20 whitespace-nowrap">
          <CustomLink href="/best-sellers">Best Sellers</CustomLink>
          <CustomLink
            href="/ice-creams.pdf"
            target="_blank"
          >
            Menu
          </CustomLink>
        </div>
      </div>
      <div className="-mt-6 place-self-end px-10">
        <OrderNowButton />
      </div>
    </div>
  );
}

export default NavItems;
