import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.2, 1],
      }}
      transition={{
        duration: 1.6,
      }}
      className="relative flex justify-center items-center">
      <div className="absolute border [#363E47] rounded-full h-[200px] w-[200px] mt-52 animate-ping opacity-20" />
      <div className="absolute border border-[#363E47] rounded-full h-[300px] w-[300px] mt-52 animate-pulse" />
      <div className="absolute border border-[#363E47] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-violet-700 rounded-full h-[650px] w-[650px] mt-52 opacity-5 animate-pulse" />
      <div className="absolute border border-[#363E47] rounded-full h-[850px] w-[850px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
