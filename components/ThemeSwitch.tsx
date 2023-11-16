import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BsMoon, BsSun } from 'react-icons/bs';

type Props = {};

const ThemeSwitch = (props: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-4 right-4 bg-white w-[3rem] text-black  h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-500 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-bgColorDarker dark:text-white"
      onClick={toggleTheme}
      title="themeSwitchButton">
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
