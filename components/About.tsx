import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlForImage } from '../sanity/lib/image';

import Fact from './Fact';
import useSectionInView from '../hooks/useSectionInView';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  const { ref } = useSectionInView('about');
  const [currFactOpen, setCurrentFactOpen] = useState<number | null>(0);

  return (
    <motion.div
      ref={ref}
      className="h-screen relative flex flex-col justify-start sm:justify-center pt-4 items-center gap-6 xl:gap-10 max-w-5xl px-4 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <Image
          className="rounded-full w-40 h-40 object-cover dark:shadow-grayShadow mt-10 sm:mt-0 sm:w-44 sm:h-44 md:w-48 md:h-48 xl:w-56 xl:h-56 shadow-lg"
          src={urlForImage(pageInfo.profileImage).url()}
          alt="Me photo"
          width="1600"
          height="1600"
        />
      </motion.div>

      <div className="space-y-3 max-w-lg">
        <h4 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-wide">
          Hi and welcome 👋
        </h4>
        <p className="text-xs sm:text-base">{pageInfo.summary}</p>
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
