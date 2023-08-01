import languages, { Language } from "../assets/data/languages"
import Image from "next/image";
import styles from "./Skills.module.css"

export default function Skills() {
    return (
        <div className="max-w-[100%] md:max-w-[80%] lg:max-w-[60%] text-center">
            <h1 className="text-5xl md:text-8xl">Skills</h1>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid gap-4 md:gap-8 flex flex-wrap" >
            {languages.map((skill: Language) => (
                <a className="hover:bg-gray-700 border border-white border-4 rounded-xl" href={`${skill.homepage}`} target="_blank" key={skill.language}>
                    <div className="md:p-4 text-center" >
                        <div className={styles.SkillsImages} >
                            <Image src={`${skill.image}`} alt={`${skill.alt}`} fill/>
                        </div>
                        <h1>{skill.language}</h1>
                    </div>
                </a>
            ))}
            </div>
        </div>
    );
}