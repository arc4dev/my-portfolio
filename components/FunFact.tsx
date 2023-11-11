import React from 'react';
import { IconType } from 'react-icons';
import { Tilt } from 'react-tilt';

type Props = {
  icon: IconType;
  title: string;
  description: string;
};

const FunFact = (props: Props) => {
  const { icon: Icon, title, description } = props;

  return (
    <li className="bg-bgColorDarker/70 p-4 rounded-xl text-center shadow-imageShadow font-light border border-gray-500/20 shadow-md hover:shadow-xl transition duration-200 inline-flex flex-col justify-around items-center">
      <Icon className="mb-1.5 w-7 h-7" />
      <h4 className="font-semibold mb-1 text-sm sm:text-base">{title}</h4>
      {/* <p className="text-xs text-gray-300">{description}</p> */}
    </li>
  );
};

export default FunFact;
