import React from 'react';
import { useCafe } from '../contexts/CafeContext';

const OrderCart = () => {
  const { cart, placeOrder } = useCafe();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) return null;

  return (
    <div
      style={{
        backgroundColor: '#FFF0E6',
        padding: '16px',
        borderRadius: '20px',
        maxWidth: '500px',
        width: '100%',
        border: '2px solid #E8B4B8',
      }}
    >
      <h4 style={{ color: '#D76A6A' }}>Tu Pedido</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map((item, i) => (
          <li key={i}>
            {item.emoji} {item.name} {item.isFree && <strong>(Gratis)</strong>} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h4>Total: ${total.toFixed(2)}</h4>
      <button
        onClick={placeOrder}
        style={{
          backgroundColor: '#D7C0A3',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          padding: '10px 20px',
          width: '100%',
          fontWeight: 'bold',
        }}
      >
        Enviar Pedido
      </button>
    </div>
  );
};

export default OrderCart;
