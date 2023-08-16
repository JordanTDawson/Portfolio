import projects, { ProjectInfo } from '../assets/data/projects';
import Image from 'next/image';

export default function Projects() {
    return (
        <div className='max-w-[80%] text-center'>
        <h1 className='text-5xl md:text-6xl mb-8'>Projects</h1>
            <div>
                {projects.map((project: ProjectInfo) => (
                    <div key={project.alt} className='group shadow-white rounded-3xl mb-8 relative block w-[100%] h-[30vh] md:w-[600px] md:h-[400px] max-w-[1000px] transform hover:scale-105 transition-transform'>
                        <div className='h-full w-full p-4 absolute inset-0 rounded-3xl overflow-hidden duration-300'>
                            <Image
                                src={project.image}
                                alt={project.alt}
                                fill
                                sizes='100vw'
                                priority
                            />
                        </div>
                        <div className='rounded-3xl absolute inset-0 flex flex-col justify-center items-center pt-4 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300'>
                            <h1 className='group-hover:text-yellow-500 text-white text-3xl font-semibold'>{project.name}</h1>
                            <h2 className='text-white text-xl'>{project.languages}</h2>
                            <ul className='list-disc text-gray-100 hidden md:block mx-[2rem] text-md'>
                                <li className='mt-4'>{project.bulletOne}</li>
                                <li className='mt-4'>{project.bulletTwo}</li>
                                <li className='mt-4'>{project.bulletThree}</li>
                            </ul>
                            <div className='flex flex-wrap gap-4 py-4'>
                                <a href={project.page} rel='noreferrer' target="_blank" className='mr-4 mb-4'>
                                    <div className='w-[48px] h-[48px] transform hover:scale-110 transition-transform'>
                                        <Image
                                            src='/link.png'
                                            alt='Live Link'
                                            fill
                                            sizes='100vw'
                                            priority
                                        />
                                    </div>
                                </a>
                                <a href={project.repo} rel='noreferrer' target="_blank" className='mr-4 mb-4'>
                                    <div className='w-[48px] h-[48px] transform hover:scale-110 transition-transform'>
                                        <Image
                                            src='/github.png'
                                            alt='Repository'
                                            fill
                                            sizes='100vw'
                                            priority
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
