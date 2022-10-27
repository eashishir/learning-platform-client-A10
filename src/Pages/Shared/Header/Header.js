import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import img from '../../../assets/brands/pic2.jfif'
import { AuthContext } from '../../../Contexts/UserContext';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Header.css'

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"> <img
                    alt=""
                    src={img}
                    width="70"
                    height="40"
                    className="d-inline-block align-top"
                /> <Link className='text' to='/'> LearnSmart</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link className='text' to='/courses/:id'>Courses</Link></Nav.Link>
                        <Nav.Link > <Link className='text' to='/blogs' >Blog</Link> </Nav.Link>
                        <Nav.Link > <Link className='text' to='/faq' >FAQ</Link></Nav.Link>

                    </Nav>
                    <Nav>
                    <p>Light/Dark</p>
                        <label className="switch">
                            
                            <input type="checkbox"/>
                                <span class="slider round">

                                </span><br/>
                              
                        </label>





                        {
                            user?.uid ?
                                <button onClick={LogOut}>Log Out</button>
                                :
                                <>
                                    <Nav.Link ><Link to='/login'>Login</Link></Nav.Link>
                                </>

                        }

                        <Nav.Link eventKey={2} href="#memes">
                            <Tippy content={user?.displayName}>
                                {user?.photoURL ?
                                    <Image className='my-container' style={{ height: '40px' }} roundedCircle src={user.photoURL}>

                                    </Image>
                                    : <FaUser></FaUser>

                                }
                            </Tippy>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;