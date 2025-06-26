import { useCart } from '../context/CartContext';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <aside style={{ minWidth: '280px' }}>
      <h4>
        <FaShoppingCart /> Tu carrito
      </h4>
      {cart.length === 0 ? (
        <p className="text-muted">El carrito está vacío</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name}
              <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(index)}>
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={clearCart} className="btn btn-outline-secondary mt-2">
          Vaciar carrito
        </button>
      )}
    </aside>
  );
};

export default Cart;
