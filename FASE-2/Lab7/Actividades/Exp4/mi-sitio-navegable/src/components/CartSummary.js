import { useCart } from '../context/CartContext';

export const CartSummary = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const total = state.items.reduce((acc, it) => acc + it.price, 0);

  return (
    <div style={{ border: '1px solid black', padding: 15, borderRadius: 8 }}>
      <h3>Resumen del Carrito</h3>
      <p><strong>Total de ítems:</strong> {state.items.length}</p>
      <p><strong>Total a pagar:</strong> ${total.toFixed(2)}</p>
      <hr />
      <ul style={{ paddingLeft: 18 }}>
        {state.items.map(item => (
          <li key={item.instanceId} style={{ marginBottom: 6 }}>
            {item.name} — ${item.price}
            <button
              onClick={() => handleRemove(item)}
              style={{ marginLeft: 10 }}
              aria-label={`Eliminar ${item.name}`}
              title="Eliminar"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
