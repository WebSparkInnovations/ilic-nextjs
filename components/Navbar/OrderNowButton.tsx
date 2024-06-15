'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { GiIceCreamScoop } from 'react-icons/gi';

const OrderNowButton = ({ onClick = () => {} }: { onClick?: () => void }) => (
  <a
    onClick={onClick}
    href="https://order.online/business/i-love-ice-cream-11388867"
    target="_blank"
    className={cn(
      buttonVariants({
        variant: 'ice-cream',
        size: 'custom',
        className: 'lg:!text-4xl',
      }),
      'group'
    )}
  >
    Order Now
    <GiIceCreamScoop
      className="rotate-90 group-hover:rotate-180 transition-transform ml-2 -scale-y-100"
      size={32}
    />
  </a>
);

export default OrderNowButton;
