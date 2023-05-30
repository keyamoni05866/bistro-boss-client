import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Routes/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
  const from = location.state?.from?.pathname || '/' 
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
           
            const savedUser = {name:loggedUser.displayName, email: loggedUser.email}
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(savedUser)
            })
            .then(res => res.json())
            .then(() =>{
                navigate(from, {replace: true})
        
           
            })



            
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
             
<div className='flex justify-evenly mt-5'>
<button onClick={handleGoogle} className="btn btn-circle btn-outline">
<FaGoogle className='text-lg'></FaGoogle>
</button>
<button className="btn btn-circle btn-outline">
<FaFacebook className='text-xl'></FaFacebook>
</button>
<button className="btn btn-circle btn-outline">
<FaGithub className='text-xl'></FaGithub>
</button>
</div>
        </div>
    );
};

export default SocialLogin;