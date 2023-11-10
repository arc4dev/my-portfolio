import React from 'react';

import { funFacts } from '../data/funFacts';
import FunFact from './FunFact';

type Props = {};

const FunFactsList = (props: Props) => {
  return (
    <ul className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-4 md:grid-rows-1">
      {funFacts.map((item) => (
        <FunFact key={item.title} {...item} />
      ))}
    </ul>
  );
};

export default FunFactsList;
