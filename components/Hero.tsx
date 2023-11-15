import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import { urlForImage } from '../sanity/lib/image';
import { HiDownload } from 'react-icons/hi';

import SocialLinks from './SocialLinks';
import useSectionInView from '../hooks/useSectionInView';
import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, My Name's ${pageInfo?.name}`,
      'Guy-who-likes-gym.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const { ref } = useSectionInView('home');

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-6 px-1">
      <BackgroundCircles />
      <Image
        className="rounded-full w-32 h-32 object-cover dark:shadow-grayShadow shadow-lg"
        src={urlForImage(pageInfo?.heroImage).url()}
        alt="Me avatar"
        width="512"
        height="512"
        priority={true}
      />

      <div className="z-10">
        <h2 className="text-[0.65rem] sm:text-sm opacity-30 uppercase pb-2 tracking-[0.85rem]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#6d28d9" />
        </h1>

        <div className="pt-2">
          <SocialLinks />
        </div>
      </div>

      <a
        href={`${pageInfo.cvUrl}?dl=cv-arkadiusz-sroczyk.pdf`}
        download={`${pageInfo.cvUrl}?dl=cv-arkadiusz-sroczyk.pdf`}
        className="inline-flex group justify-center items-center z-[1] font-semibold bg-gradient-to-br from-violet-600 to-violet-900 py-1.5 px-5 rounded-full text-base shadow-sm shadow-action hover:shadow-xl cursor-pointer transition duration-500 ease-in-out hover:opacity-90 active:opacity-70 text-gray-100">
        <HiDownload />
        <span className="max-w-0 transition-all ease-in-out duration-500 inline-flex whitespace-nowrap overflow-hidden group-hover:max-w-[8rem] group-hover:pl-1">
          Download CV
        </span>
      </a>
    </div>
  );
};

export default Hero;
