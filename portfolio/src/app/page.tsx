import Qualifications from "./qualifications/page";
import Intro from "./intro/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function Home() {
  
  return (
    <div className="snap-y snap-mandatory">
      <section className="lg:snap-start flex justify-center items-center min-h-screen">
        <Intro />
      </section>
      <section className="lg:snap-start flex justify-center items-center min-h-screen" id="skills">
        <Skills />
      </section>
      <section className="lg:snap-start flex flex-col justify-center items-center min-h-screen" id="projects">
        <Projects />
      </section>
      <section className="lg:snap-start flex justify-center items-center min-h-screen" id="qualifications">
        <Qualifications />
      </section>
    </div>
  );
}
