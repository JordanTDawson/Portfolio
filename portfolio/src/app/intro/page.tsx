import Image from "next/image";

export default function Intro() {
    return (
        <div className='flex flex-col max-w-[100%] md:max-w-[80%] lg:max-w-[60%] text-center items-center'>
          <p className='text-gray-500'>Hi! My name is</p>
          <div className='relative w-[200px] h-[200px] 375:w-[125px] 375:h-[125px] md:w-[400px] md:h-[400px] m-2 overflow-hidden rounded-full'>
              <Image
              className='object-cover w-[100%] h-[100%]'
              src='/jordan-dawson.jpg'
              alt='A picture of me!'
              fill
              priority
              />
          </div>
          <h1 className='text-5xl md:text-8xl'>Jordan Dawson</h1>
          <p className='text-md text-gray-500'> 
              a driven and enthusiastic software engineer who has recently completed a comprehensive coding bootcamp.
              I am thrilled to embark on this exciting journey of transforming my passion for technology into practical skills and real-world solutions.
          </p>
          <div className='flex flex-wrap gap-8 justify-center my-4'>
            <a href='https://www.linkedin.com/in/jordantdawson/' rel='noreferer' target='_blank' className='border-2 border-white rounded-lg text-xl p-2 hover:text-yellow-500 hover:scale-105 transform transition-transform'>LinkedIn</a>
            <a href='https://github.com/JordanTDawson' rel='noreferer' target='_blank' className='border-2 border-white rounded-lg text-xl p-2 hover:text-yellow-500 hover:scale-105 transform transition-transform'>Github</a>
          </div>
        </div>
    );
}
