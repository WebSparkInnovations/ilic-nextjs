import { pallyRegularFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CustomLinkProps extends React.ComponentProps<typeof Link> {}

export const CustomLink = ({ className, ...props }: CustomLinkProps) => {
  return (
    <Link
      {...props}
      className={cn(
        'bg-gradient-to-b from-[#111] to-ice-cream-100 bg-clip-text text-xl font-bold text-transparent drop-shadow-white-border transition-transform hover:scale-105 md:text-3xl',
        pallyRegularFont.className,
        className
      )}
    />
  );
};
