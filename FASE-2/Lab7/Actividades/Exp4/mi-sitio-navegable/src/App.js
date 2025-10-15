import { ProductList } from './components/ProductList';
import { CartSummary } from './components/CartSummary';

function App() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 20,
      padding: 20,
      alignItems: 'start'
    }}>
      <ProductList />
      <CartSummary />
    </div>
  );
}

export default App;
