import React from 'react';
import { useCafe } from '../contexts/CafeContext';
import LoginButton from './LoginButton';

const Header = () => {
  const { isAuthenticated, user, logout } = useCafe();

  return (
    <header
      style={{
        backgroundColor: '#F5E9DC',
        padding: '16px 20px',
        borderBottom: '3px solid #D7C0A3',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '20px 20px 0 0',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      }}
    >
      <h1 style={{ margin: 0, color: '#A68A64', fontSize: '20px', fontWeight: 'bold' }}>
        Mocha Whiskers Café
      </h1>

      {isAuthenticated ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ color: '#A68A64', fontWeight: 'bold' }}>
            Hola, {user.name}
          </span>
          <button
            onClick={logout}
            style={{
              backgroundColor: '#E8B4B8',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 16px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#5A4A42',
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <LoginButton />
      )}
    </header>
  );
};

export default Header;
