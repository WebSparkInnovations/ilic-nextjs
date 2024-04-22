import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import Link from 'next/link';

const myFont = localFont({ src: '../../public/fonts/Pally-Regular.ttf' });

export const CustomLink = ({
  href,
  children,
  blank,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  blank?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  if (blank) {
    return (
      <a
        href={href}
        target="_blank"
        className={cn('navitems', myFont.className, className)}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn('navitems', myFont.className, className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
