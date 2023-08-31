import languages, { Language } from '../assets/data/languages'
import Image from 'next/image';
import Link from 'next/link';

export default function Skills() {
    return (
        <div className='max-w-[90%] text-center'>
            <h1 className='text-5xl md:text-8xl mb-4'>Skills</h1>
            <div className='grid grid-cols-3 lg:grid gap-4 md:gap-8 flex flex-wrap' >
            {languages.map((skill: Language) => (
                <Link className='group hover:scale-105 transform transition-transform border border-white border-4 rounded-xl' 
                      href={`${skill.homepage}`}
                      rel='noreferer'
                      target='_blank'
                      key={skill.language}>
                    <div className='flex flex-col justify-center items-center md:p-4 text-center' >
                        <div className='relative w-[50px] h-[50px]' >
                            <Image 
                                src={`${skill.image}`}
                                alt={`${skill.alt}`}
                                fill={true}
                                sizes='50px'
                            />
                        </div>
                        <div>
                            <h2 className='text-xs md:text-lg md:w-full group-hover:text-yellow-500'>{skill.language}</h2>
                        </div>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    );
}