import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlForImage } from '../sanity/lib/image';
import { useActiveSection } from '../contexts/ActiveSectionContext';
import { useInView } from 'react-intersection-observer';

import Fact from './Fact';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setActiveSection } = useActiveSection();

  const [currFactOpen, setCurrentFactOpen] = useState<number | null>(0);

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
          className="rounded-full w-44 h-44 object-cover shadow-grayShadow mt-10 sm:mt-0 sm:w-52 sm:h-52"
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
        <h4 className="text-2xl md:text-3xl font-bold tracking-wide">
          Hi and welcome👋
        </h4>
        <p className="text-xs md:text-sm">{pageInfo.summary}</p>
      </div>

      <ul className="flex flex-col gap-2">
        {pageInfo.facts.map((item, i) => (
          <Fact
            key={item.title}
            {...item}
            num={i}
            currOpen={currFactOpen}
            onOpen={setCurrentFactOpen}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default About;
