import React from 'react';
import clsx from 'clsx';
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
        'dark:bg-bgColorDarker/70 relative p-4 rounded-xl text-center shadow-imageShadow border bg-white border-gray-500/20 shadow-sm dark:shadow-md hover:shadow-md dark:hover:shadow-xl transition duration-200 inline-flex flex-col justify-around items-center cursor-pointer w-full sm:max-w-[640px]',
        {
          'border dark:border-b-actionLight shadow-lg hover:shadow-lg': isOpen,
        }
      )}>
      <h3 className="font-semibold text-sm sm:text-lg">{title}</h3>
      <div
        className={clsx(
          'overflow-hidden max-h-0 transition-all duration-[500ms] ease-in-out',
          {
            'max-h-[20rem]': isOpen,
          }
        )}>
        <p
          className={clsx(
            'text-xs sm:text-sm dark:text-gray-300 text-gray-700 pt-2 '
          )}>
          {description}
        </p>
      </div>

      {isOpen ? (
        <HiMinus className="absolute top-[17px] right-3" />
      ) : (
        <HiPlus className="absolute top-[17px] right-3" />
      )}
    </li>
  );
};

export default Fact;
