import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Button, Image, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        
        <Navbar bg="light" expand="lg">
            
            <NavLink to="/home">
                <Image height="50px" src="./logo192.png" />
            </NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            
                <Navbar.Collapse>
                    <Nav className="me-auto nav">
                        <NavLink to="/home">Home</NavLink>
                        <div className="vr" />
                        <NavLink to="/service">Service</NavLink>
                        <div className="vr" />
                        <NavLink to="/bogs">Blogs</NavLink>
                        <div className="vr" />
                        <NavLink to="/about">About Us</NavLink>  
                    </Nav>
                    <div>
                    <Button variant="outline-success">Login</Button>
                    </div>
                </Navbar.Collapse>
                
        </Navbar>
    );
};

export default Header;