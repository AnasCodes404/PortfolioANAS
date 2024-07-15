import heroImg from '../../assets/hero-img.png'
import styles from "./HeroStyles.module.css"
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'





function Hero(){
    const {toggleTheme,theme } = useTheme();

    const themeIcon = theme === 'light' ?  sun:moon;

    const twitterIcon = theme === 'light' ? twitterLight:twitterDark;

    const githubIcon = theme === 'light' ? githubLight:githubDark;

    const linkedinIcon = theme === 'light' ? linkedinLight:linkedinDark;


    return(
        <section id='hero' className={styles.container}>
            
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero} 
                    src={heroImg} 
                    alt="Profile pictures of person"
                    />
                <img
                    className={styles.colorMode} 
                    src={themeIcon} 
                    alt="color mode"
                    onClick={toggleTheme}
                    />
            </div>
            <div className={styles.info}>
                <h1>ANAS <br/> SHAIKH</h1>
                <h2>Software Engineer</h2>
                <span>
                    <a href="https://x.com/anascodes404?s=21&t=Sy4IK1-UrFAEr4H4fwqAYw" target='_blank'>
                        <img src={twitterIcon} alt="twitter icon" />
                    </a>
                    <a href="https://github.com/AnasCodes404" target='_blank'>
                        <img src={githubIcon} alt="githubIcon" />
                    </a>
                    <a href="https://www.linkedin.com/in/anas-shaikh-03326b25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'>
                        <img src={linkedinIcon} alt="linkedinIcon icon" />
                    </a>
                </span>
                <p className={styles.description}>Designing modern web application from 20  Extensively providing Ai solution and Data Modelling</p>
                <a href={CV}>
                    <button className='hover' download>
                        Resume
                    </button>
                </a>
             </div>
        </section>
    )
}

export default Hero