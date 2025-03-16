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
        damping: 6
      }}
      className="grid grid-cols-1 place-items-center gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {posts.map((post) => (
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
                  mass: 1.1
                }
              }}
              target="_blank"
              className="relative flex h-56 w-56 overflow-hidden rounded-md bg-black lg:h-64 lg:w-64"
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
              className="relative flex h-56 w-56 overflow-hidden rounded-md bg-black/20 lg:h-64 lg:w-64"
              style={{ rotate: 0 }}
              whileHover={{
                opacity: 0.9,
                rotate: [8, -5],
                transition: {
                  repeat: Infinity,
                  repeatType: 'reverse',
                  type: 'spring',
                  damping: 5,
                  mass: 1.1
                }
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
