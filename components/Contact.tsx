import React from 'react';
import { motion } from 'framer-motion';
import { FaAddressCard } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

import ContactForm from './ContactForm';

type Props = {
  pageInfo: PageInfo;
};

const Contact = ({ pageInfo }: Props) => {
  return (
    <motion.div
      className="h-screen relative flex flex-col justify-center items-center gap-8 max-w-5xl px-10 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}>
      <h4 className="text-3xl font-bold ">
        Feel free to contact me if you want!
      </h4>

      <div className="space-y-1 flex flex-col justify-center items-center">
        <div className="flex items-center space-x-2">
          <HiPhone className="text-actionLight animate-pulse h-7 w-7" />
          <p>{pageInfo?.phoneNumber}</p>
        </div>

        <div className="flex items-center space-x-2">
          <HiMail className="text-actionLight animate-pulse h-7 w-7" />
          <p>{pageInfo?.email}</p>
        </div>

        <div className="flex items-center space-x-2">
          <FaAddressCard className="text-actionLight animate-pulse h-7 w-7" />
          <p>{pageInfo?.address}</p>
        </div>
      </div>

      <ContactForm />

      <footer className="absolute bottom-5 w-full">
        <p className="text-xs opacity-30">
          &copy; 2023 Arkadiusz Sroczyk. All rights reserved.
        </p>
      </footer>
    </motion.div>
  );
};

export default Contact;
