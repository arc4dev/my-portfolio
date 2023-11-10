import React from 'react';

import { motion } from 'framer-motion';

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      className="h-screen relative flex flex-col justify-center items-center gap-10 max-w-5xl px-10 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      Projects
    </motion.div>
  );
};

export default Projects;
