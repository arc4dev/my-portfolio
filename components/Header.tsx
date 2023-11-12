'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navLinks } from '../data/navLinks';
import { useActiveSection } from '../contexts/ActiveSectionContext';
import clsx from 'clsx';

type Props = {};

const Header = (props: Props) => {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <header className="z-50 fixed top-0 w-full flex justify-center">
      <motion.nav
        className="text-gray-100 text-[0.75rem] sm:text-[0.85rem] justify-center items-center my-4 rounded-full backdrop-blur-sm bg-bgColorDarker/70"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.4,
        }}>
        <ul className="flex gap-2 justify-center items-center font-semibold tracking-wide py-2.5 px-2 sm:py-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={clsx(
                  'rounded-full px-3.5 py-1.5 hover:text-gray-100/80 transition duration-200 relative',
                  { 'hidden sm:block': link.name === 'contact' },
                  { 'text-gray-100/80': link.name === activeSection }
                )}
                onClick={() => setActiveSection(link.name)}
                href={link.hash}>
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}

                {activeSection === link.name && (
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-br from-violet-600 to-violet-900 rounded-full -z-[1]"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
