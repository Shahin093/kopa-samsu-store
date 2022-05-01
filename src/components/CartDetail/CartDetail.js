import React from 'react';
import './CartDetail.css'
const CartDetail = ({ cartDetail }) => {
    const { name, img, price } = cartDetail;
    return (
        <div className='cart-detail'>
            <img width='100px' src={img} alt="" />
            <h2>{name}</h2>
            <h5>{price}</h5>
        </div>
    );
};

export default CartDetail;