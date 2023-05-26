import React from "react";
import "./Login.css";
import loginImg from "../../../src/assets/others/authentication.png";
import loginImg2 from "../../../src/assets/others/authentication1.png";
const Login = () => {
  
  const handleLogin = event =>{
    event.preventDefault();
    const form  = event.target;
    const email = form.email.value;
    const password = form.password.value;
  
  }

  return (
    <div className="hero backgroundImg min-h-screen ">
      <div className=" w-3/4  flex rounded-lg shadow-2xl bg-base-100 relative">
        <img src={loginImg} alt="" className=" w-full h-[550px] rounded-lg  " />

        <div className="absolute  left-24  top-36 ">
          <img src={loginImg2} alt="" className=" w-96 h-58" />
        </div>

        <div className=" absolute right-24 top-12   ">
          <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
      <div className="form-control mb-3">
            <label className="label">
              <span className="label-text  text-lg">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className=" w-[300px] px-6 py-3 input input-bordered rounded-lg  "
              placeholder="email"
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text  text-lg">Password</span>
            </label>
            <input
              type="password"
              name="password"
              className=" w-[300px] px-6 py-3 input input-bordered rounded-lg  "
              placeholder="password"
            />
          </div>
       
        <input type="submit" value="Sign In"  className="px-20 mt-7 py-3 w-[300px] rounded-lg text-lg text-white bg-[#D1A054]" />
      </form>
       
        </div>
      </div>
    </div>
  );
};

export default Login;
