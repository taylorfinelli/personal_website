import '/src/components/TableOfContents/tableofcontents.css';

export default function TableOfContents({ aboutRef, experienceRef, projectsRef, volunteerRef }) {
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 10,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="toc-block">
      <p className='toc-text' onClick={() => scrollToRef(aboutRef)}>ABOUT</p>
      <p className='toc-text' onClick={() => scrollToRef(experienceRef)}>EXPERIENCE</p>
      <p className='toc-text' onClick={() => scrollToRef(projectsRef)}>PROJECTS</p>
      <p className='toc-text' onClick={() => scrollToRef(volunteerRef)}>VOLUNTEERISM</p>
    </div>
  );
}
