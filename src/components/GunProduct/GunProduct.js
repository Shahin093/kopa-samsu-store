import React from 'react';
import './GunProduct.css'
const GunProduct = ({ gun }) => {
    const { img, name, bullet, capacity, action, price } = gun;
    console.log(gun);
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />

            </div>
            <h1>{name}</h1>
            <p>Bullet Type: {bullet}</p>
            <p>capacity: {capacity}</p>
            <p>Action: {action}</p>
            <div className='add-to-cart'>
                <button>Add to Cart</button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default GunProduct;