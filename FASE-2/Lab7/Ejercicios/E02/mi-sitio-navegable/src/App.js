import React from 'react';
import { CafeProvider } from './contexts/CafeContext';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <CafeProvider>
      <AppLayout />
    </CafeProvider>
  );
}

export default App;
