import React from 'react';
import Header from './Header';
import MenuBoard from './MenuBoard';
import OrderCart from './OrderCart';
import LoyaltyCard from './LoyaltyCard';
import { useCafe } from '../contexts/CafeContext';

const AppLayout = () => {
  const { isAuthenticated } = useCafe();

  return (
    <div
      style={{
        fontFamily: "'Fredoka', 'Comic Sans MS', cursive",
        background: 'linear-gradient(135deg, #F8F4ED 0%, #FFF9F0 100%)',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        color: '#5A4A42',
      }}
    >
      <Header />
      <main style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <h2 style={{ color: '#D7C0A3', fontSize: '24px', margin: 0 }}>
          Bienvenido a <strong>Mocha Whiskers Café</strong>
        </h2>

        {isAuthenticated && <LoyaltyCard />}
        <MenuBoard />
        {isAuthenticated && <OrderCart />}
      </main>
    </div>
  );
};

export default AppLayout;
