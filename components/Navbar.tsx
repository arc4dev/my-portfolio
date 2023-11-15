import React from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data/navLinks';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSection } from '../contexts/ActiveSectionContext';

type Props = {};

const Navbar = (props: Props) => {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <motion.nav
      className="hidden sm:block bg-gray-200/70 text-gray-600 text-[0.75rem] sm:text-[0.9rem] justify-center items-center rounded-full backdrop-blur-sm dark:bg-bgColorDarker/70 dark:text-gray-100"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.4,
      }}>
      <ul className="flex gap-2 justify-center items-center font-semibold tracking-wide py-2.5 px-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={clsx(
                'rounded-full px-3.5 py-1.5 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100/80 transition duration-200 relative',
                {
                  'text-gray-100 hover:!text-gray-100 dark:!text-gray-100 dark:hover:!text-gray-100':
                    link.name === activeSection,
                }
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
                    damping: 21,
                  }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
