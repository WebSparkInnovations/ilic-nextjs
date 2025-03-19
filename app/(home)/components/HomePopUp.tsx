'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useHomePopUpContext } from '@/context/homepopupcontext';
import Image from 'next/image';

function HomePopUp() {
  const { popupOpened, setpopupOpened } = useHomePopUpContext();

  return (
    <Dialog
      open={!popupOpened}
      onOpenChange={() => setpopupOpened(true)}
    >
      <DialogContent className="!flex min-h-max max-w-sm items-center justify-between overflow-hidden !p-0 sm:max-w-lg md:max-w-xl xl:max-w-2xl 2xl:max-w-5xl">
        <div className="relative h-[400px] flex-1 transition-transform hover:scale-105 xl:h-[600px]">
          <Image
            src="/images/shakes.webp"
            alt="company shake picutres"
            className="object-cover object-center"
            fill
          />
        </div>
        <section className="flex h-[400px] flex-1 flex-col items-center justify-evenly px-4 xl:h-[600px]">
          <div className="relative h-2/6 w-full">
            <Image
              src="/images/ice-cream.webp"
              alt="i love ice cream logo"
              className="object-contain object-center"
              fill
            />
          </div>
          <div className="space-y-7">
            <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">Summer Sale</h2>
            <p className="text-center text-xs font-bold text-muted-foreground">6/1/24 - 8/31/23</p>
            <p className="text-center text-lg font-medium capitalize lg:text-xl xl:text-2xl">
              Tell the cashier <span className="font-bold uppercase">‘I love ice cream’</span> for 20% off your order
            </p>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}

export default HomePopUp;
