import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const SocialLinks = (props: Props) => {
  return (
    <div>
      <SocialIcon
        url="https://www.linkedin.com/in/arkadiusz-sroczyk/"
        fgColor="white"
        bgColor="transparent"
        className="rounded-full hover:bg-[#0866C2] transition duration-200"
      />

      <SocialIcon
        url="https://www.github.com/arc4dev/"
        fgColor="white"
        bgColor="transparent"
        className="rounded-full hover:bg-black transition duration-200"
      />
    </div>
  );
};

export default SocialLinks;
