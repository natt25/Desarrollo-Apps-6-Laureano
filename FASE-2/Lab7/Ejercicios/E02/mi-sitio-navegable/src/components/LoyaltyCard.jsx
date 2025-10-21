import React from 'react';
import { useCafe } from '../contexts/CafeContext';

const LoyaltyCard = () => {
  const { coffeeCount } = useCafe();
  const coffeesUntilFree = 5 - (coffeeCount % 5);
  const isEligible = coffeeCount > 0 && coffeeCount % 5 === 0;

  return (
    <div
      style={{
        backgroundColor: isEligible ? '#FFE6E6' : '#F0E6D2',
        padding: '16px',
        borderRadius: '20px',
        maxWidth: '500px',
        width: '100%',
        border: `2px solid ${isEligible ? '#E8B4B8' : '#D7C0A3'}`,
        textAlign: 'center',
      }}
    >
      <h3>Tarjeta de Lealtad</h3>
      <p><strong>Cafés comprados:</strong> {coffeeCount}</p>
      <p>
        {isEligible
          ? '¡Tu próximo café es GRATIS!'
          : `Faltan ${coffeesUntilFree} cafés para uno gratis`}
      </p>
    </div>
  );
};

export default LoyaltyCard;
