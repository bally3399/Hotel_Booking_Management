import Layout from "../component/layout/Layout";
import BookRoomPage from "../pages/homepage/booking/BookRoom";
import RoomsPage from "../pages/homepage/rooms/Rooms";
import Register from "../pages/homepage/register/Register";
import Login from "../pages/homepage/login/Login";
import TourPage from "../pages/homepage/tour/Tour";


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

]