import '/src/components/TableOfContents/tableofcontents.css'
import { useState } from 'react'

export default function TableOfContents() {
  const handleScroll = (e: number) => {
    window.scroll({
      top: e,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="tos-block">
        <p className='toc-text' onClick={() => handleScroll(0)}>ABOUT</p>
        <p className='toc-text' onClick={() => handleScroll(400)}>EXPERIENCE</p>
        <p className='toc-text' onClick={() => handleScroll(800)}>EDUCATION</p>
      </div>
    </>
  )
}