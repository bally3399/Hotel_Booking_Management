import Layout from "../component/layout/Layout";
import BookRoomPage from "../pages/homepage/booking/BookRoom";
import RoomsPage from "../pages/homepage/rooms/Rooms";
import Register from "../pages/homepage/register/Register";
import Login from "../pages/homepage/login/Login";
import TourPage from "../pages/homepage/tour/Tour";
import CreateHotel from "../pages/homepage/createHotel/CreateHotel";
import AdminDashboard from "../pages/homepage/adminDashboard/AdminDashboard";
import About from "../pages/homepage/about/About";


export const ROUTES = [
    {
        path:"/",
        element: <Layout/>,
    },

    {
        path:"/register",
        element: <Register/>,
    },


    {
        path:"/login",
        element: <Login/>,
    },

    {
        path:"/book",
        element: <BookRoomPage/>,
    },
    {
        path:"/rooms",
        element: <RoomsPage/>,
    },
    {
        path:"/tour",
        element: <TourPage/>,
    },
    {
        path:"/create-hotel",
        element: <CreateHotel/>,
    },

    {
        path:"/admin-dashboard",
        element: <AdminDashboard/>,
    },

    {
        path:"/about",
        element: <About/>,
    },


]