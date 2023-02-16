import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './SectionHeading';
import ShadowBlock from './ShadowBlock';

const ProjectsHeading = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 50 },
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
    <motion.div
      className="relative mb-3"
      ref={ref}
      variants={variants}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.7, type: 'ease' }}
    >
      <SectionHeading overlay className="text-5xl md:text-8xl text-center">Projects</SectionHeading>
      <ShadowBlock />
    </motion.div>
  );
};

export default ProjectsHeading;
