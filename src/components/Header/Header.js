import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Image, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const style={
        color:"#199d60",
        borderBottom: "4px solid #199d60"
    }
    
    return ( 
        <Container>
            <Navbar expand="lg">
                <NavLink to="/home">
                    <Image className="ms-2" height="60px" src="./logo192.png" />
                </NavLink>
                <h1 className="text-success ms-2">UAC</h1>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse>
                    <Nav className="me-auto nav">
                        <NavLink activeStyle={style} to="/home">Home</NavLink>
                        <div className="vr" />
                        <NavLink activeStyle={style} to="/service">Service</NavLink>
                        <div className="vr" />
                        <NavLink activeStyle={style} to="/blogs">Blogs</NavLink>
                        <div className="vr" />
                        <NavLink activeStyle={style} to="/join">Join as Teacher</NavLink>
                        <div className="vr" />
                        <NavLink activeStyle={style} to="/about">About Us</NavLink>  
                    </Nav>
                </Navbar.Collapse>   
            </Navbar>
        </Container>
    );
};

export default Header;