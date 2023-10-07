import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => {
            console.log('successfully log out');
          }).catch((error) => {
            console.log(error);
          });
    }


    const navLinks = <>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink></NavLink></li>
                    <li><NavLink>Item 3</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* small device links  */}
                        {navLinks}
                    </ul>
                    </div>
                    <Link to='/' className="text-2xl font-bold normal-case ">𝑀𝒶𝒹𝑒_𝒾𝓃_𝒽𝑒𝒶𝓋𝑒𝓃</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* lg device links  */}
                    {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <div className="flex gap-1 justify-center items-center">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} >
                                    <img className="w-14 h-14 rounded-full" src={user.photoURL} alt="user profile pic" />
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-56">
                                    <li>Profile name: {user.displayName}</li>
                                   <li>
                                    <button onClick={handleLogOut} className="btn bg-[#f96e85] text-lg text-white font-semibold normal-case w-2/3 mx-auto">Log Out</button>
                                    </li>
                                
                                </ul>
                            </div>
                            
                            
                        </div>
                        :
                        <Link className="btn bg-[#f96e85] text-lg text-white font-semibold normal-case" to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;