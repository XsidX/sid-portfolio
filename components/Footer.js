import React from 'react';

const Footer = () => (
  <footer className="px-5 mx-auto md:max-w-4xl">
    <div className="flex flex-col md:flex-row justify-between gap-4 py-8">
      <button type="button" className="flex justify-center items-center py-4 md:py-0 md:h-14 md:w-32 text-sm font-semibold text-zinc-900 hover:text-purple-800 dark:text-zinc-100 font-mplus border border-zinc-500/70 dark:border-zinc-500/40 rounded-lg hover:bg-purple-900/5 dark:hover:bg-purple-900/10 dark:hover:text-purple-500 hover:border-purple-900/5 dark:hover:border-purple-900/10 transition duration-200 ease-in">
        Github
      </button>
      <button type="button" className="flex justify-center items-center py-4 md:py-0 md:h-14 md:w-32 text-sm font-semibold text-zinc-900 hover:text-purple-800 dark:text-zinc-100 font-mplus border border-zinc-500/70 dark:border-zinc-500/40 rounded-lg hover:bg-purple-900/5 dark:hover:bg-purple-900/10 dark:hover:text-purple-500 hover:border-purple-900/5 dark:hover:border-purple-900/10 transition duration-200 ease-in">
        Linked In
      </button>
      <button type="button" className="flex justify-center items-center py-4 md:py-0 md:h-14 md:w-32 text-sm font-semibold text-zinc-900 hover:text-purple-800 dark:text-zinc-100 font-mplus border border-zinc-500/70 dark:border-zinc-500/40 rounded-lg hover:bg-purple-900/5 dark:hover:bg-purple-900/10 dark:hover:text-purple-500 hover:border-purple-900/5 dark:hover:border-purple-900/10 transition duration-200 ease-in">
        Angel List
      </button>
      <button type="button" className="flex justify-center items-center py-4 md:py-0 md:h-14 md:w-32 text-sm font-semibold text-zinc-900 hover:text-purple-800 dark:text-zinc-100 font-mplus border border-zinc-500/70 dark:border-zinc-500/40 rounded-lg hover:bg-purple-900/5 dark:hover:bg-purple-900/10 dark:hover:text-purple-500 hover:border-purple-900/5 dark:hover:border-purple-900/10 transition duration-200 ease-in">
        Twitter
      </button>
      <button type="button" className="flex justify-center items-center py-4 md:py-0 md:h-14 md:w-32 text-sm font-semibold text-zinc-900 hover:text-purple-800 dark:text-zinc-100 font-mplus border border-zinc-500/70 dark:border-zinc-500/40 rounded-lg hover:bg-purple-900/5 dark:hover:bg-purple-900/10 dark:hover:text-purple-500 hover:border-purple-900/5 dark:hover:border-purple-900/10 transition duration-200 ease-in">
        Medium
      </button>
      <button type="button" className="flex justify-center items-center py-4 md:py-0 md:h-14 md:w-32 text-sm font-semibold text-zinc-900 hover:text-purple-800 dark:text-zinc-100 font-mplus border border-zinc-500/70 dark:border-zinc-500/40 rounded-lg hover:bg-purple-900/5 dark:hover:bg-purple-900/10 dark:hover:text-purple-500 hover:border-purple-900/5 dark:hover:border-purple-900/10 transition duration-200 ease-in">
        Resume
      </button>
    </div>
    <div className="relative flex justify-center my-8">
      {/* strike a line across the div */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-line bg-zinc-700/70" />
      <div className="hidden md:block absolute left-1/8 w- top-0 bottom-0 w-1/2 blur-md bg-orange-50 dark:bg-zinc-900 transition duration-500 ease-in-out" />
      <div className="hidden md:block absolute left-1/8 w- top-0 bottom-0 w-1/2 blur-lg bg-orange-50 dark:bg-zinc-900 transition duration-500 ease-in-out" />
      <div className="hidden md:block absolute left-1/8 w- top-0 bottom-0 w-1/2 blur-md bg-orange-50 dark:bg-zinc-900 transition duration-500 ease-in-out" />
      <p className="text-sm text-zinc-900 dark:text-zinc-50 font-mplus z-10 transition duration-500 ease-in-out">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Sidney Kaguli. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
