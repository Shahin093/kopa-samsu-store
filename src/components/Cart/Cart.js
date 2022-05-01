import React, { useEffect, useState } from 'react';
import GunProduct from '../GunProduct/GunProduct';
const Cart = () => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('guns-products.json')
            .then(res => res.json())
            .then(data => setGuns(data));
    }, []);
    return (
        <div>
            <h2>Cart</h2>
            <div className='card-container'>
                {
                    guns.map(gun => <GunProduct key={gun.id} gun={gun}></GunProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;