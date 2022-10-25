import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import  './Register.css'
import { AuthContext } from '../../Contexts/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const {createUser,googleProviderLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const handleRegister= (event) => {
        
        event.preventDefault();
        
        const form =event.target
        const name = form.name.value;
     
        const email = form.email.value;
        const password = form.password.value;
     



        createUser(email,password,name)
        .then(result =>{
            const user = result.user ;
            console.log(user);
            form.reset()
        })

        .catch(error => console.error(error))
       
        

    }

    const googleHandleSignIn = () =>{
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.error(error))

    };

    const githubHandleSignIN = () => {
        googleProviderLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.error(error))
    }


    return (
        <div className='form-container bg-warning'>
        <h2 className='form-title'>LogIn</h2>
        <form onSubmit={handleRegister} >
            <div className='form-control'>
                <label htmlFor='name'>Full Name</label>
                <input type="text" name='name' required />

            </div>
            <div className='form-control'>
                <label htmlFor='Photo Url'>Photo URL</label>
                <input type="text" name='PhotoURL'  />

            </div>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' required />

            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' required />

            </div>
            <input className='btn-submit' type="submit" value="Login" />
            
            <hr/>
            <ButtonGroup  className='mt-2 mx-5 '>
                
               <div className='m-2'>
               <Button onClick={googleHandleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle>Google</Button>
               </div>
                
                <div className='m-2'>
                <Button onClick={githubHandleSignIN} variant='outline-dark'><FaGithub></FaGithub>Github</Button>
                </div>





            </ButtonGroup>
        </form>
        <p>You have already  an account ?<Link to="/login">Please Login</Link></p>

    </div>
    );
};

export default Register;