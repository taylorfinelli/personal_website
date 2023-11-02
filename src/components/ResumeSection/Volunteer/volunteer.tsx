import { LeftSection, RightSection } from '../../LeftRight/leftright'
import '/src/css/App.css'

export default function Volunteer(){
  return(
    <div className='container'>
      <LeftSection>
        <div className='regular-text'>
          More details to come!
        </div>
      </LeftSection>
      <RightSection>
        <div className='title-text'>
          volunteer work
        </div>
      </RightSection>
    </div>
  )
}