import React, { useState } from "react";
import { TextField, Button, FormControl } from "@mui/material";
import { HiArrowLeft } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import styles from "./BookRoom.module.css";

const BookRoomPage = () => {
    const [form, setForm] = useState({
        userId: "",
        hotelId: "",
        roomId: "",
        startDate: "",
        endDate: "",
        isPaid: true,
        agree: false,
        role: ""
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const payload = {
                userId: form.userId,
                hotelId: form.hotelId,
                roomId: form.roomId,
                role: form.role,
                startDate: new Date(form.startDate).toISOString(),
                endDate: new Date(form.endDate).toISOString(),
            };

            const response = await axios.post(
                "http://hotel-api.fortunaelibrary-api.comapi/v1/bookings/book",
                payload,
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.data === "Booked room successfully") {
                toast.success(`Welcome ${form.userId}, you have successfully booked a room!`);
                setTimeout(() => navigate("/login"), 3000);
            } else {
                toast.error("Failed. Please try again.");
            }
        } catch (error) {
            toast.error("Failed to book room. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.roomContainer}>
            <div className={styles.backButton} onClick={() => navigate("/")}>
                <HiArrowLeft className="mr-2" /> Back
            </div>
            <div className={styles.roomCard}>
                <h2 className={styles.roomTitle}>Book Room</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="User Id"
                        name="userId"
                        value={form.userId}
                        onChange={handleChange}
                        fullWidth
                        className={styles.formField}
                        sx={{
                            "& label.Mui-focused": { color: "#a68b5b" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "black" },
                                "&:hover fieldset": { borderColor: "#a68b5b" },
                                "&.Mui-focused fieldset": { borderColor: "#a68b5b" },
                            },
                            marginBottom: "16px",
                        }}
                    />
                    <TextField
                        label="Hotel Id"
                        name="hotelId"
                        value={form.hotelId}
                        onChange={handleChange}
                        fullWidth
                        className={styles.formField}
                        sx={{
                            "& label.Mui-focused": { color: "#a68b5b" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "black" },
                                "&:hover fieldset": { borderColor: "#a68b5b" },
                                "&.Mui-focused fieldset": { borderColor: "#a68b5b" },
                            },
                            marginBottom: "16px",
                        }}
                    />
                    <TextField
                        label="Room Id"
                        name="roomId"
                        value={form.roomId}
                        onChange={handleChange}
                        fullWidth
                        className={styles.formField}
                        sx={{
                            "& label.Mui-focused": { color: "#a68b5b" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "black" },
                                "&:hover fieldset": { borderColor: "#a68b5b" },
                                "&.Mui-focused fieldset": { borderColor: "#a68b5b" },
                            },
                            marginBottom: "16px",
                        }}
                    />
                    <TextField
                        label="Check In"
                        name="startDate"
                        type="date"
                        value={form.startDate}
                        onChange={handleChange}
                        fullWidth
                        className={styles.formField}
                        sx={{
                            "& label.Mui-focused": { color: "#a68b5b" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "black" },
                                "&:hover fieldset": { borderColor: "#a68b5b" },
                                "&.Mui-focused fieldset": { borderColor: "#a68b5b" },
                            },
                            marginBottom: "16px",
                        }}
                    />
                    <TextField
                        label="Check Out"
                        name="endDate"
                        type="date"
                        value={form.endDate}
                        onChange={handleChange}
                        fullWidth
                        className={styles.formField}
                        sx={{
                            "& label.Mui-focused": { color: "#a68b5b" },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "black" },
                                "&:hover fieldset": { borderColor: "#a68b5b" },
                                "&.Mui-focused fieldset": { borderColor: "#a68b5b" },
                            },
                            marginBottom: "16px",
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isLoading}
                        className={styles.submitButton}
                    >
                        {isLoading ? "Booking ..." : "Book"}
                    </Button>
                </form>
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
    );
};

export default BookRoomPage;