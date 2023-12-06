import '/src/css/App.css';
import HighlightBackground from './components/HighlightBackground';
import Name from './components/Name/Name';
import { LeftSection, RightSection } from './components/LeftRight/leftright';
import StickyElement from './components/StickyElement/stickyElement';
import About from './components/About/about';

function App() {

  return (
    <>
      <HighlightBackground />
      <div className='container'>
        <LeftSection>
          <Name />
        </LeftSection>
        <RightSection>
          <About />
        </RightSection> 
      </div>
    </>
  );
}

export default App;
