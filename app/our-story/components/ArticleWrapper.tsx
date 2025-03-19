import { BackgroundBeams } from '@/components/ui/background-beams';
import { dosisFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type ArticleWrapperProps = {
  image: string;
  header: string;
  description: string;
  alt: string;
};

function ArticleWrapper({ description, header, image, alt }: ArticleWrapperProps) {
  return (
    <article className="relative mx-auto my-5 flex aspect-auto w-full flex-col items-center gap-5 gap-x-10 p-5 sm:p-10 md:flex-row xl:items-start">
      <BackgroundBeams className="rounded-md bg-slate-300/10 shadow-md" />
      <div className="z-10 flex-[2] rounded-sm">
        <div className="relative aspect-square w-56 cursor-pointer overflow-hidden outline outline-[6px] outline-custom-red-300 md:w-full">
          <Image
            className="user-drag-none absolute object-cover transition-all duration-300 hover:scale-110"
            src={image}
            alt={alt}
            fill
            priority
          />
        </div>
      </div>
      <section className={cn('flex flex-[3] flex-col gap-y-5', dosisFont.className)}>
        <h2 className="text-5xl font-medium text-white drop-shadow-border">{header}</h2>
        <p className="pr-5 text-left text-sm leading-tight text-white drop-shadow-black-md sm:text-lg md:text-xl lg:leading-relaxed">
          {description}
        </p>
      </section>
    </article>
  );
}

export default ArticleWrapper;
