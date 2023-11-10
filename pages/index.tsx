import { GetStaticProps } from 'next';
import { client } from '../sanity/lib/client';

import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
};

export default function Home({ pageInfo, skills }: Props) {
  return (
    <div className="bg-bgColor h-screen text-gray-100 snap-mandatory snap-y overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-actionLight/80">
      <Header />

      <section id="hero" className="snap-start ">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await client.fetch(`*[_type == "pageInfo"][0]`);
  const skills: Skill[] = await client.fetch(`*[_type == "skill"]`);

  return {
    props: {
      pageInfo,
      skills,
    },
    revalidate: 10,
  };
};
