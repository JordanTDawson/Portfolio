import Qualifications from "./qualifications/page";
import Intro from "./intro/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function Home() {
  
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Intro />
      </div>
      <div className="flex justify-center items-center min-h-screen" id="skills">
        <Skills />
      </div>
      <div className="flex justify-center items-center min-h-screen" id="projects">
        <Projects />
      </div>
      <div className="flex justify-center items-center min-h-screen" id="qualifications">
        <Qualifications />
      </div>
    </>
  );
}
