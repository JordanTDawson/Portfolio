import languages, { Language } from "../assets/data/languages"
import Image from "next/image";

export default function Skills() {
    return (
        <div className="max-w-[100%] md:max-w-[80%] lg:max-w-[60%]">
            <h1>Skills</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4" >
            {languages.map((skill: Language) => (
                <div className="text-center items-center" key={skill.language}>
                    <Image src={`${skill.image}`} alt={`${skill.alt}`} width={100} height={100}/>
                    <h1>{skill.language}</h1>
                </div>
            ))}
            </div>
        </div>
    );
}