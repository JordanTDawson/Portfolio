import Styles from './page.module.css'

export default function Home() {
  return (
    <div className={Styles.container}>
      <div className="flex justify-center items-center h-screen" id="intro">
        <div className="max-w-md text-center">
          <h1 className="text-2xl text-left">hey, i&apos;m Jordan 👋</h1>
          <p className="text-left"> 
              a driven and enthusiastic software engineer who has recently completed a comprehensive coding bootcamp.
              I am thrilled to embark on this exciting journey of transforming my passion for technology into practical skills and real-world solutions.
              Throughout the bootcamp, I&apos;ve gained hands-on experience in the PERN stack 
              and I&apos;m eager to apply my newfound knowledge in the software development industry. 
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen" id="about">
        <h1>Intro</h1>
      </div>
      <div className="flex justify-center items-center h-screen" id="skills">
        <h1>Skills</h1>
      </div>
      <div className="flex justify-center items-center h-screen" id="projects">
        <h1>Projects</h1>
      </div>
    </div>
  )
}
