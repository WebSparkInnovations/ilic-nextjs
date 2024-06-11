import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact us via phone or e-mail & adress',
};

const font = Roboto({
  weight: ['400'],
  subsets: ['latin'],
});

function ContactUsPage() {
  return (
    <div className="w-full min-h-screen relative bg-ellipse from-pink-300 to-rose-900 flex items-center justify-center px-5">
      <article
        className={cn(
          'flex flex-col gap-10 border-[3px] outline outline-[3px] outline-custom-red-300 outline-offset-4 border-custom-red-300 leading-relaxed bg-ellipse from-custom-red-100 to-custom-red-400 p-5 lg:p-20 z-40 relative text-white mt-40 w-[650px] max-w-full',
          font.className
        )}
      >
        <div className="space-y-4 text-xl lg:text-4xl 2xl:text-5xl ">
          <p>
            If you need more information or have questions, please contact us
            via phone or email.
          </p>
          <p>We’ll get back to you as soon as possible </p>
        </div>
        <div className="flex max-md:flex-col items-start justify-between gap-4">
          <div className="lg:w-full lg:text-xl lg:space-y-3 2xl:text-2xl">
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
              Phone:{' '}
              <span className="hover:underline cursor-pointer">
                (717)-885-0551
              </span>
            </p>
            <p className="w-60">Location: 3927 E Market St, York, PA 17402 </p>
          </div>
          <div className="lg:text-xl lg:space-y-3">
            <h2 className="lg:!text-2xl">Hours:</h2>
            <p>
              Sun - Thurs:{' '}
              <span className="whitespace-nowrap">1:00 PM - 8:00 PM</span>
            </p>
            <p>
              Fri & Sat:{' '}
              <span className="whitespace-nowrap">1:00 PM - 9:00 PM</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ContactUsPage;
