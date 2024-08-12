import React from "react";
import styles from "./ProjectsStyles.module.css";
import book from "../../assets/book.png"
import FreshBurger from "../../assets/fresh-burger.png";
import Hipster from "../../assets/hipsster.png";
import FitLift from "../../assets/fitlift.png";

import ProjectCard from "../../common/ProjectsCard";

function Projects(){
    
    return(
        <section id='projects' className={styles.container}>

    
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
            <ProjectCard
                src={book}
                link='https://book-rental-app-six.vercel.app/#'
                
                h3="Book Rental App"
                />


                <ProjectCard
                src={FreshBurger}
                link='wwww.github.com'
                p='Delicious Burger here only'
                h3= "FreshBurger (LINK NOT WORKING)"
                />

<ProjectCard 
                src={Hipster}
                link='www.github.com'
                p='Hipster for Shades & Glassses'
                h3="Hipster (LINK NOT WORKING)"
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


