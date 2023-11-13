import clsx from 'clsx';
import React from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';

type Props = {
  title: string;
  description: string;
  num: number;
  currOpen: number | null;
  onOpen: (num: number) => void;
};

const Fact = ({ title, description, num, currOpen, onOpen }: Props) => {
  const isOpen = num === currOpen;

  return (
    <li
      onClick={() => onOpen(num)}
      className={clsx(
        'bg-bgColorDarker/70 relative p-4 rounded-xl text-center shadow-imageShadow font-light border border-gray-500/20 shadow-md hover:shadow-xl transition duration-200 inline-flex flex-col justify-around items-center cursor-pointer w-full sm:max-w-[640px]',
        {
          'border border-b-actionLight shadow-lg': isOpen,
        }
      )}>
      <h4 className="font-semibold text-sm sm:text-[1rem]">{title}</h4>
      <p
        className={clsx(
          'text-xs sm:text-sm text-gray-300 max-h-0 overflow-hidden transition-all duration-500 ease-in-out',
          {
            'max-h-[7rem] pt-2': isOpen,
          }
        )}>
        {description}
      </p>
      {isOpen ? (
        <HiMinus className="absolute top-[17px] right-3" />
      ) : (
        <HiPlus className="absolute top-[17px] right-3" />
      )}
    </li>
  );
};

export default Fact;
