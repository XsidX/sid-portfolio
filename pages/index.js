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
    <div className="rounded-lg mb-6 p-3 text-center bg-white dark:bg-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50">
      Hello, I&apos;m a full-stack web developer with a focus on remote work.
    </div>

    <div className="flex flex-col md:flex-row">
      <div className="">
        <h2 className="text-3xl font-mplus text-zinc-900 dark:text-zinc-50">
          Sidney Kaguli
        </h2>
        <p> Full-Stack Web Developer ( Designer / Developer ) </p>
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
      <p className="mb-6">
        &nbsp;&nbsp;&nbsp;Sidney is a freelance and a full-stack developer based in Osaka with a
        passion for building digital services/stuff he wants. He has a knack
        for all things launching products, from planning and designing all the
        way to solving real-life problems with code. When not online, he loves
        hanging out with his camera. Currently, he is living off of his own
        product called sid 123 has more than 100k subscribers.
      </p>
      <div className="relative">
        <SectionHeading overlay className="text-8xl text-center">Projects</SectionHeading>
        <ShadowBlock />
      </div>
      <Projects />
    </section>
    <section className="my-24">
      <div className="relative">
        <SectionHeading overlay className="text-8xl text-center">Contact</SectionHeading>
        <ShadowBlock />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl"> And that&apos;s a wrap! </p>
        <p className="text-4xl"> I look foward to chatting with you soon. </p>
        <Link
          href="mailto:sidneykaguli@gmail.com"
          className="relative mt-6 bg-zinc-50 text-zinc-900 py-2 px-10 text-sm font-mplus font-semibold rounded-lg text-center shadow-md hover:shadow-zinc-200/20 hover:shadow-lg transition ease-in duration-100"
        >
          Email Me
        </Link>
      </div>
    </section>

  </Layout>
);

export default Home;
