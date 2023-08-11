import languages, { Language } from "../assets/data/languages"
import Image from "next/image";
import Link from "next/link";

export default function Skills() {
    return (
        <div className="max-w-[80%] text-center">
            <h1 className="text-5xl md:text-8xl mb-4">Skills</h1>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid gap-4 md:gap-8 flex flex-wrap" >
            {languages.map((skill: Language) => (
                <Link className="hover:bg-gray-900 border border-white border-4 rounded-xl" href={`${skill.homepage}`} rel="noreferer" target="_blank" key={skill.language}>
                    <div className="flex flex-wrap justify-center md:p-4 text-center" >
                        <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]" >
                            <Image src={`${skill.image}`} alt={`${skill.alt}`} fill sizes="100vh"/>
                        </div>
                        <h1 className="w-full">{skill.language}</h1>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    );
}