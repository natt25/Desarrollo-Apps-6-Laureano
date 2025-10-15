import { useTheme } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: '10px', margin: '10px' }}>
      Cambiar a modo {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};
