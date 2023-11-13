import { useEffect } from 'react';
import { useActiveSection } from '../contexts/ActiveSectionContext';
import { useInView } from 'react-intersection-observer';
import { SectionName } from '../lib/types';

const useSectionInView = (sectionName: SectionName) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection(sectionName);
  }, [inView, setActiveSection, sectionName]);

  return { ref };
};

export default useSectionInView;
