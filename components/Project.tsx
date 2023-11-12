import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { urlForImage } from '../sanity/lib/image';

type Props = {
  project: Project;
};

const Project = ({ project }: Props) => {
  return (
    <article className="w-[600px] min-h-[320px] relative bg-bgColorDarker rounded-xl border border-gray-500/20 p-7 overflow-hidden shadow-sm cursor-pointer group hover:shadow-xl transition-all duration-200">
      <div className="text-start max-w-[47%] gap-3 flex flex-col">
        <h4 className="text-2xl font-semibold">{project.name}</h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          {project.description}
        </p>
        <motion.ul className="text-xs flex flex-wrap text-gray-900 gap-2 pt-1">
          {project.technologies.map((tech) => (
            <li
              key={tech.name}
              className="bg-gray-100 py-0.5 px-2 rounded-full tracking-widest uppercase shadow-md">
              {tech?.name}
            </li>
          ))}
        </motion.ul>

        <SocialIcon
          url={project.githubUrl}
          target="_blank"
          fgColor="white"
          bgColor="transparent"
          className="rounded-full hover:bg-black transition duration-200"
        />
      </div>

      <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
        <Image
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-rotate-2 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-[1.03] transition duration-200 ease-in-out"
          src={urlForImage(project.image).url()}
          alt="ass"
          width={2300}
          height={1900}
        />
      </a>
    </article>
  );
};

export default Project;
