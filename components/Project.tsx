import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import Image from 'next/image';

type Props = {};

const Project = (props: Props) => {
  return (
    <article className="w-[600px] relative bg-bgColorDarker rounded-xl border border-gray-500/20 p-7 overflow-hidden shadow-sm cursor-pointer group hover:shadow-xl transition-all duration-200">
      <div className="text-start max-w-[48%] space-y-3">
        <h4 className="text-2xl font-semibold">Wallet</h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          I worked on this project with the team on my Course. Full-stack
          application when user can track, add, delete and manage their
          finances.
        </p>
        <motion.ul className="text-xs flex flex-wrap text-gray-900 gap-2 pt-1">
          <li className="bg-gray-100 py-0.5 px-2 rounded-full tracking-widest uppercase shadow-md">
            React
          </li>
          <li className="bg-gray-100 py-0.5 px-2 rounded-full tracking-widest uppercase shadow-md">
            Redux
          </li>
          <li className="bg-gray-100 py-0.5 px-2 rounded-full tracking-widest uppercase shadow-md">
            NodeJS
          </li>
          <li className="bg-gray-100 py-0.5 px-2 rounded-full tracking-widest uppercase shadow-md">
            Mongodb
          </li>
          <li className="bg-gray-100 py-0.5 px-2 rounded-full tracking-widest uppercase shadow-md">
            Redux
          </li>
        </motion.ul>

        <SocialLinks />
      </div>

      <Image
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-rotate-2 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-[1.03] transition duration-200 ease-in-out"
        src="/desktop-mockup.png"
        alt="ass"
        width={2300}
        height={1900}
      />
    </article>
  );
};

export default Project;
