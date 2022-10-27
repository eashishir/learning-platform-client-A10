import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
// import swal from 'sweetalert';

import './Login.css'

const Login = () => {
    const [passwordError, setPasswordError] = useState('');
    const {LogIn} =useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation()


    const from = location.state?.from?.pathname || '/';



    const LoginSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
       LogIn(email,password)
       .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace:true});
       })
       .catch(error => {
        console.error(error);
        // const alert = error.message;
        // swal({
        //     title: "Try again!",
            
        //     icon: "success",
        //     button: "Aww yiss!",
        //   });
       setPasswordError(error.message);
          
        
    })

    }
    return (

        <div className='form-container bg-warning'>
            <h2 className='form-title'>LogIn</h2>
            <form onSubmit={LoginSubmit} >
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' required />

                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' required />

                </div>
                <p className='text-danger font-w-50'>{passwordError}</p>
                <input className='btn-submit' type="submit" value="Login" />
                
            </form>
            <p>New to JS SmartLearn?<Link to="/register">Create a new account</Link></p>

        </div>
    );
};

export default Login;