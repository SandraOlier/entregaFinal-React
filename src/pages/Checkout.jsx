import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { toast } from 'react-toastify';
import { ProgressBar } from 'react-bootstrap';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [progreso, setProgreso] = useState(0);

  const finalizarCompra = () => {
    if (cart.length === 0) {
      toast.error('No hay productos en el carrito');
      return;
    }

    // Simula procesamiento
    setProgreso(0);
    const interval = setInterval(() => {
      setProgreso((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          clearCart();
          toast.success('¡Compra finalizada con éxito!');
          navigate('/');
        }
        return prev + 20;
      });
    }, 400);
  };

  return (
    <div>
      <Seo
        title="Checkout | Mi Tienda"
        description="Revisá y finalizá tu compra de forma segura"
      />

      <h2 className="mb-4">📦 Finalizar compra</h2>

      {cart.length === 0 ? (
        <p className="text-muted">El carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between">
                {item.name}
                <strong>${item.price}</strong>
              </li>
            ))}
          </ul>

          <button className="btn btn-success w-100" onClick={finalizarCompra}>
            Confirmar compra
          </button>

          {progreso > 0 && (
            <div className="mt-4">
              <p>Procesando pedido...</p>
              <ProgressBar animated now={progreso} label={`${progreso}%`} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;


