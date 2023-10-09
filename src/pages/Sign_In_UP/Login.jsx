import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLinks from "../Shared/SocialLogins/SocialLinks";
import swal from 'sweetalert';

const Login = () => {
  const { loggedIn } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");

  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log("From login page: ", email, password);
    setSignInError("");
    loggedIn(email, password)
      .then((result) => {
        console.log(result.user);
        swal({
          title: "Login Successful",
          text: "Enjoy Yourself",
          icon: "success",
          button: "Close",
          
        });
        e.target.reset();
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        setSignInError(
          "Wrong Email or password. Please recheck your information."
        );
      });
    
  };

  return (
    <div className="rounded-2xl mb-20  max-w-7xl mx-auto">
     

      

      <div className="px-8 lg:px-0">
        <div className="card bg-[#dededa] lg:w-2/5 mx-auto  mt-16 shadow-lg shadow-slate-400">
          <div className="card-body flex-none ">
          <SocialLinks></SocialLinks>
            <form className="" onSubmit={handleSignIn}>
              {signInError && (
                <label className="label">
                  <span className="label-text text-red-400">{signInError}</span>
                </label>
              )}
              {/* email input field ================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="input "
                  required
                />
              </div>

              {/* password input field ================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-lg">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input "
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* login button ================  */}
              <div className="form-control mt-6">
                <button className="w-2/3 mx-auto btn bg-[#f96e85] normal-case text-white font-bold text-xl">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">
              <span className="font-semibold">New Here?</span>
              <Link className="btn btn-link normal-case" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
