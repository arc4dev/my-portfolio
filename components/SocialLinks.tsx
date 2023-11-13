import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const SocialLinks = (props: Props) => {
  return (
    <div className="space-x-1">
      <SocialIcon
        url="https://www.linkedin.com/in/arkadiusz-sroczyk/"
        target="_blank"
        fgColor="white"
        bgColor="transparent"
        className="rounded-full hover:bg-[#0866C2] transition duration-200"
      />

      <SocialIcon
        url="https://www.github.com/arc4dev/"
        target="_blank"
        fgColor="white"
        bgColor="transparent"
        className="rounded-full hover:bg-[#000] transition duration-200"
      />
    </div>
  );
};

export default SocialLinks;
