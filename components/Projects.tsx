import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Project from './Project';
import useSectionInView from '../hooks/useSectionInView';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const { ref } = useSectionInView('projects');

  return (
    <motion.div
      ref={ref}
      className="h-screen flex flex-col relative justify-center items-center gap-10 mx-auto text-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      <h3 className="uppercase text-xs sm:text-sm tracking-[0.3rem] opacity-40 absolute top-24 px-2 hidden sm:block">
        My own or team projects that I've worked on
      </h3>

      <Swiper
        className="w-full relative"
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={'auto'}
        // loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, EffectCoverflow]}
        grabCursor={true}>
        {projects.map((project) => (
          <SwiperSlide key={project._id}>
            <Project project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full h-[500px] absolute top-[25%] left-0 bg-actionLight/30 -skew-y-12 filter blur-[2px]" />
    </motion.div>
  );
};

export default Projects;
