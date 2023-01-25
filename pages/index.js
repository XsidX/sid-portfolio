import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layouts/article';
import profilePic from '../public/me.jpg';
import SectionHeading from '../components/SectionHeading';
import Projects from '../components/Projects';
import ShadowBlock from '../components/ShadowBlock';

const Home = () => (
  <Layout>
    <div className="rounded-lg mb-6 p-3 text-center bg-white dark:bg-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 transition duration-500 ease-in-out">
      Hello, I&apos;m a full-stack web developer with a focus on remote work.
    </div>

    <div className="flex flex-col items-center md:flex-row">
      <div className="self-start">
        <h2 className="text-3xl  font-semibold font-mplus text-zinc-900 dark:text-zinc-50 transition duration-500 ease-in-out">
          Sidney Kaguli
        </h2>
        <p> Digital Craftsman ( Designer / Developer ) </p>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <div className="border-gray-300 border-2 rounded-full w-24 h-24 inline-block overflow-hidden">
          <Image
            src={profilePic}
            alt="Sidney Kaguli"
          />
        </div>
      </div>

    </div>
    <section className="mt-6">
      <SectionHeading>Work</SectionHeading>
      <p className="mb-6 dark:text-zinc-50 text-zinc-900 transition duration-500 ease-in-out">
        &nbsp;&nbsp;&nbsp;I am a freelance and a full-stack developer from Nairobi, Kenya
        with a passion for building digital services. He has a knack
        for all things launching products, from planning and designing all the
        way to solving real-life problems with code. With me on your team, you can be sure
        that your product will be built with the best practises in mind and delivered on time.
      </p>
      <div className="relative">
        <SectionHeading overlay className="text-4xl md:text-8xl text-center">Projects</SectionHeading>
        <ShadowBlock />
      </div>
      <Projects />
    </section>
    <section className="my-12 md:my-24">
      <div className="relative">
        <SectionHeading overlay className="text-4xl md:text-8xl text-center">Contact</SectionHeading>
        <ShadowBlock />
      </div>
      <div className="flex flex-col md:gap-3 justify-center items-center text-zinc-900 dark:text-zinc-50 md:text-4xl font-semibold transition duration-500 ease-in-out">
        <p> And that&apos;s a wrap! </p>
        <p>
          <span> I look foward to </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600 transition duration-500 ease-in-out">
            chatting with you soon.
          </span>
        </p>
        <Link
          href="mailto:sidneykaguli@gmail.com"
          className="relative mt-6 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 p-3 px-6 text-sm font-mplus rounded-lg shadow-md hover:shadow-zinc-900/20 dark:hover:shadow-zinc-200/20 hover:shadow-lg transition ease-in duration-100"
        >
          Email Me
        </Link>
      </div>
    </section>
  </Layout>
);

export default Home;
