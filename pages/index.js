import React from 'react';
import Image from 'next/image';
import Layout from '../components/layouts/article';
import profilePic from '../public/me.jpg';

const Home = () => (
  <Layout>
    <div className="rounded-lg mb-6 p-3 text-center bg-white dark:bg-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50">
      Hello, I&apos;m a full-stack web developer with a focus on remote work.
    </div>

    <div className="flex flex-col md:flex-row justify-between ">
      <div className="">
        <h2 className="text-4xl font-mplus tracking-wide font-medium">
          Sidney Kaguli
        </h2>
        <p> Full-Stack Web Developer ( Designer/ Developer ) </p>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 text-center">
        <div className="border-gray-300 border-2 rounded-full w-24 h-24 inline-block overflow-hidden">
          <Image
            src={profilePic}
            alt="Sidney Kaguli"
          />
        </div>
      </div>

    </div>
  </Layout>
);

export default Home;
