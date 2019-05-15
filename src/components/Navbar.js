import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = props => (
    <ul className="Navbar">
        <Link to="/"><li>Home</li></Link>
        <Link to="/store"><li>Store</li></Link>
        <Link to="/promotions"><li>Promotions</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
    </ul>
);

export default Navbar;