import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLinks from "../Shared/SocialLogins/SocialLinks";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    setRegisterError("");

    console.log("From register page: ", name, email);

    if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      setRegisterError(
        "Password is invalid. It must have at least 6 characters, one uppercase letter, and one special character."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-between items-center rounded-2xl mb-20">
      <div className="">
        <h1 className="text-5xl text-left font-bold text-[#fa536f]">
        𝑀𝒶𝒹𝑒_𝒾𝓃_𝒽𝑒𝒶𝓋𝑒𝓃
        </h1>
        <p className="text-2xl text-left font-medium text-[#FF99AA]">
          Connect with us to turn visions into reality
        </p>
      </div>

      <div className="flex-1 flex justify-end">
        <div className="card login-style w-2/3 mt-20 shadow-lg shadow-slate-400">
          <div className="card-body flex-none ">
           <SocialLinks></SocialLinks>

            <form className="" onSubmit={handleRegister}>
              {/* name input field ================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* photo url input field ================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL here"
                  className="input input-bordered"
                  required
                />
              </div>

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
                  {registerError && (
                    <p className="text-sm text-red-400 font-medium text-center">
                      {registerError}
                    </p>
                  )}
                </label>
              </div>

              {/* login button ================  */}
              <div className="form-control mt-6">
                <button className="w-2/3 mx-auto btn bg-[#f96e85] normal-case text-white font-bold text-xl">
                  Register
                </button>
              </div>
            </form>
            <p className="text-center">
              <span className="font-semibold">New Here?</span>
              <Link className="btn btn-link normal-case" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
