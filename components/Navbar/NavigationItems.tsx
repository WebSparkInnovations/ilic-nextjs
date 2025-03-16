'use client';

import { CustomLink } from './CustomLink';
import OrderNowButton from './OrderNowButton';

export const NavigationItems = ({ onClick }: { onClick: () => void }) => (
  <>
    <CustomLink
      onClick={onClick}
      href="/"
    >
      Home
    </CustomLink>
    <CustomLink
      onClick={onClick}
      href="/our-story"
    >
      Our Story
    </CustomLink>
    <CustomLink
      onClick={onClick}
      href="/best-sellers"
    >
      Best Sellers
    </CustomLink>
    <CustomLink
      onClick={onClick}
      href="/ice-creams.pdf"
      blank
    >
      Menu
    </CustomLink>
    <OrderNowButton onClick={onClick} />
  </>
);
