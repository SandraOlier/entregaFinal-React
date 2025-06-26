import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} agregado al carrito`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item, index) => index !== id));
    toast.info(`Producto eliminado del carrito`);
  };

  const clearCart = () => {
    setCart([]);
    toast.warn('Carrito vaciado');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

