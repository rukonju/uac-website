import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Button, Image, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        
        <Navbar bg="light" expand="lg">
            
            <NavLink to="/home">
                <Image className="ms-2" height="50px" src="./logo192.png" />
                
            </NavLink>
            <h3 className="text-success ms-2">UAC</h3>
            <Navbar.Toggle aria-controls="navbarScroll" />
            
                <Navbar.Collapse>
                    <Nav className="me-auto nav">
                        <NavLink to="/home">Home</NavLink>
                        <div className="vr" />
                        <NavLink to="/service">Service</NavLink>
                        <div className="vr" />
                        <NavLink to="/blogs">Blogs</NavLink>
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