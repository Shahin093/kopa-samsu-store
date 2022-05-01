import { BsFillCartFill } from 'react-icons/bs';
import './Cart.css'
const Cart = ({ gun, handleAddToCart }) => {
    const { img, name, bullet, capacity, action, price } = gun;
    return (
        <div>
            {/* <h2>{cart.length}</h2> */}
            <div className='card'>
                <div className='image-container'>
                    <img src={img} alt="" />

                </div>
                <div className="gun-info">
                    <h1>{name}</h1>
                    <p>Bullet Type: {bullet}</p>
                    <p>capacity: {capacity}</p>
                    <p>Action: {action}</p>
                </div>
                <div className='add-to-cart'>
                    <button onClick={() => handleAddToCart(gun)}><BsFillCartFill className='icon'></BsFillCartFill> </button>
                    <h1>$ {price}</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;