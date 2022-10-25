import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import img from '../../../assets/brands/pic2.jfif'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"> <img
              alt=""
              src={img}
              width="70"
              height="40"
              className="d-inline-block align-top"
            />LearnSmart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link ><Link to='/login'>Login</Link></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;