import { createBrowserRouter} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Sign_In_UP/Login";
import Register from "../pages/Sign_In_UP/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Gallery from "../pages/Gallery/Gallery";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('/services.json')
        },
        {
            path:'/:id',
            element:<PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>,
            loader: () => fetch('/services.json')
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/gallery',
            element: <PrivetRoute><Gallery></Gallery></PrivetRoute>,
            loader: () => fetch('gallery.json')
        },
    ]
  },
]);

export default router;
