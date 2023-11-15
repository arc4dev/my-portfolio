import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineX } from 'react-icons/hi';
import { createPortal } from 'react-dom';
import { navLinks } from '../data/navLinks';
import Link from 'next/link';
import { useActiveSection } from '../contexts/ActiveSectionContext';
import SocialLinks from './SocialLinks';
import { SectionName } from '../lib/types';

type Props = {
  isModalOpen: boolean;
  onCloseModal: () => void;
};

const NavbarModal = ({ isModalOpen, onCloseModal }: Props) => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (isModalOpen) {
      const portalRoot = document.getElementById('portal-root');
      if (!portalRoot) {
        return;
      }

      // Create a container for the modal in the portal root
      const modalContainer = document.createElement('div');
      portalRoot.appendChild(modalContainer);

      // Cleanup function to remove the modal container when the component unmounts
      return () => {
        portalRoot.removeChild(modalContainer);
      };
    }
  }, [isModalOpen]);

  const handleClickLink = (linkName: SectionName) => {
    setActiveSection(linkName);
    onCloseModal();
  };

  return isModalOpen
    ? createPortal(
        <motion.div
          className="fixed inset-0 w-full h-full bg-white dark:bg-bgColorDarker z-50 px-4 pt-36 pb-4 flex flex-col justify-between"
          initial={{ x: -640 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4, type: 'tween' }}>
          <button onClick={onCloseModal} className="absolute top-3 right-3">
            <HiOutlineX className="w-10 h-10 text-gray-900 dark:text-gray-100" />
          </button>

          <ul className="flex flex-col gap-4 font-semibold tracking-wide py-2.5 px-2 text-2xl">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className="rounded-full px-3.5 py-1.5 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100/80 transition duration-200 relative"
                  onClick={() => handleClickLink(link.name)}
                  href={link.hash}>
                  {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pl-3">
            <SocialLinks />
          </div>
        </motion.div>,
        document.getElementById('portal-root')!
      )
    : null;
};

export default NavbarModal;
