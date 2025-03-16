'use client';

import { cn } from '@/lib/utils';
import { GiIceCreamScoop } from 'react-icons/gi';
import { buttonVariants } from '../ui/button';

const OrderNowButton = ({ onClick = () => {} }: { onClick?: () => void }) => (
  <a
    onClick={onClick}
    href="https://order.online/business/i-love-ice-cream-11388867"
    target="_blank"
    className={cn(
      buttonVariants({
        variant: 'ice-cream',
        size: 'custom'
      }),
      'group'
    )}
  >
    Order Now
    <GiIceCreamScoop
      className="ml-2 rotate-90 -scale-y-100 transition-transform group-hover:rotate-180"
      size={32}
    />
  </a>
);

export default OrderNowButton;
