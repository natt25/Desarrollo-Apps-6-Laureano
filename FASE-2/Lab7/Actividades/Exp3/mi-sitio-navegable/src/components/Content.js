import { useTheme } from '../context/ThemeContext';

export const Content = () => {
  const { theme } = useTheme();

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    background: theme === 'light' ? '#eeeeee' : '#222222',
    color: theme === 'light' ? '#222222' : '#eeeeee',
    transition: 'all 0.3s ease',
    borderRadius: 12
  };

  return (
    <div style={styles}>
      <h1>El tema actual es {theme}</h1>
    </div>
  );
};
