import React, { useEffect, useRef, useState } from 'react';
import '/src/css/App.css';

export default function HighlightBackground() {
  const [position, setPosition] = useState({ x: -999999, y: 999999 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Introduce a delay in updating the position to create a trailing effect
      setTimeout(() => {
        setPosition({ x: event.clientX, y: event.clientY });
      }, 40); // Adjust the delay time (in milliseconds) based on your preference
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const gradientSize = 900;
      const gradient = `radial-gradient(circle ${gradientSize}px at ${position.x}px ${position.y}px, #251B3C, #1B132A)`;

      container.style.background = gradient;
    }
  }, [position]);

  return <div className="flashlight-container" ref={containerRef} />;
}
