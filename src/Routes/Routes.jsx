import { createBrowserRouter} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Sign_In_UP/Login";
import Register from "../pages/Sign_In_UP/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Gallery from "../pages/Gallery/Gallery";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Blog from "../pages/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
            path:'/about',
            element: <About></About>
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
        {
            path:'/blog',
            element: <PrivetRoute><Blog></Blog></PrivetRoute>,
         
        },
    ]
  },
]);

export default router;
