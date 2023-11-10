'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {};

const Header = (props: Props) => {
  const [activeTab, setActiveTab] = useState('#home');

  const handleChangeTab = (e: React.MouseEvent) => {
    setActiveTab(e.currentTarget.id);
  };

  return (
    <header className="z-50 fixed top-0 w-full flex justify-center">
      <motion.nav
        className="text-gray-100 text-[0.75rem] justify-center py-2.5 sm:py-1 px-2 items-center my-4 rounded-full backdrop-blur-sm bg-bgColorDarker/70"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.8,
        }}>
        <ul className="flex gap-2 justify-center items-center font-semibold tracking-wide">
          <li>
            <Link
              id="#home"
              className={`rounded-full px-3.5 py-1.5 transition ${
                activeTab === '#home' && 'link-active'
              }`}
              onClick={handleChangeTab}
              href="#hero">
              Home
            </Link>
          </li>
          <li>
            <Link
              id="#about"
              className={`rounded-full px-3.5 py-1.5 transition ${
                activeTab === '#about' && 'link-active'
              }`}
              onClick={handleChangeTab}
              href="#about">
              About
            </Link>
          </li>
          <li>
            <Link
              id="#skills"
              className={`rounded-full px-3.5 py-1.5 transition ${
                activeTab === '#skills' && 'link-active'
              }`}
              onClick={handleChangeTab}
              href="#skills">
              Skills
            </Link>
          </li>
          <li>
            <Link
              id="#projects"
              href="#projects"
              className={`rounded-full px-3.5 py-1.5 transition ${
                activeTab === '#projects' && 'link-active'
              }`}
              onClick={handleChangeTab}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              id="#contact"
              href="#contact"
              className={`rounded-full px-3.5 py-1.5 transition hidden sm:block ${
                activeTab === '#contact' && 'link-active'
              }`}
              onClick={handleChangeTab}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
