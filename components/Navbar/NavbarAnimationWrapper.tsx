'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

const NavbarAnimationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollY } = useScroll();
  const headerPosition = useTransform(scrollY, [0, 200], [0, -300]);
  return (
    <motion.div
      style={{ y: headerPosition }}
      className="fixed top-8 z-50 inset-x-0 transition-transform duration-300 ease-in-out"
    >
      {children}
    </motion.div>
  );
};

export default NavbarAnimationWrapper;
