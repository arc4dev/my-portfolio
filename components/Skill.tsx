import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  skill: Skill;
  direction: 'left' | 'right';
};

const Skill = ({ skill, direction }: Props) => {
  const position = direction === 'left' ? -100 : 100;

  return (
    <motion.li
      className="group relative cursor-pointer group"
      initial={{ x: position, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.2,
        type: 'spring',
      }}
      viewport={{ once: true }}>
      <div
        className="rounded-full border border-gray-500/20 object-cover w-24 h-24 filter group-hover:grayscale transition duration-200 ease-in-out flex justify-center items-center"
        style={{
          backgroundColor: skill?.color,
        }}>
        <div
          className="w-14"
          dangerouslySetInnerHTML={{ __html: skill?.svg }}
        />
      </div>

      <div className="absolute top-0 text-xs text-gray-100 bg-bgColorDarker px-[3px] py-[1px] rounded-md -rotate-12 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 z-[1] transition ease-in-out duration-200">
        {skill?.name}
      </div>

      <div className="absolute z-0 top-0 w-full h-full opacity-0 bg-bgColor dark:bg-white rounded-full group-hover:opacity-80 group-hover:bg transition duration-200 ease-in-out">
        <div className="flex h-full justify-center items-center">
          <p className="text-2xl font-bold opacity-100 text-white dark:text-gray-900">
            {skill?.level}%
          </p>
        </div>
      </div>
    </motion.li>
  );
};

export default Skill;
