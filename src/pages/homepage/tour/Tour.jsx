import Footer from "../../../component/footer"
import Navbar from "../../../component/navbar/Navbar"
import styles from "./Tour.module.css"


const TourPage =()=>{
    return(
        <main>
            <Navbar/>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>Tour guide</h1>
                <p className={styles.subTitle}>THe Pleasant experience of good pleasure
                </p>
            </div>
            <Footer/>
        </main>
    )
}
export default TourPage