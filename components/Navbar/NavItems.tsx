import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import { CustomLink } from './CustomLink';
import OrderNowButton from './OrderNowButton';

const myFont = localFont({ src: '../../public/fonts/Pally-Regular.ttf' });

function NavItems() {
	return (
		<div className={cn('hidden lg:flex items-center', myFont.className)}>
			<div className="space-x-12 flex-1 whitespace-nowrap flex">
				<CustomLink href="/">Home</CustomLink>
				<CustomLink href="/our-story">Our Story</CustomLink>
			</div>
			<Link
				href="/"
				className="hover:scale-110 transition-transform relative h-36 w-36 md:h-40 md:w-40 flex-1"
			>
				<Image
					className="object-contain object-center drop-shadow-border"
					fill
					src="/images/ice-cream.webp"
					alt="ice cream logo"
				/>
			</Link>
			<div className="flex-1 flex flex-col items-center mt-auto gap-y-1">
				<div className="flex justify-evenly w-full space-x-20 whitespace-nowrap">
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
