'use client';

import { InstagramResponse } from '@/types/instagram';
import { motion } from 'framer-motion';
import Image from 'next/image';

type InstagramGridProps = { posts: InstagramResponse };

function InstagramGrid({ posts }: InstagramGridProps) {
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
      {posts.map(post => (
        <>
          {post.media_type === 'IMAGE' && (
            <motion.a
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
              />
            </motion.a>
          )}
          {post.media_type === 'VIDEO' && (
            <motion.div
              key={post.id}
              className="relative w-56 h-56 lg:w-64 lg:h-64 flex rounded-md overflow-hidden bg-black/20"
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
            >
              <a
                href={post.permalink}
                className="absolute inset-0 z-50"
                target="_blank"
              ></a>
              <video
                src={post.media_url}
                muted
                loop
                playsInline
                autoPlay
                className="absolute h-full w-full"
              ></video>
            </motion.div>
          )}
        </>
      ))}
    </motion.div>
  );
}

export default InstagramGrid;
