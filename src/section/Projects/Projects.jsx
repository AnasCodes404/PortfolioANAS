import React from "react";
import styles from "./ProjectsStyles.module.css";
import book from "../../assets/book.png"
import xyz from "../../assets/xyz1.png"
import relocate from "../../assets/relocate1.png"
import FitLift from "../../assets/fitlift.png";

import ProjectCard from "../../common/ProjectsCard";

function Projects(){
    
    return(
        <section id='projects' className={styles.container}>

    
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
            <ProjectCard
                src={relocate}
                link='https://courageous-donut-bbac29.netlify.app/'
                p='Relocation'
                h3= "WE PROVIDE RELOCATION "
                />


                <ProjectCard
                src={book}
                link='https://book-rental-app-six.vercel.app/#'
                h3="Book Rental App"
                />


                

<ProjectCard 
                src={xyz}
                link='https://xyz-react-app.vercel.app/'
                p='XYZ'
                h3="App format for your APP"
                />


                <ProjectCard 
                src={FitLift}
                link='www.github.com'
                p='FitLift for getting fit and best'
                h3="FitLift (LINK NOT WORKING)"
                />                           
        
            </div>
        </section>
    )
}

export default Projects


