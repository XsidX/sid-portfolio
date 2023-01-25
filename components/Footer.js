import React from 'react';

const Footer = () => (
  <footer className="px-5 mx-auto md:max-w-4xl">
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 py-8">
      <button type="button" className="p-4 text-sm text-zinc-50 font-mplus border border-zinc-500/40 rounded-lg hover:bg-purple-900/10 hover:text-purple-500 hover:border-purple-900/10 transition duration-100 ease-in">
        Github
      </button>
      <button type="button" className="p-4 text-sm text-zinc-50 font-mplus border border-zinc-500/40 rounded-lg hover:bg-orange-900/10 hover:text-orange-500 hover:border-purple-900/10 transition duration-100 ease-in">
        LinkedIn
      </button>
    </div>
    <div className="relative flex justify-center my-8">
      {/* strike a line across the div */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-line bg-zinc-700/70" />
      <div className="hidden md:block absolute left-1/8 w- top-0 bottom-0 w-1/2 blur-md dark:bg-zinc-900" />
      <div className="hidden md:block absolute left-1/8 w- top-0 bottom-0 w-1/2 blur-lg dark:bg-zinc-900" />
      <div className="hidden md:block absolute left-1/8 w- top-0 bottom-0 w-1/2 blur-md dark:bg-zinc-900" />
      <p className="text-sm text-zinc-50 font-mplus z-10">
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
