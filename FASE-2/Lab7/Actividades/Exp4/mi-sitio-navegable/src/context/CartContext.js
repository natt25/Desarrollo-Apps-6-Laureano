import { createContext, useReducer, useContext } from 'react';

// Estado inicial
const initialState = { items: [] };

// Reducer (puro)
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.instanceId !== action.payload.instanceId) };
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
};

// 1) Contexto
const CartContext = createContext();

// 2) Proveedor
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 3) Hook personalizado
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
};
