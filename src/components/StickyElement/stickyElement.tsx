import React, { useEffect, useRef } from 'react';
import '/src/css/parallax.css';
import About from '../About/about'
import SplitParallaxContainer from '../SplitParallax/splitParallax';

export default function StickyElement(props: any) {
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
      <div className="parallax-image" ref={stickyRef}>
        {props.children}
      </div>
    </div>
  );
};