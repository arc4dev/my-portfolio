import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import Skill from './Skill';
import { useActiveSection } from '../contexts/ActiveSectionContext';
import { useInView } from 'react-intersection-observer';

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection('skills');
  }, [inView, setActiveSection]);

  return (
    <motion.div
      ref={ref}
      className="h-screen relative flex flex-col justify-center items-center gap-10 max-w-5xl px-10 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      <h3 className="uppercase text-sm tracking-[0.3rem] opacity-40 absolute top-24">
        Hover over to see profeciency
      </h3>

      <ul className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} direction="right" />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} direction="left" />
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
