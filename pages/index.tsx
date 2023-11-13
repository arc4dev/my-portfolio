import { GetStaticProps } from 'next';
import { client } from '../sanity/lib/client';
import { Inter } from 'next/font/google';

import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ActiveSectionContextProvider from '../contexts/ActiveSectionContext';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
};

export default function Home({ pageInfo, skills, projects }: Props) {
  return (
    <ActiveSectionContextProvider>
      <div
        className={`${inter.className} bg-bgColor h-screen text-gray-100 snap-mandatory snap-y overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-actionLight/80`}>
        <Header />

        <section id="home" className="snap-start ">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        <section id="skills" className="snap-center">
          <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>

        <section id="contact" className="snap-start">
          <Contact pageInfo={pageInfo} />
        </section>
      </div>
    </ActiveSectionContextProvider>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await client.fetch(`*[_type == "pageInfo"][0]{
    ...,
    facts[]->{
      title,
      description
    }
  }`);
  const skills: Skill[] = await client.fetch(`*[_type == "skill"]`);
  const projects: Project[] = await client.fetch(`
  *[_type == "project"]{
    ...,
    technologies[]->{
      name,
      level,
      svg,
      color
    }
  }
`);

  return {
    props: {
      pageInfo,
      skills,
      projects,
    },
    revalidate: 10,
  };
};
