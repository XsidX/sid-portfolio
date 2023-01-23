import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const Main = ({ children }) => (
  <main className="pb-8 min-h-screen bg-orange-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 break-words leading-6 transition-colors duration-500">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Sidney's portfolio" />
      <meta name="author" content="Sidney Kaguli" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="twitter:title" content="Sidney Kaguli" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_sid_o" />
      <meta name="twitter:creator" content="@_sid_o" />
      <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1545149127054475269/Y5LEA7cQ_400x400.jpg" />
      <meta property="og:site_name" content="Sidney Kaguli" />
      <meta name="og:title" content="Sidney Kaguli" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://pbs.twimg.com/profile_images/1545149127054475269/Y5LEA7cQ_400x400.jpg" />
      <title>Sidney Kaguli - Homepage</title>
    </Head>
    <Header />
    <div className="pt-14 mx-auto max-w-3xl">
      {children}
    </div>
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
