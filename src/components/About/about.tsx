import { LeftSection, RightSection } from '../LeftRight/leftright';
import '/Users/taylorfinelli/Desktop/personal_website/src/css/App.css'

export default function About(){
  return (
    <div className='container'>
      <LeftSection>
        <div className='title-text'>
          about me
        </div>
      </LeftSection>
      <RightSection>
        <div className='regular-text'>
          Greetings! My name is Taylor Finelli. I'm a senior studying computer science at the University of Nevada, Las Vegas Honors College.
          I'm currently on track to earn a bachelor's of science in computer science with a concentration in information assurance.
          My academic journey and experiences have shaped my love for technology, and I can't wait to share more with you.
          It's funny – I wasn't always a big 'tech' guy, but COVID lockdowns and too much YouTube will really reveal some hidden passions.
          Anyway, keep scrolling to check out what makes me who I am. 
        </div>
      </RightSection>
    </div>  
    );
};