import Footer from "../../../component/footer"
import Navbar from "../../../component/navbar/Navbar"
import styles from "./contact.module.css"


const ContactPage =()=>{
    return(
        <main>
            <Navbar/>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>Contact Page</h1>
                <p className={styles.subTitle}>THe Pleasant experience of good pleasure
                </p>
            </div>
            <Footer/>
        </main>
    )
}
export default ContactPage