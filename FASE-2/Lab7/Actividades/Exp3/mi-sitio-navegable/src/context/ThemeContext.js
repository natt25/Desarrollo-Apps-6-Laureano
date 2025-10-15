import { createContext, useState, useContext } from 'react';

// 1) Crear el contexto
const ThemeContext = createContext();

// 2) Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // claro por defecto

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3) Hook personalizado para consumir el contexto
export const useTheme = () => useContext(ThemeContext);
