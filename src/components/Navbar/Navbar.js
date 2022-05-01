import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import './Navbar.css'
const Navbar = ({ cart, openModal }) => {
    return (
        <div className='navbar'>
            <h2>Kopa Samsu Store</h2>
            <div className='cart-counter' onClick={openModal}>
                <span>{cart.length}</span>
                <BsFillCartFill className='icon'></BsFillCartFill>
            </div>

        </div>
    );
};

export default Navbar;