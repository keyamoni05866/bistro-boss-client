import React, { useContext, useEffect, useRef, useState } from "react";
import "./Login.css";
import loginImg from "../../../src/assets/others/authentication.png";
import loginImg2 from "../../../src/assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/' 
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: 'Successfully log in',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      form.reset();
      navigate(from, {replace:true})
    })
   
    .catch(error => console.error(error))
    
  };

  const handleValidateCaptcha = (e) =>{
           const user_captcha_value = e.target.value;
           console.log(user_captcha_value)
           if(validateCaptcha(user_captcha_value)){
         setDisabled(false);
           }
         
  }
  return (
    <>
             <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
    <div className="hero backgroundImg min-h-screen ">
      <div className=" w-3/4  flex rounded-lg shadow-2xl bg-base-100 relative">
        <img src={loginImg} alt="" className=" w-full h-[650px] rounded-lg  " />

        <div className="absolute  left-24 top-36 ">
          <img src={loginImg2} alt="" className=" w-96 h-58" />
        </div>

        <div className=" absolute right-28 top-6   ">
          <h2 className="text-2xl text-center font-semibold ">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control ">
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
            <div className="w-[300px]  mt-8  px-3 py-3 input input-bordered rounded-lg">
              <LoadCanvasTemplate />
            </div>
         <div className="form-control mt-8 relative">
         <input
              type="text"
              name="captcha"
              onBlur={handleValidateCaptcha}
            
              className=" w-[300px] px-6 py-3 input input-bordered rounded-lg  "
              placeholder="type here"
            />
         
         </div>

         <div className="form-control">
         <input
      
              type="submit"
              value="Sign In"
              className="btn px-20 mt-7 py-3 w-[300px] rounded-lg text-lg text-white bg-[#D1A054]"
            disabled={disabled}
            />
         </div>
         <p className="text-center text-[#D1A054] font-semibold mt-3">New here ? <Link to="/signUp">Create a New Account</Link></p>
         <p className='text-center '>Or Sign with</p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
