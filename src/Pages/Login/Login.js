import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (

        <div className='form-container bg-warning'>
            <h2 className='form-title'>LogIn</h2>
            <form >
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' required />

                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' required />

                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to JS SmartLearn?<Link to="/register">Create a new account</Link></p>

        </div>
    );
};

export default Login;