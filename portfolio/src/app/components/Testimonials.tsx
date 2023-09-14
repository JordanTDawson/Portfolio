import Image from "next/image";

export default function Testimonials() {
    return (
        <div className='max-w-[80%] text-center'>
            <h1 className='text-4xl md:text-6xl mb-4'>Testimonials</h1>
            <a href='https://www.linkedin.com/in/jordantdawson/details/recommendations/' 
            rel='noreferer'
            target='_blank'
            className='flex flex-wrap justify-center border border-white border-4 p-2 my-4 rounded-xl hover:text-yellow-500 transition-colors hover:scale-[102%] transform origin-center transition-transform'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative w-[100px] h-[100px] m-2'>
                        <Image
                        className='rounded-xl'
                        src='/robert-gardner.jpg'
                        alt='Robert Garder, Ph.D.'
                        fill={true}
                        sizes='100px'
                        />
                    </div>
                    <div className='m-2'>
                        <h1 className='text-xl md:text-5xl'>Robert Gardner, Ph.D.</h1>
                        <h1>Software Development Instructor</h1>
                        <p className='text-gray-500'>March 22, 2023, Robert was Jordan&apos;s teacher</p>
                    </div>
                </div>
                <div className='m-2 text-sm text-left text-white'>
                    <p className='py-1 md:py-2'>I taught Jordan at LearningFuze, where he learned full stack development with React, Node, and PostgreSQL. This was an intense course that required Jordan to write a full stack application on his own.</p>
                    <p className='py-1 md:py-2'>At LearningFuze, Jordan developed a good sense for writing software. He studied hard, worked his way over the hurdles he faced, and became a competent developer. For his final project, Jordan wrote an e-commerce app selling dark-themed fashion items. While working on this project, Jordan learned, on his own, several technologies, such as Font Awesome React and Bootstrap.</p>
                    <p className='py-1 md:py-2'>Jordan developed a good understanding of how the computer works, how to write good, clean code, and how to design and organize the code to make it easy to work with. He has a grasp of basic data structures and complexity analysis and how to use them to solve common software problems. During and after the course, Jordan made enormous strides in his understanding of software development and always strives to do his best work. Jordan knows when to ask questions and how to understand and make use of the answers to his questions.</p>
                    <p className='py-1 md:py-2'>As a former Director of Engineering at Google, I expect Jordan to be an asset to any team he joins.</p>
                </div>
            </a>
            <a href='https://www.linkedin.com/in/jordantdawson/details/recommendations/' 
            rel='noreferer'
            target='_blank'
            className='flex flex-wrap justify-center border border-white border-4 p-2 mt-8 rounded-xl hover:text-yellow-500 transition-colors hover:scale-[102%] transform origin-center transition-transform'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='relative w-[100px] h-[100px] m-2'>
                        <Image
                        className='rounded-xl'
                        src='/andreana-pettersen.jpg'
                        alt='Andreana Pettersen'
                        fill={true}
                        sizes='100px'
                        />
                    </div>
                    <div className='m-2'>
                        <h1 className='text-xl md:text-5xl'>Andreana Pettersen</h1>
                        <h1>Career Services Director</h1>
                        <p className='text-gray-500'>September 11, 2023, Andreana was Jordan&apos;s mentor</p>
                    </div>
                </div>
                <div className='m-2 text-sm text-left text-white'>
                    <p className='py-1 md:py-2'>Jordan was a web development student at LearningFuze in the winter of 2022-2023. Jordan was a stellar student who excelled not only technically, but also professionally. Jordan is diligent, proactive, resilient, and receptive to feedback. He has always remained in good communication with me and our team. Jordan always displayed great people skills not only at professional networking events, but when building relationships with is peers. I highly recommend Jordan for employment.</p>
                </div>
            </a>
        </div>
    );
}