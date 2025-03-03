import { useNavigate } from "react-router-dom";
import Navbar from "../../../component/navbar/Navbar";
import Footer from "../../../component/footer";
import styles from "./AdminDashboard.module.css"


const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <main>
            <Navbar/>
            <div className={styles.dashboard}>
                <button onClick={() => navigate("/create-hotel")} className={styles.actionButton}>Create Hotel</button>
                <button onClick={() => navigate("/update")} className={styles.actionButton}>Update hotel details</button>
                <button onClick={() => navigate("/add-room")} className={styles.actionButton}>Add Room To Hotel</button>
                <button onClick={() => navigate("/delete")} className={styles.actionButton}>Delete Hotel</button>
                <button onClick={() => navigate("/view")} className={styles.actionButton}>Get Total Hotel In State</button>
                <button onClick={() => navigate("/ViewHistory")} className={styles.actionButton}>Delete Room From Hotel</button>
            </div>
            <Footer/>
        </main>
    );
};

export default Dashboard;
