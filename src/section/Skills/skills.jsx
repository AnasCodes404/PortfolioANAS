import React from "react";
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import styles from "./SkillsStyle.module.css"
import SkillList from "./SkillList";

function Skills(){
    return(
        <section id='skills' className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>

            <div className={styles.skillList}>
                <SkillList
                src={checkMarkIcon}
                skill='HTML'
                />
                <SkillList
                src={checkMarkIcon}
                skill='CSS'
                />
                <SkillList
                src={checkMarkIcon}
                skill='REACT'
                />
                <SkillList
                src={checkMarkIcon}
                skill='NODE.js'
                />
                
            </div>   
            <hr/> 

        </section>
    )
}

export default Skills