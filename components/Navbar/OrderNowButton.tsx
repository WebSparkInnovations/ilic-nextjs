'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { GiIceCreamScoop } from 'react-icons/gi';
import { buttonVariants } from '../ui/button';

const OrderNowButton = ({ onClick, className }: { onClick?: () => void; className?: string }) => (
  <Link
    onClick={onClick}
    href="https://order.online/business/i-love-ice-cream-11388867"
    target="_blank"
    className={cn(
      buttonVariants({
        variant: 'ice-cream',
        size: 'custom'
      }),
      className,
      'group'
    )}
  >
    Order Now
    <GiIceCreamScoop
      className="ml-2 rotate-90 -scale-y-100 transition-transform group-hover:rotate-180"
      size={32}
    />
  </Link>
);

export default OrderNowButton;
