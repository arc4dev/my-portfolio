import React from 'react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { MdOutlineSchool, MdOutlineWorkOutline } from 'react-icons/md';

import useSectionInView from '../hooks/useSectionInView';
import { useTheme } from '../contexts/ThemeContext';

type Props = {
  experiences: Experience[];
};

const Experience = ({ experiences }: Props) => {
  const { ref } = useSectionInView('experience');
  const { theme } = useTheme();

  return (
    <motion.div
      ref={ref}
      className="h-screen relative flex flex-col justify-center items-center gap-10 max-w-5xl px-3 sm:px-4 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      <div className="max-h-[80%] w-full overflow-y-auto rounded-md">
        <VerticalTimeline lineColor="" className="h-full">
          {experiences?.map((item) => (
            <VerticalTimelineElement
              key={item.title}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : '#16191d',
                color: theme === 'light' ? 'rgb(17 24 39)' : 'rgb(243 244 246)',
                boxShadow: 'none',
                border: '1px solid rgb(107, 114, 128, 0.2)',
                borderRadius: '0.5rem',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '7px solid #9ca3af'
                    : '7px solid  rgba(243, 244, 246, 0.13)',
              }}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(243, 244, 246, 0.1)',
                color: theme === 'light' ? '#16191d' : 'rgb(243 244 246)',
              }}
              icon={
                item.iconType === 'school' ? (
                  <MdOutlineSchool />
                ) : (
                  <MdOutlineWorkOutline />
                )
              }
              date={item.date}>
              <h4 className="font-semibold capitalize">{item.title}</h4>
              <h5 className="text-[0.9rem] font-normal pt-[0.1rem] italic">
                {item.subtitle}
              </h5>
              <p className="sm:!text-[0.95rem] !font-normal text-gray-700 dark:text-gray-300 !leading-relaxed">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default Experience;
