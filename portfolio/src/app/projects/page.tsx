import React from "react";
import Link from "next/link";
import projects, { ProjectInfo } from "../assets/data/projects";
import Image from "next/image";

export default function Projects() {
    return (
        <>
            {projects.map((project: ProjectInfo) => (
                <Link key={project.alt} href={project.page} rel="noreferer" target="_blank" 
                      className="shadow-white rounded-3xl my-8 relative block w-[700px] h-[400px] max-w-[1000px]"
                >
                    <div className="p-4 absolute inset-0 rounded-3xl overflow-hidden duration-300">
                        <Image
                            src={project.image}
                            alt={project.alt}
                            priority
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="rounded-3xl absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                        <h1 className="text-white text-3xl font-semibold">{project.name}</h1>
                        <h2 className="text-white text-xl">{project.languages}</h2>
                        <ul className="list-disc text-gray-100 mt-0 m-[2rem] text-md">
                            <li className="mt-4">{project.bulletOne}</li>
                            <li className="mt-4">{project.bulletTwo}</li>
                            <li className="mt-4">{project.bulletThree}</li>
                        </ul>
                    </div>
                </Link>
            ))}
        </>
    );
}
