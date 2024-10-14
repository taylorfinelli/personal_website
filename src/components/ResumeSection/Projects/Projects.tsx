import SpaceBetween from "../../SpaceBetween/spaceBetween";
import "/src/components/ResumeSection/Projects/projects.css";

export default function Projects() {
  return (
    <>
      <div className="project-block">
        <p className="project-name">Personal Website</p>
        <div className="project-desc">
          The website you're currently viewing. Portfolio website made with TypeScript and React.
          Stylized with CSS and deployed with Vercel.
          <br />
          Features an animated background, interactive navigation section, and a responsive layout.
        </div>
      </div>

      <SpaceBetween size="xl" />

      <div className="project-block">
        <p className="link">
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/orgs/abilliti-dev/repositories"
          >
            Abilliti
          </a>
        </p>
        <div className="project-desc">
          A business operator's best friend. Abilliti is a work-in-progress that will allow users to
          manage expenditures, generate and send invoices, keep track of job statuses, assign tasks
          to employees, and so much more. Bookmark the GitHub repo for updates!
        </div>
      </div>

      <SpaceBetween size="xl" />

      <div className="project-block">
        <p className="link">
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/taylorfinelli/EMPOWER-UNLV"
          >
            EMPOWER UNLV
          </a>
        </p>
        <div className="project-desc">
          A project that partners with multiple public health facilities in southern Nevada.
          Wastewater is captured and analyzed to monitor the emergence and evolution of SARS-CoV-2
          variants, antimicrobial resistance alleles, and drugs of abuse. Together, the information
          will guide the deployment of public health resources.
        </div>
      </div>

      <SpaceBetween size="xl" />

      <div className="project-block">
        <p className="link">
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://financial-calculator-sigma.vercel.app"
          >
            Financial Investment Calculator
          </a>
        </p>
        <div className="project-desc">
          My first project with a user interface (and it shows). Made with TypeScript and React.
          <br />
          Used to calculate the present value and future value of two types of investments: lump sum
          and ordinary annuity.
          <br />
          Still a work-in-progress.
          <br />
          Fun fact: I created this because I was too lazy to do the calculations by hand in my
          finance class.
        </div>
      </div>

      <SpaceBetween size="xl" />
      <p className="project-desc" style={{ textAlign: "center" }}>
        {" "}
        Check out my GitHub for other trivial projects I did earlier in my CS studies!{" "}
      </p>

      <SpaceBetween size="xl" />
    </>
  );
}
