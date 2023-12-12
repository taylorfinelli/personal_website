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
          <p className="work-desc">Developed as a full-stack software engineer on an AWS internal tool that allows engineers to manage workflows and task activity.
                                  Elevated the standard for user experience by introducing a dynamic aggregation feature that enables users to effortlessly access an insightful overview of all page contents.
                                  Utilized TypeScript with React for frontend development and Java for backend development.
          </p>
        </div>
      </div>

      <SpaceBetween size='xl' />

      <div className="work-block">
        <p className="work-date">AUG 2021 - MAY 2023</p>
        <div className='work-desc-block'>
          <h1 className="work-location">Apple</h1>
          <p className="job-title">Technical Specialist</p>
          <p className="work-desc">Provided expert technical support and assistance to customers, promptly resolving hardware and software issues. 
                                  Collaborated with fellow technicians to conduct diagnostic assessments, ensuring comprehensive solutions while maintaining a 100% customer satisfaction rating.
          </p>
        </div>
      </div>

      <SpaceBetween size='xl' />

      <div className="work-block">
        <p className="work-date">AUG 2020 - PRESENT</p>
        <div className='work-desc-block'>
          <h1 className="work-location">Scarlet & Gray Free Press</h1>
          <p className="job-title">Webmaster</p>
          <p className="work-desc">Developed and currently manage the content of the UNLV campus newspaper website, overseeing articles, multimedia, and the user interface.
                                  Monitor and analyze website performance metrics, including page views, visitor engagement, and other relevant KPIs, to continually enhance the user experience.
                                  Implemented data-driven improvements based on performance analyses, contributing to increased website traffic and positive reader feedback.
          </p>
        </div>
      </div>

      <SpaceBetween size='xl' />

      <div className="work-block">
        <p className="work-date">SEPT 2021 - MAY 2022</p>
        <div className='work-desc-block'>
          <h1 className="work-location">US Department of Veterans Affairs</h1>
          <p className="job-title">Web Content Management Intern</p>
          <p className="work-desc">Contributed to the development and management of web content, including text, images, videos, and other multimedia elements.
                                  Collaborated with other interns using programs such as Slack and Trello to achieve high-quality features for the website. 
          </p>
        </div>
      </div>

      <SpaceBetween size='xl' />
    </>
  )
}