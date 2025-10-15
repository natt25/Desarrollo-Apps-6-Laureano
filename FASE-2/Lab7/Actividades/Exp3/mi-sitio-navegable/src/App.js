import { Content } from './components/Content';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <ThemeSwitcher />
      <Content />
    </div>
  );
}

export default App;
