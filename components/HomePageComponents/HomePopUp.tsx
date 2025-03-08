'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useHomePopUpContext } from '@/context/homepopupcontext';

import Image from 'next/image';
import { useEffect, useState } from 'react';

function HomePopUp() {
	const [domLoaded, setDomLoaded] = useState(false);
	const { domLoadedFirstTime, toggleDomLoaded } = useHomePopUpContext();

	useEffect(() => setDomLoaded(true), []);

	return (
		domLoaded && (
			<Dialog
				defaultOpen={domLoadedFirstTime}
				onOpenChange={() => toggleDomLoaded()}
			>
				<DialogContent className="max-w-sm sm:max-w-lg md:max-w-xl xl:max-w-2xl 2xl:max-w-5xl !flex items-center justify-between !p-0 overflow-hidden min-h-max">
					<div className="relative h-[400px] xl:h-[600px] flex-1 hover:scale-105 transition-transform">
						<Image
							src="/images/shakes.webp"
							alt="company shake picutres"
							className="object-cover object-center"
							fill
						/>
					</div>
					<section className="flex-1 flex flex-col h-[400px] xl:h-[600px] items-center justify-evenly px-4">
						<div className="relative h-2/6 w-full">
							<Image
								src="/images/ice-cream.webp"
								alt="i love ice cream logo"
								className="object-contain object-center"
								fill
							/>
						</div>
						<div className="space-y-7">
							<h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">Summer Sale</h2>
							<p className="text-muted-foreground font-bold text-center text-xs">6/1/24 - 8/31/23</p>
							<p className="text-lg font-medium capitalize lg:text-xl xl:text-2xl text-center">
								Tell the cashier <span className="uppercase font-bold">‘I love ice cream’</span> for 20%
								off your order
							</p>
						</div>
					</section>
				</DialogContent>
			</Dialog>
		)
	);
}

export default HomePopUp;
