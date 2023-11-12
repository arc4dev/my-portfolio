import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../contexts/ActiveSectionContext';
import Project from './Project';
import Slider from './Slider';

type Props = {};

const Projects = (props: Props) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setActiveSection } = useActiveSection();

  const projects = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (inView) setActiveSection('projects');
  }, [inView, setActiveSection]);

  return (
    <motion.div
      ref={ref}
      className="h-screen flex flex-col relative justify-center items-center gap-10 mx-auto text-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      {/* <div className="relative w-full flex overflow-x-scroll snap-x overflow-y-hidden snap-mandatory z-10">
        {projects.map((project) => (
          <Project key={project} />
        ))}
      </div> */}
      <Slider />

      <div className="w-full h-[500px] absolute top-[25%] left-0 bg-actionLight/30 -skew-y-12 filter blur-[2px]" />
    </motion.div>
  );
};

export default Projects;
