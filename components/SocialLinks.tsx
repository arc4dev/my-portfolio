import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useTheme } from '../contexts/ThemeContext';

type Props = {};

const SocialLinks = (props: Props) => {
  const { theme } = useTheme();

  return (
    <div className="space-x-1">
      <SocialIcon
        url="https://www.linkedin.com/in/arkadiusz-sroczyk/"
        target="_blank"
        fgColor={theme === 'light' ? '#000' : '#fff'}
        bgColor="transparent"
        className="rounded-full hover:scale-105 dark:hover:bg-[#0866C2] dark:hover:scale-100  transition duration-200 text-black"
      />

      <SocialIcon
        url="https://www.github.com/arc4dev/"
        target="_blank"
        fgColor={theme === 'light' ? '#000' : '#fff'}
        bgColor="transparent"
        className="rounded-full hover:scale-105 dark:hover:bg-[#000] dark:hover:scale-100 transition duration-200"
      />
    </div>
  );
};

export default SocialLinks;
