import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlForImage } from '../sanity/lib/image';

import { useActiveSection } from '../contexts/ActiveSectionContext';
import { funFacts } from '../data/funFacts';
import FunFact from './FunFact';
import { useInView } from 'react-intersection-observer';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection('about');
  }, [inView, setActiveSection]);

  return (
    <motion.div
      ref={ref}
      className="h-screen relative flex flex-col justify-center items-center gap-10 max-w-5xl px-10 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <Image
          className="rounded-full w-44 h-44 object-cover shadow-grayShadow mt-10 sm:mt-0 sm:w-52 sm:h-52 "
          src={urlForImage(pageInfo.profileImage)
            .width(1600)
            .height(1600)
            .url()}
          alt="Me photo"
          width="1600"
          height="1600"
        />
      </motion.div>

      <div className="space-y-5 max-w-lg">
        <h4 className="text-2xl md:text-3xl font-bold">
          Wanna know me better?
        </h4>
        <p className="text-xs md:text-sm font-light">
          <span className="block mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            placeat magni ut velit temporibus possimus quod dicta tempore, sunt,
            voluptates ipsum nesciunt sed, sequi molestiae ducimus voluptatum in
            fugiat sapiente!
          </span>
          <span className="block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            nostrum eos cumque dolorum quas dolores accusantium laboriosam
          </span>
        </p>
      </div>

      <ul className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-4 md:grid-rows-1">
        {funFacts.map((item) => (
          <FunFact key={item.title} {...item} />
        ))}
      </ul>
    </motion.div>
  );
};

export default About;
