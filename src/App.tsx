import '/src/css/App.css';
import HighlightBackground from './components/HighlightBackground';
import Name from './components/Name/Name';
import { LeftSection, RightSection } from './components/LeftRight/leftright';
import About from './components/About/about';
import TableOfContents from './components/TableOfContents/TableOfContents';
import Work from './components/ResumeSection/Work/Work';
import SpaceBetween from './components/SpaceBetween/spaceBetween';

export default function App() {

  return (
    <>
      <HighlightBackground />
      <div className='container'>
        <LeftSection>
          <Name />
          <TableOfContents />
        </LeftSection>
        <RightSection>
          <About />
          <SpaceBetween size='xxl'/>
          <Work />
        </RightSection> 
      </div>
    </>
  );
}
