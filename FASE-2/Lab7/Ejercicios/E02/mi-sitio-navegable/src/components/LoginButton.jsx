import React from 'react';
import { useCafe } from '../contexts/CafeContext';

const LoginButton = () => {
  const { login } = useCafe();

  const handleLogin = () => {
    const mockUserData = { name: 'Mochi', email: 'mochi@whiskerscafe.com' };
    login(mockUserData);
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        backgroundColor: '#D7C0A3',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
    >
      Iniciar Sesión
    </button>
  );
};

export default LoginButton;
