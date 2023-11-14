import React from 'react';
import useSectionInView from '../hooks/useSectionInView';
import { motion } from 'framer-motion';

type Props = {};

const Experience = (props: Props) => {
  const { ref } = useSectionInView('experience');

  return (
    <motion.div
      ref={ref}
      className="h-screen relative flex flex-col justify-center items-center gap-10 max-w-5xl px-4 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      <h3 className="uppercase text-xs sm:text-sm tracking-[0.3rem] opacity-40 absolute top-24 px-2">
        Experience
      </h3>
    </motion.div>
  );
};

export default Experience;
