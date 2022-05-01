import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
// import GunProduct from '..';
function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('guns-products.json')
      .then(res => res.json())
      .then(data => setGuns(data));
  }, []);
  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);

  }
  console.log(cart);
  return (
    <div className="App">
      <Navbar cart={cart}></Navbar>
      <div className='card-container'>
        {
          guns.map(gun => <Cart key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Cart>)
        }


      </div>
    </div>
  );
}

export default App;
