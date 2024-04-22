'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export type InstagramGridProps = {
  id: string;
  media_url: string;
  timestamp: Date;
  media_type: string;
  permalink: string;
  caption?: string | undefined;
};

/**
 * @param array
 * Shuffles an array depends on the index
 * @returns {array}
 */
function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function InstagramGrid({ posts }: { posts: InstagramGridProps[] }) {
  const shuffeledPosts = shuffle(posts);
  const pickedPosts = shuffeledPosts.slice(0, 8) as InstagramGridProps[];

  return (
    <motion.div
      initial={{ rotateX: -90 }}
      animate={{ rotateX: 0 }}
      transition={{
        type: 'spring',
        damping: 6,
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-5 place-items-center"
    >
      {pickedPosts.map((post) => (
        <motion.a
          suppressHydrationWarning
          key={post.id}
          href={post.permalink}
          style={{ rotate: 0 }}
          whileHover={{
            opacity: 0.9,
            rotate: [8, -5],
            transition: {
              repeat: Infinity,
              repeatType: 'reverse',
              type: 'spring',
              damping: 5,
              mass: 1.1,
            },
          }}
          target="_blank"
          className="relative w-56 h-56 lg:w-64 lg:h-64 flex bg-black rounded-md overflow-hidden"
        >
          <Image
            className="object-cover object-center"
            src={post.media_url}
            alt={post.caption || 'an instagram post with no caption'}
            fill
            suppressHydrationWarning
          />
        </motion.a>
      ))}
    </motion.div>
  );
}

export default InstagramGrid;
