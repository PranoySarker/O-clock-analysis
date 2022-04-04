import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline" : "none", color: match ? "white" : "black" }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div >
    );
}
const Navbar = () => {

    return (
        <div className='nav-container sticky-top'>
            <Nav className='nav-bar '>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Review</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
            </Nav>
        </div>
    );
};

export default Navbar;