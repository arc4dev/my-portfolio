import React from 'react';
import { motion } from 'framer-motion';

import Skill from './Skill';
import useSectionInView from '../hooks/useSectionInView';

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  const { ref } = useSectionInView('skills');

  return (
    <motion.div
      ref={ref}
      className="h-screen relative flex flex-col justify-center items-center gap-10 max-w-5xl px-4 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      <h3 className="uppercase text-xs sm:text-sm tracking-[0.3rem] opacity-40 absolute top-24 px-2">
        Hover over to see profeciency
      </h3>

      <ul className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} direction="left" />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} direction="right" />
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
