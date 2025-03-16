import { pallyRegularFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const CustomLink = ({
  href,
  children,
  blank,
  className,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  blank?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'bg-gradient-to-b from-[#111] to-ice-cream-100 bg-clip-text py-1 pr-1 text-xl font-bold text-transparent drop-shadow-white-border transition-transform hover:scale-105 md:text-3xl lg:text-4xl',
        pallyRegularFont.className,
        className
      )}
      onClick={onClick}
      target={blank ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
};
