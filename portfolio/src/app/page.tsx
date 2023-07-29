import About from "./about/page";
import Intro from "./intro/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function Home() {
  
  return (
    <div className="absolute">
      <div className="flex justify-center items-center h-screen">
        <Intro />
      </div>
      <div className="flex justify-center items-center h-screen" id="about">
        <About />
      </div>
      <div className="flex justify-center items-center h-screen" id="skills">
        <Skills />
      </div>
      <div className="flex justify-center items-center h-screen" id="projects">
        <Projects />
      </div>
    </div>
  );
}
