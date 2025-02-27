import Navbar from "../../../component/navbar/Navbar";
import styles from "./About.module.css";

const About = () =>{
    return(
        <main>
            <Navbar/>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>Rooms and suites</h1>
                <p className={styles.subTitle}>The elegant luxury bedrooms in this gallery showcase custom interior
                    designs & decorating ideas. View pictures and find your
                    perfect luxury bedroom design.
                </p>
            </div>
        </main>
    )
}
export default About