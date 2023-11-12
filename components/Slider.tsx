import React from 'react';

import Project from './Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

type Props = {};

const Slider = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
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
        <SwiperSlide key={project}>
          <Project />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
