/* eslint-disable no-unused-vars */
import React, { use, useContext } from "react";
import Lottie from "lottie-react";
import LoginAnimation from '../../assets/lottie/login.json';
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
const location=useLocation();
const navigate=useNavigate();
console.log(location);
const from=location.state?.from?.pathname || '/';
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Logging in with:", { email, password });

    signInUser(email, password)
      .then(result => {
        console.log('Sign in successful:', result.user);
        form.reset();
        navigate(from, { replace: true }); // Redirect to the previous page or home
        // ✅ Only reset if login is successful
      })
      .catch(error => {
        console.error("Login error:", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={LoginAnimation} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl ml-8 mt-4 font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Login;
