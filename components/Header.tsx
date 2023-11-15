import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosSend } from 'react-icons/io';
import Navbar from './Navbar';
import Link from 'next/link';
import NavbarModal from './NavbarModal';

type Props = {};

const Header = (props: Props) => {
  const [isNavModalOpen, setIsNavModalOpen] = useState<true | false>(false);

  return (
    <header className="z-50 fixed top-0 w-full flex justify-center px-4 py-3 sm:my-1 bg-transparent">
      <div className="flex justify-between items-center w-full sm:hidden">
        <button onClick={() => setIsNavModalOpen((v) => !v)}>
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
    </header>
  );
};

export default Header;
