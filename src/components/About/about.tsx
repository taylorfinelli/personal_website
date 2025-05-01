import SpaceBetween from "../SpaceBetween/spaceBetween";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="about-text">
        Hi! I'm Taylor Finelli, a full-stack software engineer who loves using code to make life
        easier.
        <br />
        <br />
        I'm passionate about building tools that empower others and improve efficiency. My
        experience spans front-end development with React and TypeScript, back-end services in Java,
        and cloud infrastructure on AWS, provisioned with the Cloud Development Kit (CDK).
        <br />
        <br />
        Driven by curiosity and a love for solving complex problems, I'm always looking for new ways
        to create impact through software.
      </div>

      <SpaceBetween size="xl" />
    </>
  );
}
