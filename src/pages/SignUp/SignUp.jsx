import React, { useContext } from 'react';
import loginImg from "../../../src/assets/others/authentication.png";
import loginImg2 from "../../../src/assets/others/authentication1.png";
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
const SignUp = () => {
const {createUser,updateUserProfile} = useContext(AuthContext)
const navigate = useNavigate();
     const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
          .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(name,photo)
            .then(() =>{

            })
            .catch(error => console.error(error))
          })
          navigate('/')
          .catch(error => console.error(error))
    }
    return (
        <>
         <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
        <div className="hero backgroundImg min-h-screen ">
      <div className=" w-3/4  flex rounded-lg shadow-2xl bg-base-100 relative">
        <img src={loginImg} alt="" className=" w-full h-[620px] rounded-lg  " />

        <div className="absolute  left-24  top-36 ">
          <img src={loginImg2} alt="" className=" w-96 h-58" />
        </div>

        <div className=" absolute right-28 top-12   ">
          <h2 className="text-2xl text-center font-semibold mb-2">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text  text-lg">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className=" w-[300px] px-6 py-3 input input-bordered rounded-lg  "
                placeholder="name"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text  text-lg">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                className=" w-[300px] px-6 py-3 input input-bordered rounded-lg  "
                placeholder="Photo URL"
              />
            </div>
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
   

         <div className="form-control">
         <input
      
              type="submit"
              value="Sign Up"
              className="btn px-20 mt-7 py-3 w-[300px] rounded-lg text-lg text-white bg-[#D1A054]"
     
            />
         </div>
         <p className="text-center text-[#D1A054] font-semibold mt-3">Already Registered? <Link to="/login">Go to login</Link></p>
          </form>
        </div>
      </div>
    </div>
    </>
    );
};

export default SignUp;