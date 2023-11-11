import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../contexts/ActiveSectionContext';

type Props = {};

const Projects = (props: Props) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection('projects');
  }, [inView, setActiveSection]);

  return (
    <motion.div
      ref={ref}
      className="h-screen relative flex flex-col justify-center items-center gap-10 max-w-5xl px-10 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      Projects
    </motion.div>
  );
};

export default Projects;
