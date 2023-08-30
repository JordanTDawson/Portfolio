import Image from 'next/image'

export default function Credentials() {
    return (
        <div className='max-w-[80%] text-center'>
            <h1 className='text-4xl md:text-6xl mb-4'>Credentials</h1>
            <a href='https://learningfuze.com/' rel='noreferer' target='_blank' className='flex flex-wrap justify-center border border-white border-4 p-2 my-4 rounded-xl hover:text-yellow-500 transition-colors hover:scale-[102%] transform origin-center transition-transform'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative w-[100px] h-[100px] m-2'>
                        <Image
                            className='rounded-xl'
                            src='https://blog.learningfuze.com/wp-content/uploads/2015/03/learning-fuze-20logo-202.png'
                            alt='Learning Fuze'
                            fill
                            priority
                        />
                    </div>
                    <div className='m-2 '>
                        <h1 className='text-xl md:text-5xl'>Learning Fuze</h1>
                        <p className='text-gray-500'>Nov 2022 - March 2023</p>
                    </div>
                </div>
                <div className='text-left text-white'>
                    <ul className='ml-[1rem] md:mx-[2rem] text-sm list-disc'>
                        <li>Learned modern and efficient coding methodologies and syntactic practices for modular and scalable development from an instructor with experience as a director at Google.</li>
                        <li>Actively learn coding fundamentals and techniques in an accelerated “flipped classroom” style and simulated real-world coding environments for 10-12 hours per day over 14.5 weeks (800+ hours)</li>
                    </ul>
                </div>
            </a>
        </div>
    )
}
