import SpaceBetween from '../../SpaceBetween/spaceBetween'
import '/src/components/ResumeSection/Projects/projects.css'

export default function Projects() {
  return (
    <>
      <div className="project-block">
        <p className='project-name'>Personal Website</p>
        <div className="project-desc">The website you're currently viewing. Portfolio website made with TypeScript and React.
                                    Stylized with CSS and deployed with Vercel. 
                                    <br />
                                    Features an animated background, interactive navigation section, dynamic layout when resizing.
        </div>
      </div>

      <SpaceBetween size='xl' />

      <div className="project-block">
        <p className='link'><a className='link' target="_blank" rel="noopener noreferrer" href="https://financial-calculator-sigma.vercel.app">
                                    Financial Investment Calculator
                                    </a>
                                    </p>
        <div className="project-desc">My first project with a user interface (and it shows). Made with TypeScript and React. 
                                    <br />
                                    Used to calculate the present value and future value of two types of investments: lump sum and ordinary annuity.
                                    <br />
                                    Still a work-in-progress.
                                    <br />
                                    Fun fact: I created this because I was too lazy to do the calculations by hand in my finance class.
        </div>
      </div>

      <SpaceBetween size='xl' />
      <p className="project-desc" style={{textAlign: 'center'}}> Check out my GitHub for other trivial projects I did earlier in my CS studies! </p>
    </>
  )
}