import React, { useEffect } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import { urlForImage } from '../sanity/lib/image';
import { HiDownload } from 'react-icons/hi';
import SocialLinks from './SocialLinks';
import { useActiveSection } from '../contexts/ActiveSectionContext';
import { useInView } from 'react-intersection-observer';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, My Name's ${pageInfo?.name}`,
      'Guy-who-loves-gym.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection('home');
  }, [inView, setActiveSection]);

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-6">
      <BackgroundCircles />
      <Image
        className="rounded-full w-32 h-32 object-cover shadow-grayShadow"
        src={urlForImage(pageInfo?.heroImage).width(512).height(512).url()}
        alt="Me avatar"
        width="512"
        height="512"
        priority={true}
      />

      <div className="z-10">
        <h2 className="text-sm opacity-30 uppercase pb-2 tracking-[0.85rem]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#6d28d9" />
        </h1>

        <div className="pt-2">
          <SocialLinks />
        </div>
      </div>

      <button
        type="button"
        className="inline-flex group justify-center items-center font-semibold gap-1.5 z-[10] bg-gradient-to-br from-violet-600 to-violet-900 py-1.5 px-5 rounded-full text-base shadow-sm shadow-action hover:shadow-xl cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5 hover:opacity-90 active:opacity-70">
        <span className="hidden group-hover:block transition-all">
          Download CV
        </span>
        <span>
          <HiDownload />
        </span>
      </button>
    </div>
  );
};

export default Hero;
