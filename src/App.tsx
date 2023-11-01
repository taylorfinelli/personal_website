import React from 'react';
import './App.css';
import { LeftSection, RightSection } from './components/leftright';

function App() {
  return (
    <>
        <div className='container'>
          <LeftSection>
            <h1 className='title-text'>Hi there 👋 Thanks for stopping by.</h1>
            <h1 className='subheading-text'>This will tell you a little bit about me.</h1>
          </LeftSection>
          <RightSection>
            <h1 className='title-text'>I'm Taylor Finelli.</h1>
          </RightSection>
        </div>
    </>
  );
}

export default App;
