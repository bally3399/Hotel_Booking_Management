import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../component/navbar/Navbar";
import Footer from "../../../component/footer";
import styles from "./CreateBooking.module.css";

const CreateBooking = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    name: "",
    room: "",
    date: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Created Successfully!");
    console.log("Booking Data:", bookingData);
    navigate("/user-dashboard");
  };

  return (
    <main>
      <Navbar />
      <div className={styles.createBooking}>
        <h2>Create Booking</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={bookingData.name}
            onChange={handleChange}
            required
          />

          <label>Room:</label>
          <input
            type="text"
            name="room"
            value={bookingData.room}
            onChange={handleChange}
            required
          />

          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default CreateBooking;
