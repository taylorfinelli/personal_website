import React from 'react';
import './css/App.css';
import { LeftSection, RightSection } from './components/LeftRight/leftright';
import LeftNameIntro from './components/Intro/leftNameIntro'
import RightNameIntro from './components/Intro/rightNameIntro'
import SplitParallaxContainer from './components/SplitParallax/splitParallax';
import About from './components/About/about';
import StickyElement from './components/StickyElement/stickyElement';
import IntroSlider from './components/Intro/introSlider';
import SpaceBetween from './components/SpaceBetween/spaceBetween';
import Volunteer from './components/ResumeSection/Volunteer/volunteer';

function App() {
  return (
    <>
        <IntroSlider />
        <div className='construction'>
          this website is currently under construction
        </div>
        <SpaceBetween size='xxl' />
        <About />
        <SpaceBetween size='xxxl' />
        <Volunteer />
    </>
  );
}

export default App;
