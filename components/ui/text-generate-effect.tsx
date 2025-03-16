'use client';

import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export const TextGenerateEffect = ({
  words,
  className,
  textClassName
}: {
  words: string;
  className?: string;
  textClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1
      },
      {
        duration: 2,
        delay: stagger(0.2)
      }
    );
  }, [animate]);

  return (
    <div className={cn('font-bold', className)}>
      <div className="">
        <div className={'text-lg leading-snug tracking-wide text-black text-transparent'}>
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className={cn('text-black opacity-0', textClassName)}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
