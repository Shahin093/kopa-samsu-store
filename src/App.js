import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Modal from 'react-modal';
import CartDetail from './components/CartDetail/CartDetail';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
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
      <Navbar cart={cart} openModal={openModal}></Navbar>

      <div className='card-container'>
        {
          guns.map(gun => <Cart key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Cart>)
        }


      </div>

      <div>

        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button style={{ width: "30px", height: '30px', color: 'red', fontSize: '20px' }} onClick={closeModal}>X</button>
          {
            cart.map(cartDetail => <CartDetail key={cartDetail.id} cartDetail={cartDetail}></CartDetail>)
          }
        </Modal>
      </div>

    </div>
  );
}

export default App;
