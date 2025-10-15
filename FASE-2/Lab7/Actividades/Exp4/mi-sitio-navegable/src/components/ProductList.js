import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Libro de React Avanzado', price: 35 },
  { id: 2, name: 'Guía de Node.js y Express', price: 30 },
  { id: 3, name: 'Manual de SQL', price: 25 },
];

export const ProductList = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    // instancia única (permite repetir el mismo producto)
    const itemToAdd = { ...product, instanceId: crypto.randomUUID() };
    dispatch({ type: 'ADD_ITEM', payload: itemToAdd });
  };

  return (
    <div>
      <h3>Productos</h3>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', padding: 10, margin: 6, borderRadius: 8 }}>
          {p.name} — ${p.price}
          <button onClick={() => handleAddToCart(p)} style={{ marginLeft: 10 }}>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};
