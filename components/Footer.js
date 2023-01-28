import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import socials from '../data/socials';

const Footer = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    }
  }, [controls, inView]);

  return (
    <footer className="px-5 mx-auto md:max-w-4xl">
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-4 py-8"
        ref={ref}
        variants={variants}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.7, type: 'ease' }}
      >
        {
          socials.map((social) => (
            <Link href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
              <button type="button" className="flex justify-center items-center py-4 md:py-0 md:h-14 md:w-32 text-sm font-semibold text-zinc-900 hover:text-teal-900 dark:text-zinc-100 font-mplus border border-zinc-500/70 dark:border-zinc-500/40 rounded-lg hover:bg-purple-900/5 dark:hover:bg-teal-900/10 dark:hover:text-teal-500 hover:border-teal-900/5 dark:hover:border-teal-900/10 transition duration-200 ease-in">
                {social.name}
              </button>
            </Link>
          ))
        }
      </motion.div>
      <div className="relative flex justify-center my-8">
        {/* strike a line across the div */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-line bg-zinc-700/70" />
        <div className="hidden md:block absolute left-1/8 w- top-0 bottom-0 w-1/2 blur-md bg-orange-50 dark:bg-zinc-900 transition duration-500 ease-in-out" />
        <div className="hidden md:block absolute left-1/8 w- top-0 bottom-0 w-1/2 blur-lg bg-orange-50 dark:bg-zinc-900 transition duration-500 ease-in-out" />
        <div className="hidden md:block absolute left-1/8 w- top-0 bottom-0 w-1/2 blur-md bg-orange-50 dark:bg-zinc-900 transition duration-500 ease-in-out" />
        <p className="text-sm text-center text-zinc-900 dark:text-zinc-50 font-mplus z-10 transition duration-500 ease-in-out">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Sidney Kaguli. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
