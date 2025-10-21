import React, { createContext, useState, useContext } from 'react';

const CafeContext = createContext();
export const useCafe = () => useContext(CafeContext);

const menuItems = [
  { id: 'latte', name: 'Latte de Vainilla', price: 4.50, emoji: '☕' },
  { id: 'mocha', name: 'Mocha con Chocolate', price: 5.00, emoji: '🍫' },
  { id: 'espresso', name: 'Espresso Doble', price: 3.50, emoji: '🔥' },
  { id: 'matcha', name: 'Matcha con Leche', price: 4.75, emoji: '🍵' },
];

export const CafeProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const login = (userData) => {
    setUser(userData);
    addNotification(`¡Bienvenido de nuevo, ${userData.name}!`);
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    addNotification('Gracias por visitar Mocha Whiskers Café ☕');
  };

  const coffeeCount = orders.reduce((count, order) => count + order.items.length, 0);
  const nextCoffeeIsFree = coffeeCount > 0 && coffeeCount % 5 === 0;

  const addToCart = (item) => {
    const itemToAdd = nextCoffeeIsFree ? { ...item, price: 0, isFree: true } : item;
    setCart((prev) => [...prev, itemToAdd]);
    if (nextCoffeeIsFree) {
      addNotification('¡Este café es GRATIS! Gracias por tu lealtad ☕🎉');
    } else {
      addNotification(`${item.emoji} ${item.name} añadido al carrito`);
    }
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    const newOrder = {
      id: Date.now(),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.price, 0),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setOrders((prev) => [...prev, newOrder]);
    setCart([]);
    addNotification('¡Pedido enviado! Tu café estará listo en 3 minutos ☕⏱️');
  };

  const addNotification = (message) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter(n => n.id !== id));
    }, 3000);
  };

  return (
    <CafeContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        cart,
        orders,
        menuItems,
        notifications,
        coffeeCount,
        nextCoffeeIsFree,
        login,
        logout,
        addToCart,
        placeOrder,
      }}
    >
      {children}
    </CafeContext.Provider>
  );
};
