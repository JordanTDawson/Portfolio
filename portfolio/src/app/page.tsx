import Credentials from './credentials/page';
import Intro from './intro/page';
import Skills from './skills/page';
import Projects from './projects/page';

export default function Home() {
  return (
    <div className='snap-y snap-mandatory md:ml-[150px] md:p-4'>
      <section className='relative flex flex-col justify-center items-center min-h-screen'>
        <Intro />
        <div className='block w-[100%] md:hidden flex justify-center 375:relative absolute bottom-0 left-0 right-0 p-4'>
          <a className='border-2 border-double border-white rounded-lg text-xl p-4 hover:text-yellow-500 hover:scale-105 transform transition-transform' href='#skills'>
            Go to Skills
          </a>
        </div>
      </section>
      <section className='relative flex flex-col justify-center items-center min-h-screen' id='skills'>
      <div className='block w-[100%] md:hidden flex justify-center relative top-0 left-0 right-0 my-2'>
          <a className='border-2 border-double border-white rounded-lg text-xl p-4 hover:text-yellow-500 hover:scale-105 transform transition-transform' href='#'>
            Go to Intro
          </a>
        </div>
        <Skills />
        <div className='block w-[100%] md:hidden flex justify-center relative bottom-0 left-0 right-0 my-2'>
          <a className='border-2 border-double border-white rounded-lg text-xl p-4 hover:text-yellow-500 hover:scale-105 transform transition-transform' href='#projects'>
            Go to Projects
          </a>
        </div>
      </section>
      <section className='relative flex flex-col justify-center items-center min-h-screen' id='projects'>
      <div className='block w-[100%] md:hidden flex justify-center relative top-0 left-0 right-0 p-2'>
          <a className='border-2 border-double border-white rounded-lg text-xl p-2 hover:text-yellow-500 hover:scale-105 transform transition-transform' href='#skills'>
            Go to Skills
          </a>
        </div>
        <Projects />
        <div className='block w-[100%] md:hidden flex justify-center relative bottom-0 left-0 right-0 p-2'>
          <a className='border-2 border-double border-white rounded-lg text-xl p-2 hover:text-yellow-500 hover:scale-105 transform transition-transform' href='#credentials'>
            Go to Credentials
          </a>
        </div>
      </section>
      <section className='relative flex flex-col justify-center items-center min-h-screen' id='credentials'>
        <div className='block w-[100%] md:hidden flex justify-center relative top-0 left-0 right-0 p-2'>
          <a className='border-2 border-double border-white rounded-lg text-xl p-2 hover:text-yellow-500 hover:scale-105 transform transition-transform' href='#projects'>
            Go to Projects
          </a>
        </div>
        <Credentials />
        <div className='block w-[100%] md:hidden flex justify-center relative bottom-0 left-0 right-0 p-2'>
          <a className='border-2 border-double border-white rounded-lg text-xl p-2 hover:text-yellow-500 hover:scale-105 transform transition-transform' href='#'>
            Go to Top
          </a>
        </div>
      </section>
    </div>
  );
}
