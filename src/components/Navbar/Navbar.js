import React from 'react';
import './Navbar.css'
const Navbar = ({ cart }) => {
    return (
        <div className='navbar'>
            <h2>Kopa Samsu Store</h2>
            <p>{cart.length}</p>
        </div>
    );
};

export default Navbar;