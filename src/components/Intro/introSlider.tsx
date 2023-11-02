import React, { useEffect, useRef } from 'react';
import '/Users/taylorfinelli/Desktop/personal_website/src/css/parallax.css';
import SplitParallaxContainer from '../SplitParallax/splitParallax';

const IntroSlider: React.FC = (props) => {
  const stickyRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (stickyRef.current) {
      const rect = stickyRef.current.getBoundingClientRect();
      const isSticky = rect.top <= 0;

      if (isSticky) {
        stickyRef.current.style.position = 'fixed';
        stickyRef.current.style.top = '0';
      } else {
        stickyRef.current.style.position = 'relative';
        stickyRef.current.style.top = 'auto';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-image-single" ref={stickyRef}>
        <SplitParallaxContainer />
      </div>
    </div>
  );
};

export default IntroSlider;
