import React from 'react';
import { useCafe } from '../contexts/CafeContext';

const MenuBoard = () => {
  const { menuItems, addToCart, isAuthenticated } = useCafe();

  return (
    <div
      style={{
        backgroundColor: '#FFF9F0',
        padding: '20px',
        borderRadius: '20px',
        border: '2px dashed #D7C0A3',
        maxWidth: '500px',
        width: '100%',
      }}
    >
      <h3 style={{ color: '#A68A64', textAlign: 'center' }}>Menú del Día</h3>
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => isAuthenticated && addToCart(item)}
          disabled={!isAuthenticated}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px',
            borderRadius: '16px',
            marginBottom: '10px',
            background: isAuthenticated ? '#F5E9DC' : '#EDE0D4',
            cursor: isAuthenticated ? 'pointer' : 'not-allowed',
          }}
        >
          <span>{item.emoji} {item.name}</span>
          <span>${item.price.toFixed(2)}</span>
        </button>
      ))}
      {!isAuthenticated && (
        <p style={{ textAlign: 'center', color: '#A68A64' }}>
          Inicia sesión para ordenar
        </p>
      )}
    </div>
  );
};

export default MenuBoard;
