import SpaceBetween from '../SpaceBetween/spaceBetween';
import './about.css'

export default function About(){
  return (
    <>
      <div className='about-text'>
        Greetings! My name is Taylor Finelli. I'm a senior studying computer science at the University of Nevada, Las Vegas Honors College.
        I'm currently on track to earn a bachelor's of science in computer science with a concentration in information assurance.
        <br />
        <br />
        Computer science has become a passion for me, and I thoroughly enjoy exploring all types of programming languages. 
        My experience spans a variety of languages, from low-level ones such as x86 and RISC-V assembly, to high-level ones like Python, Java, and TypeScript. 
        I've also studied the languages that can fall somewhere in-between, such as C and C++, and even languages not traditionally considered "programming" languages, like R and MATLAB.
        <br />
        <br />
        I'm eager to begin a career in software engineering, and even more excited to keep learning about computer science. 
        Keep scrolling to learn a little bit about me while I showcase some of what I've learned so far.
      </div>
      <SpaceBetween size='xl' />
    </>
    );
};