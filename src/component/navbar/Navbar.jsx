import styles from  "./Navbar.module.css"
import {useState} from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <h1 className={styles.brandName}>Fortunaé IT Hotel MS</h1>

            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX /> : <FiMenu />}
            </div>

            <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
                <div>Home</div>
                <div>Explore</div>
                <div>Rooms</div>
                <div>About</div>
                <div>Contact</div>
            </div>

            <Link to="/register" className={styles.desktopOnly}>
                <button className={styles.getStarted}>Book now</button>
            </Link>
        </nav>
    );
};

export default Navbar;
