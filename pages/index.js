import React from 'react';
import Head from 'next/head';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name={SITE_TITLE} content={SITE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-mplus text-green-800">
        Hello world!
      </h1>
    </div>
  );
}
