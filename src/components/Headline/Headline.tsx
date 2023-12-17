import React from 'react';
import '/src/components/Headline/headline.css';

interface HeadlineProps {
  headlineText: string;
}

const Headline: React.ForwardRefRenderFunction<HTMLDivElement, HeadlineProps> = ({ headlineText }, ref) => {
  return (
    <div className='headline-block' ref={ref}>
      <hr className='line' />
      <span className='headline-text'>{headlineText}</span>
      <hr className='line' />
    </div>
  );
};

export default React.forwardRef(Headline);
