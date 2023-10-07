import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;