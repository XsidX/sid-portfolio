import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Layout from '../components/layouts/article';
import profilePic from '../public/me.jpg';
import SectionHeading from '../components/SectionHeading';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ShadowBlock from '../components/ShadowBlock';
import ProjectsHeading from '../components/ProjectsHeading';
import Contact from '../components/Contact';

const Home = () => {
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
    <Layout>
      <div id="top" className="rounded-lg mb-6 p-3 text-center bg-white dark:bg-zinc-800 dark:text-zinc-100 backdrop-filter backdrop-blur-sm bg-opacity-50 dark:bg-opacity-50 transition duration-500 ease-in-out">
        Hello, I&apos;m a full-stack web developer with a focus on remote work.
      </div>

      <div className="flex flex-col items-center md:flex-row my-8 md:my-14">
        <div className="self-start text-zinc-900 dark:text-zinc-100 transition duration-500 ease-in-out">
          <h2 className="text-3xl  font-semibold font-mplus">
            Sidney Kaguli
          </h2>
          <p> Digital Craftsman ( Designer / Developer ) </p>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="border-teal-900/40 border-2 rounded-full w-24 h-24 inline-block overflow-hidden">
            <Image
              src={profilePic}
              alt="Sidney Kaguli"
            />
          </div>
        </div>

      </div>
      <section className="mt-6">
        <SectionHeading>Work</SectionHeading>
        <p className="mb-6 dark:text-zinc-100 text-zinc-900 transition duration-500 ease-in-out">
          &nbsp;&nbsp;&nbsp;I am a full-stack developer from Nairobi, Kenya
          with a passion for building digital services. I have a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. With me on your team, you can be sure
          that your product will be built with the best practices in mind and delivered on time.
        </p>
      </section>
      <section className="mt-6" id="works">
        <SectionHeading>Skills</SectionHeading>
        <Skills />
      </section>
      <section className="mt-8">
        <ProjectsHeading />
        <Projects />
      </section>
      <motion.section
        id="contact"
        className="my-12 md:my-24"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.7, type: 'ease' }}
      >
        <div className="relative mb-3">
          <SectionHeading overlay className="text-5xl md:text-8xl text-center">Contact</SectionHeading>
          <ShadowBlock />
        </div>
        <div className="flex flex-col md:gap-3 justify-center text-center items-center text-zinc-900 dark:text-zinc-50 md:text-4xl font-semibold transition duration-500 ease-in-out">
          <p> And that&apos;s a wrap! </p>
          <p>
            <span> I look foward to </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-teal-400 to-teal-600 transition duration-500 ease-in-out">
              chatting with you soon.
            </span>
          </p>
          <Contact />
        </div>
      </motion.section>
    </Layout>
  );
};

export default Home;
