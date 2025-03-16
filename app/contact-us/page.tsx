import { robotoFont } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact us via phone or e-mail & adress'
};

function ContactUsPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-ellipse from-pink-300 to-rose-900 px-5">
      <article
        className={cn(
          'relative z-40 mt-40 flex w-[650px] max-w-full flex-col gap-10 border-[3px] border-custom-red-300 bg-ellipse from-custom-red-100 to-custom-red-400 p-5 leading-relaxed text-white outline outline-[3px] outline-offset-4 outline-custom-red-300 lg:p-20',
          robotoFont.className
        )}
      >
        <div className="space-y-4 text-xl lg:text-4xl 2xl:text-5xl">
          <p>If you need more information or have questions, please contact us via phone or email.</p>
          <p>We’ll get back to you as soon as possible </p>
        </div>
        <div className="flex items-start justify-between gap-4 max-md:flex-col">
          <div className="lg:w-full lg:space-y-3 lg:text-xl 2xl:text-2xl">
            <p>
              Email:{' '}
              <a
                className="hover:underline"
                href="mailto:lovebobacream@gmail.com"
              >
                lovebobacream@gmail.com
              </a>
            </p>
            <p>
              Phone: <span className="cursor-pointer hover:underline">(717)-885-0551</span>
            </p>
            <p className="w-60">Location: 3927 E Market St, York, PA 17402 </p>
          </div>
          <div className="lg:space-y-3 lg:text-xl">
            <h2 className="lg:!text-2xl">Hours:</h2>
            <p>
              Sun - Thurs: <span className="whitespace-nowrap">1:00 PM - 8:00 PM</span>
            </p>
            <p>
              Fri & Sat: <span className="whitespace-nowrap">1:00 PM - 9:00 PM</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ContactUsPage;
