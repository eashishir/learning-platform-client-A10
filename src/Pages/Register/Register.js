import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import  './Register.css'

const Register = () => {
    return (
        <div className='form-container bg-warning'>
        <h2 className='form-title'>LogIn</h2>
        <form >
            <div className='form-control'>
                <label htmlFor='name'>Full Name</label>
                <input type="text" name='name' required />

            </div>
            <div className='form-control'>
                <label htmlFor='Photo Url'>Photo URL</label>
                <input type="text" name='PhotoURL' required />

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
            <ButtonGroup vertical className='mt-2 mx-5'>
                <Button className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Log in  with Google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> Log in with Github</Button>





            </ButtonGroup>
        </form>
        <p>You have already  an account ?<Link to="/login">Please Login</Link></p>

    </div>
    );
};

export default Register;