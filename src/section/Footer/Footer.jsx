import React from "react";
import styles from './FooterStylemodule.css'

function Footer(){
    return(
        <section id="footer" className={styles.container}>
            <p>&copy;2024 Anas Shaikh <br/>
            All rights reserved</p>
        </section>
    )
}

export default Footer;