import React, { useEffect, useRef } from 'react';
import LeftNameIntro from '../Intro/leftNameIntro';
import RightNameIntro from '../Intro/rightNameIntro';
import '/src/css/parallax.css'

const SplitParallaxContainer: React.FC = () => {
  const scrollPosition = useRef(0);

  const handleScroll = () => {
    scrollPosition.current = window.scrollY;
    requestAnimationFrame(updateTransform);
  };

  const updateTransform = () => {
    const translateX = Math.abs(scrollPosition.current)

    const parallaxImageStyle = {
      transform: `translateX(-${translateX}px)`,
    };

    const parallaxImageStyleOpposite = {
      transform: `translateX(${translateX}px)`,
    };

    const image1Element = document.querySelector('.parallax-image1') as HTMLElement | null;
    const image2Element = document.querySelector('.parallax-image2') as HTMLElement | null;

    if (image1Element) {
      image1Element.style.transform = parallaxImageStyle.transform;
    }

    if (image2Element) {
      image2Element.style.transform = parallaxImageStyleOpposite.transform;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize the transform values
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-image parallax-image1">
        <LeftNameIntro />
      </div>
      <div className="parallax-image parallax-image2">
        <RightNameIntro />
      </div>
    </div>
  );
};

export default SplitParallaxContainer;