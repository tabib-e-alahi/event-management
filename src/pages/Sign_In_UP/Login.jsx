import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="card">
        <form className="card-body">

{/* email input field ================  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

{/* password input field ================  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
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
            <button className="btn btn-primary">Login</button>
          </div>

        </form>
        <p className="">New Here? <Link className="btn btn-link" to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
