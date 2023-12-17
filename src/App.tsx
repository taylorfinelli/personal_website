import '/src/css/App.css';
import HighlightBackground from './components/HighlightBackground/HighlightBackground';
import Name from './components/Name/Name';
import { LeftSection, RightSection } from './components/LeftRight/leftright';
import About from './components/About/about';
import TableOfContents from './components/TableOfContents/TableOfContents';
import Work from './components/ResumeSection/Work/Work';
import SpaceBetween from './components/SpaceBetween/spaceBetween';
import Projects from './components/ResumeSection/Projects/Projects';

import { useRef } from 'react'
import Headline from './components/Headline/Headline';
import Socials from './components/Socials/Socials';

export default function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <HighlightBackground />
      <div className='container'>
        <LeftSection>
          <Name />

          <TableOfContents aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef}/>

          <Socials />
        </LeftSection>

        <RightSection>
          <div ref={aboutRef} />
          <About />

          <Headline headlineText='EXPERIENCE' ref={experienceRef} />
          <SpaceBetween size='xl'/>
          <Work />

          <Headline headlineText='PROJECTS' ref={projectsRef} />
          <SpaceBetween size='xl'/>
          <Projects />

          <SpaceBetween size='xl'/>
        </RightSection> 
      </div>
    </>
  );
}
