import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosSend } from 'react-icons/io';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Navbar from './Navbar';
import NavbarModal from './NavbarModal';

type Props = {};

const Header = (props: Props) => {
  const [isNavModalOpen, setIsNavModalOpen] = useState<true | false>(false);

  return (
    <motion.header
      className="z-50 fixed top-0 w-full flex justify-center px-4 py-3 sm:my-1 bg-transparent"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.4,
      }}>
      <div className="flex justify-between items-center w-full sm:hidden">
        <button
          onClick={() => setIsNavModalOpen(!isNavModalOpen)}
          title="HamburgerMenuButton">
          <RxHamburgerMenu className="w-8 h-8" />
        </button>

        <Link
          href="#contact"
          className="flex items-center gap-2 text-[0.9rem] group">
          Contact
          <IoIosSend className="w-6 h-6" />
        </Link>
      </div>
      <Navbar />

      <NavbarModal
        isModalOpen={isNavModalOpen}
        onCloseModal={() => setIsNavModalOpen(false)}
      />
    </motion.header>
  );
};

export default Header;
