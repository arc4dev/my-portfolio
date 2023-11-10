import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import FunFactsList from './FunFactsList';
import { urlForImage } from '../sanity/lib/image';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
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

      <FunFactsList />
    </motion.div>
  );
};

export default About;
