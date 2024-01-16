import '/src/css/App.css';
import HighlightBackground from './components/HighlightBackground/HighlightBackground';
import Name from './components/Name/Name';
import { LeftSection, RightSection } from './components/LeftRight/leftright';
import About from './components/About/about';
import TableOfContents from './components/TableOfContents/TableOfContents';
import Work from './components/ResumeSection/Work/Work';
import SpaceBetween from './components/SpaceBetween/spaceBetween';
import Projects from './components/ResumeSection/Projects/Projects';

import { useState, useEffect, useRef } from 'react'
import Headline from './components/Headline/Headline';
import Socials from './components/Socials/Socials';
import Volunteer from './components/ResumeSection/Volunteer/Volunteer';

export default function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const volunteerRef = useRef(null);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HighlightBackground />
      <div className={`container ${fadeIn ? 'fade-in' : 'transparent'}`}>
        <LeftSection>
          <Name />

          <TableOfContents aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} volunteerRef={volunteerRef}/>

          <Socials />
        </LeftSection>

        <RightSection>
          <div ref={aboutRef} />
          <About />

          <Headline headlineText='EXPERIENCE' ref={experienceRef} />
          <SpaceBetween size='xl' />
          <Work />

          <Headline headlineText='PROJECTS' ref={projectsRef} />
          <SpaceBetween size='xl' />
          <Projects />

          <Headline headlineText='VOLUNTEERISM' ref={volunteerRef} />
          <SpaceBetween size='xl' />
          <Volunteer />
        </RightSection> 
      </div>
    </>
  );
}
