import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { urlForImage } from '../sanity/lib/image';
import { useTheme } from '../contexts/ThemeContext';

type Props = {
  project: Project;
};

const Project = ({ project }: Props) => {
  const { theme } = useTheme();

  return (
    <article className="w-[340px] min-h-[320px] h-[420px] sm:w-[600px] sm:h-auto relative bg-white dark:bg-bgColorDarker rounded-xl border border-gray-500/20 p-7 overflow-hidden shadow-sm cursor-pointer group hover:shadow-xl transition-all duration-200">
      <div className="text-start sm:max-w-[47%] gap-3 flex flex-col">
        <div className="flex items-center gap-1">
          <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {project.name}
          </h4>
          <SocialIcon
            url={project.githubUrl}
            target="_blank"
            fgColor={theme === 'dark' ? '#fff' : '#000'}
            bgColor="transparent"
            className="rounded-full hover:scale-105 dark:hover:bg-black transition duration-200"
          />
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        <motion.ul className="text-xs flex flex-wrap text-gray-100 dark:text-gray-900 gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <li
              key={tech.name}
              className="dark:bg-gray-100 bg-bgColorDarker py-0.5 px-2 rounded-full tracking-widest uppercase shadow-sm dark:shadow-md">
              {tech?.name}
            </li>
          ))}
        </motion.ul>
      </div>

      <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
        <Image
          className="absolute top-60 -right-0 sm:top-8 sm:-right-40 w-[28.25rem] rounded-t-lg shadow-2xl sm:group-hover:-rotate-2 sm:group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-[1.03] transition duration-200 ease-in-out"
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
