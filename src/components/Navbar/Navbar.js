import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <Nav className='nav-bar'>
                <Link to="/">Home</Link>
                <Link to="/reviews">Review</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blog">Blog</Link>
            </Nav>
        </div>
    );
};

export default Navbar;