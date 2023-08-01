import styles from "./Projects.module.css";
import Image from "next/image";

export default function Projects() {
    return (
        <>
            <div className={styles.ProjectsImageWrapper}>
                <Image src="/dark-culture-image.jpg" alt="Dark Culture Website" fill/>
            </div>
        </>
    )
}