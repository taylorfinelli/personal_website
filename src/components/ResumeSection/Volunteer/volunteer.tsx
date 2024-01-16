import SpaceBetween from '../../SpaceBetween/spaceBetween'
import '/src/components/ResumeSection/Volunteer/volunteer.css'

export default function Volunteer(){
  return (
    <>
      <div className="volunteer-block">
        <p className='link'><a className='link' target="_blank" rel="noopener noreferrer" href="https://heroschool.us/">
                                    Hero School
                                    </a>
                                    </p>
        <p className="volunteer-desc"> Dedicated <span style={{fontWeight: 500, color: '#EDE6FF'}}>over 3 years</span> to Hero School, actively contributing to its transformative mission in instilling character,
         lifelong learning, and heroism in individuals. Engaged in initiatives inspired by a "Human First" philosophy, driving positive change and empowerment within communities,
         and helping the mission of reducing the homeless population in Las Vegas. 
         <br />
         Earned the <a className='volunteer-link' href='https://presidentialserviceawards.gov/' target="_blank" rel="noopener noreferrer">President's Volunteer Sevice Award (Gold)</a> for my commitment to volunteerism with this program.
         </p>
      </div>

      <SpaceBetween size='xl' />

      <div className="volunteer-block">
        <p className='link'><a className='link' target="_blank" rel="noopener noreferrer" href="https://southernnevada.ja.org/">
                                    Junior Achievement of Southern Nevada
                                    </a>
                                    </p>
        <p className="volunteer-desc">Collaborated with Junior Achievement of Southern Nevada, a non-profit organization committed to empowering youth for success. 
        Facilitated interactive lessons on the significance of education, family, and financial literacy at an elementary school in a low-income area, positively impacting students from disadvantaged backgrounds. 
        Contributed to fostering a foundation for informed decision-making and future success.
        </p>
      </div>

      <SpaceBetween size='xl' />

      <div className="volunteer-block">
        <p className='link'><a className='link' target="_blank" rel="noopener noreferrer" href="https://getoutdoorsnevada.org/">
                                    Get Outdoors Nevada
                                    </a>
                                    </p>
        <p className="volunteer-desc">Engaged in environmental stewardship with Get Outdoors Nevada, contributing to a cleaner and healthier community. 
        Partook in a collaborative effort with a large group to remove microplastics and other debris from a local park, demonstrating dedication to environmental conservation. 
        Additionally, participated in tree-planting initiatives, actively contributing to the organization's mission of fostering a sustainable and vibrant outdoor environment.
        </p>
      </div>

      <SpaceBetween size='xl' />

    </>
  )
}