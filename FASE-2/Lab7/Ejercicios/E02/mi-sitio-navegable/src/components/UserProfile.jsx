import React from 'react';
import { useCafe } from '../contexts/CafeContext';

const UserProfile = () => {
  const { isAuthenticated, user } = useCafe();
  if (!isAuthenticated) return null;

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        padding: '20px',
        borderRadius: '20px',
        border: '2px dashed #FFCCE5',
        margin: '20px auto',
        maxWidth: '400px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <h2 style={{ color: '#D47B9A' }}>Perfil</h2>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default UserProfile;
