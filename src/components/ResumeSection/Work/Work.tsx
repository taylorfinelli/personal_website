import SpaceBetween from '../../SpaceBetween/spaceBetween'
import '/src/components/ResumeSection/Work/work.css'

export default function Work() {

  return (
    <>
      <div className="work-block">
        <p className="work-date">JUNE 2023 - SEPT 2023</p>
        <div className='work-desc-block'>
          <h1 className="work-location">Amazon Web Services</h1>
          <p className="job-title">Software Development Engineering Intern</p>
          <p className="work-desc">Developed as a <span style={{fontWeight: 500, color: '#ede6ff'}}>full-stack</span> software engineer on an AWS internal tool that allows engineers to manage workflows and task activity.
                                  Elevated the standard for <span style={{fontWeight: 500, color: '#ede6ff'}}>user experience</span> by introducing a dynamic aggregation feature that enables users to effortlessly access an insightful overview of all page contents.
                                  Utilized <span style={{fontWeight: 500, color: '#ede6ff'}}>TypeScript</span> with <span style={{fontWeight: 500, color: '#ede6ff'}}>React</span> for frontend development and <span style={{fontWeight: 500, color: '#ede6ff'}}>Java</span> for backend development.
          </p>
        </div>
      </div>

      <SpaceBetween size='xl' />
      
      <div className="work-block">
        <p className="work-date">AUG 2023 - PRESENT</p>
        <div className='work-desc-block'>
          <h1 className="work-location">UNLV College of Engineering</h1>
          <p className="job-title">Teaching Assistant</p>
          <p className="work-desc">Provides assistance to professors in computer science courses by tutoring students, grading assignments, and hosting office hours.
          Evaluates student-written code, discusses algorithms and implementations, and collaborates with other teaching assistants to find ways to best guide students toward success.
          </p>
        </div>
      </div>

      <SpaceBetween size='xl' />

      <div className="work-block">
        <p className="work-date">AUG 2021 - MAY 2023</p>
        <div className='work-desc-block'>
          <h1 className="work-location">Apple</h1>
          <p className="job-title">Technical Specialist</p>
          <p className="work-desc">Provided expert <span style={{fontWeight: 500, color: '#ede6ff'}}>technical support</span> and assistance to customers, promptly resolving hardware and software issues. 
                                  Collaborated with fellow technicians to conduct diagnostic assessments, ensuring comprehensive solutions while maintaining a <span style={{fontWeight: 500, color: '#ede6ff'}}>100% customer satisfaction</span> rating.
          </p>
        </div>
      </div>

      <SpaceBetween size='xl' />

      <div className="work-block">
        <p className="work-date">AUG 2020 - PRESENT</p>
        <div className='work-desc-block'>
          <h1 className="work-location">Scarlet & Gray Free Press</h1>
          <p className="job-title">Webmaster</p>
          <p className="work-desc">Developed and currently manages the content of the UNLV campus newspaper website, overseeing articles, multimedia, and the <span style={{fontWeight: 500, color: '#ede6ff'}}>user interface</span>.
                                  Monitors and analyzes website performance metrics, including page views, visitor engagement, and other relevant KPIs, to continually enhance the <span style={{fontWeight: 500, color: '#ede6ff'}}>user experience</span>.
                                  Implemented data-driven improvements based on performance analyses, contributing to <span style={{fontWeight: 500, color: '#ede6ff'}}>increased website traffic</span> and positive reader feedback.
          </p>
        </div>
      </div>

      <SpaceBetween size='xl' />

      <div className="work-block">
        <p className="work-date">SEPT 2021 - MAY 2022</p>
        <div className='work-desc-block'>
          <h1 className="work-location">US Department of Veterans Affairs</h1>
          <p className="job-title">Web Content Management Intern</p>
          <p className="work-desc">Contributed to the development and <span style={{fontWeight: 500, color: '#ede6ff'}}>management of web content</span>, including text, images, videos, and other multimedia elements.
                                  Collaborated with other interns using programs such as Slack and Trello to achieve high-quality features for the website. 
          </p>
        </div>
      </div>

      <SpaceBetween size='xl' />
    </>
  )
}